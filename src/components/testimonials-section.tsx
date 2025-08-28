"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";


const testimonials = [
  {
    name: "Sarah Johnson",
    company: "CEO, Innovate Inc.",
    feedback: "Luqman's design sense is impeccable. He transformed our app into something both beautiful and incredibly user-friendly. Our user engagement has skyrocketed since the redesign!",
    avatar: "https://picsum.photos/100/100?random=1",
    avatarHint: "woman headshot",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Product Manager, DataCorp",
    feedback: "Working with Luqman was a breeze. He's a great communicator and was able to translate our complex requirements into an elegant and intuitive dashboard design.",
    avatar: "https://picsum.photos/100/100?random=2",
    avatarHint: "man headshot",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Marketing Director, Creative Solutions",
    feedback: "The website Luqman designed for us perfectly captures our brand's essence. It's modern, professional, and has received nothing but compliments from our clients.",
    avatar: "https://picsum.photos/100/100?random=3",
    avatarHint: "woman professional",
    rating: 5,
  },
    {
    name: "David Lee",
    company: "Founder, FitLife",
    feedback: "I was impressed by Luqman's attention to detail and his commitment to creating a user-centric experience. He truly understands the nuances of mobile UI/UX design.",
    avatar: "https://picsum.photos/100/100?random=4",
    avatarHint: "man smiling",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-5 w-5",
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"
        )}
      />
    ))}
  </div>
);

import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">What My Clients Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-12">
            I'm humbled by the positive feedback from clients I've had the pleasure to work with.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                      <Avatar className="h-20 w-20 mb-4 border-2 border-primary transition-transform hover:scale-110">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold font-headline text-xl">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground mb-4">{testimonial.company}</p>
                      <StarRating rating={testimonial.rating} />
                      <p className="text-foreground/80 mt-6 flex-grow">"{testimonial.feedback}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex transition-transform hover:scale-110" />
          <CarouselNext className="hidden lg:flex transition-transform hover:scale-110" />
        </Carousel>
      </div>
    </section>
  );
}
