import type { Product } from '../data/productData'

type Feature = { title: string; description: string }

const LOW_NOISE_DESC =
  'Precision vibrator structure with damping pads — operating noise ≤40dB, suitable for rest and work environments.'

function vibratorFeaturesEn(
  rated: string,
  impedance: string,
  variant: 'standard' | 'high',
  efficiencyNote?: string,
): Feature[] {
  const outputDesc =
    variant === 'standard'
      ? `${rated} power with ${impedance} impedance delivers deep, powerful low-frequency vibration at low voltage — avoiding harsh highs and staying within comfortable human thresholds.`
      : `${rated} power with ${impedance} impedance delivers even deeper, more powerful low-frequency vibration at higher voltage — greater low-end depth while avoiding harsh highs.`

  const efficiencyDesc =
    efficiencyNote ??
    `Rated at only ${rated} power consumption — runs cool over long periods, ideal for battery-powered devices such as portable massage belts and vibration cushions.`

  return [
    { title: 'Precise Low-Frequency Output', description: outputDesc },
    { title: 'Energy Efficient', description: efficiencyDesc },
    { title: 'Low-Noise Design', description: LOW_NOISE_DESC },
    { title: 'Vibration Frequency', description: '5-160Hz' },
  ]
}

const vibratorOverviewEn = (rated: string, impedance: string, withQualityNote = false) => {
  const note = withQualityNote
    ? ' Every unit is tested for acceleration and vibration displacement before shipment.'
    : ''
  return `Precision vibration core design, ${rated} rated power, ${impedance} impedance — delivers smooth, penetrating low-frequency vibration for muscle relaxation, therapy assistance, haptic feedback and industrial micro-vibration. Low power, low noise, long service life for home and professional integration.${note}`
}

const productEnMap: Record<
  string,
  { description?: string; features?: Feature[] }
> = {
  zs0508: {
    description: vibratorOverviewEn('5W', '8Ω'),
    features: vibratorFeaturesEn('5W', '8Ω', 'standard'),
  },
  zs0516: {
    description: vibratorOverviewEn('5W', '16Ω'),
    features: vibratorFeaturesEn('5W', '16Ω', 'standard'),
  },
  zs0608: {
    description: vibratorOverviewEn('6W', '8Ω', true),
    features: vibratorFeaturesEn('6W', '8Ω', 'standard'),
  },
  zs0616: {
    description: vibratorOverviewEn('6W', '16Ω', true),
    features: vibratorFeaturesEn('6W', '16Ω', 'standard'),
  },
  zs0808: {
    description: vibratorOverviewEn('8W', '8Ω', true),
    features: vibratorFeaturesEn('8W', '8Ω', 'standard'),
  },
  zs0816: {
    description: vibratorOverviewEn('8W', '16Ω', true),
    features: vibratorFeaturesEn('8W', '16Ω', 'standard'),
  },
  zs1808: {
    description: vibratorOverviewEn('18W', '8Ω', true),
    features: vibratorFeaturesEn(
      '18W',
      '8Ω',
      'high',
      '18W rated power with aluminum housing for faster heat dissipation — ideal for smart sofas and smart beds requiring stronger amplitude.',
    ),
  },
  'zs2008-06': {
    description: vibratorOverviewEn('20W', '8Ω', true),
    features: vibratorFeaturesEn(
      '20W',
      '8Ω',
      'high',
      '20W rated power with aluminum housing for faster heat dissipation — ideal for smart sofas and smart beds requiring stronger amplitude.',
    ),
  },
  zs2508: {
    description: vibratorOverviewEn('25W', '8Ω', true),
    features: vibratorFeaturesEn(
      '25W',
      '8Ω',
      'high',
      '25W rated power with excellent aluminum heat dissipation — suited for smart sofas, smart beds and other high-amplitude applications.',
    ),
  },
  zs0508k: {
    description: vibratorOverviewEn('5W', '8Ω', true),
    features: [
      {
        title: 'Precise Low-Frequency Output',
        description:
          '5W power with 8Ω impedance delivers deep, powerful low-frequency vibration at low voltage — greater low-end depth while avoiding harsh highs.',
      },
      {
        title: 'Energy Efficient',
        description:
          '5W rated power with low operating temperature — ideal for smart sofas and smart beds requiring stronger amplitude.',
      },
      {
        title: 'Wide-Area Vibration',
        description: 'Expanded vibration coverage for a softer, more comfortable feel.',
      },
      {
        title: 'Low-Noise Design',
        description:
          'Precision vibrator with damping pads — operating noise ≤40dB, suitable for rest and work environments.',
      },
    ],
  },
  'zs07-1914tpub-1': {
    description:
      'Enhances haptic vibration effect, effectively reduces operating noise and increases coverage area.',
    features: [
      {
        title: 'PUB Material',
        description:
          'Balanced softness and hardness achieved through extensive material ratio testing.',
      },
      {
        title: 'Long Service Life',
        description: 'No powdering or cracking for 3+ years.',
      },
      {
        title: 'Enhanced Vibration',
        description: 'Larger vibration area with stronger haptic output.',
      },
    ],
  },
  'zstd-004': {
    description:
      'Power amplifier designed to drive LF vibrators — converts audio or PWM control signals into stable low-frequency output. Compact, efficient and low-heat; fits smart sofas, smart beds and smart home products with actuators. Customizable per project.',
    features: [
      {
        title: 'Multiple Control Options',
        description: 'Wireless remote, wired remote, app mini-program and Bluetooth control.',
      },
      {
        title: 'Protection Features',
        description: 'Over-current, over-temperature and short-circuit protection.',
      },
      {
        title: 'Matched for Vibrators',
        description:
          'Output power and impedance fully matched to LF vibrators — prevents over/under-drive for stable intensity and maximum lifespan.',
      },
    ],
  },
  'zstd-006': {
    description:
      'Power amplifier designed to drive LF vibrators — converts audio or PWM control signals into stable low-frequency output. Compact, efficient and low-heat; fits smart sofas, smart beds and smart home products with actuators. Customizable per project.',
    features: [
      {
        title: 'Multiple Control Options',
        description: 'Wireless remote, wired remote, app mini-program and Bluetooth control.',
      },
      {
        title: 'Protection Features',
        description: 'Over-current, over-temperature and short-circuit protection.',
      },
      {
        title: 'Matched for Vibrators',
        description:
          'Output power and impedance fully matched to LF vibrators — prevents over/under-drive for stable intensity and maximum lifespan.',
      },
    ],
  },
  'zstd-007': {
    description:
      'Power amplifier designed to drive LF vibrators — converts audio or PWM control signals into stable low-frequency output. Compact, efficient and low-heat; fits smart sofas, smart beds and smart home products with actuators. Customizable per project.',
    features: [
      {
        title: 'Multiple Control Options',
        description: 'Wireless remote, wired remote, app mini-program and Bluetooth control.',
      },
      {
        title: 'Protection Features',
        description: 'Over-current, over-temperature and short-circuit protection.',
      },
      {
        title: 'Matched for Vibrators',
        description:
          'Output power and impedance fully matched to LF vibrators — prevents over/under-drive for stable intensity and maximum lifespan.',
      },
    ],
  },
  speaker: {
    description:
      'High-performance magnetic circuit and lightweight diaphragm, 20W rated, 8Ω impedance — clear mid-high reproduction with appropriate low-end extension. For portable speakers, Bluetooth audio, voice prompts and haptic auxiliary sound in smart sofas, mattresses and home products.',
    features: [
      {
        title: 'Full-Range Balance',
        description:
          'Optimized cone and surround for clear vocals, non-harsh highs and clean lows — for voice prompts, background music and haptic device auxiliary sound.',
      },
      {
        title: 'Ultra-Thin & Lightweight',
        description:
          '9×11cm size fits massage devices, wearables, smart toys and other compact spaces.',
      },
    ],
  },
  'custom-harness': {
    description:
      'One-stop connection between drivers and vibrators — custom length support for simplified system integration.',
    features: [
      {
        title: 'Custom Length',
        description: 'Harness length configured flexibly per project requirements.',
      },
      {
        title: 'Custom Connectors',
        description: 'Both-end interfaces matched on demand for easier system integration.',
      },
      {
        title: 'High Bend Durability',
        description: '≥10,000 bend cycles without wire breakage — reliable and durable.',
      },
    ],
  },
  zstg: {
    description:
      'ZSTG is a modular, customizable six-channel vibration/audio drive kit. Six independent amplifiers drive multiple LF vibrators and speakers, with 433MHz wireless remote and 24V/3A industrial power supply — for haptic devices, vibration feedback, multi-zone massage and interactive exhibits. Mix and match loads for personalized output.',
    features: [
      {
        title: '6 Independent Channels',
        description:
          'Each channel has independent gain control for vibration intensity or volume. Mixed loads: 8Ω vibrators and 4Ω speakers on the same kit with automatic impedance matching.',
      },
      {
        title: 'High-Power Supply',
        description:
          '24V/3A switch-mode supply delivers 72W total — ample headroom even at full 6-channel load. Built-in EMI filtering and short-circuit protection for continuous operation.',
      },
      {
        title: 'Flexible Control',
        description:
          '433MHz remote up to 50m line-of-sight; also supports app mini-program and Bluetooth control.',
      },
      {
        title: 'Plug-and-Play Harness',
        description:
          'Included 24P harness: power input, 6× audio/PWM inputs, 6× load outputs — foolproof connector design.',
      },
    ],
  },
  'zstd-008': {
    description:
      'Wireless control unit for the ZSTG six-channel haptic drive kit. 433MHz RF with strong penetration, low power and flexible pairing — independent switch, mode change and global control for all 6 amplifier channels without cables.',
    features: [
      {
        title: 'Long Battery Life',
        description:
          'High-capacity 23A battery (12V) — ~6+ months at 100 presses/day. Auto sleep when idle for minimal battery drain.',
      },
      {
        title: 'Ready to Pair',
        description:
          'Pre-paired with ZSTG receiver out of the box. Add or replace remotes easily via the learn button on the receiver.',
      },
      {
        title: 'Reliable RF Performance',
        description:
          'Built-in SAW resonator for stable frequency. Reliable triggering even with WiFi, Bluetooth and ZigBee interference.',
      },
    ],
  },
}

export function getProductEnContent(product: Product) {
  return productEnMap[product.id]
}
