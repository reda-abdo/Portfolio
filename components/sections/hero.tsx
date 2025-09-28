"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "/app/images/WhatsApp Image 2025-09-28 at 23.59.19_3bc63f28.jpg"
import img2 from "/app/images/WhatsApp Image 2025-09-28 at 23.59.19_57dc2a0f.jpg"
import img3 from "/app/images/WhatsApp Image 2025-09-28 at 23.59.19_b956aa92.jpg"

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-lg lg:text-6xl font-bold text-foreground"
              >
                HI, I AM
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-lg lg:text-7xl font-bold text-foreground "
              >
                Reda Abd Elbary.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
            >
              A front-end developer passionate about crafting modern,
              responsive, and user-friendly web experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-lg"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  CONTACT ME
                  <div className="w-2 h-2 bg-white rounded-full" />
                </Link>
              </Button>

              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/reda-abdel-bary-95437b33b/?skipRedirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </Link>
                <Link
                  href="https://github.com/reda-abdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </Link>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-sm text-muted-foreground"
            >
              Scroll down
            </motion.p>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                <Image
                  src={img3}
                  alt="Robert Garcia"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
