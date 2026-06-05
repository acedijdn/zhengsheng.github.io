import { useSyncExternalStore } from 'react'
import type { ImageKey } from '../../config/images'
import { images } from '../../config/images'
import { getEffectiveImageUrl } from '../../lib/imageResolver'
import Illustration from '../illustrations/Illustration'

interface SiteImageProps {
  imageKey: ImageKey
  className?: string
  aspectRatio?: string
  theme?: 'light' | 'dark'
  alt?: string
  /** 铺满父容器（用于全屏 Hero 等），忽略 aspectRatio */
  fill?: boolean
  /** cover 裁剪铺满；contain 完整显示不裁切 */
  objectFit?: 'cover' | 'contain'
}

function subscribe(callback: () => void) {
  window.addEventListener('zensheng-images-updated', callback)
  return () => window.removeEventListener('zensheng-images-updated', callback)
}

function getOverrideSnapshot() {
  return localStorage.getItem('zensheng-image-overrides') ?? ''
}

export default function SiteImage({
  imageKey,
  className = '',
  aspectRatio = 'aspect-video',
  theme = 'light',
  alt,
  fill = false,
  objectFit = 'cover',
}: SiteImageProps) {
  useSyncExternalStore(subscribe, getOverrideSnapshot, () => '')

  const config = images[imageKey]
  const customUrl = getEffectiveImageUrl(imageKey)
  const label = alt ?? config.label
  const containerClass = fill
    ? objectFit === 'contain'
      ? 'absolute inset-0 flex h-full w-full items-center justify-center'
      : 'absolute inset-0 h-full w-full'
    : `relative overflow-hidden ${aspectRatio}`

  const imgFitClass =
    objectFit === 'contain'
      ? fill
        ? 'h-full w-full object-contain'
        : 'h-full w-full object-contain p-4'
      : 'h-full w-full object-cover'

  if (customUrl) {
    return (
      <div className={`${containerClass} ${className}`}>
        <img src={customUrl} alt={label} className={imgFitClass} />
      </div>
    )
  }

  const isAvatar = imageKey === 'team-avatar'
  const isLogo = imageKey === 'client-logo'

  if (isAvatar || isLogo) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden ${aspectRatio} ${className}`}>
        <Illustration
          imageKey={imageKey}
          theme={theme}
          className={isAvatar ? 'h-full w-full' : 'h-2/3 w-2/3'}
        />
      </div>
    )
  }

  return (
    <div
      className={`${fill ? 'absolute inset-0' : `relative overflow-hidden ${aspectRatio}`} ${className} ${
        theme === 'dark' ? 'bg-navy' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/40'
      }`}
    >
      <Illustration imageKey={imageKey} theme={theme} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
