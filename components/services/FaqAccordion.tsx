// components/services/FaqAccordion.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/services-types";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-ink-100 border-y border-ink-100">
      {faqs.map((f, i) => (
        <FaqRow key={i} faq={f} />
      ))}
    </div>
  );
}

function FaqRow({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-ink-900 leading-snug group-hover:text-emerald-700 transition-colors">
          {faq.q}
        </span>
        <span
          className={`shrink-0 w-9 h-9 rounded-full border border-ink-100 flex items-center justify-center transition-all ${
            open
              ? "bg-emerald-700 border-emerald-700 text-paper rotate-45"
              : "text-ink-700"
          }`}
        >
          <Plus size={16} strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-ink-700 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
