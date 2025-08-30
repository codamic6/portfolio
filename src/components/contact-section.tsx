
"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { FiverrIcon, LinkedinIcon, TiktokIcon } from "./icons";

const socialLinks = [
  { name: "Instagram", icon: <Instagram className="h-7 w-7" />, url: "#" },
  { name: "TikTok", icon: <TiktokIcon className="h-7 w-7" />, url: "#" },
  { name: "Facebook", icon: <Facebook className="h-7 w-7" />, url: "#" },
  { name: "Fiverr", icon: <FiverrIcon className="h-7 w-7" />, url: "#" },
  { name: "LinkedIn", icon: <LinkedinIcon className="h-7 w-7" />, url: "#" },
];

export function ContactSection() {

  return (
    <section id="contact" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-12">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95 delay-200 duration-500 bg-card/50 backdrop-blur-lg">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-8">Let's Connect</h3>
            <div className="space-y-6 text-lg md:text-xl mb-12">
                <a href="mailto:nazeerluqman92@gmail.com" className="flex items-center justify-center gap-3 hover:text-primary transition-colors group">
                    <Mail className="h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                    <span>nazeerluqman92@gmail.com</span>
                </a>
                <div className="flex items-center justify-center gap-3">
                    <MapPin className="h-6 w-6 text-primary/80" />
                    <span>Faisalabad, Pakistan</span>
                </div>
            </div>
            
            <div className="border-t border-border/50 my-8"></div>

            <h4 className="font-headline text-xl font-bold mb-6">Follow Me</h4>
            <div className="flex justify-center flex-wrap gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                 <div key={social.name} className="animate-in fade-in-0 zoom-in-50" style={{ animationDelay: `${index * 100 + 300}ms`}}>
                  <Button asChild variant="outline" size="icon" className="h-16 w-16 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-primary/30 hover:shadow-lg hover:bg-primary/10 hover:text-primary">
                    <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      {social.icon}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
