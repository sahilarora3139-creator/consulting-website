// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { pillars } from "@/lib/services-data";
import { PillarIcon } from "@/components/services/PillarIcon";
import { CTASection } from "@/components/services/CTASection";
import { BreadcrumbJsonLd } from "@/components/services/JsonLd";
import { OperationsPanel } from "@/components/services/OperationsPanel";
import { RotatingWord } from "@/components/services/RotatingWord";

export const metadata: Metadata = {
  title: "Services — Cloud, Data, AI, Audit & Security | TechShield Analytics",
  description:
    "End-to-end services across Cloud, Data & BI, Artificial Intelligence, Audit, Risk & Cybersecurity and SaaS. Trusted by enterprises in India and globally.",
  alternates: { canonical: "/services" },
};

const pillarAccents: Record<string, { ring: string; chip: string }> = {
  cloud: { ring: "ring-emerald-500/40", chip: "bg-emerald-100 text-emerald-700" },
  audit: { ring: "ring-sienna/40", chip: "bg-[#FCEEE7] text-sienna" },
  data: { ring: "ring-emerald-600/40", chip: "bg-emerald-100 text-emerald-700" },
  ai: { ring: "ring-sienna/40", chip: "bg-[#FCEEE7] text-sienna" },
  saas: { ring: "ring-ink-300/30", chip: "bg-ink-100 text-ink-700" },
};

const marqueeTags = [
  "VAPT",
  "Cloud Migration",
  "MLOps",
  "GRC",
  "Data Engineering",
  "GenAI",
  "DevSecOps",
  "TPRM",
  "Snowflake",
  "Power BI",
  "AWS · Azure · GCP",
  "ISO 27001",
  "SOC 2",
  "DPDP",
  "Computer Vision",
  "Real-time Analytics",
];

export default function ServicesHubPage() {
  const activePillars = pillars.filter((p) => p.active);
  const inactivePillars = pillars.filter((p) => !p.active);

  return (
    <main className="bg-paper text-ink-900">
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", url: "https://techshieldanalytics.com" },
          { name: "Services", url: "https://techshieldanalytics.com/services" },
        ]}
      />

      {/* ═══ HERO — Live Operations dashboard ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        {/* Architectural grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,140,112,0.20),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,73,43,0.12),transparent_50%)]" />
        {/* Top hairline */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* ─── Headline column ─── */}
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Services · Live
              </div>

              <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Engineered to{" "}
                <RotatingWord
                  words={["protect.", "scale.", "decide.", "audit.", "predict.", "build."]}
                  className="italic text-emerald-300"
                />
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70 md:text-xl">
                Five practices. One philosophy — outcomes over output. From cloud
                to AI to audit, we ship work that compounds for enterprises and
                growth-stage teams.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink-900 transition-all hover:bg-emerald-300"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="#practices"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/60 hover:text-emerald-200"
                >
                  Explore practices
                </Link>
              </div>
            </div>

            {/* ─── Live operations panel ─── */}
            <div className="lg:col-span-5">
              <OperationsPanel />
            </div>
          </div>
        </div>

        {/* Marquee strip at bottom */}
        <div className="relative overflow-hidden border-t border-emerald-500/10 bg-ink-900/80 py-5 backdrop-blur-sm">
          <div className="flex w-max animate-scroll items-center">
            {[...marqueeTags, ...marqueeTags].map((tag, i) => (
              <div key={i} className="flex shrink-0 items-center">
                <span className="px-8 font-display text-xs uppercase tracking-[0.25em] text-paper/45">
                  {tag}
                </span>
                <span className="h-1 w-1 shrink-0 rounded-full bg-emerald-500/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRACTICES GRID ═══ */}
      <section
        id="practices"
        className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
      >
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
              <span className="h-px w-8 bg-emerald-700" />
              Five practices
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
              Built around the work that{" "}
              <span className="italic text-emerald-700">moves the needle</span>.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-500">
            Each practice runs as a focused team with its own delivery
            methodology — reviewed end-to-end across security, data and
            engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {activePillars.map((pillar, idx) => {
            const accent = pillarAccents[pillar.id] ?? pillarAccents.cloud;
            return (
              <Link
                key={pillar.id}
                href={`/services/${pillar.id}`}
                className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(26,26,26,0.18)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-700 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative p-8 md:p-10">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="font-display text-xs tracking-widest text-ink-300">
                      0{idx + 1}
                    </span>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-700/[0.06] text-emerald-700 ring-1 ${accent.ring} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <PillarIcon name={pillar.iconName} className="h-7 w-7" />
                    </div>
                  </div>

                  <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-ink-900 md:text-[2rem]">
                    {pillar.label}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-500">
                    {pillar.tagline}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {pillar.subcategories.slice(0, 4).map((s) => (
                      <span
                        key={s.id}
                        className="rounded-full bg-paper-soft px-3 py-1.5 text-xs text-ink-700"
                      >
                        {s.title}
                      </span>
                    ))}
                    {pillar.subcategories.length > 4 && (
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${accent.chip}`}
                      >
                        +{pillar.subcategories.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-ink-100 pt-6">
                    <span className="text-xs uppercase tracking-[0.18em] text-ink-500">
                      {pillar.subcategories.length} capabilities
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 transition-all group-hover:gap-3">
                      Explore practice
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {inactivePillars.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {inactivePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="relative overflow-hidden rounded-2xl border border-dashed border-ink-100 bg-paper-soft/40 p-8 md:p-10"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-display text-xs tracking-widest text-ink-300">
                    0{activePillars.length + idx + 1}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-100/60 text-ink-500 ring-1 ring-ink-100">
                    <PillarIcon name={pillar.iconName} className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-ink-500 md:text-[2rem]">
                  {pillar.label}
                </h3>
                <p className="mt-4 text-base text-ink-500/80">{pillar.tagline}</p>
                <div className="mt-10 flex items-center justify-between border-t border-ink-100 pt-6">
                  <span className="rounded-full bg-ink-100/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-700">
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ═══ PHILOSOPHY STRIP ═══ */}
      <section className="relative bg-paper-soft py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {[
              {
                k: "Outcomes, not hours",
                v: "We scope to business outcomes — uptime, audit-readiness, model accuracy — not consultant headcount.",
              },
              {
                k: "Security as default",
                v: "Every engagement runs through our audit lens. No 'we'll fix it later.' Security gets built in from day one.",
              },
              {
                k: "Compounding code",
                v: "We leave behind infrastructure, runbooks and dashboards your team owns — not black boxes only we can maintain.",
              },
            ].map((item, i) => (
              <div key={item.k} className="relative">
                <div className="mb-5 font-display text-sm text-emerald-700">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl font-light leading-snug text-ink-900">
                  {item.k}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}