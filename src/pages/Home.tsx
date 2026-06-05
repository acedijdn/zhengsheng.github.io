import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import SiteImage from '../components/ui/SiteImage'
import SectionTitle from '../components/ui/SectionTitle'
import CTABanner from '../components/ui/CTABanner'
import SolutionCard from '../components/cards/SolutionCard'
import ScenarioOverlayCard from '../components/cards/ScenarioOverlayCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import HeroFadeIn from '../components/motion/HeroFadeIn'
import HeroWaveBackground from '../components/motion/HeroWaveBackground'
import Timeline from '../components/motion/Timeline'
import { getEffectiveImageUrl } from '../lib/imageResolver'
import CounterStat from '../components/motion/CounterStat'
import { milestones } from '../data/milestones'
import { siteConfig } from '../config/siteConfig'
import { CARD_HOVER } from '../lib/cardStyles'

const products = [
  { name: '低频振动器', desc: '核心驱动单元，精准传导', imageKey: 'product-vibrator' as const },
  { name: '功率放大器', desc: '高保真功放，精准驱动', imageKey: 'product-driver' as const },
  { name: '扬声器', desc: '体感发声单元，宽频响应', imageKey: 'product-module' as const },
  { name: '扩振配件', desc: '扩振传导，扩大覆盖', imageKey: 'product-kit' as const },
  { name: '配件', desc: '线缆与转接，灵活对接', imageKey: 'product-accessory' as const },
]

const solutionCards = [
  {
    title: '智能沙发椅方案',
    description: '为功能沙发、按摩椅、电竞椅提供 4D 沉浸体验',
    to: '/solutions/smart-sofa',
  },
  {
    title: '智能睡床方案',
    description: '科学频率引导，物理助眠新维度',
    to: '/solutions/smart-bed',
  },
  {
    title: '智能疗愈方案',
    description: '精准频率震动，赋能理疗与健康养生设备',
    to: '/solutions/smart-healing',
  },
  {
    title: '智能按摩椅方案',
    description: '多模式理疗程序，深度放松与疲劳缓解',
    to: '/solutions/smart-massage-chair',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero — Banner 铺满横屏，文案居中叠于同一层 */}
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-navy md:min-h-screen">
        {!getEffectiveImageUrl('hero-scene') && <HeroWaveBackground />}
        <SiteImage
          imageKey="hero-scene"
          theme="dark"
          fill
          objectFit="cover"
          className="z-0"
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-navy/60 via-navy/35 to-navy/65"
          aria-hidden="true"
        />
        <div className="relative z-20 flex min-h-[90vh] items-center justify-center px-4 py-20 text-center md:min-h-screen md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <HeroFadeIn>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm md:text-4xl lg:text-5xl">
                体感技术心脏，为全球智能家居赋能
              </h1>
            </HeroFadeIn>
            <HeroFadeIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-white/85 drop-shadow-sm md:text-lg">
                17年专注低频振动器与体感系统，从宁波智慧工厂到欧美千家万户
              </p>
            </HeroFadeIn>
            <HeroFadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button to="/solutions" size="lg">
                  探索方案
                </Button>
                <Button
                  to="/products"
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/20 hover:text-white"
                >
                  查看产品
                </Button>
              </div>
            </HeroFadeIn>
          </div>
        </div>
      </section>

      {/* Core Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {siteConfig.homeStats.map((stat, index) => (
              <CounterStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                unit={stat.unit}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="发展里程碑" subtitle="十七年专注音波体感，从宁波到全球" className="mb-16" />
          </ScrollReveal>
          <Timeline items={milestones} />
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="解决方案"
              subtitle="为不同载体提供定制化体感技术方案"
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            {solutionCards.map((solution, index) => (
              <ScrollReveal key={solution.to} delay={(index % 2) * 0.1 + Math.floor(index / 2) * 0.05}>
                <SolutionCard
                  title={solution.title}
                  description={solution.description}
                  to={solution.to}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Quick View */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="产品速览"
              subtitle="低频振动器、功放、扬声器与扩振配件，一站式供应"
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.1}>
                <div
                  className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
                >
                  <SiteImage
                    imageKey={product.imageKey}
                    aspectRatio="aspect-square"
                    objectFit="contain"
                    className="min-h-[200px] rounded-none bg-white md:min-h-[220px]"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-navy">{product.name}</h3>
                    <p className="mt-2 text-sm text-navy/60">{product.desc}</p>
                    <Link
                      to="/products"
                      className="mt-3 inline-block text-sm font-medium text-accent"
                    >
                      了解详情 →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Entry */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="使用场景"
              subtitle="看音波体感技术如何在真实产品中创造价值"
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <ScenarioOverlayCard
                imageKey="scenario-sofa"
                title="智能沙发椅 · 沉浸式体验"
                to="/scenarios"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ScenarioOverlayCard
                imageKey="scenario-bed"
                title="智能睡床 · 科学助眠"
                to="/scenarios"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal className="mt-10 text-center">
            <Button to="/scenarios" variant="outline" size="lg">
              查看更多
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        text="准备好为您的产品注入沉浸式体验了吗？立即与我们的技术专家沟通。"
        buttonText="获取专属方案"
      />
    </>
  )
}
