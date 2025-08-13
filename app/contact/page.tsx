import React from "react";
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form";

export default function ContactPage() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-6xl">
        <div className="overflow-hidden rounded-3xl border bg-card">
          <div className="relative h-[260px] w-full">
            <img
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Atelier interior"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          </div>
          <div className="px-8 pb-10 pt-6 sm:px-10">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
              Contact
            </h1>
            <p className="mt-3 max-w-prose text-foreground/80">
              Visit our atelier or schedule a private consultation.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ComprehensiveContactForm />
      </div>
    </section>
  );
}
