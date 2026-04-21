import type { SectionId } from "@/types";
import { useEffect, useState } from "react";

const SECTIONS: SectionId[] = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const sectionVisibility: Record<string, number> = {};

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          sectionVisibility[id] = entry.intersectionRatio;
          // Find the most visible section
          let maxRatio = 0;
          let activeId: SectionId = "home";
          for (const [sId, ratio] of Object.entries(sectionVisibility)) {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              activeId = sId as SectionId;
            }
          }
          if (maxRatio > 0) setActive(activeId);
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
          rootMargin: "-80px 0px -20% 0px",
        },
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  return active;
}
