import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageProvider'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()
  const location = useLocation()

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.solutions'), path: '/solutions' },
    { label: t('nav.products'), path: '/products' },
    { label: t('nav.scenarios'), path: '/scenarios' },
    { label: t('nav.about'), path: '/about' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-gray-100/50 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-gray-100 bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
              <button
                type="button"
                onClick={() => setLocale('zh')}
                className={locale === 'zh' ? 'font-medium text-accent' : 'text-navy/50 hover:text-navy'}
              >
                中
              </button>
              <span className="text-gray-300">|</span>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={locale === 'en' ? 'font-medium text-accent' : 'text-navy/50 hover:text-navy'}
              >
                EN
              </button>
            </div>
            <Button to="/about#contact" size="sm">
              {t('common.getQuote')}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 lg:hidden">
          <Link to="/" className="text-lg font-bold tracking-widest text-navy">
            ZENSHENG
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => setLocale('zh')}
                className={locale === 'zh' ? 'font-medium text-accent' : 'text-navy/50'}
              >
                中
              </button>
              <span className="text-gray-300">|</span>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={locale === 'en' ? 'font-medium text-accent' : 'text-navy/50'}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-gray-50"
              aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={menuOpen}
            >
              <span
                className={`absolute block h-0.5 w-5 bg-navy transition-transform duration-200 ${
                  menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-navy transition-transform duration-200 ${
                  menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy/20 backdrop-blur-[2px]"
            aria-label="关闭菜单"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="relative border-b border-gray-100 bg-white px-4 pb-5 pt-2 shadow-lg">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-navy/80 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button to="/about#contact" size="sm" className="w-full">
                  {t('common.getQuote')}
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
