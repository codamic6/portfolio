"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#skills", label: "Skills" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-headline text-2xl font-bold text-primary transition-transform hover:scale-105">
          Luqman
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button variant="ghost" asChild key={link.href}>
              <Link
                href={link.href}
                className="font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </Button>
          ))}
           <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-lg">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary animate-in fade-in-0 slide-in-from-top-4"
                       style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'both' }}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
