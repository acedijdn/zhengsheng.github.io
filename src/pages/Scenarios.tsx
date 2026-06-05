import PageBanner from '../components/ui/PageBanner'
import Button from '../components/ui/Button'
import SiteImage from '../components/ui/SiteImage'
import ScrollReveal from '../components/motion/ScrollReveal'
import { CARD_HOVER } from '../lib/cardStyles'
import type { ImageKey } from '../config/images'

interface ScenarioBlockProps {
  title: string
  description: string
  highlights: string[]
  buttonText: string
  buttonTo: string
  imageKey: ImageKey
  imagePosition: 'left' | 'right'
}

function ScenarioBlock({
  title,
  description,
  highlights,
  buttonText,
  buttonTo,
  imageKey,
  imagePosition,
}: ScenarioBlockProps) {
  const image = <SiteImage imageKey={imageKey} aspectRatio="aspect-[4/3]" />
  const content = (
    <div>
      <h2 className="text-2xl font-semibold text-navy md:text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-navy/60 md:text-lg">
        {description}
      </p>
      <ul className="mt-6 space-y-3">
        {highlights.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-navy/70 md:text-base">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button to={buttonTo}>{buttonText}</Button>
      </div>
    </div>
  )

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {imagePosition === 'left' ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          <div className="lg:order-2">{image}</div>
          <div className="lg:order-1">{content}</div>
        </>
      )}
    </div>
  )
}

const moreScenarios: { title: string; description: string; imageKey: ImageKey }[] = [
  { title: '汽车腰靠', description: '车载影音震动体验，缓解长途驾驶疲劳', imageKey: 'scenario-car-seat' },
  { title: 'VR 设备', description: '虚拟现实触觉反馈，增强沉浸交互', imageKey: 'scenario-vr' },
  { title: '游戏电竞', description: '音画震感同步，提升竞技沉浸与临场感', imageKey: 'scenario-education' },
]

export default function Scenarios() {
  return (
    <>
      <PageBanner
        title="使用场景"
        subtitle="看音波体感技术如何在真实产品中创造价值"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-20 px-4 md:px-6 md:space-y-32 lg:px-8">
          <ScrollReveal>
            <ScenarioBlock
              title="智能沙发椅 · 4D 沉浸体验"
              description="当用户坐在沙发上观影、游戏或聆听音乐时，体感系统将音频信号实时转化为全身震动。低频轰鸣、高频细腻，每一帧画面都触手可及。已应用于家庭影院椅、电竞椅、音乐放松椅等产品。"
              highlights={['影音同步零延迟', '振动强度自适应', '嵌入式不占空间']}
              buttonText="查看沙发椅方案"
              buttonTo="/solutions/smart-sofa"
              imageKey="scenario-sofa"
              imagePosition="left"
            />
          </ScrollReveal>

          <ScrollReveal>
            <ScenarioBlock
              title="智能睡床 · 科学频率助眠"
              description="不依赖声音，通过特定频率的微震动直接作用于人体，引导大脑进入放松状态。分区模组可对肩、背、腰、腿输出不同频率，实现定向舒缓。结合睡眠监测设备，还能实时自适应调整，真正实现智能助眠。"
              highlights={['脑波频率科学引导', '分区定向舒缓', '静音不扰伴侣']}
              buttonText="查看睡床方案"
              buttonTo="/solutions/smart-bed"
              imageKey="scenario-bed"
              imagePosition="right"
            />
          </ScrollReveal>

          <ScrollReveal>
            <ScenarioBlock
              title="健康养生 · 精准体感理疗"
              description="将音波震动技术应用于理疗床、足浴器等健康设备，通过精准频率震动促进血液循环、缓解肌肉疲劳。可定制不同理疗模式，为产品增加差异化科技卖点。"
              highlights={['多模式理疗程序', '精准频率控制', '适配多种设备形态']}
              buttonText="查看疗愈方案"
              buttonTo="/solutions/smart-healing"
              imageKey="scenario-wellness"
              imagePosition="left"
            />
          </ScrollReveal>

          <ScrollReveal>
            <ScenarioBlock
              title="音波体感按摩椅 · 震感按摩协同"
              description="将低频音波震动代替传统机械按摩，肩、背、腰、腿四区独立输出精准震感，支持放松、理疗、影音同步等多模式切换，为高端按摩椅注入可感知的科技差异化体验。"
              highlights={['音波代替机械按摩', '四区独立精准传导', '多模式一键切换']}
              buttonText="查看按摩椅方案"
              buttonTo="/solutions/smart-massage-chair"
              imageKey="scenario-massage-chair"
              imagePosition="right"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
              更多应用探索
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {moreScenarios.map((scenario, index) => (
              <ScrollReveal key={scenario.title} delay={index * 0.1}>
                <div
                  className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
                >
                  <SiteImage imageKey={scenario.imageKey} className="rounded-none" />
                  <div className="p-5">
                    <h3 className="font-semibold text-navy">{scenario.title}</h3>
                    <p className="mt-2 text-sm text-navy/60">{scenario.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 text-center">
            <p className="text-navy/60">有更多应用想法？我们期待与您共同探索。</p>
            <div className="mt-6">
              <Button to="/about#contact">联系技术团队</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
