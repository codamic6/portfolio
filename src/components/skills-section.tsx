
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { BrainCircuit, Code, Database, Palette, Bot } from "lucide-react";

const skills = [
  { name: "Website Development", level: 99, icon: <Code className="h-8 w-8" /> },
  { name: "Data Cleaning", level: 91, icon: <Database className="h-8 w-8" /> },
  { name: "Artificial Intelligence", level: 93, icon: <BrainCircuit className="h-8 w-8" /> },
  { name: "Machine Learning", level: 96, icon: <Bot className="h-8 w-8" /> },
  { name: "Adobe", level: 100, icon: <Palette className="h-8 w-8" /> },
  { name: "Python", level: 88, icon: <Code className="h-8 w-8" /> },
  { name: "React & Next.js", level: 80, icon: <Code className="h-8 w-8" /> },
  { name: "UI/UX Design", level: 92, icon: <BrainCircuit className="h-8 w-8" /> },
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

const ProgressBar = ({ level }: { level: number }) => {
  return (
    <div className="w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-2.5">
      <motion.div
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
};


export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 xl:py-40">
      <div className="container mx-auto px-5 sm:px-10 md:px-10 lg:px-16 xl:px-20 2xl:max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <motion.div 
            className="lg:col-span-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold !leading-tight">
              My Skills
            </h2>
            <p className="text-lg text-foreground/70 mt-4">
              The tools and technologies I master to build dynamic digital experiences.
            </p>
            <motion.div 
              className="mt-4 h-1 w-24 mx-auto lg:mx-0 bg-primary"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'circOut' }}
            />
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="group flex flex-col p-6 text-left h-full bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg border-transparent border transition-all duration-300 hover:shadow-primary/20 hover:border-primary/20 hover:-translate-y-1">
                  <CardContent className="p-0 flex flex-col">
                    <motion.div
                      className="text-primary mb-4 transition-colors duration-300"
                      whileHover={{ scale: 1.15, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-headline text-lg font-semibold leading-tight mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{skill.level}% Proficiency</p>
                    <ProgressBar level={skill.level} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
