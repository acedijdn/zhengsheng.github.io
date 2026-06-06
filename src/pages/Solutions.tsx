import { Link } from 'react-router-dom'
import PageBanner from '../components/ui/PageBanner'
import Button from '../components/ui/Button'
import SiteImage from '../components/ui/SiteImage'
import { getSolutionImageKeyFromPath } from '../config/images'
import AdvantageCard from '../components/cards/AdvantageCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import { useLanguage } from '../i18n/LanguageProvider'
import { getSolutionsPageContent } from '../i18n/pageContent'

export default function Solutions() {
  const { locale, t } = useLanguage()
  const content = getSolutionsPageContent(locale)

  return (
    <>
      <PageBanner title={content.title} subtitle={content.subtitle} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-20 px-4 md:px-6 md:space-y-32 lg:px-8">
          {content.items.map((solution, index) => (
            <ScrollReveal key={solution.to}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <Link
                  to={solution.to}
                  className="group block"
                  aria-label={`${t('common.viewDetails')} ${solution.title}`}
                >
                  <SiteImage
                    imageKey={getSolutionImageKeyFromPath(solution.to)}
                    aspectRatio="aspect-[4/3]"
                    className="transition-opacity group-hover:opacity-90"
                  />
                </Link>
                <div>
                  <h2 className="text-2xl font-semibold text-navy md:text-3xl">
                    {solution.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy/60">
                    {solution.summary}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {solution.advantages.map((adv, advIndex) => (
                      <AdvantageCard
                        key={adv.title}
                        index={advIndex}
                        title={adv.title}
                        description={adv.description}
                      />
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button to={solution.to}>{t('common.viewDetails')}</Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
