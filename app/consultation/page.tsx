import Image from "next/image";
import React from "react";

export default function ConsultationPage() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-4xl">
        <div className="overflow-hidden rounded-3xl border bg-card">
          <div className="relative h-[260px] w-full">
            <Image
              src="/images/online-shopping-tablet-fashionable-attractive-260nw-2354763293.webp"
              alt="Private consultation"
              className="absolute inset-0 size-full object-cover"
              width={700}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          </div>
          <div className="px-8 pb-10 pt-6 sm:px-10">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
              Book a Consultation
            </h1>
            <p className="mt-3 max-w-prose text-foreground/80">
              Work with a Vector specialist to design or select the perfect
              piece. Appointments available in‑person or virtually via secure
              video.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
              >
                Schedule Now
              </a>
              <a
                href="/craftsmanship#process"
                className="inline-flex items-center rounded-full border px-6 py-3 hover:bg-muted"
              >
                Learn our process
              </a>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <p className="font-display text-xl font-semibold">Bespoke Design</p>
            <p className="mt-2 text-muted-foreground">
              From concept sketch to setting selection with your designer.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="font-display text-xl font-semibold">
              Diamond Education
            </p>
            <p className="mt-2 text-muted-foreground">
              Understand cut, color, clarity, and carat with our experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
