import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  opacity: number
  speedX: number
  speedY: number
  phase: number
  amplitude: number
}

function createParticles(width: number, height: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.15 + 0.05,
    speedX: (Math.random() - 0.5) * 0.08,
    speedY: (Math.random() - 0.5) * 0.05,
    phase: Math.random() * Math.PI * 2,
    amplitude: Math.random() * 12 + 6,
  }))
}

export default function HeroWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    if (prefersReducedMotion || isMobile) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      particlesRef.current = createParticles(canvas.width, canvas.height, 40)
    }

    resize()
    window.addEventListener('resize', resize)

    let time = 0

    const draw = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Subtle horizontal wave lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.lineWidth = 1
      for (let w = 0; w < 3; w++) {
        ctx.beginPath()
        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            canvas.height * (0.3 + w * 0.2) +
            Math.sin(x * 0.004 + time * 0.0003 + w * 1.5) * 20 +
            Math.sin(x * 0.008 + time * 0.0002) * 8
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Slow floating particles
      particlesRef.current.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY + Math.sin(time * 0.0004 + p.phase) * 0.02
        p.x += Math.sin(time * 0.0003 + p.phase) * 0.03

        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        ctx.fill()
      })

      time++
      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      aria-hidden="true"
    />
  )
}
