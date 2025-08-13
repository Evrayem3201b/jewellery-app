"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const utilities = [
  {
    title: "Master Artisans",
    description:
      "Our skilled craftspeople bring decades of experience and traditional techniques to every piece, ensuring unmatched quality and attention to detail.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Premium Materials",
    description:
      "We source only the finest diamonds, precious metals, and gemstones, each carefully selected for exceptional quality and brilliance.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lifetime Service",
    description:
      "Your investment is protected with comprehensive lifetime care, including cleaning, repairs, and maintenance to preserve your jewelry's beauty forever.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ThreeColumnImageCards = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="m-auto mb-24 max-w-xl text-center">
          <h2 className="mb-6 text-3xl font-semibold lg:text-5xl font-display text-foreground">
            Unparalleled Craftsmanship
          </h2>
          <p className="m-auto max-w-3xl text-lg lg:text-xl text-muted-foreground font-body">
            Every piece is meticulously crafted by master artisans using
            traditional techniques and the finest materials
          </p>
          <div className="mt-8 flex flex-col items-center space-y-2">
            <Button
              className="rounded-xl bg-primary hover:bg-accent text-primary-foreground"
              size="lg"
              asChild
            >
              <Link href="/craftsmanship#process">Learn Our Process</Link>
            </Button>
          </div>
        </div>
        <div className="mt-11 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {utilities.map((utility, index) => (
            <Card key={index} className="border-0 pt-0 bg-card">
              <img
                src={utility.image}
                alt={utility.title}
                className="aspect-video w-full rounded-t-xl object-cover"
              />
              <div className="p-5">
                <p className="mb-1 font-medium font-display text-card-foreground">
                  {utility.title}
                </p>
                <p className="text-muted-foreground font-body">
                  {utility.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ThreeColumnImageCards };
