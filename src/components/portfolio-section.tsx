"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Project = {
  title: string;
  client: string;
  description: string;
  tools: string[];
  category: "Mobile Apps" | "Web Design" | "Landing Pages" | "Dashboards";
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "E-commerce App",
    client: "StyleHub",
    description: "A complete design of a mobile e-commerce application to improve user flow and increase conversions. Focused on a clean, modern interface and intuitive navigation.",
    tools: ["Figma", "Photoshop"],
    category: "Mobile Apps",
    imageUrl: "/IMG-20260720-WA0002.jpg",
    imageHint: "mobile app",
  },
  {
    title: "SaaS Dashboard UI",
    client: "DataCorp",
    description: "Designed a complex data visualization dashboard for a B2B SaaS platform, enabling users to easily monitor and analyze key metrics.",
    tools: ["Adobe XD", "Illustrator"],
    category: "Dashboards",
    imageUrl: "/IMG-20260719-WA0003.jpg",
    imageHint: "dashboard analytics",
    liveUrl: "#",
  },
  {
    title: "Daily Weather Forecasting App",
    client: "Weather Updates Agency",
    description: "A Weather App Created to Upcoming Weather Updates, Rain, Temperature, Wind And Other Things With a very interactive and responsive UI",
    tools: ["Webflow", "Figma"],
    category: "Web Design",
    imageUrl: "/IMG-20260719-WA0012.jpg",
    imageHint: "weather app",
  },
  {
    title: "Paper Generating App",
    client: "Innovate Inc.",
    description: "A web-based application designed to streamline the assessment process. Features dynamic question banking, customizable exam layouts, automated paper generation, and instant PDF exports for educational institutes.",
    tools: ["Figma", "Photoshop"],
    category: "Landing Pages",
    imageUrl: "/IMG-20260720-WA0003.jpg",
    imageHint: "paper Generating app",
  },
  {
    title: "Veges Store App",
    client: "Hub Mart",
    description: "A user-friendly mobile/web application designed for online grocery shopping, featuring fresh produce categorization, real-time order tracking, localized inventory management, and seamless cart management.",
    tools: ["Figma", "Adobe XD"],
    category: "Mobile Apps",
    imageUrl: "/IMG-20260720-WA0004.jpg",
    imageHint: "veges app",
  },
  {
    title: "Homely – Modern Interior & Living Landing Page",
    client: "Global Enterprises",
    description: "A high-converting, fully responsive landing page designed to showcase modern home decor, interior services, and property listings. Features modern hero sections, interactive service showcases, and seamless lead-capture call-to-actions.",
    tools: ["Figma", "Illustrator"],
    category: "Web Design",
    imageUrl: "/IMG-20260720-WA0013.jpg",
    imageHint: "corporate portal",
  },
];

const categories = ["All", "Mobile Apps", "Web Design", "Landing Pages", "Dashboards"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-12">
              Here are some of the projects I'm proud to have worked on.
            </p>
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 mb-12 animate-in fade-in-0 slide-in-from-bottom-10 delay-100 duration-500">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="font-semibold rounded-full bg-background/30 backdrop-blur-sm transition-transform hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <DialogTrigger asChild key={index} onClick={() => setSelectedProject(project)}>
                <Card
                  className="overflow-hidden group cursor-pointer shadow-lg hover:shadow-primary/20 transition-shadow duration-300 animate-in fade-in-0 zoom-in-95"
                  style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'backwards' }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={project.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="p-4 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <Eye className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="font-headline text-xl font-semibold mb-2">{project.title}</h3>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
          </div>
        </div>

        {selectedProject && (
          <DialogContent className="max-w-3xl p-0 animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-l-lg"
                  data-ai-hint={selectedProject.imageHint}
                />
              </div>
              <div className="p-8 flex flex-col">
                <DialogHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{selectedProject.category}</Badge>
                  <DialogTitle className="font-headline text-2xl mb-2">{selectedProject.title}</DialogTitle>
                  <p className="text-sm text-muted-foreground">Client: {selectedProject.client}</p>
                </DialogHeader>
                <DialogDescription className="mt-4 text-base flex-grow">{selectedProject.description}</DialogDescription>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map(tool => (
                      <Badge key={tool} variant="outline">{tool}</Badge>
                    ))}
                  </div>
                </div>
                {selectedProject.liveUrl && (
                  <Button asChild className="mt-8 w-full font-semibold transition-transform hover:scale-105">
                    <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Site
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
