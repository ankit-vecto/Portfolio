import { SectionHeader } from "@/components/sections/AboutSection";
import type { Skill } from "@/types";
import { motion } from "motion/react";

const SKILLS: Skill[] = [
  { name: "HTML & CSS", icon: "🌐", category: "frontend", level: 5 },
  { name: "JavaScript", icon: "⚡", category: "frontend", level: 5 },
  { name: "TypeScript", icon: "🔷", category: "frontend", level: 4 },
  { name: "React", icon: "⚛️", category: "frontend", level: 5 },
  { name: "Next.js", icon: "▲", category: "frontend", level: 5 },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend", level: 5 },
  { name: "Bootstrap", icon: "🅱", category: "frontend", level: 4 },
  { name: "React Native", icon: "📱", category: "mobile", level: 5 },
  { name: "Expo", icon: "🚀", category: "mobile", level: 5 },
  { name: "Firebase", icon: "🔥", category: "backend", level: 4 },
  { name: "Supabase", icon: "🟢", category: "backend", level: 4 },
  { name: "Total.js", icon: "🔧", category: "backend", level: 2 },
];

const CATEGORY_LABELS: Record<Skill["category"], string> = {
  frontend: "Frontend",
  mobile: "Mobile",
  backend: "Services",
  tools: "Tools",
};

const CATEGORY_COLORS: Record<
  Skill["category"],
  { text: string; bg: string; border: string }
> = {
  frontend: {
    text: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  mobile: {
    text: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  backend: {
    text: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/15",
  },
  tools: {
    text: "text-muted-foreground",
    bg: "bg-muted",
    border: "border-border/50",
  },
};

const LEVEL_LABEL: Record<number, string> = {
  1: "Learning",
  2: "Beginner",
  3: "Intermediate",
  4: "Proficient",
  5: "Expert",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const colors = CATEGORY_COLORS[skill.category];
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 18,
        delay: index * 0.06,
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="glass-card rounded-2xl p-6 shadow-glass hover:shadow-elevated hover:border-primary/30 transition-spring group relative overflow-hidden"
      data-ocid={`skills.card.item.${index + 1}`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-premium rounded-2xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-start justify-between mb-5">
          <span className="text-2xl" aria-hidden="true">
            {skill.icon}
          </span>
          <span
            className={`text-xs font-mono ${colors.text} ${colors.bg} ${colors.border} border px-2.5 py-1 rounded-full`}
          >
            {CATEGORY_LABELS[skill.category]}
          </span>
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm mb-4 tracking-tight">
          {skill.name}
        </h3>

        {/* Level bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">
              {LEVEL_LABEL[skill.level]}
            </span>
            <span className="text-xs text-muted-foreground font-mono tabular-nums">
              {skill.level * 20}%
            </span>
          </div>
          <div className="h-[3px] bg-border/60 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level * 20}%` }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: index * 0.06 + 0.35,
              }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 px-6 sm:px-8 bg-background section-offset relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          index="02"
          label="Technical Skills"
          heading={
            <>
              Tech <span className="gradient-accent-text">Stack</span>
            </>
          }
          id="skills-heading"
          description="Technologies I work with to bring ideas to life"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
