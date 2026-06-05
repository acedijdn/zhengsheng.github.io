import { motion, useReducedMotion } from 'framer-motion'
import { revealTransition, REVEAL_Y } from '../../lib/motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = REVEAL_Y,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.div>
  )
}
