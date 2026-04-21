import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const SPRING_REVEAL = {
  type: "spring" as const,
  stiffness: 90,
  damping: 20,
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax on background orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 overflow-hidden section-offset noise-overlay"
      aria-label="Hero"
    >
      {/* Background orbs with parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          style={{ y: orbY1 }}
          className="absolute top-1/4 left-1/6 w-[480px] h-[480px] rounded-full bg-primary/12 blur-[80px] animate-orb-drift"
        />
        <motion.div
          style={{ y: orbY2 }}
          className="absolute bottom-1/4 right-1/8 w-[360px] h-[360px] rounded-full bg-accent/10 blur-[80px] animate-orb-drift [animation-delay:4s]"
        />
        <motion.div
          style={{ y: orbY3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[100px]"
        />
        {/* Extra subtle orb top-right */}
        <div className="absolute top-20 right-1/4 w-48 h-48 rounded-full bg-accent/8 blur-3xl animate-pulse-glow [animation-delay:2s]" />
      </div>

      {/* Fine grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...SPRING_REVEAL, delay: 0 }}
          className="mb-8 inline-flex"
        >
          <Badge
            variant="outline"
            className="px-5 py-2 text-sm font-mono border-primary/35 text-primary bg-primary/8 backdrop-blur-md animate-pulse-glow gap-2"
            data-ocid="hero.status.badge"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0 shadow-[0_0_6px_oklch(0.8_0.3_145)]" />
            Available for opportunities
          </Badge>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_REVEAL, delay: 0.12 }}
          className="font-display font-bold heading-tight mb-5"
          style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}
        >
          <span className="text-foreground block">Ankit</span>
          <span className="gradient-accent-text block">Kushwaha</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_REVEAL, delay: 0.22 }}
          className="mb-7"
        >
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground tracking-tight">
            Building{" "}
            <span className="text-foreground">
              Scalable Digital Experiences
            </span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_REVEAL, delay: 0.32 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed"
        >
          Full-Stack Developer, specializing in modern web and mobile
          applications with a passion for clean,{" "}
          <span className="text-foreground font-medium">
            performance-driven code
          </span>
          .
        </motion.p>

        {/* CTAs with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_REVEAL, delay: 0.44 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <MagneticButton
            onClick={() => scrollTo("projects")}
            variant="primary"
            ocid="hero.view_projects.primary_button"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Projects
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            variant="outline"
            ocid="hero.contact_me.secondary_button"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_REVEAL, delay: 0.58 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              href: "https://github.com/ankitkushwaha",
              Icon: Github,
              label: "GitHub",
              ocid: "hero.github.link",
            },
            {
              href: "https://linkedin.com/in/ankitkushwaha",
              Icon: Linkedin,
              label: "LinkedIn",
              ocid: "hero.linkedin.link",
            },
            {
              href: "mailto:02.ankit.kushwaha@gmail.com",
              Icon: Mail,
              label: "Email",
              ocid: "hero.email.link",
            },
          ].map(({ href, Icon, label, ocid }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              data-ocid={ocid}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...SPRING_REVEAL, delay: 0.6 + i * 0.08 }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow-primary transition-premium"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth group"
        aria-label="Scroll to about section"
        data-ocid="hero.scroll_indicator.button"
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-60 group-hover:opacity-100">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "outline";
  ocid: string;
}

function MagneticButton({
  children,
  onClick,
  variant,
  ocid,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  if (variant === "primary") {
    return (
      <Button
        ref={ref}
        size="lg"
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="px-8 h-13 font-semibold font-display bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated glow-primary-hover transition-premium shimmer tracking-tight"
        style={{
          transition:
            "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background-color 0.2s ease",
        }}
        data-ocid={ocid}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      ref={ref}
      variant="outline"
      size="lg"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="px-8 h-13 font-semibold font-display border-border/50 hover:border-primary/50 hover:bg-primary/6 transition-premium tracking-tight"
      style={{
        transition:
          "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease, background-color 0.2s ease",
      }}
      data-ocid={ocid}
    >
      {children}
    </Button>
  );
}
