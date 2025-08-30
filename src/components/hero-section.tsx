
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { MoveUpRight, Code, PenTool, BrainCircuit } from "lucide-react";

const FloatingIcon = ({ icon, className, delay = 0 }: { icon: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.8, ease: "easeOut" }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};


export function HeroSection() {
  const [dynamicText, setDynamicText] = useState("Design");
  const words = ["AI", "UI/UX", "Graphic"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicText(prev => {
        const currentIndex = words.indexOf(prev);
        return words[(currentIndex + 1) % words.length];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-dvh min-h-[700px] flex items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 animated-gradient -z-20"></div>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[100px] -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <motion.h1 
              className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter !leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Your Gateway of <br/>
              <motion.span 
                key={dynamicText}
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {dynamicText}
              </motion.span>
            </motion.h1>

            <motion.p 
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
             Hey, I’m <span className="font-semibold text-foreground">Muhammad Luqman</span>.
             Where creativity meets AI brilliance.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button asChild size="lg" className="font-semibold group w-full sm:w-auto transition-all duration-300 hover:shadow-primary/40 hover:shadow-lg hover:-translate-y-1 bg-primary text-primary-foreground">
                <Link href="/contact">
                  Let's Build Something
                  <MoveUpRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background/50 group w-full sm:w-auto transition-all duration-300 hover:bg-background/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30">
                <Link href="/portfolio">See My Work</Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[30rem] h-[30rem]">
                <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl animate-pulse-slow"></div>
                <svg className="absolute inset-0 w-full h-full text-primary/30 animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50,0 A50,50 0 0,1 100,50" stroke="url(#g1)" strokeWidth="2"/>
                  <path d="M50,100 A50,50 0 0,1 0,50" stroke="url(#g2)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="g1" gradientTransform="rotate(90)">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="g2" gradientTransform="rotate(90)">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
                <motion.div 
                    className="absolute inset-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src="/luqman.jpg"
                        alt="A professional headshot of Luqman, a UI/UX Designer"
                        width={600}
                        height={600}
                        className="object-cover rounded-full shadow-2xl"
                        data-ai-hint="professional headshot"
                        priority
                    />
                </motion.div>
                <FloatingIcon icon={<PenTool className="w-14 h-14 text-primary/70" />} className="absolute top-0 left-20" delay={0} />
                <FloatingIcon icon={<Code className="w-14 h-14 text-primary/70" />} className="absolute bottom-8 -right-12" delay={0.2} />
                <FloatingIcon icon={<BrainCircuit className="w-14 h-14 text-primary/70" />} className="absolute top-1/2 -left-16" delay={0.4} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
