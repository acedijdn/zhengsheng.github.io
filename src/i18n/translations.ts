export type Locale = 'zh' | 'en'

export type ProductCategoryKey =
  | 'all'
  | 'vibrator'
  | 'amplifier'
  | 'speaker'
  | 'haptic-system'
  | 'expander'
  | 'accessory'

export const productCategoryKeys: ProductCategoryKey[] = [
  'all',
  'vibrator',
  'amplifier',
  'speaker',
  'haptic-system',
  'expander',
  'accessory',
]

export interface TranslationTree {
  [key: string]: string | TranslationTree
}

export const translations: Record<Locale, TranslationTree> = {
  zh: {
    nav: {
      home: '首页',
      solutions: '解决方案',
      products: '产品展示',
      scenarios: '使用场景',
      about: '关于我们',
    },
    common: {
      getQuote: '获取方案',
      viewDetails: '查看详情',
      learnMore: '了解详情',
      buyInternational: '国际购买',
      buyDomestic: '国内购买',
      model: '型号',
      viewScenarios: '查看使用场景',
      exploreSolutions: '探索方案',
      viewProducts: '查看产品',
      seeMore: '查看更多',
    },
    category: {
      all: '全部',
      vibrator: '低频振动器',
      amplifier: '功率放大器',
      speaker: '扬声器',
      'haptic-system': '音波体感系统',
      expander: '扩振配件',
      accessory: '配件',
    },
    footer: {
      quickLinks: '快速链接',
      more: '更多',
      contact: '联系方式',
      hq: '宁波总部',
    },
    home: {
      heroTitle: '体感技术心脏，为全球智能家居赋能',
      heroSubtitle: '17年专注低频振动器与体感系统，从宁波智慧工厂到欧美千家万户',
      milestonesTitle: '发展里程碑',
      milestonesSubtitle: '十七年专注音波体感，从宁波到全球',
      solutionsTitle: '解决方案',
      solutionsSubtitle: '为不同载体提供定制化体感技术方案',
      productsTitle: '产品速览',
      productsSubtitle: '低频振动器、功放、扬声器与扩振配件，一站式供应',
      scenariosTitle: '使用场景',
      scenariosSubtitle: '看音波体感技术如何在真实产品中创造价值',
      scenarioSofa: '智能沙发椅 · 沉浸式体验',
      scenarioBed: '智能睡床 · 科学助眠',
      ctaText: '准备好为您的产品注入沉浸式体验了吗？立即与我们的技术专家沟通。',
      ctaButton: '获取专属方案',
      statFounded: '成立时间',
      statFacility: '研产基地',
      statTeam: '专业人才',
      statPatents: '技术专利',
      homeProductVibrator: '低频振动器',
      homeProductVibratorDesc: '核心驱动单元，精准传导',
      homeProductAmp: '功率放大器',
      homeProductAmpDesc: '高保真功放，精准驱动',
      homeProductSpeaker: '扬声器',
      homeProductSpeakerDesc: '体感发声单元，宽频响应',
      homeProductExpander: '扩振配件',
      homeProductExpanderDesc: '扩振传导，扩大覆盖',
      homeProductAccessory: '配件',
      homeProductAccessoryDesc: '线缆与转接，灵活对接',
      solutionSofa: '智能沙发椅方案',
      solutionSofaDesc: '为功能沙发、按摩椅、电竞椅提供 4D 沉浸体验',
      solutionBed: '智能睡床方案',
      solutionBedDesc: '科学频率引导，物理助眠新维度',
      solutionHealing: '智能疗愈方案',
      solutionHealingDesc: '精准频率震动，赋能理疗与健康养生设备',
      solutionMassage: '智能按摩椅方案',
      solutionMassageDesc: '多模式理疗程序，深度放松与疲劳缓解',
    },
    products: {
      title: '产品中心',
      subtitle:
        '低频振动器、功率放大器、扬声器、音波体感系统、扩振配件与通用配件，一站式供应',
      breadcrumb: '产品中心',
      coreSpecs: '核心参数',
      scenarios: '应用场景',
      scenariosDesc: '该产品可应用于智能沙发椅、智能睡床等多种场景',
    },
    about: {
      brandStory: '品牌故事',
      contactUs: '联系我们',
      contactSubtitle: '欢迎联系正盛科技，获取专属体感技术方案',
      contactInfo: '联系信息',
      milestones: '发展里程碑',
    },
    site: {
      tagline: '正盛科技——音波体感系统全球供应商',
    },
  },
  en: {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      products: 'Products',
      scenarios: 'Scenarios',
      about: 'About',
    },
    common: {
      getQuote: 'Get a Quote',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      buyInternational: 'Buy International',
      buyDomestic: 'Buy Domestic',
      model: 'Model',
      viewScenarios: 'View Scenarios',
      exploreSolutions: 'Explore Solutions',
      viewProducts: 'View Products',
      seeMore: 'See More',
    },
    category: {
      all: 'All',
      vibrator: 'Low-Frequency Vibrators',
      amplifier: 'Power Amplifiers',
      speaker: 'Speakers',
      'haptic-system': 'Haptic Audio Systems',
      expander: 'Expansion Accessories',
      accessory: 'Accessories',
    },
    footer: {
      quickLinks: 'Quick Links',
      more: 'More',
      contact: 'Contact',
      hq: 'Ningbo HQ',
    },
    home: {
      heroTitle: 'The Heart of Haptic Technology for Global Smart Living',
      heroSubtitle:
        '17 years focused on LF vibrators and haptic systems — from our Ningbo smart factory to homes worldwide',
      milestonesTitle: 'Milestones',
      milestonesSubtitle: '17 years of haptic audio innovation, from Ningbo to the world',
      solutionsTitle: 'Solutions',
      solutionsSubtitle: 'Customized haptic technology for every application',
      productsTitle: 'Product Overview',
      productsSubtitle: 'Vibrators, amplifiers, speakers and expansion accessories — one-stop supply',
      scenariosTitle: 'Use Cases',
      scenariosSubtitle: 'See how haptic audio creates value in real products',
      scenarioSofa: 'Smart Sofa · Immersive Experience',
      scenarioBed: 'Smart Bed · Scientific Sleep Aid',
      ctaText: 'Ready to bring immersive experiences to your product? Talk to our experts today.',
      ctaButton: 'Get Your Solution',
      statFounded: 'Years Established',
      statFacility: 'R&D Facility',
      statTeam: 'Professionals',
      statPatents: 'Patents',
      homeProductVibrator: 'LF Vibrators',
      homeProductVibratorDesc: 'Core drive units with precise transmission',
      homeProductAmp: 'Power Amplifiers',
      homeProductAmpDesc: 'Hi-fi amplification, precise driving',
      homeProductSpeaker: 'Speakers',
      homeProductSpeakerDesc: 'Haptic audio units, wide frequency response',
      homeProductExpander: 'Expansion Panels',
      homeProductExpanderDesc: 'Expand coverage, amplify haptic feel',
      homeProductAccessory: 'Accessories',
      homeProductAccessoryDesc: 'Cables and adapters for flexible integration',
      solutionSofa: 'Smart Sofa Solution',
      solutionSofaDesc: '4D immersive experience for sofas, massage chairs and gaming chairs',
      solutionBed: 'Smart Bed Solution',
      solutionBedDesc: 'Science-guided frequencies for a new dimension of physical sleep aid',
      solutionHealing: 'Smart Wellness Solution',
      solutionHealingDesc: 'Precise frequency vibration for therapy and wellness devices',
      solutionMassage: 'Smart Massage Chair Solution',
      solutionMassageDesc: 'Multi-mode therapy programs for deep relaxation and fatigue relief',
    },
    products: {
      title: 'Products',
      subtitle:
        'LF vibrators, amplifiers, speakers, haptic systems, expansion accessories and general accessories',
      breadcrumb: 'Products',
      coreSpecs: 'Specifications',
      scenarios: 'Applications',
      scenariosDesc: 'Suitable for smart sofas, smart beds and many other scenarios',
    },
    about: {
      brandStory: 'Our Story',
      contactUs: 'Contact Us',
      contactSubtitle: 'Contact Zhengsheng for your custom haptic technology solution',
      contactInfo: 'Contact Information',
      milestones: 'Milestones',
    },
    site: {
      tagline: 'Zhengsheng — Global Supplier of Haptic Audio Systems',
    },
  },
}

export function translate(dict: TranslationTree, key: string): string {
  const value = key.split('.').reduce<string | TranslationTree | undefined>((obj, part) => {
    if (obj && typeof obj === 'object' && part in obj) {
      return obj[part] as string | TranslationTree
    }
    return undefined
  }, dict)
  return typeof value === 'string' ? value : key
}
