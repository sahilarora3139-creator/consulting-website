// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/lib/services-data";
import { PillarIcon } from "@/components/services/PillarIcon";
import { CTASection } from "@/components/services/CTASection";
import { BreadcrumbJsonLd } from "@/components/services/JsonLd";

export const metadata: Metadata = {
  title: "Services — Cloud, Data, AI, Audit & Security | TechShield Analytics",
  description:
    "End-to-end services across Cloud, Data & BI, Artificial Intelligence, Audit, Risk & Cybersecurity and SaaS. Trusted by enterprises in India and globally.",
  alternates: { canonical: "/services" },
};

export default function ServicesHubPage() {
  const activePillars = pillars.filter((p) => p.active);
  const inactivePillars = pillars.filter((p) => !p.active);

  return (
    <main className="bg-paper text-ink-900 min-h-screen font-sans">
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", url: "https://techshieldanalytics.com" },
          { name: "Services", url: "https://techshieldanalytics.com/services" },
        ]}
      />

      {/* HERO */}
      <section className="relative border-b border-ink-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/60 blur-[120px] rounded-full" />
          <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-sienna/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 font-medium mb-6">
                Capabilities
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[1.02] tracking-tight">
                Five practices.
                <br />
                <span className="italic font-light text-emerald-700">
                  One integrated team.
                </span>
              </h1>
              <p className="mt-8 text-xl text-ink-700 leading-relaxed max-w-2xl">
                TechShield Analytics designs cloud, data and AI systems for
                organizations that need outcomes — not slide decks. Choose a
                practice below to see the full service catalogue.
              </p>
            </div>

            <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-ink-100 lg:pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-4">
                At a glance
              </p>
              <dl className="space-y-5">
                <Stat label="Practices" value="5" />
                <Stat
                  label="Service areas"
                  value={pillars
                    .reduce((n, p) => n + p.subcategories.length, 0)
                    .toString()}
                />
                <Stat label="Headquartered in" value="New Delhi, India" />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* PILLAR GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-baseline justify-between mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-3">
              The practices
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-900 tracking-tight">
              Where to begin.
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-ink-100">
          {activePillars.map((p, idx) => (
            <Link
              key={p.id}
              href={`/services/${p.id}`}
              className="group bg-paper hover:bg-paper-soft transition-colors p-10 lg:p-12 flex flex-col gap-8 relative"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-xl text-ink-300 tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 border border-ink-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-paper group-hover:border-emerald-700 transition-colors">
                    <PillarIcon name={p.iconName} size={20} />
                  </div>
                </div>
                <ArrowUpRight
                  size={22}
                  className="text-ink-300 group-hover:text-emerald-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <h3 className="font-display text-3xl lg:text-4xl text-ink-900 leading-[1.1] tracking-tight mb-3">
                  {p.label}
                </h3>
                <p className="text-ink-700 leading-relaxed">{p.tagline}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-ink-100 flex items-center justify-between text-sm">
                <span className="text-ink-500">
                  {p.subcategories.length} service areas
                </span>
                <span className="text-emerald-700 font-medium group-hover:underline underline-offset-4 decoration-1">
                  Explore practice →
                </span>
              </div>
            </Link>
          ))}

          {/* Inactive pillars (SaaS — coming soon) */}
          {inactivePillars.map((p, idx) => (
            <div
              key={p.id}
              className="bg-paper-soft p-10 lg:p-12 flex flex-col gap-8 relative opacity-70"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-xl text-ink-300 tabular-nums">
                    {String(activePillars.length + idx + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 border border-ink-100 flex items-center justify-center text-ink-500">
                    <PillarIcon name={p.iconName} size={20} />
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest bg-ink-900 text-paper px-2.5 py-1">
                  Coming soon
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl text-ink-700 leading-[1.1] tracking-tight mb-3">
                  {p.label}
                </h3>
                <p className="text-ink-500 leading-relaxed">{p.tagline}</p>
              </div>
              <div className="mt-auto pt-6 border-t border-ink-100 flex items-center justify-between text-sm">
                <span className="text-ink-500">In development</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ink-100 pb-4">
      <dt className="text-sm text-ink-500">{label}</dt>
      <dd className="font-display text-xl text-ink-900 tabular-nums text-right">
        {value}
      </dd>
    </div>
  );
}
