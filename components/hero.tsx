import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background px-4 pt-15">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-6">
            <span className="text-xs font-medium text-foreground">
              Global Shopping, Made Simple
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance leading-tight">
            Buy from International Stores.
            <br className="hidden md:block" /> We Deliver to Nigeria.
          </h3>
        </div>

        {/* Product Carousel */}
        <div className="relative h-80 md:h-96 flex items-center justify-center mb-16">
          <style>{`
        .carousel-container {
          perspective: 1200px;
        }
        .carousel-item {
          position: absolute;
          transition: transform 0.3s ease;
          width: 176px;
          height: 176px;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        @media (min-width: 768px) {
          .carousel-item {
            width: 200px;
            height: 200px;
          }
        }
        .carousel-item:nth-child(1) {
        transform: translateX(-190px) translateY(20px) rotateY(15deg) rotateZ(-8deg);
          transform: translateX(-300px) translateY(-30px) rotateY(25deg) rotateZ(-12deg);
          z-index: 1;
        }
        .carousel-item:nth-child(2) {
          transform: translateX(-190px) translateY(20px) rotateY(15deg) rotateZ(-8deg);
          z-index: 2;
        }
        .carousel-item:nth-child(3) {
          transform: translateX(-95px) translateY(-20px) rotateY(8deg) rotateZ(-4deg);
          z-index: 3;
        }
        .carousel-item:nth-child(4) {
          transform: translateX(0px) translateY(30px) rotateY(0deg) rotateZ(0deg);
          z-index: 4;
        }
        .carousel-item:nth-child(5) {
          transform: translateX(95px) translateY(-20px) rotateY(-8deg) rotateZ(4deg);
          z-index: 3;
        }
        .carousel-item:nth-child(6) {
          transform: translateX(190px) translateY(20px) rotateY(-15deg) rotateZ(8deg);
          z-index: 2;
        }
        .carousel-item:nth-child(7) {
          transform: translateX(300px) translateY(-30px) rotateY(-25deg) rotateZ(12deg);
          z-index: 1;
        }
      `}</style>

          <div className="carousel-container w-full h-full relative flex items-center justify-center">
            {[
              "hanger",
              "blender",
              "chair",
              "sneaker",
              "phones",
              "tv",
              "speaker",
            ].map((id, i) => (
              <div key={i} className="carousel-item">
                <img
                  src={`/${id}.jpg`}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description and CTAs */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            We help{" "}
            <span className="font-semibold text-foreground">
              Nigerians shop from abroad
            </span>
            , receive items at our overseas warehouse, and ship them safely to
            Nigeria,{" "}
            <span className="font-semibold text-foreground">
              with clear pricing and full tracking
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#get-started">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                Get Started
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="rounded-full">
                How it Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
