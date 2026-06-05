import { useParams, Link } from 'react-router-dom'
import ProductImage from '../components/ui/ProductImage'
import Button from '../components/ui/Button'
import SpecTable from '../components/ui/SpecTable'
import AdvantageCard from '../components/cards/AdvantageCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import { products, defaultProductSpecs } from '../data/productData'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id) ?? products[0]

  return (
    <>
      <section className="py-12 md:py-16">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-navy/50">
            <Link to="/products" className="hover:text-accent">
              产品中心
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductImage
              imageUrl={product.imageUrl}
              category={product.category}
              alt={product.name}
              variant="detail"
            />
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {product.category}
              </span>
              <h1 className="mt-4 text-2xl font-bold text-navy md:text-3xl lg:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-navy/50">型号：{product.model}</p>
              <p className="mt-6 text-base leading-relaxed text-navy/70">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#">下载产品资料</Button>
                <Button to="/about#contact" variant="outline">
                  咨询报价
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <ScrollReveal className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-semibold text-navy">
            核心参数
          </h2>
          <SpecTable specs={product.specs.length > 0 ? product.specs : defaultProductSpecs} />
        </ScrollReveal>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-2xl font-semibold text-navy">
              产品特点
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <AdvantageCard
                  index={index}
                  title={feature.title}
                  description={feature.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12 md:py-16">
        <ScrollReveal className="container mx-auto px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy">应用场景</h2>
          <p className="mt-4 text-navy/60">
            该产品可应用于智能沙发椅、智能睡床等多种场景
          </p>
          <div className="mt-6">
            <Button to="/scenarios" variant="outline">
              查看使用场景
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
