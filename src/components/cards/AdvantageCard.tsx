import { motion, useReducedMotion } from 'framer-motion'

const COLOR_VARIANTS = [
  'bg-navy',
  'bg-accent',
  'bg-navy-light',
  'bg-accent-hover',
] as const

interface AdvantageCardProps {
  title: string
  description: string
  index?: number
}

export default function AdvantageCard({ title, description, index = 0 }: AdvantageCardProps) {
  const reduceMotion = useReducedMotion()
  const bgClass = COLOR_VARIANTS[index % COLOR_VARIANTS.length]

  return (
    <motion.div
      className={`flex min-h-[9.5rem] flex-col items-center justify-center rounded-xl px-5 py-6 text-center shadow-sm ${bgClass}`}
      initial={false}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.02,
              boxShadow: '0 16px 32px rgba(15, 23, 42, 0.18)',
            }
      }
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <h3 className="text-base font-semibold text-white md:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
    </motion.div>
  )
}
