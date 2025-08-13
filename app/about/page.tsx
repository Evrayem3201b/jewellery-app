import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-6xl">
        {/* Hero */}
        <div className="overflow-hidden rounded-3xl border bg-card">
          <div className="relative h-[320px] w-full">
            <Image
              src="/images/Ardgillan-Castle-Workshop-3-Colour_sml.webp"
              alt="Atelier workbench with tools"
              className="absolute inset-0 size-full object-cover"
              width={500}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          </div>
          <div className="px-8 pb-10 pt-6 sm:px-10 lg:px-12">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground lg:text-6xl">
              Our Story
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-foreground/80">
              Founded on a passion for timeless design and uncompromising
              quality, Vector crafts heirloom jewelry that celebrates
              life&apos;s most meaningful moments.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6">
            <p className="font-display text-xl font-semibold">Heritage Craft</p>
            <p className="mt-2 text-muted-foreground">
              Traditional techniques meet precise modern methods.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="font-display text-xl font-semibold">
              Ethical Sourcing
            </p>
            <p className="mt-2 text-muted-foreground">
              Only conflict‑free diamonds and responsibly mined metals.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="font-display text-xl font-semibold">Lifetime Care</p>
            <p className="mt-2 text-muted-foreground">
              Complimentary cleaning, inspections, and repair services.
            </p>
          </div>
        </div>

        {/* Sections with anchors */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <section id="heritage" className="space-y-3">
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Heritage
            </h2>
            <p className="text-foreground/80">
              Since 1925, our master goldsmiths have handcrafted each piece in
              small batches, ensuring character and longevity in every detail.
            </p>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border">
              <Image
                src="/images/5d779a0ede465b9671e6d5af4883b2a8.jpg"
                alt="Historic jewelry sketches"
                className="size-full object-cover bg-center"
                width={500}
                height={300}
              />
            </div>
          </section>
          <section id="press" className="space-y-3">
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Press
            </h2>
            <p className="text-foreground/80">
              Featured in leading publications for design excellence and ethical
              standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border bg-card p-4 text-center">
                Vogue
              </div>
              <div className="rounded-xl border bg-card p-4 text-center">
                Harper&apos;s Bazaar
              </div>
              <div className="rounded-xl border bg-card p-4 text-center">
                The Knot
              </div>
              <div className="rounded-xl border bg-card p-4 text-center">
                Forbes
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
