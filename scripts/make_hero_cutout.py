"""
Clean cutout from docs/kit1.mp4 for the hero portrait.

Pipeline:
1. isnet rembg for a coarse person mask
2. Dilate/close to bridge blue wireframe gaps on arms
3. Fill only SMALL holes (mesh), not large gaps (armpit)
4. Iteratively strip bg-colored edge fringe (kills white halo flicker)
5. Temporal max of masks so limbs don't pop in/out
6. Feather alpha and export animated WebP + GIF
"""
from __future__ import annotations

from pathlib import Path

import imageio.v3 as iio
import numpy as np
from PIL import Image
from rembg import new_session, remove
from scipy.ndimage import (
    binary_closing,
    binary_dilation,
    binary_erosion,
    distance_transform_edt,
    generate_binary_structure,
    label,
)

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "docs" / "kit1.mp4"
OUT_WEBP = ROOT / "public" / "images" / "hero-kit.webp"
OUT_GIF = ROOT / "public" / "images" / "hero-kit.gif"
TMP_DIR = ROOT / "tmp" / "kit-frames"

TARGET_W = 720
TARGET_H = 405
FRAME_DURATION_MS = 40
TEMPORAL_RADIUS = 3
MAX_HOLE_AREA = 2500


def fill_small_holes(mask: np.ndarray, max_area: int) -> np.ndarray:
    """Fill enclosed holes smaller than max_area (wireframe mesh), keep large gaps empty."""
    inv = ~mask
    labeled, n = label(inv)
    border_labels = set(labeled[0, :].tolist())
    border_labels.update(labeled[-1, :].tolist())
    border_labels.update(labeled[:, 0].tolist())
    border_labels.update(labeled[:, -1].tolist())
    border_labels.discard(0)

    out = mask.copy()
    for i in range(1, n + 1):
        if i in border_labels:
            continue
        area = int((labeled == i).sum())
        if area <= max_area:
            out[labeled == i] = True
    return out


def largest_component(mask: np.ndarray) -> np.ndarray:
    labeled, n = label(mask)
    if n == 0:
        return mask
    counts = np.bincount(labeled.ravel())
    counts[0] = 0
    return labeled == counts.argmax()


def strip_bg_fringe(
    mask: np.ndarray,
    dist: np.ndarray,
    is_blue: np.ndarray,
    lum: np.ndarray,
    rounds: int = 6,
) -> np.ndarray:
    """Peel bg-colored pixels off the silhouette edge (removes white halo)."""
    struct = generate_binary_structure(2, 1)
    out = mask.copy()
    for _ in range(rounds):
        edge = out & ~binary_erosion(out, structure=struct, iterations=1)
        bad = edge & (dist < 30) & ~is_blue & (lum > 120)
        if not bad.any():
            break
        out[bad] = False
    return out


def inpaint_gaps(rgb: np.ndarray, gap: np.ndarray, valid: np.ndarray) -> np.ndarray:
    """Fill AR mesh gaps (studio showing through) with nearest valid subject color."""
    if not gap.any() or not valid.any():
        return rgb
    # Nearest valid pixel for every location
    _, (iy, ix) = distance_transform_edt(~valid, return_indices=True)
    out = rgb.copy()
    out[gap] = rgb[iy[gap], ix[gap]]
    return out


def matte_frame(rgb_u8: np.ndarray, session) -> tuple[np.ndarray, np.ndarray]:
    """Return (boolean mask, RGB with AR mesh gaps inpainted)."""
    rgb = rgb_u8.astype(np.float32)
    img = Image.fromarray(rgb_u8, mode="RGB")
    cut = remove(img.convert("RGBA"), session=session)
    if not isinstance(cut, Image.Image):
        cut = Image.open(cut).convert("RGBA")
    alpha = np.array(cut.convert("RGBA"))[..., 3].astype(np.float32)

    border = np.concatenate(
        [
            rgb[:6].reshape(-1, 3),
            rgb[-6:].reshape(-1, 3),
            rgb[:, :6].reshape(-1, 3),
            rgb[:, -6:].reshape(-1, 3),
        ]
    )
    bg = np.median(border, axis=0)
    dist = np.linalg.norm(rgb - bg, axis=2)
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    is_blue = (b > 75) & (b > r + 8) & (b > g + 5)
    is_dark = lum < 115
    not_bg = (dist > 22) | is_blue | is_dark

    struct = generate_binary_structure(2, 1)

    base = (alpha > 70) & not_bg
    coarse = binary_dilation(alpha > 35, structure=struct, iterations=4)

    # AR wireframe: solidify the mesh zone, then inpaint studio-gray holes inside it
    mesh_solid = binary_dilation(is_blue, structure=struct, iterations=14)
    mesh_solid = fill_small_holes(mesh_solid, max_area=8000)
    mesh_solid = mesh_solid & coarse  # don't spill into empty studio

    gap = mesh_solid & ~not_bg & ~is_blue
    valid = mesh_solid & not_bg
    rgb_fixed = inpaint_gaps(rgb_u8, gap, valid)

    seed = base | is_blue | mesh_solid
    seed = binary_closing(seed, structure=np.ones((9, 9)))
    seed = fill_small_holes(seed, MAX_HOLE_AREA)
    # Outside mesh zone, still reject studio gray; inside mesh, keep solid silhouette
    seed = np.where(mesh_solid, seed, seed & not_bg)
    seed = largest_component(seed)
    seed = strip_bg_fringe(seed, dist, is_blue, lum, rounds=6)
    seed = largest_component(seed)
    return seed, rgb_fixed


def soft_alpha(mask: np.ndarray, rgb_u8: np.ndarray) -> np.ndarray:
    """Inward-only feather — never spread alpha onto background (avoids white halo)."""
    rgb = rgb_u8.astype(np.float32)
    border = np.concatenate(
        [
            rgb[:5].reshape(-1, 3),
            rgb[-5:].reshape(-1, 3),
            rgb[:, :5].reshape(-1, 3),
            rgb[:, -5:].reshape(-1, 3),
        ]
    )
    bg = np.median(border, axis=0)
    dist = np.linalg.norm(rgb - bg, axis=2)
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    is_blue = (b > 75) & (b > r + 8) & (b > g + 5)
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b

    cleaned = strip_bg_fringe(mask, dist, is_blue, lum, rounds=6)
    cleaned = cleaned & ((dist > 20) | is_blue | (lum < 115))
    cleaned = largest_component(cleaned)

    inward = distance_transform_edt(cleaned)
    soft = np.clip(inward / 1.6, 0.0, 1.0)
    soft = np.where(cleaned, soft, 0.0)
    # Kill studio-gray fringe on the outer rim (white halo on orange)
    struct = generate_binary_structure(2, 1)
    rim = cleaned & ~binary_erosion(cleaned, structure=struct, iterations=3)
    soft = np.where(rim & (dist < 40) & ~is_blue, 0.0, soft)
    soft = np.where((dist < 18) & ~is_blue & (lum > 125), 0.0, soft)
    return (soft * 255).astype(np.uint8)


def main() -> None:
    print(f"[cutout] loading {SRC}")
    session = new_session("isnet-general-use")
    print("[cutout] rembg session ready (isnet-general-use)")

    rgbs: list[np.ndarray] = []
    masks: list[np.ndarray] = []

    for i, frame in enumerate(iio.imiter(SRC)):
        im = Image.fromarray(frame).resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
        rgb_in = np.array(im.convert("RGB"))
        mask, rgb = matte_frame(rgb_in, session)
        rgbs.append(rgb)
        masks.append(mask)
        if i % 20 == 0:
            print(f"[cutout] matted frame {i + 1}")

    n = len(rgbs)
    print(f"[cutout] total frames={n}; temporal smooth radius={TEMPORAL_RADIUS}")

    smoothed: list[np.ndarray] = []
    for i in range(n):
        acc = masks[i].copy()
        for j in range(i - TEMPORAL_RADIUS, i + TEMPORAL_RADIUS + 1):
            if 0 <= j < n:
                acc |= masks[j]
        rgb = rgbs[i].astype(np.float32)
        border = np.concatenate(
            [
                rgb[:5].reshape(-1, 3),
                rgb[-5:].reshape(-1, 3),
                rgb[:, :5].reshape(-1, 3),
                rgb[:, -5:].reshape(-1, 3),
            ]
        )
        bg = np.median(border, axis=0)
        dist = np.linalg.norm(rgb - bg, axis=2)
        r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
        is_blue = (b > 80) & (b > r + 10) & (b > g + 6)
        lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
        acc = strip_bg_fringe(acc, dist, is_blue, lum, rounds=4)
        acc = largest_component(acc)
        smoothed.append(acc)
        if i % 40 == 0:
            print(f"[cutout] temporal {i + 1}/{n}")

    frames_rgba: list[Image.Image] = []
    for i in range(n):
        alpha = soft_alpha(smoothed[i], rgbs[i])
        rgba = np.dstack([rgbs[i], alpha])
        frames_rgba.append(Image.fromarray(rgba, mode="RGBA"))

    min_x, min_y = TARGET_W, TARGET_H
    max_x = max_y = 0
    for im in frames_rgba:
        bbox = im.split()[-1].getbbox()
        if not bbox:
            continue
        x0, y0, x1, y1 = bbox
        min_x = min(min_x, x0)
        min_y = min(min_y, y0)
        max_x = max(max_x, x1)
        max_y = max(max_y, y1)

    pad = 10
    box = (
        max(0, min_x - pad),
        max(0, min_y - pad),
        min(TARGET_W, max_x + pad),
        min(TARGET_H, max_y + pad),
    )
    print(f"[cutout] crop box={box}")
    cropped = [im.crop(box) for im in frames_rgba]

    TMP_DIR.mkdir(parents=True, exist_ok=True)
    for sample in (0, n // 3, 2 * n // 3, n - 1):
        cropped[sample].save(TMP_DIR / f"final_{sample:03d}.png")
        print(f"[cutout] preview final_{sample:03d}.png")

    OUT_WEBP.parent.mkdir(parents=True, exist_ok=True)
    cropped[0].save(
        OUT_WEBP,
        format="WEBP",
        save_all=True,
        append_images=cropped[1:],
        duration=FRAME_DURATION_MS,
        loop=0,
        quality=90,
        method=4,
    )
    print(f"[cutout] wrote {OUT_WEBP} ({OUT_WEBP.stat().st_size} bytes)")

    cropped[0].save(
        OUT_GIF,
        save_all=True,
        append_images=cropped[1:],
        duration=FRAME_DURATION_MS,
        loop=0,
        disposal=2,
    )
    print(f"[cutout] wrote {OUT_GIF} ({OUT_GIF.stat().st_size} bytes)")
    print("[cutout] done")


if __name__ == "__main__":
    main()
