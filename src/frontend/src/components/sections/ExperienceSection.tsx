import { SectionHeader } from "@/components/sections/AboutSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code2, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "SaaS & Product Studio",
    type: "Full-time",
    period: "2023 — Present",
    icon: Briefcase,
    description:
      "Working on building SaaS platforms, mobile applications, and automation tools with a focus on performance optimization and exceptional user experience.",
    highlights: [
      "Built Dentalog — a full clinic management SaaS with automated WhatsApp reminders",
      "Developed Adjuster Copilot, a React Native app for property inspection workflows",
      "Integrated AI-powered object detection (YOLOv5) into mobile inspection tools",
      "Delivered Clasp Portal with SEO-first Next.js architecture",
    ],
    tech: ["React", "Next.js", "React Native", "TypeScript"],
    accent: "primary" as const,
  },
  {
    role: "Mobile App Developer",
    company: "Freelance & Contracts",
    type: "Contract",
    period: "2022 — 2023",
    icon: Smartphone,
    description:
      "Worked as a freelance developer building cross-platform mobile applications with React Native and Expo, delivering polished UX for various clients.",
    highlights: [
      "Built and deployed multiple React Native applications on iOS and Android",
      "Integrated Firebase and Supabase for real-time data and authentication",
      "Implemented camera-based workflows and media capture features",
      "Worked closely with design teams to implement pixel-perfect UIs",
    ],
    tech: ["React Native", "Expo", "Firebase", "Supabase"],
    accent: "accent" as const,
  },
  {
    role: "Web Developer (Learning)",
    company: "Self-taught & Projects",
    type: "Personal",
    period: "2021 — 2022",
    icon: Code2,
    description:
      "Started the journey into web development through self-learning, personal projects, and building real-world applications to sharpen skills.",
    highlights: [
      "Mastered HTML, CSS, JavaScript fundamentals",
      "Built projects using React and learned modern frontend patterns",
      "Explored backend integration with REST APIs",
      "Started working with Tailwind CSS and component-driven development",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    accent: "primary" as const,
  },
];

const SPRING = { type: "spring" as const, stiffness: 80, damping: 18 };

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-6 sm:px-8 bg-background section-offset relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          index="04"
          label="Journey"
          heading={
            <>
              Work <span className="gradient-accent-text">Experience</span>
            </>
          }
          id="experience-heading"
          description="My professional journey building web and mobile applications"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, oklch(var(--primary) / 0.7), oklch(var(--accent) / 0.4), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {EXPERIENCE.map(
              (
                {
                  role,
                  company,
                  type,
                  period,
                  icon: Icon,
                  description,
                  highlights,
                  tech,
                  accent,
                },
                i,
              ) => {
                const isLeft = i % 2 === 0;
                const accentColor =
                  accent === "primary" ? "text-primary" : "text-accent";
                const accentBg =
                  accent === "primary" ? "bg-primary/10" : "bg-accent/10";
                const accentBorder =
                  accent === "primary"
                    ? "border-primary/25"
                    : "border-accent/25";

                return (
                  <motion.div
                    key={role + company}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ ...SPRING, delay: i * 0.1 }}
                    className="relative sm:pl-16 w-full"
                    data-ocid={`experience.item.${i + 1}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-3 top-7 w-6 h-6 rounded-full bg-background border-2 border-primary hidden sm:flex items-center justify-center shadow-glass">
                      <div
                        className={`w-2 h-2 rounded-full ${accent === "primary" ? "bg-primary" : "bg-accent"}`}
                      />
                    </div>

                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      className="glass-card rounded-3xl p-8 shadow-glass hover:shadow-elevated hover:border-primary/20 transition-spring"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-2xl ${accentBg} border ${accentBorder} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className={`h-5 w-5 ${accentColor}`} />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-foreground heading-tight">
                              {role}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:text-right">
                          <Badge
                            variant="outline"
                            className="text-xs border-border/40 text-muted-foreground"
                          >
                            {type}
                          </Badge>
                          <span
                            className={`text-xs font-mono ${accentColor} px-2.5 py-1 rounded-full ${accentBg} border ${accentBorder}`}
                          >
                            {period}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-[1.8] mb-5">
                        {description}
                      </p>

                      <ul className="space-y-2.5 mb-6">
                        {highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm"
                          >
                            <TrendingUp
                              className={`h-3.5 w-3.5 ${accentColor} mt-0.5 flex-shrink-0`}
                            />
                            <span className="text-muted-foreground">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {tech.map((t) => (
                          <span
                            key={t}
                            className={`text-xs font-mono px-2.5 py-1 rounded-lg ${accentBg} ${accentColor} border ${accentBorder}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
