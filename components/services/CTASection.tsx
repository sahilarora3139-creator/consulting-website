// components/services/CTASection.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTASection({
  eyebrow = "Start a conversation",
  title = "Build something measurable.",
  subtitle = "Tell us about your environment and goals. We'll respond within one business day with a focused next step.",
  primaryHref = "/contact",
  primaryLabel = "Schedule consultation",
  secondaryHref = "/services",
  secondaryLabel = "Explore all services",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-paper-soft border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-sans font-medium mb-5">
              {eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.05] tracking-tight">
              {title}
            </h2>
            <p className="mt-6 text-lg text-ink-700 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-between gap-3 bg-ink-900 text-paper px-7 py-5 hover:bg-emerald-700 transition-colors"
            >
              <span className="font-sans font-medium">{primaryLabel}</span>
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href={secondaryHref}
              className="group inline-flex items-center justify-between gap-3 border border-ink-900 text-ink-900 px-7 py-5 hover:bg-ink-900 hover:text-paper transition-colors"
            >
              <span className="font-sans font-medium">{secondaryLabel}</span>
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
