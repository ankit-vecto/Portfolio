import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const TYPEWRITER_TEXT = "Ankit Kushwaha";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    // Stepped progress: 0 → 30 → 65 → 85 → 100
    const steps = [
      { target: 30, delay: 200, duration: 300 },
      { target: 65, delay: 600, duration: 250 },
      { target: 85, delay: 950, duration: 200 },
      { target: 100, delay: 1250, duration: 300 },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];
    let start = 0;

    for (const step of steps) {
      const from = start;
      const to = step.target;
      const delay = step.delay;
      const duration = step.duration;
      start = to;

      timers.push(
        setTimeout(() => {
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - t) ** 3;
            setProgress(Math.round(from + (to - from) * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }, delay),
      );
    }

    timers.push(setTimeout(() => setVisible(false), 2200));
    return () => timers.forEach(clearTimeout);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const chars = TYPEWRITER_TEXT.length;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCharCount(i);
      if (i >= chars) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          aria-label="Loading portfolio"
        >
          {/* Background orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-accent/15 blur-3xl animate-pulse-glow [animation-delay:1s]" />
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-primary/8 blur-3xl" />
          </div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="relative w-20 h-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.72 0.28 165 / 0.8), oklch(0.78 0.32 10 / 0.8), transparent, oklch(0.72 0.28 165 / 0.8))",
                  borderRadius: "18px",
                  padding: "1px",
                }}
              />
              <div className="absolute inset-[2px] rounded-[16px] bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-premium">
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  AK
                </span>
              </div>
            </div>

            {/* Typewriter name */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-center"
            >
              <h1 className="font-display text-2xl font-semibold text-foreground tracking-tight min-w-[14ch]">
                {TYPEWRITER_TEXT.slice(0, charCount)}
                <span className="inline-block w-0.5 h-5 ml-0.5 bg-primary align-middle animate-blink-cursor" />
              </h1>
              <p className="text-muted-foreground text-sm mt-1.5 font-mono tracking-wider">
                Frontend Developer
              </p>
            </motion.div>

            {/* Stepped progress bar */}
            <div className="flex flex-col items-center gap-2 w-52">
              <div className="w-full h-[2px] bg-border/60 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
              <span className="text-xs font-mono text-muted-foreground tabular-nums">
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
