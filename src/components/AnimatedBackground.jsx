import { useEffect, useRef } from 'react'

export function AnimatedBackground({ enabled }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (!context) return

    let width = 0
    let height = 0
    let frame = 0
    let previousTime = 0
    let particles = []
    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      particles = Array.from({ length: width < 720 ? 18 : 38 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.3 + 0.5,
        speed: Math.random() * 7 + 3,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (time) => {
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0
      previousTime = time
      context.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.y -= particle.speed * delta
        particle.x += Math.sin(time / 8000 + particle.phase) * delta * 3
        if (particle.y < -5) particle.y = height + 5
        if (particle.x < -5) particle.x = width + 5
        if (particle.x > width + 5) particle.x = -5
        const opacity = 0.16 + (Math.sin(time / 2500 + particle.phase) + 1) * 0.14
        context.fillStyle = `rgba(255, 155, 159, ${opacity})`
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      })
      frame = requestAnimationFrame(draw)
    }

    const onVisibilityChange = () => {
      cancelAnimationFrame(frame)
      previousTime = 0
      if (!document.hidden) frame = requestAnimationFrame(draw)
    }

    resize()
    onVisibilityChange()
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      cancelAnimationFrame(frame)
      context.clearRect(0, 0, width, height)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [enabled])

  return (
    <div className="animated-background" aria-hidden="true">
      <div className="ambient-orb ambient-orb-red" />
      <div className="ambient-orb ambient-orb-violet" />
      <div className="ambient-orb ambient-orb-coral" />
      <div className="ambient-grid" />
      <canvas ref={canvasRef} className="ambient-particles" />
      <div className="ambient-vignette" />
    </div>
  )
}
