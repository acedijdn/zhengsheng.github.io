export const EASE_OUT = [0.25, 0.1, 0.25, 1] as const

export const REVEAL_DURATION = 0.6

export const REVEAL_Y = 20

export const revealTransition = (delay = 0) => ({
  duration: REVEAL_DURATION,
  delay,
  ease: EASE_OUT,
})
