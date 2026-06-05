import { siteConfig } from '../../config/siteConfig'

interface ContactDetailsProps {
  className?: string
}

export default function ContactDetails({ className = '' }: ContactDetailsProps) {
  const { headquarters, address, channels } = siteConfig.contact

  return (
    <div className={className}>
      <div>
        <h3 className="text-sm font-semibold text-navy">{headquarters}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/60">
          {address.zh}
          <br />
          {address.en}
        </p>
      </div>
      <div className="mt-6 space-y-3 text-sm">
        {channels.map((channel) => (
          <div key={channel.label} className="flex gap-3">
            <span className="w-20 shrink-0 font-medium text-navy/70">{channel.label}</span>
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
