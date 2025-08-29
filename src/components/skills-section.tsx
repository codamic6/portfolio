
"use client";

import { Card, CardContent } from "./ui/card";
import { BrainCircuit } from "lucide-react";
import { FigmaIcon, AdobeXDIcon, AdobePhotoshopIcon, AdobeIllustratorIcon, WebflowIcon } from "./icons";
import { motion } from "framer-motion";

const skills = [
  { name: "Figma", icon: <FigmaIcon className="h-10 w-10" /> },
  { name: "Adobe XD", icon: <AdobeXDIcon className="h-10 w-10" /> },
  { name: "Photoshop", icon: <AdobePhotoshopIcon className="h-10 w-10" /> },
  { name: "Illustrator", icon: <AdobeIllustratorIcon className="h-10 w-10" /> },
  { name: "Webflow", icon: <WebflowIcon className="h-10 w-10" /> },
  { name: "UI/UX Principles", icon: <BrainCircuit className="h-10 w-10 text-primary" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const iconHoverVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
           <h2 className="font-headline text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Professional Skills
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 mt-4">
            A showcase of the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="group flex flex-col items-center justify-center p-6 text-center h-full bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-2xl hover:border-primary/30 border-transparent border">
                <CardContent className="p-0 flex flex-col items-center justify-center flex-grow">
                  <motion.div 
                    className="text-foreground mb-4 transition-colors duration-300 group-hover:text-primary"
                    variants={iconHoverVariants}
                    whileHover="hover"
                  >
                    {skill.icon}
                  </motion.div>
                  <p className="font-semibold font-headline text-lg leading-tight">{skill.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
