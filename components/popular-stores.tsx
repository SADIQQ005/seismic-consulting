import Image from "next/image";
import adidas from "@/public/adidas.png";
import chanel from "@/public/chanel.png";
import nike from "@/public/nike.png";
import amazon from "@/public/amazon.png";
import ebay from "@/public/ebay.png";
import north from "@/public/north.png";

export function PopularStores() {
  const stores = [
    { name: 'Adidas', logo: adidas },
    { name: 'Chanel', logo: chanel },
    { name: 'Nike', logo: nike },
    { name: 'Amazon', logo: amazon },
    { name: 'eBay', logo: ebay },
    { name: 'The North Face', logo: north },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-xs font-medium">Popular Stores</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-[500] mb-6">
            Top Stores Nigerians Shop From
          </h3>

          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Shop from trusted international brands across fashion, electronics,
            home, and more. We handle delivery from abroad to Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stores.map((store, idx) => (
            <div key={idx} className="h-32 bg-muted rounded-2xl flex items-center justify-center">
              <Image
                src={store.logo}
                alt={store.name}
                width={96}
                height={48}
                className="h-10 md:h-12 w-auto opacity-90"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
