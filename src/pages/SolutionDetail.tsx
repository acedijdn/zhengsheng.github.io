import { useParams } from 'react-router-dom'
import PageBanner from '../components/ui/PageBanner'
import Button from '../components/ui/Button'
import SpecTable from '../components/ui/SpecTable'
import FAQ from '../components/ui/FAQ'
import AdvantageCard from '../components/cards/AdvantageCard'
import ProductCard from '../components/cards/ProductCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import { products } from '../data/productData'
import { solutionDataMap, defaultSpecs } from '../data/solutionData'

export default function SolutionDetail() {
  const { type } = useParams<{ type: string }>()
  const data =
    solutionDataMap[type as keyof typeof solutionDataMap] ?? solutionDataMap['smart-sofa']

  return (
    <>
      <PageBanner title={data.title} subtitle="完整技术方案与集成支持" />

      <section className="py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-navy md:text-xl">
                {data.painPoints.left.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {data.painPoints.left.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-navy/70 md:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-navy md:text-xl">
                {data.painPoints.right.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {data.painPoints.right.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-navy/70 md:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
              核心技术优势
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.advantages.map((adv, index) => (
              <ScrollReveal key={adv.title} delay={index * 0.1}>
                <AdvantageCard
                  index={index}
                  title={adv.title}
                  description={adv.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <ScrollReveal className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-semibold text-navy md:text-3xl">
            技术参数
          </h2>
          <SpecTable specs={defaultSpecs} />
        </ScrollReveal>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
              相关产品
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.relatedProducts.map((item, index) => {
              const linked = products.find((p) => p.id === item.productId)
              return (
                <ScrollReveal key={item.name} delay={index * 0.1}>
                  <ProductCard
                    name={item.name}
                    category={item.category}
                    description={item.description}
                    imageUrl={linked?.imageUrl}
                    to={item.productId ? `/products/${item.productId}` : '/products'}
                  />
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <ScrollReveal className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-semibold text-navy md:text-3xl">
            常见问题
          </h2>
          <FAQ items={data.faq} />
        </ScrollReveal>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12 md:py-16">
        <ScrollReveal className="container mx-auto flex flex-wrap justify-center gap-4 px-4 md:px-6 lg:px-8">
          <Button variant="outline" href="#">
            下载技术规格书
          </Button>
          <Button to="/about#contact">申请工程样机</Button>
        </ScrollReveal>
      </section>
    </>
  )
}
