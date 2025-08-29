"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { BrainCircuit, Code, Palette, MoveUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from '@/lib/utils';

const cyclingKeywords = ["AI.", "Design.", "Future."];

const FloatingIcon = ({ icon, className }: { icon: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    damping: 15,
    stiffness: 150,
    mass: 1
  };

  const dx = useTransform(x, (val) => val / 20);
  const dy = useTransform(y, (val) => val / 20);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);
  
  return (
    <motion.div
      style={{
          x: dx,
          y: dy,
      }}
      className={cn("absolute p-0.5 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 shadow-lg", className)}
      transition={{ type: 'spring', ...springConfig }}
    >
      <div className="p-2 bg-background/80 backdrop-blur-sm rounded-full">
        {icon}
      </div>
    </motion.div>
  );
};


export function HeroSection() {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const textControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await textControls.start({ y: "0%", opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } });
        await new Promise(resolve => setTimeout(resolve, 2000));
        await textControls.start({ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } });
        setCurrentKeywordIndex((prev) => (prev + 1) % cyclingKeywords.length);
        textControls.set({ y: "100%", opacity: 0 });
      }
    };
    sequence();
  }, [textControls]);

  return (
    <section id="home" className="relative w-full min-h-dvh h-dvh flex items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 animated-gradient -z-20"></div>
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[20px] -z-10"></div>
      
      <FloatingIcon icon={<BrainCircuit className="h-5 w-5 text-primary" />} className="top-[15%] left-[10%] md:top-[20%] md:left-[20%]" />
      <FloatingIcon icon={<Palette className="h-5 w-5 text-primary" />} className="bottom-[15%] left-[30%] md:bottom-[20%] md:left-[40%]" />
      <FloatingIcon icon={<Code className="h-5 w-5 text-primary" />} className="top-[25%] right-[10%] md:top-[30%] md:right-[20%]" />


      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center md:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Shaping The
              <span className="relative inline-block h-[1.2em] w-[200px] sm:w-[250px] md:w-[300px] ml-4 align-bottom overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent/80 opacity-20 rounded-lg"></span>
                <motion.span
                  animate={textControls}
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                >
                  {cyclingKeywords[currentKeywordIndex]}
                </motion.span>
              </span>
            </h1>

            <motion.p 
              className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Where creativity meets AI brilliance.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button asChild size="lg" className="font-semibold group w-full sm:w-auto transition-all duration-300 hover:shadow-primary/40 hover:shadow-lg hover:-translate-y-1">
                <Link href="/contact">
                  Let's Build Something
                  <MoveUpRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background/50 group w-full sm:w-auto transition-all duration-300 hover:bg-background/80 hover:-translate-y-1">
                <Link href="/portfolio">See My Work</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-background/50 backdrop-blur-lg"></div>
              <svg className="absolute inset-0 w-full h-full text-primary/30 animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,0 A50,50 0 0,1 100,50" stroke="url(#g1)" stroke-width="2"/>
                <path d="M50,100 A50,50 0 0,1 0,50" stroke="url(#g2)" stroke-width="2"/>
                 <defs>
                  <linearGradient id="g1" gradientTransform="rotate(90)">
                    <stop offset="0%" stop-color="var(--color-primary)" />
                    <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
                  <linearGradient id="g2" gradientTransform="rotate(90)">
                    <stop offset="0%" stop-color="var(--color-accent)" />
                    <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
                </defs>
              </svg>
               <Image
                src="https://picsum.photos/600/600"
                alt="A professional headshot of Luqman, a UI/UX Designer"
                width={300}
                height={300}
                className="absolute inset-[25px] object-cover rounded-full shadow-2xl"
                data-ai-hint="professional headshot"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
