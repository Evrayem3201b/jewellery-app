import React from "react";

export default function CraftsmanshipPage() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-6xl">
        {/* Hero */}
        <div className="overflow-hidden rounded-3xl border bg-card">
          <div className="relative h-[320px] w-full">
            <img
              src="/images/gem-appraisal.jpg"
              alt="Bench jeweler crafting a ring"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          </div>
          <div className="px-8 pb-10 pt-6 sm:px-10 lg:px-12">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground lg:text-6xl">
              Craftsmanship
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-foreground/80">
              Our master artisans and meticulous processes behind every Vector
              piece.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-16">
          <section
            id="process"
            className="grid items-start gap-8 lg:grid-cols-2"
          >
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">
                Our Process
              </h2>
              <p className="mt-3 text-foreground/80">
                From initial sketch and CAD modeling to stone setting and final
                polish, each step is executed to exacting standards to ensure
                lasting beauty and integrity.
              </p>
            </div>
            <img
              className="h-72 w-full rounded-2xl border object-cover"
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Crafting process"
            />
          </section>

          <section
            id="repairs"
            className="grid items-start gap-8 lg:grid-cols-2"
          >
            <img
              className="order-last h-72 w-full rounded-2xl border object-cover lg:order-first"
              src="/images/repair-restoration.jpg"
              alt="Repair and restoration"
            />
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">
                Repairs & Restoration
              </h2>
              <p className="mt-3 text-foreground/80">
                Preserve heirlooms with resizing, re-tipping prongs, stone
                replacement, and refinishing performed by our in‑house
                specialists.
              </p>
            </div>
          </section>

          <section
            id="appraisals"
            className="grid items-start gap-8 lg:grid-cols-2"
          >
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">
                Appraisals
              </h2>
              <p className="mt-3 text-foreground/80">
                Professional valuations for insurance and legacy planning,
                prepared by GIA‑trained gemologists.
              </p>
            </div>
            <img
              className="h-72 w-full rounded-2xl border object-cover"
              src="/images/gem-appraisal.webp"
              alt="Gem appraisal"
            />
          </section>
        </div>
      </div>
    </section>
  );
}
