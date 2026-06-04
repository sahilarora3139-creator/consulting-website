// components/services/SubSubFramework.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { SubSub } from "@/lib/services-types";

export function SubSubFramework({ subSubs }: { subSubs: SubSub[] }) {
  const [active, setActive] = useState<string | null>(subSubs[0]?.id ?? null);
  const selected = subSubs.find((s) => s.id === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {subSubs.map((ss) => {
          const isActive = active === ss.id;
          return (
            <button
              key={ss.id}
              onClick={() => setActive(ss.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-sans font-medium border transition-all ${
                isActive
                  ? "bg-ink-900 border-ink-900 text-paper"
                  : "bg-paper border-ink-100 text-ink-700 hover:border-ink-900 hover:text-ink-900"
              }`}
            >
              <span>{ss.icon}</span>
              <span>{ss.title}</span>
              <ChevronRight
                size={13}
                className={`transition-transform ${isActive ? "rotate-90" : ""}`}
              />
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="bg-emerald-100/40 border border-emerald-700/15 p-8 lg:p-10"
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl">{selected.icon}</span>
              <h4 className="font-display text-2xl text-ink-900">
                {selected.title}
              </h4>
            </div>
            <p className="text-ink-700 leading-relaxed mb-8 max-w-3xl">
              {selected.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-ink-100">
              {selected.items.map((item, i) => (
                <div key={i} className="bg-paper p-6">
                  <span className="text-xl mb-3 block">{item.icon}</span>
                  <h5 className="font-display text-base text-ink-900 mb-3">
                    {item.title}
                  </h5>
                  <ul className="space-y-2">
                    {item.points.map((p, j) => (
                      <li
                        key={j}
                        className="text-ink-700 text-sm flex gap-2 items-start"
                      >
                        <ArrowRight
                          size={12}
                          className="mt-1 text-emerald-700 shrink-0"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {selected.positioningLine && (
              <p className="mt-8 text-emerald-700 italic border-l-2 border-emerald-700 pl-4 font-display">
                {selected.positioningLine}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
