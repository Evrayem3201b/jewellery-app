"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const GlassmorphicHero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br">
      <div className="overflow-hidden">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center backdrop-blur-sm bg-background/30 rounded-2xl p-8 border-muted/20">
              <div className="inline-flex items-center rounded-full px-4 py-2 text-xs font-medium text-primary mb-6">
                FINE JEWELRY SINCE 1925
              </div>
              <h1 className="mb-8 text-4xl font-display font-semibold text-pretty lg:text-7xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Timeless Elegance, Crafted to Perfection
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground/90 lg:text-xl leading-relaxed font-body">
                Discover our exquisite collection of handcrafted jewelry, where
                every piece tells a story of luxury, artistry, and enduring
                beauty.
              </p>
              <div className="mt-14 flex w-full flex-col justify-center gap-3 sm:flex-row">
                <Button
                  className="group transition-all w-auto p-3.5 rounded-full duration-300 hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/collections">
                    Explore Collections
                    <ChevronRight className="ml-2 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="group transition-all duration-300 hover:text-black hover:bg-muted/50 hover:scale-105"
                  asChild
                >
                  <Link href="/consultation">
                    Book Private Viewing
                    <ChevronRight className="ml-2 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative mt-28">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-tr-4xl rounded-tl-4xl z-10" />
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Luxury jewelry collection showcase"
              className="mx-auto max-h-[700px] w-full max-w-7xl rounded-tr-4xl rounded-tl-4xl object-cover ring-1 ring-muted/20 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { GlassmorphicHero };
