interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignClass} ${className}`}>
      <h2
        className={`text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg ${
            light ? 'text-white/70' : 'text-navy/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
