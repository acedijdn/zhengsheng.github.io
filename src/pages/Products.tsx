import { useMemo, useState } from 'react'
import PageBanner from '../components/ui/PageBanner'
import FilterTabs from '../components/ui/FilterTabs'
import ProductCard from '../components/cards/ProductCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import { products } from '../data/productData'
import { useLanguage } from '../i18n/LanguageProvider'
import { localizeProduct, tCategory } from '../i18n/localize'
import type { ProductCategoryKey } from '../i18n/translations'
import { productCategoryKeys } from '../i18n/translations'

export default function Products() {
  const { locale, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<ProductCategoryKey>('all')

  const filteredProducts = useMemo(
    () =>
      activeCategory === 'all'
        ? products
        : products.filter((p) => p.categoryKey === activeCategory),
    [activeCategory],
  )

  return (
    <>
      <PageBanner title={t('products.title')} subtitle={t('products.subtitle')} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <FilterTabs
              tabs={productCategoryKeys}
              activeTab={activeCategory}
              onTabChange={(key) => setActiveCategory(key as ProductCategoryKey)}
              getLabel={(key) => tCategory(locale, key)}
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => {
              const localized = localizeProduct(product, locale)
              return (
                <ScrollReveal key={product.id} delay={(index % 4) * 0.08}>
                  <ProductCard
                    name={localized.name}
                    category={localized.category}
                    categoryKey={product.categoryKey}
                    description={localized.description}
                    imageUrl={product.imageUrl}
                    to={`/products/${product.id}`}
                    viewDetailsLabel={t('common.viewDetails')}
                  />
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
