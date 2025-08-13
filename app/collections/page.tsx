import Image from "next/image";
import React from "react";

export default function CollectionsPage() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-6xl">
        {/* Hero */}
        <div className="overflow-hidden rounded-3xl border bg-card">
          <div className="relative h-[320px] w-full">
            <Image
              width={720}
              height={480}
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Curated jewelry collections"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          </div>
          <div className="px-8 pb-10 pt-6 sm:px-10 lg:px-12">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground lg:text-6xl">
              Collections
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-foreground/80">
              Explore signature designs crafted with exceptional materials and
              master artisanship.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-20">
          <section id="engagement">
            <h2 className="font-display text-3xl font-semibold">Engagement</h2>
            <p className="mt-2 text-muted-foreground">
              Timeless settings celebrating every love story.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="/images/Solitaire-ring.webp"
                alt="Solitaire ring"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="/images/halo-ring.jpg"
                alt="Halo ring"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="/images/three-stone-ring.webp"
                alt="Three-stone ring"
              />
            </div>
          </section>

          <section id="vintage">
            <h2 className="font-display text-3xl font-semibold">
              Vintage Heritage
            </h2>
            <p className="mt-2 text-muted-foreground">
              Classic designs inspired by eras past.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="/images/Vintage-brooch.jpg"
                alt="Vintage brooch"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="/images/Antique-ring.webp"
                alt="Antique ring"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="/images/Famous-Art-Deco-Art.jpg"
                alt="Art deco piece"
              />
            </div>
          </section>

          {/*  <section id="wedding">
            <h2 className="font-display text-3xl font-semibold">Wedding</h2>
            <p className="mt-2 text-muted-foreground">
              Elegant bands and bridal sets for your day.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1603052875451-9cc06ca04534?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Wedding band set"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Eternity band"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Pave band"
              />
            </div>
          </section> */}

          <section id="contemporary">
            <h2 className="font-display text-3xl font-semibold">
              Contemporary
            </h2>
            <p className="mt-2 text-muted-foreground">
              Modern silhouettes with innovative craftsmanship.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Modern ring"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="/images/minimalist-gold-necklace.png"
                alt="Minimalist necklace"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Sculptural earrings"
              />
            </div>
          </section>

          <section id="gemstones">
            <h2 className="font-display text-3xl font-semibold">
              Precious Gemstones
            </h2>
            <p className="mt-2 text-muted-foreground">
              Vibrant sapphires, emeralds, rubies and more.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1612198182410-b80f1a60c8c7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Emerald ring"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1517976487492-5764eabc3f56?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Ruby pendant"
              />
              <Image
                width={720}
                height={480}
                className="aspect-[4/5] w-full rounded-2xl border object-cover"
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Sapphire earrings"
              />
            </div>
          </section>

          <section id="care">
            <h2 className="font-display text-3xl font-semibold">Care Guide</h2>
            <p className="mt-2 text-muted-foreground">
              Best practices to preserve brilliance for decades.
            </p>
          </section>

          <section id="sizing">
            <h2 className="font-display text-3xl font-semibold">Sizing</h2>
            <p className="mt-2 text-muted-foreground">
              Find your perfect fit with our simple guide.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
