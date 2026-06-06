import type { Locale } from './translations'
import type { Milestone } from '../data/milestones'
import { milestones as milestonesZh } from '../data/milestones'
import { solutionDataMap } from '../data/solutionData'

export type SolutionSlug = keyof typeof solutionDataMap

const milestonesEn: Milestone[] = [
  { year: '2009', event: 'Ningbo headquarters founded; first-generation LF vibrator developed' },
  {
    year: '2013',
    event: 'First haptic audio system developed for automotive lumbar support, reducing driver fatigue',
  },
  {
    year: '2016',
    event: 'Music haptic system applied to robotic massage chairs — softer massage, music guidance',
  },
  {
    year: '2018',
    event: 'Haptic systems deployed in smart recliners and smart mattresses for rhythmic massage and sleep aid',
  },
  { year: '2019', event: 'Entered European market; strong domestic growth' },
  {
    year: '2023',
    event: 'Multiple generations of haptic systems launched across power ratings, serving global markets',
  },
]

const scenariosContent = {
  zh: {
    title: '使用场景',
    subtitle: '看音波体感技术如何在真实产品中创造价值',
    blocks: [
      {
        title: '智能沙发椅 · 4D 沉浸体验',
        description:
          '当用户坐在沙发上观影、游戏或聆听音乐时，体感系统将音频信号实时转化为全身震动。低频轰鸣、高频细腻，每一帧画面都触手可及。已应用于家庭影院椅、电竞椅、音乐放松椅等产品。',
        highlights: ['影音同步零延迟', '振动强度自适应', '嵌入式不占空间'],
        buttonText: '查看沙发椅方案',
        buttonTo: '/solutions/smart-sofa',
      },
      {
        title: '智能睡床 · 科学频率助眠',
        description:
          '不依赖声音，通过特定频率的微震动直接作用于人体，引导大脑进入放松状态。分区模组可对肩、背、腰、腿输出不同频率，实现定向舒缓。结合睡眠监测设备，还能实时自适应调整，真正实现智能助眠。',
        highlights: ['脑波频率科学引导', '分区定向舒缓', '静音不扰伴侣'],
        buttonText: '查看睡床方案',
        buttonTo: '/solutions/smart-bed',
      },
      {
        title: '健康养生 · 精准体感理疗',
        description:
          '将音波震动技术应用于理疗床、足浴器等健康设备，通过精准频率震动促进血液循环、缓解肌肉疲劳。可定制不同理疗模式，为产品增加差异化科技卖点。',
        highlights: ['多模式理疗程序', '精准频率控制', '适配多种设备形态'],
        buttonText: '查看疗愈方案',
        buttonTo: '/solutions/smart-healing',
      },
      {
        title: '音波体感按摩椅 · 震感按摩协同',
        description:
          '将低频音波震动代替传统机械按摩，肩、背、腰、腿四区独立输出精准震感，支持放松、理疗、影音同步等多模式切换，为高端按摩椅注入可感知的科技差异化体验。',
        highlights: ['音波代替机械按摩', '四区独立精准传导', '多模式一键切换'],
        buttonText: '查看按摩椅方案',
        buttonTo: '/solutions/smart-massage-chair',
      },
    ],
    moreTitle: '更多应用探索',
    moreItems: [
      { title: '汽车腰靠', description: '车载影音震动体验，缓解长途驾驶疲劳' },
      { title: 'VR 设备', description: '虚拟现实触觉反馈，增强沉浸交互' },
      { title: '游戏电竞', description: '音画震感同步，提升竞技沉浸与临场感' },
    ],
    moreCta: '有更多应用想法？我们期待与您共同探索。',
    contactTeam: '联系技术团队',
  },
  en: {
    title: 'Use Cases',
    subtitle: 'See how haptic audio technology creates value in real products',
    blocks: [
      {
        title: 'Smart Sofa · 4D Immersive Experience',
        description:
          'When users watch movies, play games or listen to music on the sofa, the haptic system converts audio into full-body vibration in real time — deep lows and fine highs make every scene tangible. Applied in home theater chairs, gaming chairs and relaxation recliners.',
        highlights: ['Zero-latency AV sync', 'Adaptive vibration intensity', 'Embedded, space-saving design'],
        buttonText: 'View Sofa Solution',
        buttonTo: '/solutions/smart-sofa',
      },
      {
        title: 'Smart Bed · Science-Guided Sleep',
        description:
          'Without relying on sound, micro-vibrations at specific frequencies act directly on the body to guide relaxation. Zoned modules deliver different frequencies to shoulders, back, waist and legs. Combined with sleep monitoring, frequencies adapt in real time for smarter sleep aid.',
        highlights: ['Brainwave frequency guidance', 'Zoned directional relief', 'Silent, partner-friendly'],
        buttonText: 'View Bed Solution',
        buttonTo: '/solutions/smart-bed',
      },
      {
        title: 'Wellness · Precision Haptic Therapy',
        description:
          'Haptic vibration applied to therapy beds, foot spas and wellness devices improves circulation and relieves muscle fatigue through precise frequencies. Customizable therapy modes add differentiated technology appeal.',
        highlights: ['Multi-mode therapy programs', 'Precise frequency control', 'Fits multiple device forms'],
        buttonText: 'View Wellness Solution',
        buttonTo: '/solutions/smart-healing',
      },
      {
        title: 'Haptic Massage Chair · Vibration + Massage',
        description:
          'Low-frequency haptic vibration replaces or complements mechanical massage. Four independent zones (shoulders, back, waist, legs) support relaxation, therapy and AV-sync modes — a tangible differentiator for premium massage chairs.',
        highlights: ['Haptic replaces mechanical massage', 'Four-zone precise transmission', 'One-tap mode switching'],
        buttonText: 'View Massage Chair Solution',
        buttonTo: '/solutions/smart-massage-chair',
      },
    ],
    moreTitle: 'More Applications',
    moreItems: [
      { title: 'Car Lumbar Support', description: 'In-car AV haptics to ease long-drive fatigue' },
      { title: 'VR Devices', description: 'Tactile feedback for deeper immersive interaction' },
      { title: 'Gaming & Esports', description: 'Synced audio-visual haptics for competitive immersion' },
    ],
    moreCta: 'Have another application in mind? We look forward to exploring it with you.',
    contactTeam: 'Contact Our Team',
  },
}

const solutionsPageContent = {
  zh: {
    title: '体感技术解决方案',
    subtitle: '覆盖智能沙发椅、智能睡床、智能疗愈与智能按摩椅等完整技术方案',
    items: [
      {
        title: '智能沙发椅方案',
        summary: '为功能沙发、按摩椅、电竞椅提供 4D 沉浸体验，影音同步零延迟',
        to: '/solutions/smart-sofa',
        advantages: [
          { title: '影音同步', description: '音频信号实时转化为全身震动，零延迟沉浸体验' },
          { title: '自适应强度', description: '振动强度随音源动态调节，细腻还原每一帧' },
          { title: '嵌入式模组', description: '超薄设计，不占空间，即插即用' },
          { title: '灵活集成', description: '支持多种椅型结构，快速对接现有产品线' },
        ],
      },
      {
        title: '智能睡床方案',
        summary: '科学频率引导，物理助眠新维度，静音不扰伴侣',
        to: '/solutions/smart-bed',
        advantages: [
          { title: '自主频率库', description: '内置α波、θ波等助眠频率，科学引导入睡' },
          { title: '分区震动', description: '头肩腰腿分区控制，定向舒缓' },
          { title: '静音能效', description: '低噪音运行，低功耗整夜工作' },
          { title: '智能联动', description: '对接睡眠监测设备，自适应调节' },
        ],
      },
      {
        title: '智能疗愈方案',
        summary: '精准频率体感理疗，为健康设备注入差异化科技卖点',
        to: '/solutions/smart-healing',
        advantages: [
          { title: '多模式理疗', description: '可定制放松、舒缓、激活等多种理疗程序' },
          { title: '精准控频', description: '特定频率震动促进血液循环、缓解肌肉疲劳' },
          { title: '设备适配', description: '适配理疗床、足浴器等多种健康设备形态' },
          { title: '方案定制', description: '支持频率库与模式定制，满足差异化需求' },
        ],
      },
      {
        title: '智能按摩椅方案',
        summary: '音波震动与按摩程序深度融合，打造高端智能按摩体验',
        to: '/solutions/smart-massage-chair',
        advantages: [
          { title: '深度集成', description: '体感模组嵌入椅体，与机械按摩协同运作' },
          { title: '多程序切换', description: '放松、理疗、影音等多模式一键切换' },
          { title: '精准传导', description: '肩背腰腿分区震动，定向舒缓深层肌肉' },
          { title: '即插即用', description: '标准接口设计，快速对接现有按摩椅产品线' },
        ],
      },
    ],
  },
  en: {
    title: 'Haptic Technology Solutions',
    subtitle: 'Complete solutions for smart sofas, smart beds, wellness and massage chairs',
    items: [
      {
        title: 'Smart Sofa Solution',
        summary: '4D immersive experience for functional sofas, massage chairs and gaming chairs — zero-latency AV sync',
        to: '/solutions/smart-sofa',
        advantages: [
          { title: 'AV Sync', description: 'Real-time audio-to-vibration conversion for zero-latency immersion' },
          { title: 'Adaptive Intensity', description: 'Vibration strength follows the source dynamically' },
          { title: 'Embedded Modules', description: 'Ultra-thin design, space-saving, plug-and-play' },
          { title: 'Flexible Integration', description: 'Fits multiple chair structures, fast product-line integration' },
        ],
      },
      {
        title: 'Smart Bed Solution',
        summary: 'Science-guided frequencies for physical sleep aid — silent and partner-friendly',
        to: '/solutions/smart-bed',
        advantages: [
          { title: 'Frequency Library', description: 'Built-in alpha/theta sleep frequencies for guided relaxation' },
          { title: 'Zoned Vibration', description: 'Independent head, shoulder, back, waist and leg zones' },
          { title: 'Quiet & Efficient', description: 'Low noise, low power for all-night operation' },
          { title: 'Smart Linkage', description: 'Connects to sleep monitors for adaptive adjustment' },
        ],
      },
      {
        title: 'Smart Wellness Solution',
        summary: 'Precise haptic therapy that differentiates health and wellness devices',
        to: '/solutions/smart-healing',
        advantages: [
          { title: 'Multi-Mode Therapy', description: 'Relax, soothe, activate and other customizable programs' },
          { title: 'Precise Frequency', description: 'Targeted vibration improves circulation and eases fatigue' },
          { title: 'Device Adaptation', description: 'Fits therapy beds, foot spas and more' },
          { title: 'Custom Solutions', description: 'Frequency libraries and modes tailored to your product' },
        ],
      },
      {
        title: 'Smart Massage Chair Solution',
        summary: 'Deep fusion of haptic vibration and massage programs for premium experiences',
        to: '/solutions/smart-massage-chair',
        advantages: [
          { title: 'Deep Integration', description: 'Haptic modules embedded in the chair, working with mechanical massage' },
          { title: 'Multi-Program', description: 'Relaxation, therapy and AV modes at one tap' },
          { title: 'Precise Transmission', description: 'Zoned vibration for shoulders, back, waist and legs' },
          { title: 'Plug-and-Play', description: 'Standard interfaces for fast integration into existing lines' },
        ],
      },
    ],
  },
}

const aboutContent = {
  zh: {
    brandStory:
      '宁波正盛音响科技有限公司于2009年在中国宁波创立，3000平方米的现代化厂区集生产研发于一体，超五十名专业人才在此协作。依托精密设备与先进技术，我们深度钻研低频振动器、配套功率放大器及整套音波体感系统，凭借自主研发与生产的硬核实力，构建了完善的产品体系，年产量可达80万+，年产值稳定在3000万+，产品畅销欧美国家，以高性能持续为全球用户带来沉浸式感官体验。公司核心产品品类丰富、适配多元场景，具体涵盖：低频振动器系列，功率覆盖全面，包含5瓦、10瓦、15瓦、20瓦、30瓦、60瓦多种规格，凭借出色的振动传导性与精准控频性能，可灵活适配各类配套设备；音波体感系列，涵盖音波体感按摩仪、音波体感沙发、音波体感床垫，音波振子，声波马达，扬声器震动，震动按摩，等产品，依托低频声波共振原理，实现深层放松、理疗舒缓等功效，广泛应用于智能家居、养生健康等多个领域；同时公司专注研发配套功率放大器，并具备整套体感系统研发能力，可提供从核心部件到完整系统的一体化研发与生产服务，完善产品生态，满足客户多元化、定制化需求。多年来，公司坚守研发与生产并重，将精密制造技术融入每一款产品，无论是多功率可选的低频振动器，还是贴合人体需求的音波体感产品，都经过严格检测，确保品质稳定。未来，我们将持续深耕低频振动与音波体感领域，依托现有产能优势与技术积累，不断丰富产品矩阵，为全球用户提供更优质的沉浸式感官与健康体验，助力智能家居、养生健康行业高质量发展。',
  },
  en: {
    brandStory:
      'Ningbo Zhengsheng Audio Technology Co., Ltd. was founded in Ningbo, China in 2009. Our 3,000 m² modern facility integrates R&D and manufacturing with a team of 50+ professionals. With precision equipment and advanced technology, we specialize in low-frequency vibrators, power amplifiers and complete haptic audio systems. Through in-house R&D and production, we have built a comprehensive product portfolio with annual output exceeding 800,000 units and stable annual revenue of 30M+ RMB, serving customers in Europe, America and beyond. Our core products include LF vibrator series (5W–60W) with excellent transmission and frequency control; haptic audio products such as massage devices, haptic sofas and mattresses; and matching power amplifiers and full-system solutions from components to complete kits. Every product undergoes strict testing. We will continue to deepen our expertise in LF vibration and haptic audio, expanding our portfolio to deliver superior immersive and wellness experiences worldwide.',
  },
}

const solutionDetailLabels = {
  zh: {
    subtitle: '完整技术方案与集成支持',
    coreAdvantages: '核心技术优势',
    techSpecs: '技术参数',
    relatedProducts: '相关产品',
    faq: '常见问题',
    downloadSpec: '下载技术规格书',
    requestSample: '申请工程样机',
    painLeft: '传统方案的局限',
    painRight: '我们的方案优势',
  },
  en: {
    subtitle: 'Complete technical solution and integration support',
    coreAdvantages: 'Core Technology Advantages',
    techSpecs: 'Technical Specifications',
    relatedProducts: 'Related Products',
    faq: 'FAQ',
    downloadSpec: 'Download Spec Sheet',
    requestSample: 'Request Engineering Sample',
    painLeft: 'Limitations of Traditional Approaches',
    painRight: 'Our Solution Advantages',
  },
}

const defaultSpecsLabels = {
  zh: [
    { label: '模组尺寸', value: 'XX mm' },
    { label: '输入电压', value: 'DC XX V' },
    { label: '额定功率', value: 'XX W' },
    { label: '频率响应', value: 'XX-XX Hz' },
    { label: '通讯接口', value: 'UART/CAN' },
    { label: '工作温度', value: '-XX~XX℃' },
  ],
  en: [
    { label: 'Module Size', value: 'XX mm' },
    { label: 'Input Voltage', value: 'DC XX V' },
    { label: 'Rated Power', value: 'XX W' },
    { label: 'Frequency Response', value: 'XX-XX Hz' },
    { label: 'Interface', value: 'UART/CAN' },
    { label: 'Operating Temperature', value: '-XX~XX℃' },
  ],
}

const solutionDetailEn = {
  'smart-sofa': {
    title: 'Smart Sofa Solution',
    painPoints: {
      left: {
        title: 'Limitations of Traditional Seating',
        items: [
          'Movies and games offer only sight and sound — no bodily immersion',
          'External subwoofers take space; vibration stays localized',
          'No automatic matching of vibration to content type',
        ],
      },
      right: {
        title: 'Our Advantages',
        items: [
          'Real-time audio-to-vibration for full-body 4D immersion',
          'Ultra-thin embedded modules — no impact on design',
          'Adaptive intensity with automatic mode switching for AV, games and music',
        ],
      },
    },
    advantages: [
      { icon: '🎬', title: 'Real-Time Conversion', description: 'Audio converted to precise vibration with zero latency' },
      { icon: '⚡', title: 'Adaptive Intensity', description: 'Strength follows the source — deep lows and fine highs' },
      { icon: '📦', title: 'Embedded Modules', description: 'Ultra-thin integration without affecting comfort' },
      { icon: '🔧', title: 'Flexible Integration', description: 'Sofas, gaming chairs, massage chairs and more' },
    ],
    faq: [
      {
        question: 'How to integrate into existing chair designs?',
        answer: 'Modules embed in base, backrest or armrest areas. Our team provides structural integration guides and on-site support.',
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Standard modules: 500 sets; system kits: 200 sets. Flexible terms for large accounts.',
      },
      {
        question: 'Do you offer custom development?',
        answer: 'Yes — vibration modes, control protocols and dimensions can be customized.',
      },
      {
        question: 'What is the lead time?',
        answer: 'Standard products: 4–6 weeks; custom projects: 8–12 weeks. Engineering samples in ~2 weeks.',
      },
    ],
  },
  'smart-bed': {
    title: 'Smart Bed Solution',
    painPoints: {
      left: {
        title: 'Limitations of Traditional Sleep Aids',
        items: [
          'Headphones cause discomfort with prolonged wear',
          'Speaker playback disturbs partners',
          'Sleep aid effects are hard to measure and personalize',
        ],
      },
      right: {
        title: 'Our Advantages',
        items: [
          'Physical frequency vibration — silent, no sound required',
          'Zoned modules for shoulders, back, waist and legs',
          'Science-guided frequencies with built-in sleep brainwave libraries',
        ],
      },
    },
    advantages: [
      { icon: '🧠', title: 'Frequency Library', description: 'Alpha and theta frequencies guide the brain into relaxation' },
      { icon: '🎯', title: 'Zoned Modules', description: 'Independent zones for targeted relief and therapy' },
      { icon: '🔇', title: 'Quiet & Efficient', description: 'Low noise, low power for all-night operation' },
      { icon: '🔗', title: 'Smart Interfaces', description: 'Links to sleep monitors for real-time adaptive adjustment' },
      ],
    faq: [
      {
        question: 'How to integrate into existing bed frames?',
        answer: 'Ultra-thin embedded modules fit various frame structures. Full integration docs and support provided.',
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Standard modules: 500 sets; system kits: 200 sets. Negotiable per project.',
      },
      {
        question: 'Do you offer custom development?',
        answer: 'Yes — frequency libraries, module sizes and control protocols can be customized end-to-end.',
      },
      {
        question: 'What is the lead time?',
        answer: 'Standard products: 4–6 weeks; custom: 8–12 weeks. Samples in ~2 weeks.',
      },
    ],
  },
  'smart-healing': {
    title: 'Smart Wellness Solution',
    painPoints: {
      left: {
        title: 'Limitations of Traditional Therapy Devices',
        items: [
          'Mechanical massage only — lacks frequency-level deep haptics',
          'Fixed therapy modes, limited personalization',
          'Homogeneous products lacking tech differentiation',
        ],
      },
      right: {
        title: 'Our Advantages',
        items: [
          'Haptic frequency vibration for muscles and circulation',
          'Multi-mode programs: relax, soothe, activate and more',
          'Embedded modules for various wellness device forms',
        ],
      },
    },
    advantages: [
      { icon: '💆', title: 'Multi-Mode Programs', description: 'Preset therapy frequencies, customizable per device type' },
      { icon: '🎯', title: 'Precise Control', description: 'Targeted frequencies improve circulation and ease fatigue' },
      { icon: '🔧', title: 'Device Flexibility', description: 'Therapy beds, foot spas, wellness pods and more' },
      { icon: '📋', title: 'Hardware + Software', description: 'Control drivers and frequency libraries for fast integration' },
    ],
    faq: [
      {
        question: 'How to integrate into existing therapy devices?',
        answer: 'Modules embed under bases, backrests or contact surfaces. Structural guides provided for all form factors.',
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Standard modules: 500 sets; system kits: 200 sets. Flexible terms available.',
      },
      {
        question: 'Can therapy modes be customized?',
        answer: 'Yes — frequency libraries, programs and control protocols tailored to your users.',
      },
      {
        question: 'What is the lead time?',
        answer: 'Standard: 4–6 weeks; custom: 8–12 weeks. Engineering samples in ~2 weeks.',
      },
    ],
  },
  'smart-massage-chair': {
    title: 'Smart Massage Chair Solution',
    painPoints: {
      left: {
        title: 'Limitations of Traditional Massage Chairs',
        items: [
          'Mechanical massage only — lacks deep LF haptic relaxation',
          'Limited modes, poor fusion with entertainment',
          'Premium products lack tangible tech differentiation',
        ],
      },
      right: {
        title: 'Our Advantages',
        items: [
          'Haptic vibration works with mechanical massage for deeper relief',
          'Relaxation, therapy and AV modes with smart switching',
          'Embedded modules preserve chair aesthetics and space',
        ],
      },
    },
    advantages: [
      { icon: '🪑', title: 'Massage Synergy', description: 'Haptic vibration linked with mechanical massage programs' },
      { icon: '🎛️', title: 'Multi-Mode Programs', description: 'Relax, therapy and AV sync at one tap' },
      { icon: '⚡', title: 'Zoned Transmission', description: 'Four zones: shoulders, back, waist and legs' },
      { icon: '🔌', title: 'Fast Integration', description: 'Standard interfaces and docs for existing product lines' },
    ],
    faq: [
      {
        question: 'How does it work with existing massage programs?',
        answer: 'Control board interfaces with your massage system for timed haptic + mechanical coordination.',
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Standard modules: 500 sets; system kits: 200 sets. Flexible for large accounts.',
      },
      {
        question: 'Do you offer custom development?',
        answer: 'Yes — modes, zone layout and control protocols for premium differentiation.',
      },
      {
        question: 'What is the lead time?',
        answer: 'Standard: 4–6 weeks; custom: 8–12 weeks. Samples in ~2 weeks.',
      },
    ],
  },
}

const contactChannelLabels = {
  zh: {
    headquarters: '宁波总部',
    sales: '销售邮箱',
    support: '技术支持',
    hr: '人力资源',
    phone: '服务热线',
  },
  en: {
    headquarters: 'Ningbo HQ',
    sales: 'Sales Email',
    support: 'Technical Support',
    hr: 'Human Resources',
    phone: 'Service Hotline',
  },
}

export function getMilestones(locale: Locale): Milestone[] {
  return locale === 'en' ? milestonesEn : milestonesZh
}

export function getScenariosContent(locale: Locale) {
  return scenariosContent[locale]
}

export function getSolutionsPageContent(locale: Locale) {
  return solutionsPageContent[locale]
}

export function getAboutContent(locale: Locale) {
  return aboutContent[locale]
}

export function getSolutionDetailLabels(locale: Locale) {
  return solutionDetailLabels[locale]
}

export function getDefaultSpecs(locale: Locale) {
  return defaultSpecsLabels[locale]
}

export function getLocalizedSolution(slug: SolutionSlug, locale: Locale) {
  const zh = solutionDataMap[slug]
  if (locale === 'zh') {
    return {
      title: zh.title,
      painPoints: zh.painPoints,
      advantages: zh.advantages,
      faq: zh.faq,
      relatedProductIds: zh.relatedProducts.map((p) => p.productId),
    }
  }
  const en = solutionDetailEn[slug]
  return {
    title: en.title,
    painPoints: en.painPoints,
    advantages: en.advantages,
    faq: en.faq,
    relatedProductIds: zh.relatedProducts.map((p) => p.productId),
  }
}

export function getContactChannelLabels(locale: Locale) {
  return contactChannelLabels[locale]
}

/** 使用场景「更多应用」区块的图片 key，与页面顺序一致 */
export const scenarioMoreImageKeys = [
  'scenario-car-seat',
  'scenario-vr',
  'scenario-education',
] as const
