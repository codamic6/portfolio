"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-dvh min-h-dvh flex items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 animated-gradient -z-20"></div>
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[20px] -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10 text-center md:text-left">
            <motion.h1 
              className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hey, I’m Muhammad Luqman
            </motion.h1>

            <motion.p 
              className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-foreground/70"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              UI/UX Designer | AI Developer | Web Innovator
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button asChild size="lg" className="font-semibold group w-full sm:w-auto transition-all duration-300 hover:shadow-primary/40 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-primary to-accent/80 text-primary-foreground">
                <Link href="/contact">
                  Hire Me
                  <MoveUpRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background/50 group w-full sm:w-auto transition-all duration-300 hover:bg-background/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>
          </div>
          
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
                <path d="M50,0 A50,50 0 0,1 100,50" stroke="url(#g1)" strokeWidth="2"/>
                <path d="M50,100 A50,50 0 0,1 0,50" stroke="url(#g2)" strokeWidth="2"/>
                 <defs>
                  <linearGradient id="g1" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  <linearGradient id="g2" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="transparent" />
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
