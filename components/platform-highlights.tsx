import Image from "next/image";

export function PlatformHighlights() {
  const features = [
    {
      title: 'Package Receiving',
      description: 'We receive your international orders at our overseas warehouse.',
      image: '/package.png',
    },
    {
      title: 'Parcel Consolidation',
      description: 'Combine multiple packages into one shipment to reduce shipping costs.',
      image: '/percel.png',
    },
    {
      title: 'Shipping Cost Calculator',
      description: 'See your shipping cost before paying. No surprises.',
      image: '/shipping.png',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Track your package from warehouse to delivery in nigeria.',
      image: '/tracking.png',
    },
    {
      title: 'Assisted Purchase',
      description: "If a store doesn't accept your Card. Share the product link and we'll help you buy it.",
      image: '/assisted.png',
    },
    {
      title: 'Order Notification',
      description: 'Get update when your package arrives. ships. and is delivered.',
      image: '/order.png',
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-xs font-medium text-foreground">Platform Highlights</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-[500] text-foreground mb-4">
            Everything You Need, In One Place
          </h3>
          <p className="text-sm text-muted-foreground">
            All your global shopping and shipping tools, together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-card rounded-2xl border border-border">
              <div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={220}
                  className="w-full rounded-t-2xl object-contain"
                  priority
                />
              </div>
              <div className="p-3">
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
