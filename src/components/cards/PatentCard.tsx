import { useCallback, useRef, useState } from 'react'
import type { ImageKey } from '../../config/images'
import SiteImage from '../ui/SiteImage'

interface PatentCardProps {
  type: string
  name: string
  number: string
  tilt?: boolean
  imageKey?: ImageKey
}

export default function PatentCard({
  type,
  name,
  number,
  tilt = false,
  imageKey = 'certificate',
}: PatentCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [glow, setGlow] = useState({ x: 50, y: 50, visible: false })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tilt || !cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -6
      const rotateY = ((x - centerX) / centerX) * 6

      setTransform(
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      )
      setGlow({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        visible: true,
      })
    },
    [tilt],
  )

  const handleMouseLeave = useCallback(() => {
    setTransform('')
    setGlow((prev) => ({ ...prev, visible: false }))
  }, [])

  const baseClass = tilt
    ? 'overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-transform duration-150 ease-out will-change-transform'
    : 'overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md'

  return (
    <div
      ref={cardRef}
      className={`relative ${baseClass}`}
      style={tilt ? { transform } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {tilt && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-xl transition-opacity duration-300"
          style={{
            opacity: glow.visible ? 1 : 0,
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(59,130,246,0.18), transparent 55%)`,
          }}
        />
      )}

      <SiteImage
        imageKey={imageKey}
        aspectRatio="aspect-[3/4]"
        className="rounded-none"
      />
      <div className="relative p-4">
        <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
          {type}
        </span>
        <h3 className="mt-2 text-sm font-semibold text-navy">{name}</h3>
        <p className="mt-1 text-xs text-navy/50">{number}</p>
      </div>
    </div>
  )
}
