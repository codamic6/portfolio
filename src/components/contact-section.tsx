"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Dribbble } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import { BehanceIcon, FiverrIcon, LinkedinIcon } from "./icons";

const socialLinks = [
  { name: "Fiverr", icon: <FiverrIcon className="h-6 w-6" />, url: "#" },
  { name: "Behance", icon: <BehanceIcon className="h-6 w-6" />, url: "#" },
  { name: "Dribbble", icon: <Dribbble className="h-6 w-6" />, url: "#" },
  { name: "LinkedIn", icon: <LinkedinIcon className="h-6 w-6" />, url: "#" },
];

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // In a real app, you'd handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95 delay-200 duration-500">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="font-headline text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input id="name" type="text" placeholder="Your Name" required className="text-base" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" required className="text-base" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" placeholder="Your Message" required rows={5} className="text-base" />
                </div>
                <Button type="submit" size="lg" className="w-full font-semibold transition-transform hover:scale-105">Send Message</Button>
              </form>
            </div>
            <div className="bg-secondary/50 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-headline text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:nazeerluqman92@gmail.com" className="ml-2 hover:text-primary transition-colors">nazeerluqman92@gmail.com</a>
                </p>
                <p>
                  <strong>Location:</strong>
                  <span className="ml-2">Faisalabad, Pakistan</span>
                </p>
              </div>
              <div className="mt-8">
                <h4 className="font-headline text-xl font-bold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                     <div key={social.name} className="animate-in fade-in-0 zoom-in-50" style={{ animationDelay: `${index * 100}ms`}}>
                      <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-transform hover:scale-110">
                        <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                          {social.icon}
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
