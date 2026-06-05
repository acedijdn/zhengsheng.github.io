export const defaultSpecs = [
  { label: '模组尺寸', value: 'XX mm' },
  { label: '输入电压', value: 'DC XX V' },
  { label: '额定功率', value: 'XX W' },
  { label: '频率响应', value: 'XX-XX Hz' },
  { label: '通讯接口', value: 'UART/CAN' },
  { label: '工作温度', value: '-XX~XX℃' },
]

export const smartBedData = {
  title: '智能睡床方案',
  painPoints: {
    left: {
      title: '传统助眠方式的局限',
      items: [
        '耳机佩戴不适，长时间使用造成耳部压迫',
        '声音外放干扰伴侣，影响双方睡眠质量',
        '助眠效果不可量化，难以个性化调节',
      ],
    },
    right: {
      title: '我们的方案优势',
      items: [
        '物理频率震动，不依赖声音，静音不扰人',
        '分区舒缓模组，肩背腰腿独立控制',
        '科学频率引导，内置多种助眠脑波频率',
      ],
    },
  },
  advantages: [
    { icon: '🧠', title: '自主频率库', description: '内置α波、θ波等助眠频率，科学引导大脑进入放松状态' },
    { icon: '🎯', title: '分区震动模组', description: '头肩腰腿分区控制，实现定向舒缓与精准理疗' },
    { icon: '🔇', title: '静音与能效', description: '运行噪音低于XX分贝，低功耗设计支持整夜运行' },
    { icon: '🔗', title: '智能联动接口', description: '对接睡眠监测设备，根据实时数据自适应调节频率' },
  ],
  relatedProducts: [
    { name: 'ZS0808 低频振动器', category: '低频振动器', description: '额定功率 8W，兼顾能效与体感强度', productId: 'zs0808' },
    { name: '扬声器', category: '扬声器', description: '高清、无延迟音乐播放体验', productId: 'speaker' },
    { name: 'ZSTD-006 功率放大器', category: '功率放大器', description: '6 路振动输出，多分区驱动', productId: 'zstd-006' },
  ],
  faq: [
    {
      question: '如何集成到现有床架设计中？',
      answer: '我们的体感模组采用超薄嵌入式设计，可灵活适配各类床架结构。技术团队提供完整的集成指导文档与现场支持，确保无缝对接。',
    },
    {
      question: '最小起订量是多少？',
      answer: '标准模组起订量为500套，系统套件起订量为200套。具体数量可根据客户项目需求协商调整。',
    },
    {
      question: '是否提供定制开发？',
      answer: '是的，我们提供从频率库定制、模组尺寸调整到控制协议对接的全流程定制开发服务。',
    },
    {
      question: '交货周期多长？',
      answer: '标准产品交货周期为4-6周，定制开发项目根据复杂度一般为8-12周。样品可在2周内提供。',
    },
  ],
}

export const smartSofaData = {
  title: '智能沙发椅方案',
  painPoints: {
    left: {
      title: '传统座椅体验的局限',
      items: [
        '观影游戏仅有视觉听觉，缺乏身体层面的沉浸感',
        '外置低音炮占地大，震动效果局限于局部',
        '不同内容类型无法自动匹配最佳振动体验',
      ],
    },
    right: {
      title: '我们的方案优势',
      items: [
        '音频频谱实时转化，全身同步4D沉浸体验',
        '嵌入式超薄模组，不占空间不影响外观设计',
        '智能强度自适应，影音游戏音乐自动切换模式',
      ],
    },
  },
  advantages: [
    { icon: '🎬', title: '实时频谱转化', description: '将音频信号实时转化为精准震动，影音同步零延迟' },
    { icon: '⚡', title: '自适应强度', description: '根据音源动态调节振动强度，细腻还原低频轰鸣与高频细节' },
    { icon: '📦', title: '嵌入式模组', description: '超薄设计嵌入椅体结构，不影响外观与舒适度' },
    { icon: '🔧', title: '灵活集成', description: '支持功能沙发、电竞椅、按摩椅等多种椅型快速对接' },
  ],
  relatedProducts: [
    { name: 'ZS0808 低频振动器', category: '低频振动器', description: '核心驱动单元，精准传导', productId: 'zs0808' },
    { name: '扬声器', category: '扬声器', description: '高清、无延迟音乐播放', productId: 'speaker' },
    { name: 'ZS07-1914TPUB-1 扩振板', category: '扩振配件', description: '扩大振动覆盖，完整方案', productId: 'zs07-1914tpub-1' },
  ],
  faq: [
    {
      question: '如何集成到现有沙发椅设计中？',
      answer: '体感模组可嵌入椅体底座、靠背或扶手区域，技术团队提供结构集成方案与安装指导，最小化对原有设计的影响。',
    },
    {
      question: '最小起订量是多少？',
      answer: '标准模组起订量为500套，系统套件起订量为200套。大客户可根据年度采购量协商更灵活的合作模式。',
    },
    {
      question: '是否提供定制开发？',
      answer: '支持震动模式定制、控制协议对接、外观尺寸调整等定制开发服务，满足差异化产品需求。',
    },
    {
      question: '交货周期多长？',
      answer: '标准产品4-6周交货，定制项目8-12周。工程样机可在2周内提供用于测试验证。',
    },
  ],
}

export const smartHealingData = {
  title: '智能疗愈方案',
  painPoints: {
    left: {
      title: '传统理疗设备的局限',
      items: [
        '单一机械按摩，缺乏频率层面的深度体感',
        '理疗模式固定，难以满足个性化健康需求',
        '产品同质化严重，缺少差异化科技卖点',
      ],
    },
    right: {
      title: '我们的方案优势',
      items: [
        '音波频率震动，精准作用于肌肉与循环系统',
        '多模式理疗程序，可定制放松、舒缓、激活等方案',
        '嵌入式模组设计，适配多种健康养生设备形态',
      ],
    },
  },
  advantages: [
    { icon: '💆', title: '多模式理疗程序', description: '内置多种预设理疗频率，支持按设备类型定制开发' },
    { icon: '🎯', title: '精准频率控制', description: '特定频率震动促进血液循环、缓解肌肉疲劳' },
    { icon: '🔧', title: '灵活设备适配', description: '适用于理疗床、足浴器、养生舱等多种健康设备' },
    { icon: '📋', title: '软硬件一体', description: '提供控制驱动与频率库，快速集成至现有产品线' },
  ],
  relatedProducts: [
    { name: 'ZS0608 低频振动器', category: '低频振动器', description: '定向理疗，精准传导', productId: 'zs0608' },
    { name: 'ZSTD-004 功率放大器', category: '功率放大器', description: '多路输出，智能驱动', productId: 'zstd-004' },
    { name: 'ZS07-1914TPUB-1 扩振板', category: '扩振配件', description: '扩大覆盖，完整方案', productId: 'zs07-1914tpub-1' },
  ],
  faq: [
    {
      question: '如何集成到现有理疗设备中？',
      answer: '体感模组可嵌入设备底座、靠背或接触面下方，技术团队提供结构集成方案与安装指导，适配各类健康养生产品形态。',
    },
    {
      question: '最小起订量是多少？',
      answer: '标准模组起订量为500套，系统套件起订量为200套。可根据项目规模协商更灵活的合作模式。',
    },
    {
      question: '是否支持理疗模式定制？',
      answer: '支持频率库定制、理疗程序开发与控制协议对接，可根据目标用户群体打造差异化理疗体验。',
    },
    {
      question: '交货周期多长？',
      answer: '标准产品4-6周交货，定制项目8-12周。工程样机可在2周内提供用于测试验证。',
    },
  ],
}

export const smartMassageChairData = {
  title: '智能按摩椅方案',
  painPoints: {
    left: {
      title: '传统按摩椅的局限',
      items: [
        '机械按摩为主，缺乏低频体感的深度放松维度',
        '模式单一，难以与影音娱乐场景融合',
        '高端产品缺少可感知的科技差异化体验',
      ],
    },
    right: {
      title: '我们的方案优势',
      items: [
        '音波震动与机械按摩协同，全身深度放松',
        '影音、理疗、日常放松等多模式智能切换',
        '嵌入式模组不占空间，不影响椅体外观设计',
      ],
    },
  },
  advantages: [
    { icon: '🪑', title: '按摩协同', description: '体感震动与机械按摩程序联动，增强理疗深度' },
    { icon: '🎛️', title: '多模式程序', description: '放松、理疗、影音同步等多种预设模式一键切换' },
    { icon: '⚡', title: '分区精准传导', description: '肩、背、腰、腿四区独立控制，定向舒缓深层肌肉' },
    { icon: '🔌', title: '快速集成', description: '标准接口与完整文档，对接现有按摩椅产品线' },
  ],
  relatedProducts: [
    { name: 'ZS1808 低频振动器', category: '低频振动器', description: '大功率驱动，深度震感', productId: 'zs1808' },
    { name: '扬声器', category: '扬声器', description: '影音同步，即插即用', productId: 'speaker' },
    { name: 'ZSTD-007 功率放大器', category: '功率放大器', description: '旗舰功率，多通道输出', productId: 'zstd-007' },
  ],
  faq: [
    {
      question: '如何与现有按摩程序协同？',
      answer: '控制驱动板支持与客户现有按摩控制系统的协议对接，可实现机械按摩与音波震动的时序联动与模式匹配。',
    },
    {
      question: '最小起订量是多少？',
      answer: '标准模组起订量为500套，系统套件起订量为200套。大客户可根据年度采购量协商更灵活的合作模式。',
    },
    {
      question: '是否提供定制开发？',
      answer: '支持震动模式定制、分区布局调整、控制协议对接等定制开发，满足高端按摩椅差异化需求。',
    },
    {
      question: '交货周期多长？',
      answer: '标准产品4-6周交货，定制项目8-12周。工程样机可在2周内提供用于测试验证。',
    },
  ],
}

export const solutionDataMap = {
  'smart-sofa': smartSofaData,
  'smart-bed': smartBedData,
  'smart-healing': smartHealingData,
  'smart-massage-chair': smartMassageChairData,
} as const
