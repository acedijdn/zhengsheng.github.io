import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getContactChannelLabels } from '../../i18n/pageContent'

interface ContactDetailsProps {
  className?: string
}

const channelKeys = ['sales', 'support', 'hr', 'phone'] as const

export default function ContactDetails({ className = '' }: ContactDetailsProps) {
  const { locale } = useLanguage()
  const labels = getContactChannelLabels(locale)
  const { address, channels } = siteConfig.contact

  return (
    <div className={className}>
      <div>
        <h3 className="text-sm font-semibold text-navy">{labels.headquarters}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/60">
          {locale === 'en' ? address.en : address.zh}
        </p>
      </div>
      <div className="mt-6 space-y-3 text-sm">
        {channels.map((channel, index) => (
          <div key={channel.value + channel.type} className="flex gap-3">
            <span className="w-24 shrink-0 font-medium text-navy/70 md:w-28">
              {labels[channelKeys[index]]}
            </span>
            {channel.type === 'email' ? (
              <a
                href={`mailto:${channel.value}`}
                className="text-accent hover:text-accent-hover"
              >
                {channel.value}
              </a>
            ) : (
              <span className="text-navy/60">{channel.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
