import { useEffect } from 'react'
import { images } from '../config/images'
import { getEffectiveImageUrl } from '../lib/imageResolver'
import { preloadImage } from '../lib/imageLoading'

/** 首页 Hero 大图预加载，缩短首屏等待 */
export function usePreloadHeroImage() {
  useEffect(() => {
    const href = getEffectiveImageUrl('hero-scene') ?? images['hero-scene'].customUrl
    if (href) preloadImage(href)
  }, [])
}
