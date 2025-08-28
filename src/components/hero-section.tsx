"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient -z-10"></div>
      <div className="absolute inset-0 bg-background/30 -z-10"></div>
      
      <div className="container px-4 md:px-6 text-center text-foreground animate-in fade-in zoom-in-95 duration-1000">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Hi, I’m Luqman <span className="inline-block animate-wave">👋</span> — A Creative UI/UX Designer
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
          I craft seamless digital experiences with design and usability in mind.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="font-semibold px-8 py-6 text-lg">
            <Link href="#portfolio">View Portfolio</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold bg-background/50 px-8 py-6 text-lg">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce"/>
        </Link>
      </div>

      <style jsx>{`
        .animate-wave {
          display: inline-block;
          animation: wave-animation 2.5s infinite;
          transform-origin: 70% 70%;
        }
        @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
}
