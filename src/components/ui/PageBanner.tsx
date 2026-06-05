import SectionTitle from './SectionTitle'
import ScrollReveal from '../motion/ScrollReveal'

interface PageBannerProps {
  title: string
  subtitle?: string
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="bg-navy py-16 md:py-24">
      <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle title={title} subtitle={subtitle} light />
      </ScrollReveal>
    </section>
  )
}
