
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle } from "lucide-react";

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <motion.section 
      id="about" 
      className="py-20 md:py-32 bg-secondary/50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="md:col-span-2"
            variants={itemVariants}
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Image
                  src="https://picsum.photos/600/600?q=1"
                  alt="A professional headshot of Luqman, a UI/UX Designer"
                  width={600}
                  height={600}
                  className="rounded-full shadow-2xl object-cover"
                  data-ai-hint="professional headshot"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="md:col-span-3 space-y-6" variants={itemVariants}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold !leading-tight">
              I’m a creative technologist blending design, AI, and web development to build futuristic interfaces and smart apps.
            </h2>
            <p className="text-lg text-foreground/80">
              With over two years of experience, I specialize in crafting beautiful and usable web apps, mobile apps, and dashboards. My background in both Artificial Intelligence and Information Technology allows me to not only design stunning user interfaces but also to engineer the intelligent systems that power them. I'm passionate about building modern, user-friendly digital experiences that help businesses stand out and succeed.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 md:mt-24 grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
        >
           <motion.div className="space-y-6" variants={itemVariants}>
               <h3 className="font-headline text-2xl font-bold">Education</h3>
               <div className="space-y-4">
                {education.map((item, index) => (
                    <motion.div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 shadow-sm" variants={itemVariants}>
                        <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                        <div>
                            <h4 className="font-headline text-xl font-semibold">{item.degree}</h4>
                            <p className="text-foreground/70">{item.school} - Graduated {item.year}</p>
                        </div>
                    </motion.div>
                ))}
               </div>
           </motion.div>
           <motion.div className="space-y-6" variants={itemVariants}>
               <h3 className="font-headline text-2xl font-bold">Certifications</h3>
               <div className="space-y-4">
                {certifications.map((item, index) => (
                    <motion.div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 shadow-sm" variants={itemVariants}>
                        <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                        <div>
                            <h4 className="font-headline text-xl font-semibold">{item.name}</h4>
                            <p className="text-foreground/70">{item.provider} - {item.year}</p>
                        </div>
                    </motion.div>
                ))}
               </div>
           </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
