import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import SiteImage from '../components/ui/SiteImage'
import SectionTitle from '../components/ui/SectionTitle'
import CTABanner from '../components/ui/CTABanner'
import SolutionCard from '../components/cards/SolutionCard'
import ScenarioOverlayCard from '../components/cards/ScenarioOverlayCard'
import ScrollReveal from '../components/motion/ScrollReveal'
import HeroFadeIn from '../components/motion/HeroFadeIn'
import HeroWaveBackground from '../components/motion/HeroWaveBackground'
import Timeline from '../components/motion/Timeline'
import { getEffectiveImageUrl } from '../lib/imageResolver'
import CounterStat from '../components/motion/CounterStat'
import { getMilestones } from '../i18n/pageContent'
import { siteConfig } from '../config/siteConfig'
import { CARD_HOVER } from '../lib/cardStyles'
import { useLanguage } from '../i18n/LanguageProvider'
import { usePreloadHeroImage } from '../hooks/usePreloadHeroImage'

export default function Home() {
  const { locale, t } = useLanguage()
  usePreloadHeroImage()
  const milestones = getMilestones(locale)

  const products = [
    {
      name: t('home.homeProductVibrator'),
      desc: t('home.homeProductVibratorDesc'),
      imageKey: 'product-vibrator' as const,
      to: '/products?category=vibrator',
    },
    {
      name: t('home.homeProductAmp'),
      desc: t('home.homeProductAmpDesc'),
      imageKey: 'product-driver' as const,
      to: '/products?category=amplifier',
    },
    {
      name: t('home.homeProductSpeaker'),
      desc: t('home.homeProductSpeakerDesc'),
      imageKey: 'product-module' as const,
      to: '/products?category=speaker',
    },
    {
      name: t('home.homeProductExpander'),
      desc: t('home.homeProductExpanderDesc'),
      imageKey: 'product-kit' as const,
      to: '/products?category=expander',
    },
    {
      name: t('home.homeProductAccessory'),
      desc: t('home.homeProductAccessoryDesc'),
      imageKey: 'product-accessory' as const,
      to: '/products?category=accessory',
    },
  ]

  const solutionCards = [
    { title: t('home.solutionSofa'), description: t('home.solutionSofaDesc'), to: '/solutions/smart-sofa' },
    { title: t('home.solutionBed'), description: t('home.solutionBedDesc'), to: '/solutions/smart-bed' },
    { title: t('home.solutionHealing'), description: t('home.solutionHealingDesc'), to: '/solutions/smart-healing' },
    { title: t('home.solutionMassage'), description: t('home.solutionMassageDesc'), to: '/solutions/smart-massage-chair' },
  ]

  const statLabels = [
    t('home.statFounded'),
    t('home.statFacility'),
    t('home.statTeam'),
    t('home.statPatents'),
  ]

  return (
    <>
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-navy md:min-h-screen">
        {!getEffectiveImageUrl('hero-scene') && <HeroWaveBackground />}
        <SiteImage
          imageKey="hero-scene"
          theme="dark"
          fill
          objectFit="cover"
          priority
          className="z-0"
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-navy/60 via-navy/35 to-navy/65"
          aria-hidden="true"
        />
        <div className="relative z-20 flex min-h-[90vh] items-center justify-center px-4 py-20 text-center md:min-h-screen md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <HeroFadeIn>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm md:text-4xl lg:text-5xl">
                {t('home.heroTitle')}
              </h1>
            </HeroFadeIn>
            <HeroFadeIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-white/85 drop-shadow-sm md:text-lg">
                {t('home.heroSubtitle')}
              </p>
            </HeroFadeIn>
            <HeroFadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button to="/solutions" size="lg">
                  {t('common.exploreSolutions')}
                </Button>
                <Button
                  to="/products"
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/20 hover:text-white"
                >
                  {t('common.viewProducts')}
                </Button>
              </div>
            </HeroFadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {siteConfig.homeStats.map((stat, index) => (
              <CounterStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                unit={stat.unit}
                label={statLabels[index]}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title={t('home.milestonesTitle')}
              subtitle={t('home.milestonesSubtitle')}
              className="mb-16"
            />
          </ScrollReveal>
          <Timeline items={milestones} />
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title={t('home.solutionsTitle')}
              subtitle={t('home.solutionsSubtitle')}
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            {solutionCards.map((solution, index) => (
              <ScrollReveal key={solution.to} delay={(index % 2) * 0.1 + Math.floor(index / 2) * 0.05}>
                <SolutionCard
                  title={solution.title}
                  description={solution.description}
                  to={solution.to}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title={t('home.productsTitle')}
              subtitle={t('home.productsSubtitle')}
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product, index) => (
              <ScrollReveal key={product.imageKey} delay={index * 0.1}>
                <div
                  className={`group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
                >
                  <Link
                    to={product.to}
                    className="block"
                    aria-label={`${t('common.learnMore')} ${product.name}`}
                  >
                    <SiteImage
                      imageKey={product.imageKey}
                      aspectRatio="aspect-square"
                      objectFit="contain"
                      className="min-h-[200px] rounded-none bg-white transition-opacity group-hover:opacity-90 md:min-h-[220px]"
                    />
                  </Link>
                  <div className="p-5">
                    <h3 className="font-semibold text-navy">{product.name}</h3>
                    <p className="mt-2 text-sm text-navy/60">{product.desc}</p>
                    <Link
                      to={product.to}
                      className="mt-3 inline-block text-sm font-medium text-accent"
                    >
                      {t('common.learnMore')} →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title={t('home.scenariosTitle')}
              subtitle={t('home.scenariosSubtitle')}
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <ScenarioOverlayCard
                imageKey="scenario-sofa"
                title={t('home.scenarioSofa')}
                to="/scenarios"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ScenarioOverlayCard
                imageKey="scenario-bed"
                title={t('home.scenarioBed')}
                to="/scenarios"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal className="mt-10 text-center">
            <Button to="/scenarios" variant="outline" size="lg">
              {t('common.seeMore')}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner text={t('home.ctaText')} buttonText={t('home.ctaButton')} />
    </>
  )
}
