import type { ImageKey } from '../../config/images'
import {
  Defs,
  GradientBg,
  GridBg,
  ILLUSTRATION_COLORS,
  SvgRoot,
  WaveLines,
} from './primitives'

interface IllustrationProps {
  imageKey: ImageKey
  className?: string
  theme?: 'light' | 'dark'
}

function HeroScene({ className, theme = 'dark' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <WaveLines y={80} theme={theme} />
      <WaveLines y={160} amplitude={24} theme={theme} />
      <WaveLines y={230} amplitude={12} theme={theme} />
      <circle cx={200} cy={150} r={60} fill="none" stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={1} opacity={0.4} />
      <circle cx={200} cy={150} r={40} fill="none" stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={1} opacity={0.55} />
      <circle cx={200} cy={150} r={20} fill={ILLUSTRATION_COLORS.accent} opacity={0.35} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180
        return (
          <line
            key={deg}
            x1={200 + Math.cos(rad) * 22}
            y1={150 + Math.sin(rad) * 22}
            x2={200 + Math.cos(rad) * 55}
            y2={150 + Math.sin(rad) * 55}
            stroke={ILLUSTRATION_COLORS.accentLight}
            strokeWidth={1}
            opacity={0.35}
          />
        )
      })}
    </SvgRoot>
  )
}

function ProductVibrator({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      {[90, 70, 50, 30].map((r, i) => (
        <circle key={r} cx={200} cy={150} r={r} fill="none" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} opacity={0.2 + i * 0.15} />
      ))}
      <circle cx={200} cy={150} r={22} fill="url(#accentGrad)" opacity={0.85} />
      <circle cx={200} cy={150} r={10} fill={ILLUSTRATION_COLORS.white} opacity={0.5} />
    </SvgRoot>
  )
}

function ProductModule({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <rect x={120} y={90} width={160} height={120} rx={8} fill="none" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={2} opacity={0.7} />
      <rect x={135} y={105} width={130} height={90} rx={4} fill={ILLUSTRATION_COLORS.accent} opacity={0.12} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={145 + i * 32} y={175} width={20} height={12} rx={2} fill={ILLUSTRATION_COLORS.accent} opacity={0.45} />
      ))}
      <WaveLines y={130} amplitude={10} theme={theme} />
    </SvgRoot>
  )
}

function ProductDriver({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <rect x={110} y={80} width={180} height={140} rx={6} fill={ILLUSTRATION_COLORS.navyLight} opacity={0.15} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      <rect x={160} y={120} width={80} height={60} rx={4} fill="url(#accentGrad)" opacity={0.7} />
      {Array.from({ length: 6 }).map((_, i) => (
        <circle key={i} cx={125 + i * 25} cy={100} r={3} fill={ILLUSTRATION_COLORS.accent} opacity={0.6} />
      ))}
      <path d="M125 100 H275 M125 200 H275 M200 100 V200" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={0.8} opacity={0.25} />
      {[130, 170, 210, 250].map((x) => (
        <path key={x} d={`M${x} 180 L${x + 10} 170 L${x + 20} 185`} fill="none" stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={1} opacity={0.5} />
      ))}
    </SvgRoot>
  )
}

function ProductKit({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <rect x={80} y={110} width={70} height={80} rx={6} fill={ILLUSTRATION_COLORS.accent} opacity={0.2} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.2} />
      <circle cx={115} cy={150} r={18} fill="url(#accentGrad)" opacity={0.6} />
      <rect x={165} y={100} width={90} height={100} rx={6} fill={ILLUSTRATION_COLORS.navyLight} opacity={0.12} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.2} />
      <rect x={180} y={125} width={60} height={40} rx={3} fill={ILLUSTRATION_COLORS.accent} opacity={0.35} />
      <rect x={270} y={120} width={60} height={70} rx={6} fill={ILLUSTRATION_COLORS.accent} opacity={0.15} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.2} />
      <path d="M150 150 H165 M255 150 H270 M230 150 V120" stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={1.5} opacity={0.6} />
    </SvgRoot>
  )
}

function ProductAccessory({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <path d="M80 180 C120 120 180 120 220 180" fill="none" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={3} opacity={0.5} />
      <rect x={215} y={172} width={30} height={16} rx={4} fill={ILLUSTRATION_COLORS.accent} opacity={0.45} />
      <rect x={260} y={165} width={50} height={30} rx={4} fill="none" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} opacity={0.6} />
      <circle cx={285} cy={180} r={6} fill={ILLUSTRATION_COLORS.accentLight} opacity={0.7} />
    </SvgRoot>
  )
}

function SofaOutline({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  const fill = theme === 'dark' ? ILLUSTRATION_COLORS.white : ILLUSTRATION_COLORS.navy
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <WaveLines y={200} theme={theme} />
      <path
        d="M90 190 L90 140 Q90 110 120 110 H280 Q310 110 310 140 V190 H90 Z M110 190 V210 H290 V190 M100 190 H80 V160 H100 M320 190 H340 V160 H320"
        fill={fill}
        opacity={theme === 'dark' ? 0.12 : 0.08}
        stroke={ILLUSTRATION_COLORS.accent}
        strokeWidth={2}
      />
      <path d="M130 130 H270" stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={1} opacity={0.5} />
    </SvgRoot>
  )
}

function BedOutline({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  const fill = theme === 'dark' ? ILLUSTRATION_COLORS.white : ILLUSTRATION_COLORS.navy
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <WaveLines y={170} amplitude={14} theme={theme} />
      <rect x={70} y={130} width={260} height={70} rx={8} fill={fill} opacity={0.08} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={2} />
      <rect x={70} y={110} width={60} height={30} rx={6} fill={fill} opacity={0.1} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      {[110, 170, 230, 290].map((x) => (
        <circle key={x} cx={x} cy={165} r={5} fill={ILLUSTRATION_COLORS.accent} opacity={0.35} />
      ))}
    </SvgRoot>
  )
}

function WellnessScene({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <WaveLines y={190} theme={theme} />
      <ellipse cx={200} cy={160} rx={90} ry={45} fill={ILLUSTRATION_COLORS.accent} opacity={0.1} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      <path d="M160 160 Q200 130 240 160" fill="none" stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={2} opacity={0.6} />
      <circle cx={200} cy={145} r={12} fill={ILLUSTRATION_COLORS.accent} opacity={0.35} />
    </SvgRoot>
  )
}

function MassageChairOutline({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  const fill = theme === 'dark' ? ILLUSTRATION_COLORS.white : ILLUSTRATION_COLORS.navy
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <WaveLines y={195} theme={theme} />
      <path
        d="M150 200 V130 Q150 100 180 95 H240 Q270 100 270 130 V200 M130 200 H290 M160 200 V215 H260 V200"
        fill={fill}
        opacity={0.08}
        stroke={ILLUSTRATION_COLORS.accent}
        strokeWidth={2}
      />
      <circle cx={200} cy={140} r={8} fill={ILLUSTRATION_COLORS.accent} opacity={0.4} />
      {[170, 200, 230].map((x) => (
        <line key={x} x1={x} y1={150} x2={x} y2={185} stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={1} opacity={0.45} />
      ))}
    </SvgRoot>
  )
}

function CarSeatScene({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <path d="M100 210 H300" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1} opacity={0.3} />
      <path d="M130 210 V150 Q130 120 160 115 H250 Q280 120 280 150 V210" fill={ILLUSTRATION_COLORS.accent} opacity={0.12} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      <WaveLines y={180} amplitude={8} theme={theme} />
    </SvgRoot>
  )
}

function VrScene({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <rect x={130} y={110} width={140} height={80} rx={20} fill="none" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={2} opacity={0.6} />
      <circle cx={200} cy={150} r={25} fill={ILLUSTRATION_COLORS.accent} opacity={0.2} />
      <WaveLines y={210} theme={theme} />
    </SvgRoot>
  )
}

function EducationScene({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <rect x={120} y={100} width={160} height={100} rx={6} fill={ILLUSTRATION_COLORS.navyLight} opacity={0.1} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      <path d="M140 180 L200 130 L260 180 Z" fill={ILLUSTRATION_COLORS.accent} opacity={0.15} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.2} />
      <WaveLines y={215} theme={theme} />
    </SvgRoot>
  )
}

function AboutFactory({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <rect x={80} y={120} width={240} height={100} fill={ILLUSTRATION_COLORS.navyLight} opacity={0.15} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      {[110, 150, 190, 230, 270].map((x) => (
        <rect key={x} x={x} y={140} width={20} height={30} fill={ILLUSTRATION_COLORS.accent} opacity={0.25} />
      ))}
      <path d="M60 220 H340" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1} opacity={0.4} />
      {[130, 180, 230, 280].map((x, i) => (
        <g key={x} transform={`translate(${x}, ${200 + (i % 2) * 5})`}>
          <circle cx={0} cy={0} r={10} fill={ILLUSTRATION_COLORS.accent} opacity={0.35} />
          <path d="M-8 18 Q0 8 8 18" fill={ILLUSTRATION_COLORS.accent} opacity={0.3} />
        </g>
      ))}
    </SvgRoot>
  )
}

function CertificateDoc({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <rect x={130} y={60} width={140} height={180} rx={6} fill={ILLUSTRATION_COLORS.white} opacity={0.9} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      {[90, 110, 130, 150, 170, 190].map((y) => (
        <line key={y} x1={150} y1={y} x2={250} y2={y} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1} opacity={0.2} />
      ))}
      <circle cx={200} cy={210} r={22} fill="none" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={2} opacity={0.5} />
      <path d="M190 210 L198 218 L215 198" fill="none" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={2} opacity={0.6} />
    </SvgRoot>
  )
}

function TeamAvatar({ className }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle cx={50} cy={50} r={50} fill="url(#avatarGrad)" opacity={0.85} />
      <circle cx={50} cy={38} r={16} fill={ILLUSTRATION_COLORS.white} opacity={0.35} />
      <ellipse cx={50} cy={78} rx={24} ry={18} fill={ILLUSTRATION_COLORS.white} opacity={0.25} />
    </svg>
  )
}

function ClientLogo({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  const stroke = theme === 'dark' ? ILLUSTRATION_COLORS.white : ILLUSTRATION_COLORS.accent
  return (
    <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon
        points="40,4 72,22 72,58 40,76 8,58 8,22"
        fill={ILLUSTRATION_COLORS.accent}
        opacity={0.12}
        stroke={stroke}
        strokeWidth={1.5}
        strokeOpacity={0.5}
      />
      <circle cx={40} cy={40} r={8} fill={ILLUSTRATION_COLORS.accent} opacity={0.45} />
    </svg>
  )
}

function MapLocation({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <path d="M80 200 H320 M80 160 H320 M80 120 H320" stroke={ILLUSTRATION_COLORS.accent} strokeWidth={0.8} opacity={0.15} />
      <path d="M200 80 C170 80 150 110 150 140 C150 175 200 220 200 220 C200 220 250 175 250 140 C250 110 230 80 200 80 Z" fill={ILLUSTRATION_COLORS.accent} opacity={0.25} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={2} />
      <circle cx={200} cy={140} r={12} fill={ILLUSTRATION_COLORS.white} opacity={0.6} />
    </SvgRoot>
  )
}

function PatentDiagram({ className, theme = 'light' }: Omit<IllustrationProps, 'imageKey'>) {
  return (
    <SvgRoot className={className}>
      <Defs />
      <GradientBg theme={theme} />
      <GridBg theme={theme} />
      <rect x={160} y={110} width={80} height={80} rx={8} fill={ILLUSTRATION_COLORS.accent} opacity={0.2} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.5} />
      {[
        [80, 100], [320, 100], [80, 200], [320, 200],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r={14} fill={ILLUSTRATION_COLORS.accent} opacity={0.25} stroke={ILLUSTRATION_COLORS.accent} strokeWidth={1.2} />
          <line x1={x} y1={y} x2={200} y2={150} stroke={ILLUSTRATION_COLORS.accentLight} strokeWidth={1} opacity={0.45} />
        </g>
      ))}
      <WaveLines y={240} amplitude={10} theme={theme} />
    </SvgRoot>
  )
}

const illustrationMap: Record<ImageKey, React.ComponentType<Omit<IllustrationProps, 'imageKey'>>> = {
  'hero-scene': HeroScene,
  'product-vibrator': ProductVibrator,
  'product-module': ProductModule,
  'product-driver': ProductDriver,
  'product-kit': ProductKit,
  'product-accessory': ProductAccessory,
  'solution-smart-sofa': SofaOutline,
  'solution-smart-bed': BedOutline,
  'solution-smart-healing': WellnessScene,
  'solution-smart-massage-chair': MassageChairOutline,
  'scenario-sofa': SofaOutline,
  'scenario-bed': BedOutline,
  'scenario-wellness': WellnessScene,
  'scenario-massage-chair': MassageChairOutline,
  'scenario-car-seat': CarSeatScene,
  'scenario-vr': VrScene,
  'scenario-education': EducationScene,
  'about-factory': AboutFactory,
  certificate: CertificateDoc,
  'team-avatar': TeamAvatar,
  'client-logo': ClientLogo,
  'map-location': MapLocation,
  'patent-diagram': PatentDiagram,
}

export default function Illustration({ imageKey, className, theme = 'light' }: IllustrationProps) {
  const Component = illustrationMap[imageKey]
  return <Component className={className} theme={theme} />
}
