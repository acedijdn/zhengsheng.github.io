import type { Product, ProductSpec } from '../data/productData'
import { getProductEnContent } from './productEn'
import type { ProductCategoryKey, Locale } from './translations'
import { translate, translations } from './translations'

const categoryDescEn: Record<Exclude<ProductCategoryKey, 'all'>, string> = {
  vibrator:
    'Precision low-frequency vibrator for muscle relaxation, therapy assistance, haptic feedback and smart furniture integration.',
  amplifier:
    'Power amplifier that converts audio or PWM signals into stable low-frequency output for vibrators and speakers.',
  speaker:
    'High-performance speaker with clear mid-high reproduction for music, voice prompts and haptic audio applications.',
  'haptic-system':
    'Modular six-channel haptic/audio drive kit with amplifier, power supply, remote and customizable configuration.',
  expander:
    'Expansion panel that enhances haptic transmission, reduces noise and increases coverage area.',
  accessory:
    'Accessories and harness solutions for simplified system integration and reliable connections.',
}

const specLabelEn: Record<string, string> = {
  额定功率: 'Rated Power',
  最大功率: 'Max Power',
  振动频率: 'Vibration Frequency',
  阻抗: 'Impedance',
  振动偏移: 'Vibration Displacement',
  工作电压: 'Operating Voltage',
  壳体材质: 'Housing Material',
  安装方式: 'Mounting',
  尺寸: 'Dimensions',
  重量: 'Weight',
  主要功能: 'Key Function',
  输出功率: 'Output Power',
  频率: 'Frequency',
  供电: 'Power Supply',
  规格: 'Specification',
  线束长度: 'Harness Length',
  线芯规格: 'Wire Gauge',
  线缆型号: 'Cable Model',
  两端连接器: 'Connectors',
  耐弯折: 'Bend Cycles',
  功率放大器: 'Amplifier Channels',
  电源: 'Power Supply',
  遥控器: 'Remote Control',
  扬声器: 'Speaker',
  低频振动器: 'LF Vibrator',
  线束: 'Harness',
  搭配方式: 'Configuration',
  工作频率: 'Operating Frequency',
  调制方式: 'Modulation',
  发射功率: 'Transmit Power',
  静态电流: 'Standby Current',
  工作电流: 'Operating Current',
  编码格式: 'Encoding',
  按键数量: 'Buttons',
  遥控距离: 'Range',
  外壳材质: 'Housing Material',
  产品尺寸: 'Dimensions',
  输入电压: 'Input Voltage',
  频率响应: 'Frequency Response',
  通讯接口: 'Interface',
  工作温度: 'Operating Temperature',
}

function localizeName(name: string, locale: Locale): string {
  if (locale === 'zh') return name
  return name
    .replace(/低频振动器\+扩振板/g, 'LF Vibrator + Expansion Panel')
    .replace(/低频振动器/g, 'LF Vibrator')
    .replace(/功率放大器/g, 'Power Amplifier')
    .replace(/扩振板/g, 'Expansion Panel')
    .replace(/体感套件/g, 'Haptic Kit')
    .replace(/遥控器/g, 'Remote Control')
    .replace(/定制线束/g, 'Custom Harness')
    .replace(/扬声器/g, 'Speaker')
}

export function tCategory(locale: Locale, key: string): string {
  return translate(translations[locale], `category.${key}`)
}

export function localizeProduct(product: Product, locale: Locale) {
  const en = getProductEnContent(product)

  return {
    ...product,
    name: localizeName(product.name, locale),
    category: tCategory(locale, product.categoryKey),
    description:
      locale === 'zh'
        ? product.description
        : product.descriptionEn ?? en?.description ?? categoryDescEn[product.categoryKey],
    specs: product.specs.map((spec) => localizeSpec(spec, locale)),
    features:
      locale === 'zh'
        ? product.features
        : en?.features ?? product.features,
  }
}

const specValueEn: Record<string, string> = {
  可定制: 'Customizable',
  '≥10000 次无断线': '≥10,000 cycles without breakage',
  '6 路': '6 channels',
  '24V 3A': '24V 3A',
  '433 遥控器': '433MHz Remote',
  '4Ω': '4Ω',
  '10W 8Ω': '10W 8Ω',
  '24P 线束': '24P Harness',
  套件可自定义搭配: 'Customizable kit configuration',
  '提供高清、无延迟的音乐播放体验': 'High-definition, low-latency music playback',
  '强化体感震动效果，有效减低运行噪音，增大体感面积':
    'Enhances haptic vibration, reduces noise, increases coverage',
  '请咨询技术团队': 'Contact technical team',
  '螺纹固定 / 粘贴式 / 嵌入开孔': 'Threaded / adhesive / flush mount',
  '螺纹固定 / 嵌入开孔': 'Threaded / flush mount',
  '固定码 / 学习码（可选）': 'Fixed code / learning code (optional)',
  '6 键（可自定义功能）': '6 buttons (customizable)',
  '空旷 ≥50 米，室内穿墙 ≥20 米': '≥50m open air, ≥20m through walls',
  'ABS 阻燃塑料': 'ABS flame-retardant plastic',
  'DC 3V（23A 或 27A 电池）': 'DC 3V (23A or 27A battery)',
  '433.92 MHz（ISM 频段）': '433.92 MHz (ISM band)',
  '+10dBm（典型值）': '+10dBm (typical)',
}

export function localizeSpec(spec: ProductSpec, locale: Locale): ProductSpec {
  if (locale === 'zh') return spec
  return {
    label: specLabelEn[spec.label] ?? spec.label,
    value: specValueEn[spec.value] ?? spec.value,
  }
}

export { translate, translations }
