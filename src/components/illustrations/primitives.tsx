export const ILLUSTRATION_COLORS = {
  navy: '#0f172a',
  navyLight: '#1e293b',
  accent: '#3b82f6',
  accentLight: '#60a5fa',
  white: '#ffffff',
  grid: 'rgba(59,130,246,0.12)',
  line: 'rgba(59,130,246,0.35)',
  lineFaint: 'rgba(255,255,255,0.15)',
} as const

interface SvgProps {
  className?: string
  theme?: 'light' | 'dark'
}

export function SvgRoot({ className, children }: SvgProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function GridBg({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const stroke = theme === 'dark' ? ILLUSTRATION_COLORS.lineFaint : ILLUSTRATION_COLORS.grid
  return (
    <g opacity={theme === 'dark' ? 0.6 : 1}>
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 50}
          y1={0}
          x2={i * 50}
          y2={300}
          stroke={stroke}
          strokeWidth={0.5}
        />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * 50}
          x2={400}
          y2={i * 50}
          stroke={stroke}
          strokeWidth={0.5}
        />
      ))}
    </g>
  )
}

export function WaveLines({
  y = 150,
  amplitude = 18,
  theme = 'light',
}: {
  y?: number
  amplitude?: number
  theme?: 'light' | 'dark'
}) {
  const stroke = theme === 'dark' ? ILLUSTRATION_COLORS.accentLight : ILLUSTRATION_COLORS.accent
  return (
    <g opacity={0.7}>
      {[0, 1, 2].map((offset) => (
        <path
          key={offset}
          d={`M0 ${y + offset * 14} Q100 ${y - amplitude + offset * 6} 200 ${y + offset * 14} T400 ${y + offset * 14}`}
          fill="none"
          stroke={stroke}
          strokeWidth={1.5 - offset * 0.3}
          opacity={1 - offset * 0.25}
        />
      ))}
    </g>
  )
}

export function GradientBg({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  if (theme === 'dark') {
    return (
      <rect width={400} height={300} fill="url(#darkGrad)" />
    )
  }
  return <rect width={400} height={300} fill="url(#lightGrad)" />
}

export function Defs() {
  return (
    <defs>
      <linearGradient id="lightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#eff6ff" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e3a5f" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
  )
}
