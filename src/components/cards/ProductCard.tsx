import { Link } from 'react-router-dom'
import { CARD_HOVER } from '../../lib/cardStyles'
import ProductImage from '../ui/ProductImage'

interface ProductCardProps {
  name: string
  category: string
  description: string
  imageUrl?: string
  to?: string
}

export default function ProductCard({
  name,
  category,
  description,
  imageUrl,
  to = '/products',
}: ProductCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
    >
      <ProductImage
        imageUrl={imageUrl}
        category={category}
        alt={name}
        className="rounded-none"
      />
      <div className="p-5 md:p-6">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {category}
        </span>
        <h3 className="mt-3 text-base font-semibold text-navy md:text-lg">{name}</h3>
        <p className="mt-2 text-sm text-navy/60">{description}</p>
        <Link
          to={to}
          className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover"
        >
          查看详情 →
        </Link>
      </div>
    </div>
  )
}
