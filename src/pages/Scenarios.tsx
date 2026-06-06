import PageBanner from '../components/ui/PageBanner'
import Button from '../components/ui/Button'
import SiteImage from '../components/ui/SiteImage'
import ScrollReveal from '../components/motion/ScrollReveal'
import { CARD_HOVER } from '../lib/cardStyles'
import type { ImageKey } from '../config/images'
import { useLanguage } from '../i18n/LanguageProvider'
import { getScenariosContent, scenarioMoreImageKeys } from '../i18n/pageContent'

interface ScenarioBlockProps {
  title: string
  description: string
  highlights: string[]
  buttonText: string
  buttonTo: string
  imageKey: ImageKey
  imagePosition: 'left' | 'right'
}

function ScenarioBlock({
  title,
  description,
  highlights,
  buttonText,
  buttonTo,
  imageKey,
  imagePosition,
}: ScenarioBlockProps) {
  const image = <SiteImage imageKey={imageKey} aspectRatio="aspect-[4/3]" />
  const content = (
    <div>
      <h2 className="text-2xl font-semibold text-navy md:text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-navy/60 md:text-lg">
        {description}
      </p>
      <ul className="mt-6 space-y-3">
        {highlights.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-navy/70 md:text-base">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button to={buttonTo}>{buttonText}</Button>
      </div>
    </div>
  )

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {imagePosition === 'left' ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          <div className="lg:order-2">{image}</div>
          <div className="lg:order-1">{content}</div>
        </>
      )}
    </div>
  )
}

const blockImageKeys: ImageKey[] = [
  'scenario-sofa',
  'scenario-bed',
  'scenario-wellness',
  'scenario-massage-chair',
]

const blockImagePositions: Array<'left' | 'right'> = ['left', 'right', 'left', 'right']

export default function Scenarios() {
  const { locale } = useLanguage()
  const content = getScenariosContent(locale)

  return (
    <>
      <PageBanner title={content.title} subtitle={content.subtitle} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-20 px-4 md:px-6 md:space-y-32 lg:px-8">
          {content.blocks.map((block, index) => (
            <ScrollReveal key={block.buttonTo}>
              <ScenarioBlock
                title={block.title}
                description={block.description}
                highlights={block.highlights}
                buttonText={block.buttonText}
                buttonTo={block.buttonTo}
                imageKey={blockImageKeys[index]}
                imagePosition={blockImagePositions[index]}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-navy md:text-3xl">
              {content.moreTitle}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.moreItems.map((scenario, index) => (
              <ScrollReveal key={scenario.title} delay={index * 0.1}>
                <div
                  className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
                >
                  <SiteImage
                    imageKey={scenarioMoreImageKeys[index]}
                    className="rounded-none"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-navy">{scenario.title}</h3>
                    <p className="mt-2 text-sm text-navy/60">{scenario.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 text-center">
            <p className="text-navy/60">{content.moreCta}</p>
            <div className="mt-6">
              <Button to="/about#contact">{content.contactTeam}</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
