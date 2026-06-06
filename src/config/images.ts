import { localImage } from '../lib/localImage'

export type ImageKey =
  | 'hero-scene'
  | 'product-vibrator'
  | 'product-module'
  | 'product-driver'
  | 'product-kit'
  | 'product-accessory'
  | 'solution-smart-sofa'
  | 'solution-smart-bed'
  | 'solution-smart-healing'
  | 'solution-smart-massage-chair'
  | 'scenario-sofa'
  | 'scenario-bed'
  | 'scenario-wellness'
  | 'scenario-massage-chair'
  | 'scenario-car-seat'
  | 'scenario-vr'
  | 'scenario-education'
  | 'about-factory'
  | 'certificate'
  | 'team-avatar'
  | 'client-logo'
  | 'map-location'
  | 'patent-diagram'

export type ImageCategory =
  | '首页'
  | '产品'
  | '解决方案'
  | '使用场景'
  | '关于我们'
  | '研发实力'
  | '联系我们'
  | '其他'

export interface ImageConfig {
  key: ImageKey
  label: string
  description: string
  category: ImageCategory
  /** 设置后将覆盖代码生成的 SVG 插图 */
  customUrl?: string
}

export const images: Record<ImageKey, ImageConfig> = {
  'hero-scene': {
    key: 'hero-scene',
    label: '首页顶部 Banner 大图',
    description: '全屏横图，建议尺寸 1920×720 或 21:9，用于首页 Hero 背景',
    category: '首页',
    customUrl: localImage('主图.webp'),
  },
  'product-vibrator': {
    key: 'product-vibrator',
    label: '低频振动器',
    description: '圆形驱动单元 + 同心波纹',
    category: '产品',
    customUrl: localImage('ZS0508.png'),
  },
  'product-module': {
    key: 'product-module',
    label: '扬声器',
    description: '体感扬声器单元抽象图形',
    category: '产品',
    customUrl: localImage('图片4.webp'),
  },
  'product-driver': {
    key: 'product-driver',
    label: '功率放大器',
    description: '功放与线路板抽象图形',
    category: '产品',
    customUrl: localImage('主机.jpg'),
  },
  'product-kit': {
    key: 'product-kit',
    label: '扩振配件',
    description: '扩振传导与组合组件',
    category: '产品',
    customUrl: localImage('扩振板.png'),
  },
  'product-accessory': {
    key: 'product-accessory',
    label: '配件',
    description: '连接线与转接组件',
    category: '产品',
    customUrl: localImage('线束.jpg'),
  },
  'solution-smart-sofa': {
    key: 'solution-smart-sofa',
    label: '智能沙发椅方案',
    description: '沙发轮廓 + 频率波纹',
    category: '解决方案',
    customUrl: localImage('智能沙发椅.webp'),
  },
  'solution-smart-bed': {
    key: 'solution-smart-bed',
    label: '智能睡床方案',
    description: '床体轮廓 + 助眠频率波',
    category: '解决方案',
    customUrl: localImage('主页智能床垫.webp'),
  },
  'solution-smart-healing': {
    key: 'solution-smart-healing',
    label: '智能疗愈方案',
    description: '健康养生理疗场景',
    category: '解决方案',
    customUrl: localImage('主页智能疗愈.webp'),
  },
  'solution-smart-massage-chair': {
    key: 'solution-smart-massage-chair',
    label: '智能按摩椅方案',
    description: '按摩椅轮廓 + 体感波纹',
    category: '解决方案',
    customUrl: localImage('智能按摩椅.webp'),
  },
  'scenario-sofa': {
    key: 'scenario-sofa',
    label: '智能沙发椅场景',
    description: '沙发极简轮廓与沉浸波纹',
    category: '使用场景',
    customUrl: localImage('智能沙发椅.webp'),
  },
  'scenario-bed': {
    key: 'scenario-bed',
    label: '智能睡床场景',
    description: '床体极简轮廓与频率波',
    category: '使用场景',
    customUrl: localImage('智能床图片修改 (7).webp'),
  },
  'scenario-wellness': {
    key: 'scenario-wellness',
    label: '健康养生场景',
    description: '理疗设备与舒缓波纹',
    category: '使用场景',
    customUrl: localImage('使用场景4.webp'),
  },
  'scenario-massage-chair': {
    key: 'scenario-massage-chair',
    label: '音波体感按摩椅场景',
    description: '按摩椅轮廓与分区体感波纹',
    category: '使用场景',
    customUrl: localImage('智能按摩椅.webp'),
  },
  'scenario-car-seat': {
    key: 'scenario-car-seat',
    label: '汽车腰靠场景',
    description: '车载座椅与震动波纹',
    category: '使用场景',
    customUrl: localImage('使用场景2.webp'),
  },
  'scenario-vr': {
    key: 'scenario-vr',
    label: 'VR 设备场景',
    description: 'VR 头显与触觉反馈波',
    category: '使用场景',
    customUrl: localImage('使用场景3.webp'),
  },
  'scenario-education': {
    key: 'scenario-education',
    label: '游戏电竞场景',
    description: '电竞椅与沉浸震感',
    category: '使用场景',
    customUrl: localImage('使用场景1.webp'),
  },
  'about-factory': {
    key: 'about-factory',
    label: '品牌故事配图',
    description: '工厂建筑与团队抽象图形',
    category: '关于我们',
    customUrl: localImage('公司介绍.webp'),
  },
  certificate: {
    key: 'certificate',
    label: '证书/专利文档',
    description: '文档与认证图标',
    category: '研发实力',
  },
  'team-avatar': {
    key: 'team-avatar',
    label: '团队成员头像',
    description: '圆形人物剪影',
    category: '关于我们',
  },
  'client-logo': {
    key: 'client-logo',
    label: '客户 Logo',
    description: '六边形品牌占位图形',
    category: '其他',
  },
  'map-location': {
    key: 'map-location',
    label: '联系地址地图',
    description: '地图定位抽象图形',
    category: '联系我们',
    customUrl: localImage('地图.png'),
  },
  'patent-diagram': {
    key: 'patent-diagram',
    label: '专利技术图解',
    description: '技术结构示意与节点连线',
    category: '研发实力',
  },
}

export const imageList = Object.values(images)

const categoryImageMap: Record<string, ImageKey> = {
  vibrator: 'product-vibrator',
  amplifier: 'product-driver',
  speaker: 'product-module',
  'haptic-system': 'product-driver',
  expander: 'product-kit',
  accessory: 'product-accessory',
}

const solutionSlugMap: Record<string, ImageKey> = {
  'smart-sofa': 'solution-smart-sofa',
  'smart-bed': 'solution-smart-bed',
  'smart-healing': 'solution-smart-healing',
  'smart-massage-chair': 'solution-smart-massage-chair',
}

export function getProductImageKey(category: string): ImageKey {
  return categoryImageMap[category] ?? 'product-vibrator'
}

export function getSolutionImageKey(slug: string): ImageKey {
  return solutionSlugMap[slug] ?? 'solution-smart-sofa'
}

export function getSolutionImageKeyFromPath(path: string): ImageKey {
  const slug = path.replace('/solutions/', '')
  return getSolutionImageKey(slug)
}
