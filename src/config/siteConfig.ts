/** 全站统一配置 — 公司信息、联系方式、首页数据等在此修改 */

export const siteConfig = {
  brand: {
    name: 'ZENSHENG',
    companyName: '宁波正盛音响科技有限公司',
    tagline: '正盛科技——音波体感系统全球供应商',
    slogan: '体感技术心脏，为全球智能家居赋能',
    foundedYear: 2009,
  },

  contact: {
    headquarters: '宁波总部',
    address: {
      zh: '浙江省宁波市海曙区集士港永嘉路67号',
      en: 'Yongjia Road, Jishigang District, Ningbo, Zhejiang, China',
    },
    /** 各渠道联系方式，页面按 label 展示 */
    channels: [
      { label: '销售邮箱', type: 'email' as const, value: '1978921003@qq.com' },
      { label: '技术支持', type: 'email' as const, value: '1978921003@qq.com' },
      { label: '人力资源', type: 'email' as const, value: '522824924@qq.com' },
      { label: '服务热线', type: 'phone' as const, value: '13777028885' },
    ],
  },

  homeStats: [
    { value: 17, suffix: '', unit: '年', label: '成立时间' },
    { value: 3000, suffix: '+', unit: '㎡', label: '研产基地' },
    { value: 100, suffix: '+', unit: '人', label: '专业人才' },
    { value: 20, suffix: '+', unit: '', label: '技术专利' },
  ],

  footer: {
    copyright: '© 2024 Zensheng Technology. All rights reserved.',
    icp: ' ',
  },
}

export type ContactChannel = (typeof siteConfig.contact.channels)[number]
