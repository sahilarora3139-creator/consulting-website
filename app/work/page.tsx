// app/work/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work — Case Studies",
  description:
    "Real-world engagements by TechShield Analytics delivering measurable impact across cloud modernisation, data platforms, AI automation and cybersecurity.",
  alternates: { canonical: "/work" },
};

// ─── CASE STUDY DATA (shared with detail pages via lib/case-studies.ts) ───────
// Keep in sync with app/work/[slug]/page.tsx

export const caseStudies = [
  {
    slug: "saas-cloud-modernisation",
    index: "01",
    industry: "SaaS",
    practice: "Cloud Infrastructure",
    practiceColor: "bg-emerald-100 text-emerald-700",
    title: "Cloud Modernisation for a Scaling SaaS Platform",
    summary:
      "A rapidly growing SaaS company faced infrastructure instability and unpredictable cloud costs. We redesigned their architecture from the ground up — introducing cost governance, auto-scaling and observability across AWS.",
    results: [
      { metric: "30%", label: "Infrastructure cost reduction" },
      { metric: "40%", label: "System performance improvement" },
      { metric: "99.97%", label: "Uptime post-migration" },
    ],
    quote: "The engagement transformed our infrastructure from reactive to scalable. Predictable costs, predictable performance.",
    quoteRole: "CTO, SaaS Platform",
    tags: ["AWS", "Terraform", "Auto-scaling", "Cost governance"],
  },
  {
    slug: "fintech-data-platform",
    index: "02",
    industry: "FinTech",
    practice: "Data Engineering",
    practiceColor: "bg-blue-50 text-blue-700",
    title: "Data Platform Modernisation for a FinTech Lender",
    summary:
      "A growing fintech lender had data siloed across three legacy systems with no real-time reporting capability. We re-architected their BigQuery warehouse, built scalable ETL pipelines and delivered a live executive dashboard.",
    results: [
      { metric: "50%", label: "Reporting latency reduction" },
      { metric: "3→1", label: "Data silos consolidated" },
      { metric: "Real-time", label: "Executive dashboard delivery" },
    ],
    quote: "We went from waiting two days for reports to having live dashboards. It changed how our leadership team makes decisions.",
    quoteRole: "Head of Engineering, FinTech Lender",
    tags: ["BigQuery", "dbt", "Looker", "ETL pipelines"],
  },
  {
    slug: "ecommerce-ai-automation",
    index: "03",
    industry: "E-Commerce",
    practice: "AI & Machine Learning",
    practiceColor: "bg-violet-50 text-violet-700",
    title: "AI-Driven Process Automation for an E-Commerce Operator",
    summary:
      "An e-commerce operator was losing margin to manual demand forecasting and operational bottlenecks. We implemented predictive ML models and automated decision workflows — reducing manual intervention across the supply chain.",
    results: [
      { metric: "25%", label: "Forecasting accuracy improvement" },
      { metric: "60%", label: "Reduction in manual ops tasks" },
      { metric: "3 weeks", label: "Time to first production model" },
    ],
    quote: "Professional execution and long-term scalability thinking. Built for growth, not short-term fixes.",
    quoteRole: "Product Director, E-Commerce Platform",
    tags: ["Python", "MLflow", "GCP Vertex AI", "Workflow automation"],
  },
  {
    slug: "bfsi-vapt-security",
    index: "04",
    industry: "BFSI",
    practice: "Audit & Cybersecurity",
    practiceColor: "bg-amber-50 text-amber-700",
    title: "VAPT & Security Posture Overhaul for a BFSI Institution",
    summary:
      "A mid-size BFSI institution needed a full vulnerability assessment ahead of a regulatory audit. We ran a comprehensive VAPT across their production stack, identified 47 critical findings and remediated all of them within six weeks.",
    results: [
      { metric: "47", label: "Critical vulnerabilities identified" },
      { metric: "100%", label: "Critical findings remediated" },
      { metric: "6 weeks", label: "Full remediation cycle" },
    ],
    quote: "Clean audit result, first time in three years. The team moved fast and explained every finding in plain language.",
    quoteRole: "CISO, BFSI Institution",
    tags: ["VAPT", "CERT-In", "ISO 27001", "Penetration testing"],
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <main className="bg-paper text-ink-900">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(31,140,112,0.22),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(184,73,43,0.10),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Client Work · {caseStudies.length} case studies
              </div>

              <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Problems solved.{" "}
                <span className="italic text-emerald-300">Results measured.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
                Real engagements across cloud, data, AI and cybersecurity. Every number on this page is from a real client outcome — not a projection.
              </p>
            </div>

            {/* Stats panel */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-paper/10 bg-paper/[0.03] p-8 backdrop-blur-sm">
                <p className="mb-6 text-xs uppercase tracking-[0.18em] text-paper/50">
                  Across all engagements
                </p>
                <dl className="space-y-5">
                  {[
                    { k: "4+", v: "Industries" },
                    { k: "20+", v: "Projects delivered" },
                    { k: "10+", v: "Years experience" },
                  ].map((s) => (
                    <div key={s.v} className="flex items-baseline justify-between gap-4 border-b border-paper/10 pb-4 last:border-0 last:pb-0">
                      <dt className="text-sm text-paper/70">{s.v}</dt>
                      <dd className="font-display text-lg text-emerald-200">{s.k}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY LIST ═══ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            <span className="h-px w-8 bg-emerald-700" />
            /01 Selected work
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl mb-16">
            {caseStudies.length} engagements,{" "}
            <span className="italic text-emerald-700">each with a story</span>.
          </h2>

          <div className="space-y-px bg-ink-100 overflow-hidden rounded-2xl border border-ink-100">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group flex flex-col gap-6 bg-paper p-8 transition-colors hover:bg-paper-soft md:p-10 lg:flex-row lg:items-start lg:gap-12"
              >
                {/* Left — index + meta */}
                <div className="flex shrink-0 flex-row items-center gap-4 lg:w-48 lg:flex-col lg:items-start lg:gap-3">
                  <span className="font-display text-3xl font-light text-ink-200 lg:text-4xl">
                    /{cs.index}
                  </span>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${cs.practiceColor}`}>
                    {cs.industry}
                  </span>
                  <span className="hidden text-[10px] uppercase tracking-[0.15em] text-ink-400 lg:block">
                    {cs.practice}
                  </span>
                </div>

                {/* Centre — content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-2xl font-light leading-snug text-ink-900 md:text-3xl group-hover:text-emerald-700 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-500 max-w-2xl">
                    {cs.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink-100 bg-paper px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-ink-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — results + arrow */}
                <div className="flex shrink-0 flex-col gap-4 lg:w-52 lg:items-end">
                  <div className="flex gap-6 lg:flex-col lg:gap-3 lg:items-end">
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.label} className="lg:text-right">
                        <div className="font-display text-2xl font-light text-emerald-700">{r.metric}</div>
                        <div className="text-[10px] uppercase tracking-[0.14em] text-ink-400 mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 transition-all group-hover:gap-2.5">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — Dark ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
                <span className="h-px w-8 bg-emerald-400" />
                /02 Start a project
              </div>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-5xl">
                Your problem could be{" "}
                <span className="italic text-emerald-300">the next case study</span>.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/65">
                Whether it's a cloud migration, a data platform or an AI initiative — tell us what you're working on and we'll tell you how we'd approach it.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-medium text-paper transition-all hover:bg-emerald-500"
              >
                Schedule a strategy call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-7 py-4 text-sm font-medium text-paper transition-colors hover:border-emerald-300/50 hover:text-emerald-200"
              >
                Explore our services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}