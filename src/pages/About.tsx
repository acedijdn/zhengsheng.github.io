import SiteImage from '../components/ui/SiteImage'
import ContactDetails from '../components/ui/ContactDetails'
import ScrollReveal from '../components/motion/ScrollReveal'
import Timeline from '../components/motion/Timeline'
import { useLanguage } from '../i18n/LanguageProvider'
import { getAboutContent, getMilestones } from '../i18n/pageContent'

export default function About() {
  const { locale, t } = useLanguage()
  const about = getAboutContent(locale)
  const milestones = getMilestones(locale)

  return (
    <>
      <section className="py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-2xl font-bold text-navy md:text-3xl lg:text-4xl">
                {t('about.brandStory')}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
                {about.brandStory}
              </p>
            </div>
            <SiteImage imageKey="about-factory" aspectRatio="aspect-[4/3]" />
          </div>
        </ScrollReveal>
      </section>

      <section id="contact" className="border-y border-gray-100 bg-gray-50 py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">{t('about.contactUs')}</h2>
          <p className="mt-3 text-base text-navy/60 md:text-lg">{t('about.contactSubtitle')}</p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-navy md:text-2xl">
                {t('about.contactInfo')}
              </h3>
              <ContactDetails className="mt-8 space-y-6" />
            </div>
            <SiteImage imageKey="map-location" aspectRatio="aspect-[16/9]" className="rounded-xl" />
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-16 text-center text-2xl font-semibold text-navy md:text-3xl">
              {t('about.milestones')}
            </h2>
          </ScrollReveal>
          <Timeline items={milestones} />
        </div>
      </section>
    </>
  )
}
