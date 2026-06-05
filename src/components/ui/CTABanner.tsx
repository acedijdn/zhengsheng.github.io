import Button from './Button'
import ScrollReveal from '../motion/ScrollReveal'

interface CTABannerProps {
  text: string
  buttonText: string
  buttonTo?: string
}

export default function CTABanner({ text, buttonText, buttonTo = '/about#contact' }: CTABannerProps) {
  return (
    <section className="bg-navy py-16 md:py-20">
      <ScrollReveal className="container mx-auto px-4 text-center md:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">{text}</p>
        <div className="mt-8">
          <Button to={buttonTo} size="lg">
            {buttonText}
          </Button>
        </div>
      </ScrollReveal>
    </section>
  )
}
