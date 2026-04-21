import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ankitkushwaha",
    label: "GitHub",
    icon: SiGithub,
    ocid: "footer.github.link",
  },
  {
    href: "https://linkedin.com/in/ankitkushwaha",
    label: "LinkedIn",
    icon: Linkedin,
    ocid: "footer.linkedin.link",
  },
  {
    href: "mailto:02.ankit.kushwaha@gmail.com",
    label: "Email",
    icon: Mail,
    ocid: "footer.email.link",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="relative bg-card/70 backdrop-blur-xl border-t border-white/5 overflow-hidden">
      {/* Gradient background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/4 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full bg-primary/6 blur-[60px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="flex items-center gap-3.5"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-25 blur-sm" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glass">
                <span className="text-xs font-display font-bold text-primary-foreground tracking-wider">
                  AK
                </span>
              </div>
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-foreground tracking-tight">
                Ankit Kushwaha
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                Frontend Developer
              </p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.1,
            }}
            className="flex items-center gap-3"
          >
            {SOCIAL_LINKS.map(({ href, label, icon: Icon, ocid }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                data-ocid={ocid}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow-primary transition-premium"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-7 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground"
        >
          <span className="font-mono">
            © {year} Ankit Kushwaha. All rights reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
