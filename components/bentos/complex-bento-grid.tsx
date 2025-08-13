import { Gem, Crown, Sparkles, Diamond, Heart, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ComplexBentoGrid = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs text-muted-foreground md:text-sm font-[var(--font-accent)]">
            LUXURY JEWELRY
          </div>
          <h2 className="mt-4 mb-8 text-4xl font-semibold text-pretty md:text-6xl">
            Featured Collections
          </h2>
          <p className="text-base text-muted-foreground md:text-lg font-[var(--font-body)]">
            Each piece in our curated selection represents the pinnacle of
            jewelry craftsmanship
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Link
            href="/collections#engagement"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/30 to-transparent" />
            <Image
              width={600}
              height={500}
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Diamond Engagement"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Diamond className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-background">
                  Diamond Engagement
                </h3>
                <p className="mt-2 text-background/70 font-[var(--font-body)]">
                  Timeless elegance in every diamond. Celebrate your love with
                  our exquisite engagement collection.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/collections#vintage"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/30 to-transparent" />
            <Image
              width={600}
              height={500}
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Vintage Heritage"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Crown className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-background">
                  Vintage Heritage
                </h3>
                <p className="mt-2 text-background/70 font-[var(--font-body)]">
                  Classic designs that transcend time. Discover our carefully
                  curated vintage-inspired pieces.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/collections#contemporary"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/30 to-transparent" />
            <Image
              width={600}
              height={500}
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Contemporary Design"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Sparkles
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-background">
                  Contemporary Design
                </h3>
                <p className="mt-2 text-background/70 font-[var(--font-body)]">
                  Modern artistry meets innovative design. Explore our
                  cutting-edge contemporary jewelry collection.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/collections#gemstones"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/30 to-transparent" />
            <Image
              width={600}
              height={500}
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Precious Gemstones"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Gem className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-background">
                  Precious Gemstones
                </h3>
                <p className="mt-2 text-background/70 font-[var(--font-body)]">
                  Vibrant colors and rare beauty. Our gemstone collection
                  features nature&apos;s most stunning treasures.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/collections#wedding"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/30 to-transparent" />
            <Image
              width={600}
              height={500}
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Wedding Collections"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Heart className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-background">
                  Wedding Collections
                </h3>
                <p className="mt-2 text-background/70 font-[var(--font-body)]">
                  Complete bridal sets for your special day. Elegance and
                  romance in perfect harmony.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/consultation"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/30 to-transparent" />
            <Image
              width={600}
              height={500}
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Custom Creations"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Palette className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-background">
                  Custom Creations
                </h3>
                <p className="mt-2 text-background/70 font-[var(--font-body)]">
                  Bring your vision to life with our bespoke jewelry service.
                  Unique pieces crafted just for you.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ComplexBentoGrid };
