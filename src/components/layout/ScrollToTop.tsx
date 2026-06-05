import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** 路由切换时滚动到页面顶部；带 hash 时滚动到对应锚点 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
