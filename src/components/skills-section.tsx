import { Card, CardContent } from "./ui/card";
import { BrainCircuit } from "lucide-react";
import { FigmaIcon, AdobeXDIcon, AdobePhotoshopIcon, AdobeIllustratorIcon, WebflowIcon } from "./icons";

const skills = [
  { name: "Figma", icon: <FigmaIcon className="h-10 w-10" /> },
  { name: "Adobe XD", icon: <AdobeXDIcon className="h-10 w-10" /> },
  { name: "Photoshop", icon: <AdobePhotoshopIcon className="h-10 w-10" /> },
  { name: "Illustrator", icon: <AdobeIllustratorIcon className="h-10 w-10" /> },
  { name: "Webflow", icon: <WebflowIcon className="h-10 w-10" /> },
  { name: "UI/UX Principles", icon: <BrainCircuit className="h-10 w-10 text-primary" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="animate-in fade-in zoom-in-95 duration-500" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}>
              <Card className="flex flex-col items-center justify-center p-6 text-center h-full shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-0 flex flex-col items-center justify-center flex-grow">
                  <div className="text-foreground mb-4 transition-transform group-hover:scale-110">{skill.icon}</div>
                  <p className="font-semibold font-headline text-lg leading-tight">{skill.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
