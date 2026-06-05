import { Link } from 'react-router-dom'
import type { ImageKey } from '../../config/images'
import { CARD_HOVER } from '../../lib/cardStyles'
import SiteImage from '../ui/SiteImage'

interface ScenarioOverlayCardProps {
  imageKey: ImageKey
  title: string
  to: string
}

export default function ScenarioOverlayCard({ imageKey, title, to }: ScenarioOverlayCardProps) {
  return (
    <Link
      to={to}
      className={`group relative block overflow-hidden rounded-2xl shadow-sm ${CARD_HOVER}`}
    >
      <SiteImage
        imageKey={imageKey}
        theme="dark"
        aspectRatio="aspect-[16/9] md:aspect-[2/1]"
        className="rounded-none"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-navy/20 to-transparent p-6 md:p-8">
        <div>
          <h3 className="text-lg font-semibold text-white md:text-2xl">{title}</h3>
          <span className="mt-2 inline-block text-sm text-white/70 group-hover:text-white">
            探索场景 →
          </span>
        </div>
      </div>
    </Link>
  )
}
