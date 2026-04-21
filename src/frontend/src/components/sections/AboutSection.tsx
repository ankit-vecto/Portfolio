import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    label: "Web Apps",
    value: "React & Next.js",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps",
    value: "React Native",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Zap,
    label: "Performance",
    value: "Optimized UX",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Users,
    label: "SaaS Products",
    value: "Real-world Impact",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
];

const SPRING = { type: "spring" as const, stiffness: 80, damping: 18 };

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-6 sm:px-8 bg-muted/20 section-offset relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="01"
          label="About Me"
          heading={
            <>
              Who I <span className="gradient-accent-text">Am</span>
            </>
          }
          id="about-heading"
        />

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...SPRING, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-[1.8] text-base sm:text-lg">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                Frontend Developer
              </span>{" "}
              with hands-on experience building modern web and mobile
              applications using{" "}
              <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-primary font-medium">Next.js</span>, and{" "}
              <span className="text-primary font-medium">React Native</span>.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              My focus is on{" "}
              <span className="text-foreground font-medium">performance</span>,
              clean UI architecture, and solving real-world problems with
              elegant code. I thrive in fast-paced environments and love
              shipping features that genuinely improve user experience.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              I've worked on{" "}
              <span className="text-foreground font-medium">
                SaaS platforms
              </span>
              , mobile inspection tools, and automation workflows — always
              prioritizing scalability and maintainability.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "React",
                "Next.js",
                "React Native",
                "TypeScript",
                "Firebase",
                "Supabase",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/25 hover:bg-primary/15 transition-smooth"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...SPRING, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {HIGHLIGHTS.map(
              ({ icon: Icon, label, value, color, bg, border }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...SPRING, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  data-ocid={`about.highlight.item.${i + 1}`}
                >
                  <Card className="glass-card shadow-glass hover:shadow-elevated transition-spring h-full border-border/40">
                    <CardContent className="p-6">
                      <div
                        className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4 ${color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1.5 font-mono">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-foreground font-display">
                        {value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Shared section header component
interface SectionHeaderProps {
  index: string;
  label: string;
  heading: React.ReactNode;
  id: string;
  description?: string;
}

export function SectionHeader({
  index,
  label,
  heading,
  id,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="text-center mb-16"
    >
      <span className="font-mono text-xs text-primary mb-4 block tracking-[0.2em] uppercase opacity-80">
        {index}. {label}
      </span>
      <h2
        id={id}
        className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 heading-tight"
      >
        {heading}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full" />
    </motion.div>
  );
}
