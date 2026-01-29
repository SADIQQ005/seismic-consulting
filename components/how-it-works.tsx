"use client";

import Image from "next/image";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-10 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/66bcb31fa8b77a15b135d2ee6546d773dd69e317.jpg"
          alt="Background pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-5xl z-10 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-xs font-medium text-[#2d5c57]">
              Simple Steps
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-[500] text-[#1a1a1a] mb-4">
            How it Works
          </h3>
          <p className="text-sm text-muted-foreground">
            Buying from international stores doesn't have to be complicated.
            <br />
            Here's how we make it simple.
          </p>
        </div>

        <div className="relative" style={{ minHeight: "1200px" }}>
          <div className="absolute left-0 top-0 w-[35%]">
            <div className="bg-white rounded-3xl p-3 shadow-sm mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-wider text-[#666666]">
                  STEP ONE
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#999999] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#666666]">01</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  Shop Online
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Buy items from international stores that
                  <br />
                  ship to our overseas warehouse.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-[200px] w-[38%]">
            <div className="bg-white rounded-3xl p-3 shadow-sm mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-wider text-[#666666]">
                  STEP TWO
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#999999] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#666666]">02</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  We Receive Your Item
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Your order arrives at our shared overseas
                  <br />
                  warehouse, where it is checked in and
                  <br />
                  prepared for shipping.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-[680px] w-[38%]">
            <div className="bg-white rounded-3xl p-3 shadow-sm mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-wider text-[#666666]">
                  STEP THREE
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#999999] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#666666]">03</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  Choose Shipping & Pay
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Select your shipping option, view the cost,
                  <br />
                  and complete payment.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-[840px] w-[35%]">
            <div className="bg-white rounded-3xl p-3 shadow-sm mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-wider text-[#666666]">
                  STEP FOUR
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#999999] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#666666]">04</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  Delivered to Nigeria
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Your package is shipped to Nigeria and
                  <br />
                  delivered to your address, with tracking
                  <br />
                  updates along the way.
                </p>
              </div>
            </div>
          </div>

          <Image
            src="/Step Two Vector Container.png"
            alt="Connector from Step 1 to Step 2"
            width={270}
            height={226}
            className="absolute left-[360px] top-[180px] w-[270px] h-[226px] object-contain pointer-events-none"
            priority
          />
          <Image
            src="/Vector 3.png"
            alt="Connector from Step 2 to Step 3"
            width={160}
            height={150}
            className="absolute right-[140px] top-[520px] w-[160px] h-[160px] object-contain pointer-events-none"
            priority
          />
          <Image
            src="/Step Three Vector Container.png"
            alt="Connector from Step 3 to Step 4"
            width={270}
            height={226}
            className="absolute left-[360px] top-[870px] w-[270px] h-[226px] object-contain pointer-events-none rotate-180"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
