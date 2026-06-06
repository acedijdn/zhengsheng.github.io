import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageProvider'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { locale, setLocale, t } = useLanguage()

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

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-gray-100/50 bg-white/80 shadow-sm backdrop-blur-md'
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

        <div className="flex items-center justify-between py-4 lg:hidden">
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
            <div className="flex flex-col gap-1.5 p-1">
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
            </div>
          </div>
        </div>

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
                {t('common.getQuote')}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
