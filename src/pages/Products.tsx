import PageBanner from '../components/ui/PageBanner'
import FilterTabs from '../components/ui/FilterTabs'
import ProductCard from '../components/cards/ProductCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import { productCategories, products } from '../data/productData'

export default function Products() {
  return (
    <>
      <PageBanner
        title="产品中心"
        subtitle="低频振动器、功率放大器、扬声器、扩振配件与通用配件，一站式供应"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <FilterTabs tabs={productCategories} activeTab="全部" />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={(index % 4) * 0.08}>
                <ProductCard
                  name={product.name}
                  category={product.category}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  to={`/products/${product.id}`}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
