import PageBanner from '../components/ui/PageBanner'
import Button from '../components/ui/Button'
import SiteImage from '../components/ui/SiteImage'
import { getSolutionImageKeyFromPath } from '../config/images'
import AdvantageCard from '../components/cards/AdvantageCard'
import ScrollReveal from '../components/motion/ScrollReveal'

const solutions = [
  {
    title: '智能沙发椅方案',
    summary: '为功能沙发、按摩椅、电竞椅提供 4D 沉浸体验，影音同步零延迟',
    imageLabel: '智能沙发椅应用场景',
    to: '/solutions/smart-sofa',
    advantages: [
      { icon: '🎬', title: '影音同步', description: '音频信号实时转化为全身震动，零延迟沉浸体验' },
      { icon: '⚡', title: '自适应强度', description: '振动强度随音源动态调节，细腻还原每一帧' },
      { icon: '📦', title: '嵌入式模组', description: '超薄设计，不占空间，即插即用' },
      { icon: '🔧', title: '灵活集成', description: '支持多种椅型结构，快速对接现有产品线' },
    ],
  },
  {
    title: '智能睡床方案',
    summary: '科学频率引导，物理助眠新维度，静音不扰伴侣',
    imageLabel: '智能睡床应用场景',
    to: '/solutions/smart-bed',
    advantages: [
      { icon: '🧠', title: '自主频率库', description: '内置α波、θ波等助眠频率，科学引导入睡' },
      { icon: '🎯', title: '分区震动', description: '头肩腰腿分区控制，定向舒缓' },
      { icon: '🔇', title: '静音能效', description: '低于XX分贝，低功耗整夜运行' },
      { icon: '🔗', title: '智能联动', description: '对接睡眠监测设备，自适应调节' },
    ],
  },
  {
    title: '智能疗愈方案',
    summary: '精准频率体感理疗，为健康设备注入差异化科技卖点',
    imageLabel: '智能疗愈应用场景',
    to: '/solutions/smart-healing',
    advantages: [
      { icon: '💆', title: '多模式理疗', description: '可定制放松、舒缓、激活等多种理疗程序' },
      { icon: '🎯', title: '精准控频', description: '特定频率震动促进血液循环、缓解肌肉疲劳' },
      { icon: '🔧', title: '设备适配', description: '适配理疗床、足浴器等多种健康设备形态' },
      { icon: '📋', title: '方案定制', description: '支持频率库与模式定制，满足差异化需求' },
    ],
  },
  {
    title: '智能按摩椅方案',
    summary: '音波震动与按摩程序深度融合，打造高端智能按摩体验',
    imageLabel: '智能按摩椅应用场景',
    to: '/solutions/smart-massage-chair',
    advantages: [
      { icon: '🪑', title: '深度集成', description: '体感模组嵌入椅体，与机械按摩协同运作' },
      { icon: '🎛️', title: '多程序切换', description: '放松、理疗、影音等多模式一键切换' },
      { icon: '⚡', title: '精准传导', description: '肩背腰腿分区震动，定向舒缓深层肌肉' },
      { icon: '🔌', title: '即插即用', description: '标准接口设计，快速对接现有按摩椅产品线' },
    ],
  },
]

export default function Solutions() {
  return (
    <>
      <PageBanner
        title="体感技术解决方案"
        subtitle="覆盖智能沙发椅、智能睡床、智能疗愈与智能按摩椅等完整技术方案"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-20 px-4 md:px-6 md:space-y-32 lg:px-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <SiteImage
                  imageKey={getSolutionImageKeyFromPath(solution.to)}
                  aspectRatio="aspect-[4/3]"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-navy md:text-3xl">
                    {solution.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy/60">
                    {solution.summary}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {solution.advantages.map((adv, advIndex) => (
                      <AdvantageCard
                        key={adv.title}
                        index={advIndex}
                        title={adv.title}
                        description={adv.description}
                      />
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button to={solution.to}>查看详情</Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
