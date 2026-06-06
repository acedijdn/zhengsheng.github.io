import { useParams, Link } from 'react-router-dom'
import ProductImage from '../components/ui/ProductImage'
import Button from '../components/ui/Button'
import SpecTable from '../components/ui/SpecTable'
import ScrollReveal from '../components/motion/ScrollReveal'
import { siteConfig } from '../config/siteConfig'
import { products, defaultProductSpecs } from '../data/productData'
import { useLanguage } from '../i18n/LanguageProvider'
import { localizeProduct, localizeSpec } from '../i18n/localize'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const { locale, t } = useLanguage()
  const raw = products.find((p) => p.id === id) ?? products[0]
  const product = localizeProduct(raw, locale)
  const specs =
    product.specs.length > 0
      ? product.specs
      : defaultProductSpecs.map((s) => localizeSpec(s, locale))

  return (
    <>
      <section className="py-12 md:py-16">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-navy/50">
            <Link to="/products" className="hover:text-accent">
              {t('products.breadcrumb')}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductImage
              imageUrl={product.imageUrl}
              categoryKey={raw.categoryKey}
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
              <p className="mt-2 text-sm text-navy/50">
                {t('common.model')}：{product.model}
              </p>
              <p className="mt-6 text-base leading-relaxed text-navy/70">
                {product.description}
              </p>

              <div className="mt-8 space-y-4">
                {product.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-4"
                  >
                    <h3 className="text-sm font-semibold text-navy md:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/65">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={siteConfig.purchase.international} external>
                  {t('common.buyInternational')}
                </Button>
                <Button href={siteConfig.purchase.domestic} external variant="outline">
                  {t('common.buyDomestic')}
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <ScrollReveal className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-semibold text-navy">
            {t('products.coreSpecs')}
          </h2>
          <SpecTable specs={specs} />
        </ScrollReveal>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12 md:py-16">
        <ScrollReveal className="container mx-auto px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy">{t('products.scenarios')}</h2>
          <p className="mt-4 text-navy/60">{t('products.scenariosDesc')}</p>
          <div className="mt-6">
            <Button to="/scenarios" variant="outline">
              {t('common.viewScenarios')}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
