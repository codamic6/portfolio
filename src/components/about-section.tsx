
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, CheckCircle, Users2 } from "lucide-react";

const education = [
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, degree: "M.Sc. Information Technology", school: "University of Education, Lahore", year: "2023" },
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, degree: "B.Sc. Artificial Intelligence", school: "Punjab University", year: "2024" },
];

const certifications = [
    { icon: <CheckCircle className="h-8 w-8 text-primary" />, name: "AI Developer", provider: "Udemy", year: "2023" },
    { icon: <CheckCircle className="h-8 w-8 text-primary" />, name: "IT Certification", provider: "Coursera", year: "2020" },
]

export function AboutSection() {
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
      },
    },
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 md:py-32 bg-secondary/50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div variants={itemVariants}>
            <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto">
              <Image
                src="https://picsum.photos/600/600?q=1"
                alt="A professional headshot of Luqman, a UI/UX Designer"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint="professional headshot"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-xl border"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                 <p className="font-headline font-semibold text-lg text-primary">Muhammad Luqman</p>
                 <p className="text-sm text-foreground/70">UI/UX Designer & AI Specialist</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="space-y-8" variants={itemVariants}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">I’m Muhammad Luqman — UI/UX Designer, AI Specialist, and Web Developer</h2>
            <p className="text-lg text-foreground/80">
            Muhammad Luqman is a Gen-Z creative technologist blending design, AI, and web development. He builds futuristic interfaces, smart AI systems, and responsive apps.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 lg:gap-24">
           <motion.div className="space-y-6" variants={containerVariants}>
               <h3 className="font-headline text-2xl font-bold">Education</h3>
               {education.map((item, index) => (
                  <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                      <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                      <div>
                          <h4 className="font-headline text-xl font-semibold">{item.degree}</h4>
                          <p className="text-foreground/70">{item.school} - Graduated {item.year}</p>
                      </div>
                  </motion.div>
               ))}
           </motion.div>
           <motion.div className="space-y-6" variants={containerVariants}>
               <h3 className="font-headline text-2xl font-bold">Certifications</h3>
               {certifications.map((item, index) => (
                  <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                      <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                      <div>
                          <h4 className="font-headline text-xl font-semibold">{item.name}</h4>
                          <p className="text-foreground/70">{item.provider} - {item.year}</p>
                      </div>
                  </motion.div>
               ))}
           </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
