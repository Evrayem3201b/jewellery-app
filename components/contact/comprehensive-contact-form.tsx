"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ComprehensiveContactForm = () => {
  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-card via-background to-background py-32 lg:mx-4">
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl font-display">
          Visit Our Atelier
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          Experience our collections in person or schedule a private
          consultation with our jewelry experts
        </p>
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold font-display">Showroom Address</h2>
            <p className="mt-3 text-muted-foreground">
              245 Madison Avenue
              <br />
              New York, NY 10016
              <br />
              Monday - Saturday: 10AM - 7PM
              <br />
              Sunday: 12PM - 5PM
            </p>
          </div>
          <div>
            <h2 className="font-semibold font-display">Private Appointments</h2>
            <div className="mt-3">
              <div>
                <p className="text-primary font-medium">Consultation Booking</p>
                <a
                  href="mailto:appointments@atelier.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  appointments@atelier.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Call: (212) 555-0123
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold font-display">Expert Consultation</h2>
            <div className="mt-3">
              <div>
                <p className="text-primary font-medium">
                  Custom Design Services
                </p>
                <a
                  href="mailto:design@atelier.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  design@atelier.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Bespoke jewelry consultation
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashedLine className="my-12" />
        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold font-display">
            Schedule Your Visit
          </h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Full name</Label>
              <Input placeholder="First and last name" />
            </div>
            <div className="space-y-2">
              <Label>Email address</Label>
              <Input placeholder="you@email.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label>Phone number</Label>
              <Input placeholder="(555) 123-4567" type="tel" />
            </div>
            <div className="space-y-2">
              <Label>Service Interest</Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Select a service</option>
                <option value="custom-design">Custom Design</option>
                <option value="engagement-rings">Engagement Rings</option>
                <option value="repairs">Repairs & Restoration</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Preferred Contact Method</Label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contact-method"
                    value="email"
                    className="text-primary"
                  />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contact-method"
                    value="phone"
                    className="text-primary"
                  />
                  <span className="text-sm">Phone</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contact-method"
                    value="both"
                    className="text-primary"
                  />
                  <span className="text-sm">Both</span>
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label>
                Budget Range{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Your message</Label>
              <Textarea
                placeholder="Tell us about your jewelry needs, preferred appointment times, or any special requirements."
                className="min-h-[120px] resize-none"
              />
            </div>
            <div className="flex justify-end">
              <Button
                size="lg"
                type="submit"
                className="bg-primary hover:bg-primary/90"
              >
                Schedule Consultation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { ComprehensiveContactForm };
