import PageBanner from '../components/ui/PageBanner'
import FilterTabs from '../components/ui/FilterTabs'
import PatentCard from '../components/cards/PatentCard'
import SiteImage from '../components/ui/SiteImage'
import AdvantageCard from '../components/cards/AdvantageCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import { CARD_HOVER } from '../lib/cardStyles'

const patentFilters = ['全部', '发明专利', '实用新型', '软件著作权']

const patents = [
  { type: '发明专利', name: '一种低频共振传导结构', number: 'ZL 2020XXXXX' },
  { type: '发明专利', name: '沙发体感系统集成方法', number: 'ZL 2019XXXXX' },
  { type: '发明专利', name: '智能助眠频率控制装置', number: 'ZL 2021XXXXX' },
  { type: '实用新型', name: '分区震动模组结构', number: 'ZL 2020XXXXX' },
  { type: '实用新型', name: '超薄振动器封装结构', number: 'ZL 2018XXXXX' },
  { type: '实用新型', name: '多模组级联连接结构', number: 'ZL 2022XXXXX' },
  { type: '软件著作权', name: '体感频谱分析控制系统', number: '软著登字第XXXXX号' },
  { type: '软件著作权', name: '智能助眠频率引导软件', number: '软著登字第XXXXX号' },
  { type: '发明专利', name: '自适应振动强度调节方法', number: 'ZL 2022XXXXX' },
  { type: '实用新型', name: '低噪音振动器减震结构', number: 'ZL 2021XXXXX' },
  { type: '软件著作权', name: '多模式体感控制平台', number: '软著登字第XXXXX号' },
  { type: '发明专利', name: '音频频谱实时转化震动方法', number: 'ZL 2023XXXXX' },
]

const deepDivePatents = [
  {
    title: '低频共振传导结构',
    problem: '传统振动器能量损耗大，震动传导效率低，难以在薄型产品结构中实现强劲震感。',
    effect: '通过独创的多层共振传导结构，将振动能量损耗降低XX%，在XXmm超薄尺寸内实现媲美传统大尺寸振动器的震感输出。',
    imageLabel: '低频共振传导结构图解',
  },
  {
    title: '智能助眠频率控制',
    problem: '市面助眠产品依赖声音输出，干扰伴侣且效果因人而异，缺乏科学的频率引导机制。',
    effect: '内置α波、θ波等多种脑波频率库，通过物理微震动直接引导大脑进入放松状态，静音运行且效果可量化追踪。',
    imageLabel: '助眠频率控制图解',
  },
  {
    title: '自适应振动强度调节',
    problem: '不同音源内容（电影、游戏、音乐）对振动需求差异大，固定强度模式无法提供最佳体验。',
    effect: '实时分析音频频谱特征，动态调节各频段振动强度，为影音、游戏、音乐等场景自动匹配最优震动模式。',
    imageLabel: '自适应强度调节图解',
  },
]

const softwareCopyrights = [
  '体感频谱分析控制系统 V2.0',
  '智能助眠频率引导软件 V1.5',
  '多模式体感控制平台 V3.0',
  '沙发椅4D沉浸体验控制软件',
  '分区震动模组调试工具',
  '产品生命周期管理平台',
]

const rdSteps = [
  { step: '需求分析', desc: '深入了解客户产品形态与体验目标' },
  { step: '结构设计', desc: '定制化模组布局与系统集成方案' },
  { step: '软硬件开发', desc: '并行开发硬件模组与控制软件' },
  { step: '原型测试', desc: '多轮原型验证与参数优化调试' },
  { step: '量产交付', desc: '规模化生产与质量全程追溯' },
]

const qcItems = [
  { icon: '📋', title: '来料检验 (IQC)', description: '所有原材料入库前严格检验，确保元器件品质' },
  { icon: '🔍', title: '过程检验 (IPQC)', description: '生产过程中关键节点抽检，实时监控工艺参数' },
  { icon: '✅', title: '出货检验 (OQC)', description: '成品全项功能测试，100%出厂检验合格' },
]

export default function Innovation() {
  return (
    <>
      <PageBanner
        title="技术创新中心"
        subtitle="以系统化专利布局，构筑体感技术的核心壁垒"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-8 text-center text-2xl font-semibold text-navy">
              专利与知识产权
            </h2>
            <FilterTabs tabs={patentFilters} activeTab="全部" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {patents.map((patent, index) => (
              <ScrollReveal key={patent.number + patent.name} delay={(index % 6) * 0.06}>
                <PatentCard
                  type={patent.type}
                  name={patent.name}
                  number={patent.number}
                  tilt
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
              重点专利深度解读
            </h2>
          </ScrollReveal>
          <div className="space-y-16">
            {deepDivePatents.map((patent, index) => (
              <ScrollReveal key={patent.title}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <SiteImage
                    imageKey="patent-diagram"
                    aspectRatio="aspect-[4/3]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-navy md:text-2xl">
                      {patent.title}
                    </h3>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-navy/80">解决的问题</h4>
                      <p className="mt-2 text-sm leading-relaxed text-navy/60 md:text-base">
                        {patent.problem}
                      </p>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-navy/80">带来的效果</h4>
                      <p className="mt-2 text-sm leading-relaxed text-navy/60 md:text-base">
                        {patent.effect}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
              软件著作权
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {softwareCopyrights.map((name, index) => (
              <ScrollReveal key={name} delay={(index % 6) * 0.06}>
                <div
                  className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
                >
                  <SiteImage
                    imageKey="certificate"
                    aspectRatio="aspect-[3/4]"
                    className="rounded-none"
                  />
                  <p className="p-3 text-center text-xs text-navy/70">{name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
            研发流程
          </h2>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
            {rdSteps.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="w-40 rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm md:w-44">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-navy">{item.step}</h3>
                  <p className="mt-1 text-xs text-navy/50">{item.desc}</p>
                </div>
                {index < rdSteps.length - 1 && (
                  <div className="hidden px-2 text-accent md:block">→</div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
              品控体系
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {qcItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <AdvantageCard
                  index={index}
                  title={item.title}
                  description={item.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
