import type { ImageKey } from '../config/images'
import { images } from '../config/images'

const STORAGE_KEY = 'zensheng-image-overrides'

type Overrides = Partial<Record<ImageKey, string>>

export function getImageOverrides(): Overrides {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Overrides) : {}
  } catch {
    return {}
  }
}

export function setImageOverride(key: ImageKey, url: string) {
  const overrides = getImageOverrides()
  overrides[key] = url
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
}

export function clearImageOverride(key: ImageKey) {
  const overrides = getImageOverrides()
  delete overrides[key]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
}

export function getEffectiveImageUrl(key: ImageKey): string | null {
  const overrides = getImageOverrides()
  if (overrides[key]) return overrides[key]!
  if (images[key].customUrl) return images[key].customUrl!
  return null
}
