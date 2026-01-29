export function WhoIsThisFor() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-18">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-xs font-medium text-foreground">
              Built for You
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-[500] text-foreground mb-4">
            Who Is This For?
          </h3>
          <p className="text-sm text-muted-foreground">
            Designed for Nigerians who shop internationally and want reliable
            <br className="hidden md:block" />
            delivery back home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:items-start">
          <div className="bg-card rounded-2xl overflow-hidden border border-border md:-mt-8">
            <div className="p-8">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Small Business Owners
              </h3>
              <p className="text-sm text-muted-foreground">
                Importing items for resale in Nigeria.
              </p>
            </div>
            <div className="bg-muted">
              <img
                src="/man.png"
                alt="Small Business Owner"
                className="w-full h-full rounded-b-2xl object-cover"
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden border border-border md:mt-16">
            <div className="bg-muted">
              <img
                src="/woman.png"
                alt="Everyday Shopper"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Everyday Shoppers
              </h3>
              <p className="text-sm text-muted-foreground">
                Buying clothes, gadgets, and accessories from abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}