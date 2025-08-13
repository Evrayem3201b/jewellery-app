"use client";

import { Star } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface DataItem {
  name: string;
  avatar: string;
  content: string;
  margin?: string;
}

const DATA: DataItem[] = [
  {
    name: "Isabella Montgomery",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Isabella%20Montgomery",
    content:
      "The engagement ring exceeded every expectation. From the first consultation to the final reveal, every detail was handled with extraordinary care. The craftsmanship is simply breathtaking.",
    margin: "mt-6",
  },
  {
    name: "Sebastian Ashworth",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Sebastian%20Ashworth",
    content:
      "When I proposed with the custom ring they created, my fiancée was speechless. The attention to detail and the way they captured our story in the design was absolutely perfect.",
  },
  {
    name: "Victoria Sinclair",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Victoria%20Sinclair",
    content:
      "For our 25th anniversary, they transformed my grandmother's heirloom into something extraordinary. The sentimental value combined with their artistry created a piece I'll treasure forever.",
    margin: "mt-4",
  },
  {
    name: "Alexander Hawthorne",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander%20Hawthorne",
    content:
      "The service was impeccable from start to finish. They guided me through selecting the perfect diamond and setting, making what could have been overwhelming feel effortless and enjoyable.",
  },
  {
    name: "Anastasia Whitmore",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Anastasia%20Whitmore",
    content:
      "My custom necklace is a masterpiece. The way they interpreted my vision and elevated it beyond what I imagined is testament to their incredible artistic talent and expertise.",
  },
  {
    name: "Maximilian Sterling",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Maximilian%20Sterling",
    content:
      "The wedding bands they crafted for us are absolutely stunning. Each piece tells our story, and the quality is evident in every detail. Worth every investment for such meaningful pieces.",
  },
  {
    name: "Evangeline Rosewood",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Evangeline%20Rosewood",
    content:
      "I've never experienced such personalized service. They took the time to understand not just what I wanted, but what would truly suit me. The final piece feels like it was always meant to be mine.",
  },
  {
    name: "Theodore Blackwood",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Theodore%20Blackwood",
    content:
      "The expertise and passion they bring to their craft is remarkable. When life's most precious moments deserve the finest, this is where discerning clients come for exceptional jewelry.",
  },
];

interface RewardCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const RewardCard = ({ icon, title, subtitle }: RewardCardProps) => (
  <div className="bg-muted flex flex-col gap-2 rounded-xl p-2 px-4 shadow-sm">
    <div className="flex flex-row items-center gap-2">
      <div className="bg-background rounded-full p-2">
        <img
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-muted-foreground text-sm">{subtitle}</span>
      </div>
    </div>
  </div>
);

const MasonryTestimonialGrid = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        {/* Title */}
        <div className="flex flex-col items-center gap-6 px-4 sm:px-8">
          <h2 className="mb-2 text-center text-3xl  font-semibold lg:text-5xl">
            Treasured by Our Clients
          </h2>
          <p className="text-center text-lg font-[var(--font-body)] text-muted-foreground max-w-2xl">
            Stories of joy, love, and celebration from those who trust us with
            life's most precious moments
          </p>
        </div>

        <div className="after:bg-linear-to-t after:from-background relative mt-14 w-full px-4 after:absolute after:inset-x-0 after:-bottom-2 after:h-96 sm:px-8 md:px-16 lg:px-32">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {DATA.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "rounded-xl p-5 shadow-sm bg-card",
                    idx > 3 && idx <= 5 && "hidden md:block",
                    idx > 5 && "hidden lg:block",
                    testimonial.margin
                  )}
                >
                  <div className="mt-4 flex items-center gap-2">
                    <Avatar className="ring-muted size-9 rounded-full ring-1">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium ">{testimonial.name}</p>
                    </div>
                  </div>

                  <div className="text-foreground mt-4 text-sm font-[var(--font-body)]">
                    <q>{testimonial.content}</q>
                  </div>

                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-accent text-accent h-4 w-4"
                      />
                    ))}
                  </div>
                </Card>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { MasonryTestimonialGrid };
