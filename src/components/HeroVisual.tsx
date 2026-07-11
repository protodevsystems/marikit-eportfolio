import { useEffect, useRef, useState } from 'react'

/**
 * HeroVisual — single looping video over a smooth orange stage.
 * GIF is only used if the MP4 fails to play (never both at once).
 */
export function HeroVisual() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = async () => {
      try {
        await video.play()
        console.log('[HeroVisual] video playing')
      } catch (err) {
        console.log('[HeroVisual] video play failed, using still poster', err)
        setUseFallback(true)
      }
    }

    const onError = () => {
      console.log('[HeroVisual] video error, using still poster')
      setUseFallback(true)
    }

    video.addEventListener('error', onError)
    void tryPlay()
    return () => video.removeEventListener('error', onError)
  }, [])

  return (
    <div className="hero-visual" data-hero-visual>
      <div className="hero-visual-orange" aria-hidden="true" />
      <div className="hero-visual-glow" aria-hidden="true" />

      {!useFallback ? (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-graduation.jpg"
          aria-hidden="true"
        >
          <source src="/videos/kit1.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          className="hero-video"
          src="/images/hero-graduation.jpg"
          alt=""
          width={1280}
          height={720}
          decoding="async"
        />
      )}

      <div className="hero-visual-tint" aria-hidden="true" />
      <div className="hero-visual-scrim" aria-hidden="true" />
    </div>
  )
}
