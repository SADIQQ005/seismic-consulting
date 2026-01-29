import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Shipping From<br className="hidden md:block" /> Abroad Without Stress
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Shop internationally with confidence and receive your items in Nigeria with ease.
            </p>
            <Link href="#get-started">
              <Button size="lg" className="bg-primary rounded-full text-xs hover:bg-primary/90 text-primary-foreground">
                Create an Account
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-2xl relative h-40 md:h-48 lg:h-56 col-span-2 overflow-hidden">
              <Image
                src="/cta3.png"
                alt="Shopping to delivery flow"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-muted rounded-2xl relative h-40 md:h-48 overflow-hidden">
              <Image
                src="/cta2.png"
                alt="Secure package features"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-muted rounded-2xl relative h-40 md:h-48 overflow-hidden">
              <Image
                src="/cta1.png"
                alt="Fast verified delivery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
