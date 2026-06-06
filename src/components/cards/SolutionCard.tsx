import { Link } from 'react-router-dom'
import type { ImageKey } from '../../config/images'
import { getSolutionImageKeyFromPath } from '../../config/images'
import { useLanguage } from '../../i18n/LanguageProvider'
import { CARD_HOVER } from '../../lib/cardStyles'
import SiteImage from '../ui/SiteImage'

interface SolutionCardProps {
  title: string
  description: string
  to: string
  imageKey?: ImageKey
}

export default function SolutionCard({
  title,
  description,
  to,
  imageKey,
}: SolutionCardProps) {
  const { t } = useLanguage()
  const key = imageKey ?? getSolutionImageKeyFromPath(to)

  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
    >
      <Link to={to} className="block" aria-label={`${t('common.learnMore')} ${title}`}>
        <SiteImage
          imageKey={key}
          aspectRatio="aspect-[4/3]"
          className="rounded-none transition-opacity group-hover:opacity-90"
        />
      </Link>
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-navy md:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/60 md:text-base">
          {description}
        </p>
        <Link
          to={to}
          className="mt-5 inline-block text-sm font-medium text-accent hover:text-accent-hover"
        >
          {t('common.learnMore')} →
        </Link>
      </div>
    </div>
  )
}
