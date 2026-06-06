import type { ImageKey } from '../../config/images'
import { getProductImageKey } from '../../config/images'
import { imageLoadingProps } from '../../lib/imageLoading'
import SiteImage from './SiteImage'

interface ProductImageProps {
  imageUrl?: string
  categoryKey: string
  alt: string
  className?: string
  aspectRatio?: string
  /** 列表卡片用 square，详情页可传更大比例 */
  variant?: 'card' | 'detail'
}

export default function ProductImage({
  imageUrl,
  categoryKey,
  alt,
  className = '',
  aspectRatio,
  variant = 'card',
}: ProductImageProps) {
  const ratioClass = aspectRatio ?? (variant === 'detail' ? 'aspect-square' : 'aspect-square')
  const minHeightClass = variant === 'card' ? 'min-h-[220px] md:min-h-[260px]' : 'min-h-[320px] md:min-h-[400px]'

  if (imageUrl) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-white ${ratioClass} ${minHeightClass} ${className}`}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="h-full w-full object-contain p-4 md:p-6"
          {...imageLoadingProps(variant === 'detail')}
        />
      </div>
    )
  }

  const imageKey: ImageKey = getProductImageKey(categoryKey)
  return (
    <SiteImage imageKey={imageKey} aspectRatio={ratioClass} className={className} />
  )
}
