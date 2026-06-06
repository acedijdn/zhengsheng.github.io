import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../i18n/LanguageProvider'

const socialIcons = ['LinkedIn', 'YouTube', '微信']

export default function Footer() {
  const { locale, t } = useLanguage()

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.solutions'), path: '/solutions' },
    { label: t('nav.products'), path: '/products' },
    { label: t('nav.scenarios'), path: '/scenarios' },
    { label: t('nav.about'), path: '/about' },
  ]

  const half = Math.ceil(quickLinks.length / 2)
  const col1 = quickLinks.slice(0, half)
  const col2 = quickLinks.slice(half)
  const address =
    locale === 'en' ? siteConfig.contact.address.en : siteConfig.contact.address.zh

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="text-xl font-bold tracking-widest">{siteConfig.brand.name}</div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{t('site.tagline')}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/90">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {col1.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/90">
              {t('footer.more')}
            </h4>
            <ul className="space-y-2.5">
              {col2.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/90">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                {t('footer.hq')}：{address}
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.channels[0].value}`}
                  className="hover:text-white"
                >
                  {siteConfig.contact.channels[0].value}
                </a>
              </li>
              <li>{siteConfig.contact.channels.find((c) => c.type === 'phone')?.value}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {socialIcons.map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs text-white/50 hover:border-white/40"
                >
                  {icon.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>{siteConfig.footer.copyright}</p>
          <p>{siteConfig.footer.icp}</p>
        </div>
      </div>
    </footer>
  )
}
