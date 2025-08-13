import { GlassmorphicHero } from "@/components/heros/glassmorphic-hero";
import { ComplexBentoGrid } from "@/components/bentos/complex-bento-grid";
import { ThreeColumnImageCards } from "@/components/feature/three-column-image-cards";
import { MasonryTestimonialGrid } from "@/components/testimonials/masonry-testimonial-grid";
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function Home() {
  return (
    <>
      {/* ... navbar now in RootLayout with padding fix ... */}
      <GlassmorphicHero />
      <ComplexBentoGrid />
      <ThreeColumnImageCards />
      <MasonryTestimonialGrid />
      <ComprehensiveContactForm />
      <NewsletterFooter />
    </>
  );
}
