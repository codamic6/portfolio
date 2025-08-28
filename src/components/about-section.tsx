import Image from "next/image";
import { Award, Briefcase, Users } from "lucide-react";

const highlights = [
  { icon: <Award className="h-8 w-8 text-primary" />, title: "2+ Years Experience", description: "Designing beautiful and functional digital products." },
  { icon: <Briefcase className="h-8 w-8 text-primary" />, title: "Creative Mindset", description: "Bringing innovative ideas and unique perspectives to every project." },
  { icon: <Users className="h-8 w-8 text-primary" />, title: "International Clients", description: "Successfully collaborating with clients from around the globe." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto">
              <Image
                src="/luqman.jpg"
                alt="A professional headshot of Luqman, a UI/UX Designer"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint="professional headshot"
              />
              <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-xl border">
                 <p className="font-headline font-semibold text-lg text-primary">Muhammad Luqman</p>
                 <p className="text-sm text-foreground/70">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-1000">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-foreground/80">
              I'm a passionate and detail-oriented UI/UX designer with a knack for creating intuitive and aesthetically pleasing digital experiences. My design philosophy is centered around empathy, ensuring that every product is not only beautiful but also user-friendly and accessible.
            </p>
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
