import { motion, useReducedMotion } from 'framer-motion'
import { revealTransition } from '../../lib/motion'

interface HeroFadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function HeroFadeIn({ children, delay = 0, className }: HeroFadeInProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.div>
  )
}
