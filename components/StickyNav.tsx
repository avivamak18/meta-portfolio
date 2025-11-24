"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SECTIONS = [
  { id: "featured", label: "Featured Work" },
  { id: "identity", label: "Identity Map" },
  { id: "reels", label: "Reels Scripts" },
  { id: "howiwork", label: "How I Work" },
];

export default function StickyNav() {
  const [active, setActive] = useState("featured");

  const sectionIds = useMemo(() => SECTIONS.map(s => s.id), []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { threshold: 0.45 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds]);

  return (
    <div className="sticky top-3 z-50 mx-auto w-full max-w-5xl px-4">
      <nav className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/80 p-2 backdrop-blur">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`rounded-xl px-3 py-2 text-sm transition ${
              active === s.id
                ? "bg-white/15 text-white"
                : "bg-white/5 text-neutral-300 hover:bg-white/10"
            }`}
          >
            {s.label}
          </a>
        ))}

        <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-neutral-400">
          Scroll to explore <ArrowUpRight className="h-3 w-3" />
        </div>
      </nav>
    </div>
  );
}
