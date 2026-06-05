import { useEffect, useRef } from 'react'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'

interface CounterStatProps {
  value: number
  suffix?: string
  unit?: string
  label: string
  delay?: number
}

export default function CounterStat({
  value,
  suffix = '',
  unit = '',
  label,
  delay = 0,
}: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()
  const count = useMotionValue(0)
  const display = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (!isInView) return

    if (prefersReducedMotion) {
      count.set(value)
      return
    }

    const controls = animate(count, value, {
      duration: 1.5,
      delay,
      ease: EASE_OUT,
    })

    return () => controls.stop()
  }, [isInView, value, delay, count, prefersReducedMotion])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-navy md:text-5xl lg:text-6xl">
        <span className="inline-flex items-baseline font-mono tabular-nums">
          <motion.span>{display}</motion.span>
          {suffix && <span>{suffix}</span>}
        </span>
        {unit && (
          <span className="ml-1 text-2xl font-normal text-navy/50 md:text-3xl">{unit}</span>
        )}
      </div>
      <p className="mt-2 text-sm text-navy/50 md:text-base">{label}</p>
    </div>
  )
}
