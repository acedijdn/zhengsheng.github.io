import { localImage } from '../lib/localImage'

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  model: string
  category: string
  description: string
  imageUrl: string
  specs: ProductSpec[]
  features: { title: string; description: string }[]
}

export const productCategories = [
  '全部',
  '低频振动器',
  '功率放大器',
  '扬声器',
  '扩振配件',
  '配件',
]

function vibratorSpecs(
  rated: string,
  max: string,
  offset: string,
): ProductSpec[] {
  return [
    { label: '额定功率', value: rated },
    { label: '最大功率', value: max },
    { label: '振动频率', value: '5-160Hz' },
    { label: '阻抗', value: '8Ω-16Ω' },
    { label: '振动偏移', value: offset },
  ]
}

function specsToFeatures(specs: ProductSpec[]) {
  return specs.slice(0, 4).map((s) => ({
    title: s.label,
    description: s.value,
  }))
}

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
}

export const products: Product[] = [
  {
    id: 'zs0508',
    name: 'ZS0508 低频振动器',
    model: 'ZS0508',
    category: '低频振动器',
    description: '额定功率 5W，适用于沙发椅、床垫等轻体感场景',
    imageUrl: IMG.zs0508,
    specs: vibratorSpecs('5W', '10W', '0.15mm'),
    features: specsToFeatures(vibratorSpecs('5W', '10W', '0.15mm')),
  },
  {
    id: 'zs0516',
    name: 'ZS0516 低频振动器',
    model: 'ZS0516',
    category: '低频振动器',
    description: '额定功率 5W，16Ω 阻抗规格，适配多路并联系统',
    imageUrl: IMG.zs0508,
    specs: vibratorSpecs('5W', '10W', '0.15mm'),
    features: specsToFeatures(vibratorSpecs('5W', '10W', '0.15mm')),
  },
  {
    id: 'zs0608',
    name: 'ZS0608 低频振动器',
    model: 'ZS0608',
    category: '低频振动器',
    description: '额定功率 6W，更大振动偏移，震感更饱满',
    imageUrl: IMG.zs0608,
    specs: vibratorSpecs('6W', '12W', '0.36mm'),
    features: specsToFeatures(vibratorSpecs('6W', '12W', '0.36mm')),
  },
  {
    id: 'zs0616',
    name: 'ZS0616 低频振动器',
    model: 'ZS0616',
    category: '低频振动器',
    description: '额定功率 6W，16Ω 阻抗，适合中大型座椅集成',
    imageUrl: IMG.zs0608,
    specs: vibratorSpecs('6W', '12W', '0.36mm'),
    features: specsToFeatures(vibratorSpecs('6W', '12W', '0.36mm')),
  },
  {
    id: 'zs0808',
    name: 'ZS0808 低频振动器',
    model: 'ZS0808',
    category: '低频振动器',
    description: '额定功率 8W，兼顾能效与体感强度',
    imageUrl: IMG.zs0808,
    specs: vibratorSpecs('8W', '16W', '0.4mm'),
    features: specsToFeatures(vibratorSpecs('8W', '16W', '0.4mm')),
  },
  {
    id: 'zs0816',
    name: 'ZS0816 低频振动器',
    model: 'ZS0816',
    category: '低频振动器',
    description: '额定功率 8W，16Ω 阻抗，多路驱动优选型号',
    imageUrl: IMG.zs0808,
    specs: vibratorSpecs('8W', '16W', '0.4mm'),
    features: specsToFeatures(vibratorSpecs('8W', '16W', '0.4mm')),
  },
  {
    id: 'zs1808',
    name: 'ZS1808 低频振动器',
    model: 'ZS1808',
    category: '低频振动器',
    description: '额定功率 18W，适用于大型沙发与按摩椅',
    imageUrl: IMG.zs1808,
    specs: vibratorSpecs('18W', '36W', '0.21mm'),
    features: specsToFeatures(vibratorSpecs('18W', '36W', '0.21mm')),
  },
  {
    id: 'zs2008-06',
    name: 'ZS2008-06 低频振动器',
    model: 'ZS2008-06',
    category: '低频振动器',
    description: '额定功率 20W，高功率输出，旗舰级震感体验',
    imageUrl: IMG.zs200806,
    specs: vibratorSpecs('20W', '40W', '0.19mm'),
    features: specsToFeatures(vibratorSpecs('20W', '40W', '0.19mm')),
  },
  {
    id: 'zs2508',
    name: 'ZS2508 低频振动器',
    model: 'ZS2508',
    category: '低频振动器',
    description: '额定功率 25W，大功率旗舰型号，强劲低频输出',
    imageUrl: IMG.zs2508,
    specs: vibratorSpecs('25W', '50W', '0.21mm'),
    features: specsToFeatures(vibratorSpecs('25W', '50W', '0.21mm')),
  },
  {
    id: 'zs0508k',
    name: 'ZS0508K 低频振动器+扩振板',
    model: 'ZS0508K',
    category: '低频振动器',
    description: '振动器与扩振板一体组合，扩大体感覆盖面积',
    imageUrl: IMG.zs0508k,
    specs: [
      { label: '额定功率', value: '5W' },
      { label: '最大功率', value: '10W' },
      { label: '振动频率', value: '5-160Hz' },
      { label: '阻抗', value: '8Ω-16Ω' },
      { label: '振动偏移', value: '0.23mm' },
    ],
    features: [
      { title: '一体组合', description: '振动器 + 扩振板成套供应' },
      { title: '扩大覆盖', description: '有效增大体感面积' },
      { title: '额定功率', description: '5W / 最大 10W' },
      { title: '振动频率', description: '5-160Hz 宽频响应' },
    ],
  },
  {
    id: 'zs07-1914tpub-1',
    name: 'ZS07-1914TPUB-1 扩振板',
    model: 'ZS07-1914TPUB-1',
    category: '扩振配件',
    description: '强化体感震动效果，有效降低运行噪音，增大体感面积',
    imageUrl: IMG.expander,
    specs: [
      { label: '尺寸', value: '150×200mm' },
      { label: '重量', value: '265g' },
      { label: '主要功能', value: '强化体感震动、降低噪音、增大体感面积' },
    ],
    features: [
      { title: '强化震感', description: '有效传递并放大振动能量' },
      { title: '降噪设计', description: '降低运行噪音' },
      { title: '尺寸', description: '150×200mm' },
      { title: '重量', description: '265g 轻量化结构' },
    ],
  },
  {
    id: 'zstd-004',
    name: 'ZSTD-004 功率放大器',
    model: 'ZSTD-004',
    category: '功率放大器',
    description: '4 路振动 + 2 路扬声器输出，一站式驱动方案',
    imageUrl: IMG.amp,
    specs: [
      { label: '输出功率', value: '4×10W + 2×6W' },
      { label: '频率', value: '5-160Hz / 20-20kHz' },
      { label: '供电', value: '24V' },
    ],
    features: [
      { title: '输出功率', description: '4×10W + 2×6W' },
      { title: '频率范围', description: '5-160Hz / 20-20kHz' },
      { title: '供电', description: '24V 直流供电' },
      { title: '多路输出', description: '振动与扬声器同步驱动' },
    ],
  },
  {
    id: 'zstd-006',
    name: 'ZSTD-006 功率放大器',
    model: 'ZSTD-006',
    category: '功率放大器',
    description: '6 路振动输出，适合多分区大型座椅系统',
    imageUrl: IMG.amp,
    specs: [
      { label: '输出功率', value: '6×10W + 2×6W' },
      { label: '频率', value: '5-160Hz / 20-20kHz' },
      { label: '供电', value: '24V' },
    ],
    features: [
      { title: '输出功率', description: '6×10W + 2×6W' },
      { title: '频率范围', description: '5-160Hz / 20-20kHz' },
      { title: '供电', description: '24V 直流供电' },
      { title: '六路振动', description: '支持肩背腰腿多区独立输出' },
    ],
  },
  {
    id: 'zstd-007',
    name: 'ZSTD-007 功率放大器',
    model: 'ZSTD-007',
    category: '功率放大器',
    description: '旗舰级大功率输出，满足高端按摩椅与影院椅需求',
    imageUrl: IMG.amp,
    specs: [
      { label: '输出功率', value: '4×22W + 2×20W + 40W' },
      { label: '频率', value: '5-160Hz / 20-20kHz' },
      { label: '供电', value: '24V' },
    ],
    features: [
      { title: '输出功率', description: '4×22W + 2×20W + 40W' },
      { title: '频率范围', description: '5-160Hz / 20-20kHz' },
      { title: '供电', description: '24V 直流供电' },
      { title: '旗舰功率', description: '大功率多通道输出' },
    ],
  },
  {
    id: 'speaker',
    name: '扬声器',
    model: '—',
    category: '扬声器',
    description: '提供高清、无延迟的音乐播放体验',
    imageUrl: IMG.speaker,
    specs: [
      { label: '尺寸', value: '9×11cm' },
      { label: '规格', value: '20W 4Ω/8Ω' },
      { label: '主要功能', value: '高清、无延迟音乐播放' },
    ],
    features: [
      { title: '尺寸', description: '9×11cm 紧凑设计' },
      { title: '功率规格', description: '20W 4Ω/8Ω' },
      { title: '高清音质', description: '无延迟音乐播放' },
      { title: '宽频响应', description: '影音与体感协同' },
    ],
  },
  {
    id: 'custom-harness',
    name: '定制线束 (24P/90CM)',
    model: '定制线束',
    category: '配件',
    description: '一站式连接驱动器与振子，支持长度定制，简化系统集成',
    imageUrl: IMG.harness,
    specs: [
      { label: '线束长度', value: '可定制' },
      { label: '线芯规格', value: '可定制' },
      { label: '线缆型号', value: '可定制' },
      { label: '两端连接器', value: '可定制' },
      { label: '耐弯折', value: '≥10000 次无断线' },
    ],
    features: [
      { title: '长度可定制', description: '按项目需求灵活配置' },
      { title: '连接器可定制', description: '两端接口按需匹配' },
      { title: '耐弯折', description: '≥10000 次无断线' },
      { title: '系统集成', description: '简化驱动器与振子连接' },
    ],
  },
  {
    id: 'zstg',
    name: 'ZSTG 体感套件',
    model: 'ZSTG',
    category: '配件',
    description: '功放、电源、遥控器、扬声器、振动器与线束可自定义搭配',
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
      { title: '一站式供应', description: '功放、振子、线束成套方案' },
      { title: '灵活搭配', description: '组件可按项目自定义组合' },
      { title: '6 路功放', description: '多分区同时驱动' },
      { title: '433 遥控', description: '支持无线模式切换' },
    ],
  },
  {
    id: 'zstd-008',
    name: 'ZSTD-008 433 遥控器',
    model: 'ZSTD-008',
    category: '配件',
    description: '433Hz 无线遥控，支持中英文，按钮可定制',
    imageUrl: IMG.amp,
    specs: [
      { label: '尺寸', value: '151×40×14mm' },
      { label: '频率', value: '433Hz' },
      { label: '语言', value: '支持中英文' },
      { label: '按钮', value: '可定制' },
    ],
    features: [
      { title: '无线遥控', description: '433Hz 稳定传输' },
      { title: '尺寸', description: '151×40×14mm' },
      { title: '多语言', description: '支持中英文界面' },
      { title: '可定制', description: '按钮功能按需配置' },
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
