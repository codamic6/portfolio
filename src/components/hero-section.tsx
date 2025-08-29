"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, BrainCircuit, Code, Palette } from "lucide-react";
import { Badge } from "./ui/badge";

const skills = [
    { name: 'UI/UX Design', icon: <Palette className="h-4 w-4" />, position: 'top-1/4 left-1/4', delay: 200 },
    { name: 'AI Specialist', icon: <BrainCircuit className="h-4 w-4" />, position: 'top-1/3 right-1/4', delay: 400 },
    { name: 'Web Dev', icon: <Code className="h-4 w-4" />, position: 'bottom-1/4 left-1/3', delay: 600 },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-dvh min-h-[700px] flex flex-col items-center justify-center overflow-hidden p-4"
    >
      <div className="absolute inset-0 animated-gradient -z-20"></div>
      <div className="absolute inset-0 bg-background/30 -z-10"></div>

      <div className="relative text-center flex flex-col items-center z-10">
        
        <div className="animate-in fade-in zoom-in-50 duration-1000">
            <Image
                src="https://picsum.photos/600/600"
                alt="A professional headshot of Luqman, a UI/UX Designer"
                width={120}
                height={120}
                className="object-cover rounded-full shadow-2xl border-4 border-background/50 mb-6"
                data-ai-hint="professional headshot"
                priority
              />
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          Hi, I’m Luqman <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          A Creative UI/UX Designer, AI Specialist, and Web Developer.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600">
          <Button asChild size="lg" className="font-semibold px-8 py-6 text-lg transition-transform hover:scale-105">
            <Link href="/portfolio">View My Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold bg-background/50 px-8 py-6 text-lg transition-transform hover:scale-105"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-in fade-in delay-1000 duration-1000">
        <Link href="/#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
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
