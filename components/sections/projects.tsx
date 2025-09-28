"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
// import img1 from "/app/images/Screenshot 2025-09-29 000145.jpg"
import img2 from "../../app/images/Screenshot 2025-09-29 000145.png"
import img3 from "../../app/images/Screenshot 2025-09-29 002453.png"
import img4 from "../../app/images/Screenshot 2025-09-29 002421.png"
import img5 from "../../app/images/Screenshot 2025-09-29 003108.png"
import img6 from "../../app/images/Screenshot 2025-09-29 002934.png"
import img7 from "../../app/images/Screenshot 2025-09-29 002919.png"


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description:
        "A full-stack e-commerce platform featuring product listing, cart, and seamless checkout experience. Implemented secure authentication with NextAuth, efficient state management using Redux Toolkit, and robust form validation with React Hook Form and Zod. Designed with Tailwind CSS to ensure a responsive, high-performance user experience.",
      image: img2,
      year: "2025",
      role: "Front-end Developer",
      client: "Personal Project",
      tech: [
        "Next.js",
        "TailwindCss",
        "TypeScript",
        "NextAuth",
        "Redux",
        "React Hook Form",
        "Zod",
      ],
      liveUrl: "https://e-commerce-six-pi-58.vercel.app/",
      githubUrl: "https://github.com/reda-abdo/E-Commerce",
      label: null,
    },
    {
      id: 2,
      title: "Social App",
      description:
        "A responsive social media platform enabling user authentication, post creation, and real-time data fetching powered by TanStack Query and Axios. Enhanced user experience with form validation (React Hook Form + Zod) and fluid animations using Framer Motion, all styled with Tailwind CSS for a modern, responsive interface.",
      image: img4,
      year: "2025",
      role: "Front-end Developer",
      client: "Personal Project",
      tech: [
        "React",
        "Tailwind CSS",
        "TanStack Query",
        "Axios",
        "React Hook Form",
        "Zod",
        " Framer Motio",
      ],
      liveUrl: "https://social-app-nine-wheat.vercel.app/login",
      githubUrl: "https://github.com/reda-abdo/Social-App",
      label: null,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application delivering real-time weather updates with support for multiple locations. Designed with a clean, user-friendly interface and interactive temperature graphs using HTML, CSS, and JavaScript for an engaging user experience.",
      image: img3,
      year: "205",
      role: "Front-end Developer",
      client: "Personal Project",
      tech: ["Html", "CSS", "JavaScript"],
      liveUrl: "https://weather3-5dglhixbe-team5-84fe2033.vercel.app/",
      githubUrl: "https://github.com/reda-abdo/weather3",
      label: null,
    },
    {
      id: 4,
      title: "Devfolio",
      description:
        "A responsive developer portfolio website showcasing smooth animations and well-structured sections for About, Portfolio, and Contact. Built with HTML, CSS, and JavaScript to ensure a clean design and seamless user experience.",
      image: img7,
      year: "2022",
      role: "Front-end Developer",
      client: "Personal Project",
      tech: ["React", "CSS", "JavaScript"],
      liveUrl: "https://devfolio-pi-one.vercel.app/",
      githubUrl: "https://github.com/reda-abdo/Devfolio-",
      label: null,
    },
    {
      id: 5,
      title: "Mealify",
      description:
        "A responsive restaurant landing page designed with HTML and CSS, smooth animations to deliver an engaging and accessible user experience across all devices.",
      image: img6,
      year: "2025",
      role: "Front-end Developer",
      client: "Personal Project",
      tech: ["Html", "CSS", "JavaScript"],
      liveUrl: "https://mealify-lime.vercel.app/",
      githubUrl: "https://github.com/reda-abdo/Mealify",
      label: null,
    },
    {
      id: 6,
      title: "Bookmark",
      description:
        "A lightweight bookmarking tool that lets users save and manage their favorite websites. The interface enables input of site name and URL, displays a list of saved bookmarks with options to visit or delete, all wrapped in a clean, responsive layout.",
      image: img5,
      year: "2025",
      role: "Front-end Developer",
      client: "Personal Project",
      tech: ["Html", "CSS", "JavaScript"],
      liveUrl: "https://bookmark-tawny-tau.vercel.app/",
      githubUrl: "https://github.com/reda-abdo/bookmark",
      label: null,
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12 mb-16"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              FEATURED PROJECTS
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.label && (
                      <div className="absolute top-4 left-4 bg-muted/90 text-muted-foreground px-1 py-1 rounded-full text-sm font-medium">
                        {project.label}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-lg font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        PROJECT INFO
                      </h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>
                          <span className="font-medium">Year:</span>{" "}
                          {project.year}
                        </p>
                        <p>
                          <span className="font-medium">Role:</span>{" "}
                          {project.role}
                        </p>
                        {project.client && (
                          <p>
                            <span className="font-medium">Client:</span>{" "}
                            {project.client}
                          </p>
                        )}
                        <p>
                          <span className="font-medium">Tech Stack:</span>{" "}
                          {project.tech.join(", ")}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            {project.githubUrl ? "LIVE DEMO" : "VIEW PROJECT"}
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
                        >
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            SEE ON GITHUB
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
