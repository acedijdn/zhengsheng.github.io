import { localImage } from '../lib/localImage'
import type { ProductCategoryKey } from '../i18n/translations'

export type ProductCategory = Exclude<ProductCategoryKey, 'all'>

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  model: string
  categoryKey: ProductCategory
  description: string
  /** 英文产品概述（可选） */
  descriptionEn?: string
  imageUrl: string
  specs: ProductSpec[]
  features: { title: string; description: string }[]
}

const QUALITY_NOTE = '所有产品出厂前都进行加速度、振动偏移测试，保证质量。'

function vibratorOverview(rated: string, impedance: string, withQualityNote = false): string {
  const note = withQualityNote ? ` ${QUALITY_NOTE}` : ''
  return `本款低频振动器采用精密振动芯体设计，额定功率 ${rated}，阻抗 ${impedance}，输出平稳、穿透力强的低频振动波，适用于肌肉放松、理疗辅助、体感反馈及工业微振动场景。低功耗、低噪音、长寿命，满足家用与专业设备集成需求。${note}`
}

function vibratorSpecs(
  rated: string,
  max: string,
  offset: string,
  voltage = 'DC 5V–12V',
  material = 'ABS+铝合金',
  install = '螺纹固定 / 粘贴式 / 嵌入开孔',
): ProductSpec[] {
  return [
    { label: '额定功率', value: rated },
    { label: '最大功率', value: max },
    { label: '振动频率', value: '5-160Hz' },
    { label: '阻抗', value: '8Ω-16Ω' },
    { label: '振动偏移', value: offset },
    { label: '工作电压', value: voltage },
    { label: '壳体材质', value: material },
    { label: '安装方式', value: install },
  ]
}

function vibratorFeaturesStandard(
  rated: string,
  impedance: string,
  efficiencyNote?: string,
): { title: string; description: string }[] {
  return [
    {
      title: '精准低频输出',
      description: `${rated}功率配合${impedance}阻抗，在低电压驱动下即可产生深沉、有力的低频振动，避免高频刺痛感，更贴合人体舒适阈值。`,
    },
    {
      title: '节能高效',
      description:
        efficiencyNote ??
        `额定仅${rated}功耗，长时间工作不发热，适合电池供电设备（如便携按摩腰带、振动坐垫）。`,
    },
    {
      title: '低噪音设计',
      description: '精密振子结构结合减震胶垫，运行时噪音≤40dB，不影响休息或工作环境。',
    },
    { title: '振动频率', description: '5-160Hz' },
  ]
}

function vibratorFeaturesHighPower(
  rated: string,
  impedance: string,
  efficiencyNote: string,
): { title: string; description: string }[] {
  return [
    {
      title: '精准低频输出',
      description: `${rated}功率配合${impedance}阻抗，在大电压驱动下即可产生更加深沉、有力的低频振动，下潜深度更高，避免高频刺痛感，更贴合人体舒适阈值。`,
    },
    { title: '节能高效', description: efficiencyNote },
    {
      title: '低噪音设计',
      description: '精密振子结构结合减震胶垫，运行时噪音≤40dB，不影响休息或工作环境。',
    },
    { title: '振动频率', description: '5-160Hz' },
  ]
}

const AMP_OVERVIEW =
  '本功率放大器专为驱动低频振动器设计，可将音频信号或 PWM 控制信号转换为稳定的低频功率输出。体积小巧、效率高、发热低，适配智能沙发、智能床、智能家居等带有推杆设备的产品均可控制，可根据产品配置定制。'

const AMP_FEATURES = [
  {
    title: '多功能控制方式',
    description: '无线遥控器、有线遥控、APP 小程序、蓝牙，均可控制。',
  },
  {
    title: '保护功能',
    description: '过流保护、过热保护、短路保护。',
  },
  {
    title: '精准匹配振动器',
    description:
      '输出功率与阻抗完全对应低频振动器，避免过驱或欠驱，确保振动强度稳定、寿命最大化。',
  },
]

const IMG = {
  zs0508: localImage('ZS0508.png'),
  zs0608: localImage('ZS0608.png'),
  zs0808: localImage('ZS0808.png'),
  zs2508: localImage('ZS2508.webp'),
  zs1808: localImage('ZS1808.webp'),
  zs200806: localImage('2008-06.png'),
  zs0508k: localImage('ZS0508K.png'),
  expander: localImage('扩振板.png'),
  amp: localImage('主机.jpg'),
  speaker: localImage('图片4.webp'),
  harness: localImage('线束.jpg'),
  kit: localImage('体感讨价.webp'),
  remote: localImage('无线遥控.webp'),
}

export const products: Product[] = [
  {
    id: 'zs0508',
    name: 'ZS0508 低频振动器',
    model: 'ZS0508',
    categoryKey: 'vibrator',
    description: vibratorOverview('5W', '8Ω'),
    imageUrl: IMG.zs0508,
    specs: vibratorSpecs('5W', '10W', '0.15mm'),
    features: vibratorFeaturesStandard('5W', '8Ω'),
  },
  {
    id: 'zs0516',
    name: 'ZS0516 低频振动器',
    model: 'ZS0516',
    categoryKey: 'vibrator',
    description: vibratorOverview('5W', '16Ω'),
    imageUrl: IMG.zs0508,
    specs: vibratorSpecs('5W', '10W', '0.15mm'),
    features: vibratorFeaturesStandard('5W', '16Ω'),
  },
  {
    id: 'zs0608',
    name: 'ZS0608 低频振动器',
    model: 'ZS0608',
    categoryKey: 'vibrator',
    description: vibratorOverview('6W', '8Ω', true),
    imageUrl: IMG.zs0608,
    specs: vibratorSpecs('6W', '12W', '0.36mm'),
    features: vibratorFeaturesStandard('6W', '8Ω'),
  },
  {
    id: 'zs0616',
    name: 'ZS0616 低频振动器',
    model: 'ZS0616',
    categoryKey: 'vibrator',
    description: vibratorOverview('6W', '16Ω', true),
    imageUrl: IMG.zs0608,
    specs: vibratorSpecs('6W', '12W', '0.36mm'),
    features: vibratorFeaturesStandard('6W', '16Ω'),
  },
  {
    id: 'zs0808',
    name: 'ZS0808 低频振动器',
    model: 'ZS0808',
    categoryKey: 'vibrator',
    description: vibratorOverview('8W', '8Ω', true),
    imageUrl: IMG.zs0808,
    specs: vibratorSpecs('8W', '16W', '0.4mm'),
    features: vibratorFeaturesStandard('8W', '8Ω'),
  },
  {
    id: 'zs0816',
    name: 'ZS0816 低频振动器',
    model: 'ZS0816',
    categoryKey: 'vibrator',
    description: vibratorOverview('8W', '16Ω', true),
    imageUrl: IMG.zs0808,
    specs: vibratorSpecs('8W', '16W', '0.4mm'),
    features: vibratorFeaturesStandard('8W', '16Ω'),
  },
  {
    id: 'zs1808',
    name: 'ZS1808 低频振动器',
    model: 'ZS1808',
    categoryKey: 'vibrator',
    description: vibratorOverview('18W', '8Ω', true),
    imageUrl: IMG.zs1808,
    specs: vibratorSpecs('18W', '36W', '0.21mm', 'DC 24V', '铝合金+铝合金'),
    features: vibratorFeaturesHighPower(
      '18W',
      '8Ω',
      '额定18W功耗，铝合金外壳散热更快，适合智能沙发、智能床等振幅更强的使用场景。',
    ),
  },
  {
    id: 'zs2008-06',
    name: 'ZS2008-06 低频振动器',
    model: 'ZS2008-06',
    categoryKey: 'vibrator',
    description: vibratorOverview('20W', '8Ω', true),
    imageUrl: IMG.zs200806,
    specs: vibratorSpecs('20W', '40W', '0.19mm', 'DC 24V', '铝合金+铝合金'),
    features: vibratorFeaturesHighPower(
      '20W',
      '8Ω',
      '额定20W功耗，铝合金外壳散热更快，适合智能沙发、智能床等振幅更强的使用场景。',
    ),
  },
  {
    id: 'zs2508',
    name: 'ZS2508 低频振动器',
    model: 'ZS2508',
    categoryKey: 'vibrator',
    description: vibratorOverview('25W', '8Ω', true),
    imageUrl: IMG.zs2508,
    specs: vibratorSpecs('25W', '50W', '0.21mm', 'DC 5V–12V', '铝合金+铝合金'),
    features: vibratorFeaturesHighPower(
      '25W',
      '8Ω',
      '额定25W功耗，铝合金外壳散热优良，适合智能沙发、智能床等大振幅使用场景。',
    ),
  },
  {
    id: 'zs0508k',
    name: 'ZS0508K 低频振动器+扩振板',
    model: 'ZS0508K',
    categoryKey: 'vibrator',
    description: vibratorOverview('5W', '8Ω', true),
    imageUrl: IMG.zs0508k,
    specs: vibratorSpecs('5W', '10W', '0.23mm', 'DC 24V', 'ABS+铝合金', '螺纹固定 / 嵌入开孔'),
    features: [
      {
        title: '精准低频输出',
        description:
          '5W功率配合8Ω阻抗，在低电压驱动下即可产生深沉、有力的低频振动，下潜深度更高，避免高频刺痛感，更贴合人体舒适阈值。',
      },
      {
        title: '节能高效',
        description: '额定5W功耗，温度低，适合智能沙发、智能床等振幅更强的使用场景。',
      },
      {
        title: '大范围振动',
        description: '增加振动范围，振动更加柔和舒适。',
      },
      {
        title: '低噪音设计',
        description: '精密振子结合减震胶垫，运行时噪音≤40dB，不影响休息或工作环境。',
      },
    ],
  },
  {
    id: 'zs07-1914tpub-1',
    name: 'ZS07-1914TPUB-1 扩振板',
    model: 'ZS07-1914TPUB-1',
    categoryKey: 'expander',
    description: '强化体感震动效果，有效减低运行噪音，增大体感面积。',
    imageUrl: IMG.expander,
    specs: [
      { label: '尺寸', value: '150×200mm' },
      { label: '重量', value: '265g' },
      { label: '主要功能', value: '强化体感震动效果，有效减低运行噪音，增大体感面积' },
    ],
    features: [
      {
        title: 'PUB 材质',
        description: '软硬度适中，经过大量实验原料配比得出柔软度和硬度。',
      },
      { title: '寿命长', description: '3 年不粉化不开裂。' },
      { title: '增强振动', description: '振动范围大，振动力度增强。' },
    ],
  },
  {
    id: 'zstd-004',
    name: 'ZSTD-004 功率放大器',
    model: 'ZSTD-004',
    categoryKey: 'amplifier',
    description: AMP_OVERVIEW,
    imageUrl: IMG.amp,
    specs: [
      { label: '输出功率', value: '4×10W + 2×6W' },
      { label: '频率', value: '5-160Hz / 20-20kHz' },
      { label: '供电', value: '24V' },
    ],
    features: AMP_FEATURES,
  },
  {
    id: 'zstd-006',
    name: 'ZSTD-006 功率放大器',
    model: 'ZSTD-006',
    categoryKey: 'amplifier',
    description: AMP_OVERVIEW,
    imageUrl: IMG.amp,
    specs: [
      { label: '输出功率', value: '6×10W + 2×6W' },
      { label: '频率', value: '5-160Hz / 20-20kHz' },
      { label: '供电', value: '24V' },
    ],
    features: AMP_FEATURES,
  },
  {
    id: 'zstd-007',
    name: 'ZSTD-007 功率放大器',
    model: 'ZSTD-007',
    categoryKey: 'amplifier',
    description: AMP_OVERVIEW,
    imageUrl: IMG.amp,
    specs: [
      { label: '输出功率', value: '4×22W + 2×20W + 40W' },
      { label: '频率', value: '5-160Hz / 20-20kHz' },
      { label: '供电', value: '24V' },
    ],
    features: AMP_FEATURES,
  },
  {
    id: 'speaker',
    name: '扬声器',
    model: '—',
    categoryKey: 'speaker',
    description:
      '本扬声器采用高性能磁路与轻质振膜设计，额定功率 20W，阻抗 8Ω，具备清晰的中高频还原与适当的低频下潜。适用于便携音箱、蓝牙音频设备、语音提示模块以及体感振动反馈的辅助发声单元。适用于智能沙发、智能床垫、智能家居载体上使用。',
    imageUrl: IMG.speaker,
    specs: [
      { label: '尺寸', value: '9×11cm' },
      { label: '规格', value: '20W 4Ω/8Ω' },
      { label: '主要功能', value: '提供高清、无延迟的音乐播放体验' },
    ],
    features: [
      {
        title: '全频段均衡',
        description:
          '通过优化纸盆与折环，实现人声清晰、高音不刺耳、低频不浑浊，满足语音播报、背景音乐及体感振动设备的辅助发音需求。',
      },
      {
        title: '超薄轻量化',
        description: '尺寸 9×11cm，便于嵌入按摩仪、穿戴设备、智能玩具等狭小空间。',
      },
    ],
  },
  {
    id: 'custom-harness',
    name: '定制线束 (24P/90CM)',
    model: '定制线束',
    categoryKey: 'accessory',
    description: '一站式连接驱动器与振子，支持长度定制，简化系统集成。',
    imageUrl: IMG.harness,
    specs: [
      { label: '线束长度', value: '可定制' },
      { label: '线芯规格', value: '可定制' },
      { label: '线缆型号', value: '可定制' },
      { label: '两端连接器', value: '可定制' },
      { label: '耐弯折', value: '≥10000 次无断线' },
    ],
    features: [
      { title: '长度可定制', description: '按项目需求灵活配置线束长度。' },
      { title: '连接器可定制', description: '两端接口按需匹配，简化系统集成。' },
      { title: '耐弯折', description: '≥10000 次无断线，可靠耐用。' },
    ],
  },
  {
    id: 'zstg',
    name: 'ZSTG 体感套件',
    model: 'ZSTG',
    categoryKey: 'haptic-system',
    description:
      'ZSTG 是一款模块化、可自定义的六通道振动/音频驱动套件。内置 6 路独立功率放大器，可同时驱动多个低频振动器及扬声器，配合 433MHz 无线遥控器与 24V/3A 工业级电源，广泛适用于体感设备、振动反馈系统、多区按摩装置及互动展览装置。用户可根据实际需求自由搭配不同数量和类型的负载，实现个性化输出。',
    imageUrl: IMG.kit,
    specs: [
      { label: '功率放大器', value: '6 路' },
      { label: '电源', value: '24V 3A' },
      { label: '遥控器', value: '433 遥控器' },
      { label: '扬声器', value: '4Ω' },
      { label: '低频振动器', value: '10W 8Ω' },
      { label: '线束', value: '24P 线束' },
      { label: '搭配方式', value: '套件可自定义搭配' },
    ],
    features: [
      {
        title: '六路独立驱动',
        description:
          '每路功放配备独立增益调节电位器，可分别控制振动强度或音量。支持混合连接：同一套件中可同时接入 8Ω 振动器和 4Ω 扬声器，功放自动适配负载。',
      },
      {
        title: '大功率电源',
        description:
          '24V/3A 开关电源可提供 72W 总功率，6 路同时满载仍留有充足余量。电源内置 EMI 滤波与短路保护，适合长时间连续工作。',
      },
      {
        title: '多种控制方式',
        description:
          '433MHz 无线遥控器空旷距离可达 50 米，支持 APP 小程序控制、蓝牙控制等。',
      },
      {
        title: '即插即用线束',
        description:
          '随附 24P 线束包含电源输入线、6 路音频/PWM 信号输入线、6 路负载输出线，所有接口均采用防呆设计。',
      },
    ],
  },
  {
    id: 'zstd-008',
    name: 'ZSTD-008 433 遥控器',
    model: 'ZSTD-008',
    categoryKey: 'accessory',
    description:
      '本遥控器为 ZSTG 六通道智能振动驱动套件的无线控制单元，采用 433MHz 射频技术，具有穿透力强、功耗低、配对灵活等特点。配合套件内的接收模块，可实现对 6 路功率放大器的独立开关、模式切换、全局控制等操作，无需线缆束缚，极大提升使用便捷性。',
    imageUrl: IMG.remote,
    specs: [
      { label: '尺寸', value: '151×40×14mm' },
      { label: '工作频率', value: '433.92 MHz（ISM 频段）' },
      { label: '调制方式', value: 'ASK / OOK' },
      { label: '发射功率', value: '+10dBm（典型值）' },
      { label: '工作电压', value: 'DC 3V（23A 或 27A 电池）' },
      { label: '静态电流', value: '≤1μA' },
      { label: '工作电流', value: '≤12mA' },
      { label: '编码格式', value: '固定码 / 学习码（可选）' },
      { label: '按键数量', value: '6 键（可自定义功能）' },
      { label: '遥控距离', value: '空旷 ≥50 米，室内穿墙 ≥20 米' },
      { label: '外壳材质', value: 'ABS 阻燃塑料' },
    ],
    features: [
      {
        title: '长续航与低功耗',
        description:
          '采用高容量 23A 电池（12V），每天按 100 次可使用 6 个月以上。无按键时自动进入休眠模式，电池漏电极低。',
      },
      {
        title: '即配即用',
        description:
          '出厂时已与 ZSTG 套件接收板完成对码，开箱即可使用。如需更换或增加副遥控器，可通过接收板上的对码键轻松学习。',
      },
      {
        title: '可靠射频性能',
        description:
          '内置 SAW 谐振器，频率稳定不漂移。即使在有 WiFi、蓝牙、ZigBee 等干扰的环境中，仍能保持稳定触发。',
      },
    ],
  },
]

export const defaultProductSpecs: ProductSpec[] = [
  { label: '产品尺寸', value: '请咨询技术团队' },
  { label: '输入电压', value: 'DC 24V' },
  { label: '额定功率', value: '—' },
  { label: '频率响应', value: '5-160Hz' },
  { label: '通讯接口', value: 'UART/CAN' },
  { label: '工作温度', value: '请咨询技术团队' },
]
