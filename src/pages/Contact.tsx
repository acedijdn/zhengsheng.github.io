import { FormEvent, useState } from 'react'
import PageBanner from '../components/ui/PageBanner'
import SubmitButton, { type SubmitState } from '../components/ui/SubmitButton'
import SiteImage from '../components/ui/SiteImage'
import ScrollReveal from '../components/motion/ScrollReveal'
import ContactDetails from '../components/ui/ContactDetails'

const demandTypes = ['方案咨询', '产品询价', '样品申请', '技术合作', '其他']

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitState !== 'idle') return

    setSubmitState('loading')
    setTimeout(() => setSubmitState('success'), 1800)
  }

  return (
    <>
      <PageBanner title="联系我们" subtitle="与我们的技术专家沟通，获取专属解决方案" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <h2 className="text-xl font-semibold text-navy md:text-2xl">在线留言</h2>
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/70">
                    姓名
                  </label>
                  <input
                    type="text"
                    placeholder="请输入您的姓名"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/70">
                    公司名称
                  </label>
                  <input
                    type="text"
                    placeholder="请输入公司名称"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy/70">
                      邮箱
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy/70">
                      电话
                    </label>
                    <input
                      type="tel"
                      placeholder="请输入联系电话"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/70">
                    需求类型
                  </label>
                  <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-navy/70 outline-none focus:border-accent">
                    {demandTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/70">
                    留言内容
                  </label>
                  <textarea
                    rows={5}
                    placeholder="请描述您的需求..."
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
                <SubmitButton state={submitState} />
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="text-xl font-semibold text-navy md:text-2xl">联系信息</h2>
              <div className="mt-8 space-y-6">
                <ContactDetails />
                <SiteImage imageKey="map-location" aspectRatio="aspect-[16/9]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
