"""Quick preview of make_hero_cutout matte on a few frames (composited on orange)."""
from pathlib import Path

import imageio.v3 as iio
import numpy as np
from PIL import Image
from rembg import new_session

import make_hero_cutout as m

session = new_session("isnet-general-use")
Path("tmp/kit-frames").mkdir(parents=True, exist_ok=True)
orange = np.array([232, 90, 27], dtype=np.float32)

for idx in [0, 120, 180]:
    frame = iio.imread(r"docs\kit1.mp4", index=idx)
    im = Image.fromarray(frame).resize((720, 405), Image.Resampling.LANCZOS)
    rgb_in = np.array(im.convert("RGB"))
    mask, rgb = m.matte_frame(rgb_in, session)
    alpha = m.soft_alpha(mask, rgb)
    a = alpha.astype(np.float32) / 255.0
    comp = rgb.astype(np.float32) * a[..., None] + orange * (1.0 - a[..., None])
    Image.fromarray(comp.astype(np.uint8)).save(rf"tmp/kit-frames/orange_{idx}.png")
    Image.fromarray(np.dstack([rgb, alpha]), "RGBA").save(rf"tmp/kit-frames/v4_{idx}.png")
    light = (rgb.mean(2) > 145) & (alpha > 40)
    print(idx, "opaque%", round(100 * (alpha > 128).mean(), 1), "light_left", int(light.sum()))
