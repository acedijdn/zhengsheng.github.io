import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'
import type { Milestone } from '../../data/milestones'

interface TimelineProps {
  items: Milestone[]
}

function MilestoneNode({
  item,
  index,
  isLeft,
}: {
  item: Milestone
  index: number
  isLeft: boolean
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div
        className={`relative mb-10 flex items-start md:mb-12 ${
          isLeft ? 'md:justify-start' : 'md:justify-end'
        }`}
      >
        <div className="absolute left-4 z-10 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-accent bg-white md:left-1/2 md:-translate-x-1.5" />
        <div
          className={`ml-10 w-full rounded-xl border border-gray-100 bg-white p-5 shadow-sm md:ml-0 md:w-[calc(50%-2rem)] ${
            isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
          }`}
        >
          <span className="text-lg font-bold text-accent">{item.year}</span>
          <p className="mt-2 text-sm text-navy/70 md:text-base">{item.event}</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={`relative mb-10 flex items-start md:mb-12 ${
        isLeft ? 'md:justify-start' : 'md:justify-end'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, x: isLeft ? -24 : 24 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: index * 0.12, ease: EASE_OUT },
        },
      }}
    >
      <motion.div
        className="absolute left-4 z-10 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-accent bg-white md:left-1/2 md:-translate-x-1.5"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.2, ease: EASE_OUT }}
      />

      <div
        className={`ml-10 w-full rounded-xl border border-gray-100 bg-white p-5 shadow-sm md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <span className="text-lg font-bold text-accent">{item.year}</span>
        <p className="mt-2 text-sm text-navy/70 md:text-base">{item.event}</p>
      </div>
    </motion.div>
  )
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      <div className="absolute top-0 bottom-0 left-4 w-0.5 overflow-hidden md:left-1/2 md:-translate-x-px">
        {prefersReducedMotion ? (
          <div className="h-full w-full bg-accent/25" />
        ) : (
          <motion.div
            className="h-full w-full origin-top bg-accent/25"
            style={{ scaleY: lineProgress }}
          />
        )}
      </div>

      {items.map((item, index) => (
        <MilestoneNode
          key={item.year}
          item={item}
          index={index}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  )
}
