import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  to?: string
  href?: string
  /** 外链新窗口打开 */
  external?: boolean
  className?: string
  type?: 'button' | 'submit'
}

const MotionLink = motion.create(Link)

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-blue-400',
  secondary: 'bg-navy text-white hover:bg-navy-light',
  outline: 'border border-navy/20 text-navy hover:border-accent hover:bg-accent/5 hover:text-accent',
  ghost: 'text-accent hover:text-accent-hover hover:bg-accent/5',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

const tapTransition = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
  mass: 0.8,
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  external = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion()

  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 ease-out'

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const tapProps = prefersReducedMotion
    ? {}
    : { whileTap: { scale: 0.97 }, transition: tapTransition }

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...tapProps}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...tapProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} className={classes} {...tapProps}>
      {children}
    </motion.button>
  )
}
