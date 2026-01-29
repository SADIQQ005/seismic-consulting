'use client'

export function FAQ() {
  const faqs = [
    {
      question: 'Do I get a personal warehouse address?',
      answer: 'No. All packages are received at our shared overseas warehouse and processed securely.',
    },
    {
      question: 'Do you handle customs fees?',
      answer: 'Customs duties are determined by Nigerian customs and are not controlled by us.',
    },
    {
      question: 'Can I shop from any international store?',
      answer: 'Yes, as long as the store can ship to our warehouse location.',
    },
    {
      question: 'Can I track my package?',
      answer: 'Yes. You\'ll receive tracking updates from warehouse to delivery.',
    },
    {
      question: 'What if my item is damaged?',
      answer: 'Optional insurance is available for eligible shipments.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-xs font-medium text-foreground">Built for You</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FAQs
          </h2>
          <p className="text-sm text-muted-foreground">
            Focused on your needs, our team delivers solutions to ensure<br className="hidden md:block" />
            adequate and secure buy and ship to Nigeria.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-muted rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <h3 className="font-bold text-foreground text-sm">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
