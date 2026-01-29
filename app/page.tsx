import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PopularStores } from '@/components/popular-stores'
import { HowItWorks } from '@/components/how-it-works'
import { PlatformHighlights } from '@/components/platform-highlights'
import { WhoIsThisFor } from '@/components/who-is-this-for'
import { ValueProps } from '@/components/value-props'
import { FAQ } from '@/components/faq'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <PopularStores />
        <HowItWorks />
        <PlatformHighlights />
        <WhoIsThisFor />
        <ValueProps />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
