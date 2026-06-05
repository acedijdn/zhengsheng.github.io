import { motion, useReducedMotion } from 'framer-motion'

export type SubmitState = 'idle' | 'loading' | 'success'

interface SubmitButtonProps {
  state: SubmitState
}

function LoadingDots() {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="inline-block h-1 w-1 animate-bounce rounded-full bg-white"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.6s' }}
        />
      ))}
    </span>
  )
}

export default function SubmitButton({ state }: SubmitButtonProps) {
  const prefersReducedMotion = useReducedMotion()
  const isDisabled = state !== 'idle'

  const tapProps = prefersReducedMotion
    ? {}
    : { whileTap: state === 'idle' ? { scale: 0.97 } : {} }

  return (
    <motion.button
      type="submit"
      disabled={isDisabled}
      aria-live="polite"
      aria-busy={state === 'loading'}
      className={`inline-flex min-w-[140px] items-center justify-center rounded-lg px-8 py-3 text-base font-medium transition-colors duration-200 ease-out ${
        state === 'success'
          ? 'cursor-default bg-green-500 text-white'
          : 'bg-accent text-white hover:bg-blue-400'
      } ${state === 'loading' ? 'cursor-default opacity-90' : ''} w-full sm:w-auto`}
      {...tapProps}
    >
      {state === 'idle' && '提交留言'}
      {state === 'loading' && (
        <span className="inline-flex items-center gap-1.5">
          发送中
          <LoadingDots />
        </span>
      )}
      {state === 'success' && '已发送 ✓'}
    </motion.button>
  )
}
