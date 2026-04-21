import { SectionHeader } from "@/components/sections/AboutSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { Check, ExternalLink, Github, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PROJECTS: Project[] = [
  {
    id: "adjuster-copilot",
    title: "Adjuster Copilot App",
    subtitle: "Property Inspection",
    description:
      "A mobile application built using React Native and Expo designed for property inspection workflows. It helps adjusters capture property data, manage inspection details, and streamline reporting processes efficiently in real-time.",
    features: [
      "Image capture and inspection workflow",
      "Data management and reporting",
      "Mobile-first optimized UI",
      "Real-time data synchronization",
    ],
    tech: ["React Native", "Expo"],
    gradient: "from-primary/20 to-primary/5",
    icon: "🏠",
  },
  {
    id: "dentalog-portal",
    title: "Dentalog Portal",
    subtitle: "Clinic Management SaaS",
    description:
      "A complete clinic management platform that helps dental clinics manage patients, appointments, payments, and visits in one place. Includes automated WhatsApp reminders to reduce missed appointments and improve clinic revenue.",
    features: [
      "Patient management system",
      "Appointment scheduling",
      "Payment tracking",
      "Automated WhatsApp reminders",
    ],
    tech: ["Next.js", "Firebase", "Supabase"],
    gradient: "from-accent/20 to-accent/5",
    icon: "🦷",
  },
  {
    id: "clasp-portal",
    title: "Clasp Portal",
    subtitle: "Web Platform",
    description:
      "A scalable web application built using Next.js focused on performance and structured architecture. Designed for managing workflows and providing a seamless user experience with modern UI practices.",
    features: [
      "Fast and SEO-friendly architecture",
      "Clean UI with reusable components",
      "Optimized performance",
      "Structured workflow management",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    gradient: "from-primary/15 to-accent/10",
    icon: "🔗",
  },
  {
    id: "adjust-vision",
    title: "Adjust Vision",
    subtitle: "AI Camera App",
    description:
      "A smart camera-based mobile application built using React Native and Expo that integrates YOLOv5 model for real-time object detection. Designed for intelligent inspection and automation use cases.",
    features: [
      "Real-time object detection",
      "Camera integration",
      "AI-based inspection",
      "Automation workflows",
    ],
    tech: ["React Native", "Expo", "YOLOv5"],
    gradient: "from-accent/20 to-primary/10",
    icon: "👁️",
  },
];

const SPRING_MODAL = { type: "spring" as const, stiffness: 320, damping: 28 };

function ProjectModal({
  project,
  onClose,
}: { project: Project; onClose: () => void }) {
  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/70 backdrop-blur-xl m-0 max-w-none w-full h-full border-0 bg-transparent"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      aria-labelledby={`modal-title-${project.id}`}
      data-ocid={`projects.${project.id}.dialog`}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 32 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 16 }}
        transition={SPRING_MODAL}
        className="glass-card rounded-3xl shadow-premium max-w-lg w-full overflow-hidden max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`p-7 bg-gradient-to-br ${project.gradient} border-b border-border/30`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-3xl shadow-glass">
                {project.icon}
              </div>
              <div>
                <h3
                  id={`modal-title-${project.id}`}
                  className="font-display text-xl font-bold text-foreground heading-tight"
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-xl hover:bg-background/40 -mt-1 -mr-1 flex-shrink-0"
              aria-label="Close modal"
              data-ocid={`projects.${project.id}.close_button`}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-7 space-y-6">
          <p className="text-muted-foreground leading-[1.8] text-sm">
            {project.description}
          </p>

          <div>
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em] mb-3.5">
              Key Features
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em] mb-3.5">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="font-mono text-xs border-primary/30 text-primary bg-primary/10"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-7 border-t border-border/30 flex gap-3">
          <Button
            size="sm"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glass shimmer"
            asChild
            data-ocid={`projects.${project.id}.live_demo.button`}
          >
            <a
              href={project.liveUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              Live Demo
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-border/50 hover:border-primary/40 hover:bg-primary/5"
            asChild
            data-ocid={`projects.${project.id}.github.button`}
          >
            <a
              href={project.githubUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.div>
    </dialog>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay: index * 0.1,
      }}
      data-ocid={`projects.card.item.${index + 1}`}
    >
      <motion.button
        type="button"
        onClick={onOpen}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        className="w-full text-left glass-card rounded-3xl overflow-hidden shadow-glass hover:shadow-elevated hover:border-primary/30 transition-spring group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`View ${project.title} details`}
        data-ocid={`projects.${project.id}.open_modal_button`}
      >
        {/* Card top */}
        <div
          className={`p-7 bg-gradient-to-br ${project.gradient} border-b border-border/20 relative overflow-hidden`}
        >
          {/* Hover shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-premium -translate-x-full group-hover:translate-x-full duration-700" />
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-2xl shadow-glass">
              {project.icon}
            </div>
            <span className="text-xs font-mono text-muted-foreground px-3 py-1.5 rounded-full bg-background/50 backdrop-blur-sm border border-border/40">
              {project.subtitle}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-smooth heading-tight">
            {project.title}
          </h3>
        </div>

        {/* Card body */}
        <div className="p-7">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-5 leading-[1.8]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-smooth font-mono tracking-wide">
            View details →
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-32 px-6 sm:px-8 bg-muted/20 section-offset relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-accent/6 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          index="03"
          label="Work"
          heading={
            <>
              Featured <span className="gradient-accent-text">Projects</span>
            </>
          }
          id="projects-heading"
          description="Real-world applications I've built — click any card to explore"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
