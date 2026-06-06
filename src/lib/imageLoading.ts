/** 首屏关键图：立即加载；其余图片：懒加载 */
export function imageLoadingProps(priority = false) {
  if (priority) {
    return {
      loading: 'eager' as const,
      fetchPriority: 'high' as const,
      decoding: 'async' as const,
    }
  }
  return {
    loading: 'lazy' as const,
    decoding: 'async' as const,
  }
}

export function preloadImage(href: string) {
  if (!href || document.querySelector(`link[rel="preload"][href="${href}"]`)) return

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = href
  document.head.appendChild(link)
}
