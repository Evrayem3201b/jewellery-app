import { Facebook, Instagram, Twitter } from "lucide-react";

const navigation = [
  {
    title: "Collections",
    links: [
      { name: "All Collections", href: "/collections" },
      { name: "Engagement", href: "/collections#engagement" },
      { name: "Wedding", href: "/collections#wedding" },
      { name: "Contemporary", href: "/collections#contemporary" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Craftsmanship", href: "/craftsmanship" },
      { name: "Custom Design", href: "/consultation" },
      { name: "Repairs", href: "/craftsmanship#repairs" },
      { name: "Appraisals", href: "/craftsmanship#appraisals" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Heritage", href: "/about#heritage" },
      { name: "Press", href: "/about#press" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Care Guide", href: "/collections#care" },
      { name: "Sizing", href: "/collections#sizing" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Top Section: Brand + Navigation */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 sm:mb-16 sm:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            <div className="mb-2">
              <h1 className="font-display text-3xl font-bold text-foreground">
                Vector
              </h1>
            </div>
            <p className="text-base text-foreground/80">
              Timeless fine jewelry crafted by master artisans.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-4">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 text-lg font-semibold font-display">
                    {section.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-foreground/80 transition-colors duration-200 hover:text-foreground"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="rounded-full p-3 text-foreground/80 transition-all duration-200 hover:bg-accent hover:text-foreground active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-sm text-foreground/70 sm:text-left md:order-1">
            © 2024 Vector Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
