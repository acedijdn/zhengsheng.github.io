import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const navItems = [
  { label: '首页', path: '/' },
  { label: '解决方案', path: '/solutions' },
  { label: '产品展示', path: '/products' },
  { label: '使用场景', path: '/scenarios' },
  { label: '关于我们', path: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-gray-100/50 bg-white/80 shadow-sm backdrop-blur-md'
          : 'border-gray-100 bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden items-center justify-between py-4 lg:flex">
          <Link to="/" className="text-xl font-bold tracking-widest text-navy">
            ZENSHENG
          </Link>

          <nav className="flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-navy/70 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="#" className="font-medium text-accent">
                中
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-navy/50 hover:text-navy">
                EN
              </a>
            </div>
            <Button to="/about#contact" size="sm">
              获取方案
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex items-center justify-between py-4 lg:hidden">
          <Link to="/" className="text-lg font-bold tracking-widest text-navy">
            ZENSHENG
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs">
              <a href="#" className="font-medium text-accent">
                中
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-navy/50">
                EN
              </a>
            </div>
            <div className="flex flex-col gap-1.5 p-1">
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
            </div>
          </div>
        </div>

        {/* Mobile Menu - static expanded state */}
        <nav className="border-t border-gray-100 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-3">
              <Button to="/about#contact" size="sm" className="w-full">
                获取方案
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
