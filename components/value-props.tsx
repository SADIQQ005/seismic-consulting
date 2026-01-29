import Image from "next/image";

export function ValueProps() {
  const props = [
    {
      title: 'Shop Globally',
      description: 'Buy from US and other international stores.',
      icon: '/global.png',
    },
    {
      title: 'Overseas Warehouse',
      description: 'We receive and process your items securely.',
      icon: '/house-2.png',
    },
    {
      title: 'Delivered to Nigeria',
      description: 'Your package arrives at your chosen Nigerian address.',
      icon: '/group.png',
    },
    {
      title: 'Transparent & Secure',
      description: 'Clear costs, real tracking, safe payments.',
      icon: '/shield-search.png',
    },
  ]

  return (
    <section className="py-10 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop, idx) => (
            <div key={idx} className="bg-muted rounded-2xl p-8 text-center flex flex-col items-center">
              <Image
                src={prop.icon}
                alt={prop.title}
                width={64}
                height={64}
                className="mb-4"
                priority
              />
              <h3 className="text-lg font-bold text-foreground mb-2">{prop.title}</h3>
              <p className="text-muted-foreground text-sm">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
