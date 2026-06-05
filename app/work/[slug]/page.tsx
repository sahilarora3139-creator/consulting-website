// app/work/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

// ─── DATA — keep in sync with app/work/page.tsx ───────────────────────────────
const caseStudies = [
  {
    slug: "saas-cloud-modernisation",
    index: "01",
    industry: "SaaS",
    practice: "Cloud Infrastructure",
    practiceColor: "bg-emerald-100 text-emerald-700",
    title: "Cloud Modernisation for a Scaling SaaS Platform",
    subtitle: "From reactive fire-fighting to a self-healing, cost-governed cloud",
    summary:
      "A rapidly growing SaaS company faced infrastructure instability and unpredictable cloud costs as their user base scaled 4× in 18 months. We redesigned their AWS architecture from the ground up — introducing auto-scaling, cost governance and full-stack observability.",
    challenge: "The client had outgrown their original infrastructure. Manual deployments, no auto-scaling and a lack of visibility into spend meant every traffic spike was a crisis. Cloud costs had grown 180% year-over-year with no clear explanation.",
    approach: [
      "Conducted a full cloud infrastructure audit across compute, networking, storage and IAM",
      "Redesigned the architecture around ECS Fargate with auto-scaling policies tied to real traffic metrics",
      "Implemented AWS Cost Explorer tagging, budgets and anomaly detection with Slack alerting",
      "Deployed Datadog for full-stack observability — APM, infrastructure metrics and log aggregation",
      "Migrated CI/CD from Jenkins to GitHub Actions with environment-gated deployments",
      "Ran a two-week stabilisation period with on-call support before handing over to internal team",
    ],
    results: [
      { metric: "30%", label: "Infrastructure cost reduction" },
      { metric: "40%", label: "System performance improvement" },
      { metric: "99.97%", label: "Uptime post-migration" },
      { metric: "0", label: "Manual deployments post-handover" },
    ],
    quote: "The engagement transformed our infrastructure from reactive to scalable. We now have predictable costs and performance aligned with our growth.",
    quoteRole: "CTO",
    quoteCompany: "SaaS Platform",
    tags: ["AWS", "ECS Fargate", "Terraform", "Datadog", "GitHub Actions", "Cost governance"],
    duration: "12 weeks",
    teamSize: "3 engineers",
    nextSlug: "fintech-data-platform",
    nextTitle: "Data Platform Modernisation — FinTech",
  },
  {
    slug: "fintech-data-platform",
    index: "02",
    industry: "FinTech",
    practice: "Data Engineering",
    practiceColor: "bg-blue-50 text-blue-700",
    title: "Data Platform Modernisation for a FinTech Lender",
    subtitle: "Three legacy silos consolidated into one real-time intelligence platform",
    summary:
      "A fintech lender had data distributed across three disconnected legacy systems — a core banking platform, a CRM and a loan origination system. Reporting required manual exports, took two days and was consistently unreliable. We rebuilt the entire data stack on BigQuery.",
    challenge: "Leadership could not trust their data. Finance, risk and operations teams each had different numbers for the same metric. Month-end reporting was a two-day manual exercise and regulatory reports were frequently late.",
    approach: [
      "Mapped all data sources, schemas and business logic across the three legacy systems",
      "Built event-driven ELT pipelines using Fivetran and custom Python connectors",
      "Designed a layered BigQuery warehouse — raw, staging and mart layers using dbt",
      "Implemented row-level security in BigQuery aligned to organisational roles",
      "Built live executive dashboards in Looker with drill-down to transaction level",
      "Delivered a data quality framework with automated alerting on anomalies and missing data",
    ],
    results: [
      { metric: "50%", label: "Reporting latency reduction" },
      { metric: "3→1", label: "Data silos consolidated" },
      { metric: "Real-time", label: "Executive dashboard delivery" },
      { metric: "100%", label: "Regulatory reports on time" },
    ],
    quote: "We went from waiting two days for reports to having live dashboards. It fundamentally changed how our leadership team makes decisions.",
    quoteRole: "Head of Engineering",
    quoteCompany: "FinTech Lender",
    tags: ["BigQuery", "dbt", "Fivetran", "Looker", "Python", "Data quality"],
    duration: "16 weeks",
    teamSize: "4 engineers",
    nextSlug: "ecommerce-ai-automation",
    nextTitle: "AI-Driven Automation — E-Commerce",
  },
  {
    slug: "ecommerce-ai-automation",
    index: "03",
    industry: "E-Commerce",
    practice: "AI & Machine Learning",
    practiceColor: "bg-violet-50 text-violet-700",
    title: "AI-Driven Process Automation for an E-Commerce Operator",
    subtitle: "Predictive ML replacing gut-feel decisions across the supply chain",
    summary:
      "A multi-category e-commerce operator was losing margin to manual demand forecasting and fragmented operational processes. We designed and deployed ML models for demand prediction, price optimisation and inventory reordering — cutting manual workload and improving margin.",
    challenge: "Demand planners were spending 80% of their time on spreadsheets and still getting forecasts wrong. Overstock and stockouts were both common. Leadership had no visibility into which product categories were actually profitable after fulfilment costs.",
    approach: [
      "Ran a 2-week discovery to map all operational decision points, data sources and failure modes",
      "Built a demand forecasting model using LightGBM with category, seasonality and promo features",
      "Deployed the model on GCP Vertex AI with weekly automated retraining against fresh sales data",
      "Built an inventory reordering engine that triggers purchase orders based on predicted lead time and demand",
      "Created a profitability attribution dashboard showing true margin per SKU after fulfilment costs",
      "Ran a parallel-run validation period before full cutover — measured against actuals for 6 weeks",
    ],
    results: [
      { metric: "25%", label: "Forecasting accuracy improvement" },
      { metric: "60%", label: "Reduction in manual ops tasks" },
      { metric: "3 weeks", label: "Time to first production model" },
      { metric: "18%", label: "Reduction in overstock incidents" },
    ],
    quote: "Professional execution and long-term scalability thinking. The models were built for growth, not short-term fixes.",
    quoteRole: "Product Director",
    quoteCompany: "E-Commerce Platform",
    tags: ["Python", "LightGBM", "GCP Vertex AI", "MLflow", "BigQuery", "Automation"],
    duration: "14 weeks",
    teamSize: "3 engineers",
    nextSlug: "bfsi-vapt-security",
    nextTitle: "VAPT & Security Overhaul — BFSI",
  },
  {
    slug: "bfsi-vapt-security",
    index: "04",
    industry: "BFSI",
    practice: "Audit & Cybersecurity",
    practiceColor: "bg-amber-50 text-amber-700",
    title: "VAPT & Security Posture Overhaul for a BFSI Institution",
    subtitle: "47 critical findings identified, remediated and documented in six weeks",
    summary:
      "A mid-size BFSI institution needed a thorough vulnerability assessment and penetration test ahead of a regulatory audit. We conducted a full-scope VAPT across their production stack, identified 47 critical findings and worked alongside their internal team to remediate every one before the audit window.",
    challenge: "The institution had not undergone a formal VAPT in over two years. With a CERT-In aligned regulatory audit approaching, they needed both assessment and remediation — and they needed it done fast. Internal security capacity was limited.",
    approach: [
      "Scoped the engagement across web applications, APIs, network infrastructure, cloud configuration and internal systems",
      "Ran black-box, grey-box and white-box testing phases in parallel to maximise coverage",
      "Documented all findings with severity ratings (CVSS), evidence screenshots and step-by-step reproduction",
      "Ran a prioritised remediation sprint with the client's internal engineering team on all critical and high findings",
      "Conducted a re-test across all 47 critical and 23 high findings to verify remediation",
      "Delivered a board-ready summary report and CERT-In aligned technical report for the regulatory submission",
    ],
    results: [
      { metric: "47", label: "Critical vulnerabilities identified" },
      { metric: "100%", label: "Critical findings remediated" },
      { metric: "6 weeks", label: "Full assessment-to-remediation cycle" },
      { metric: "Clean", label: "Regulatory audit result" },
    ],
    quote: "Clean audit result, first time in three years. The team moved fast and explained every finding in plain language our board could understand.",
    quoteRole: "CISO",
    quoteCompany: "BFSI Institution",
    tags: ["VAPT", "CERT-In", "ISO 27001", "Penetration testing", "GRC", "Remediation"],
    duration: "6 weeks",
    teamSize: "2 senior security engineers",
    nextSlug: "saas-cloud-modernisation",
    nextTitle: "Cloud Modernisation — SaaS Platform",
  },
];

// ─── METADATA ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Not found" };
  return {
    title: `${cs.title} — TechShield Analytics`,
    description: cs.summary,
    alternates: { canonical: `/work/${slug}` },
  };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const next = caseStudies.find((c) => c.slug === cs.nextSlug);

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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,140,112,0.20),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">

          {/* Back breadcrumb */}
          <Link
            href="/work"
            className="mb-10 inline-flex items-center gap-2 text-sm text-paper/50 transition-colors hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              {/* Eyebrow badges */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${cs.practiceColor}`}>
                  {cs.industry}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-paper/40">
                  {cs.practice}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-paper/40">·</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-paper/40">
                  {cs.duration}
                </span>
              </div>

              <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-[4.5rem]">
                {cs.title}
              </h1>
              <p className="mt-5 text-lg text-emerald-300/80 font-light italic">
                {cs.subtitle}
              </p>
            </div>

            {/* Result highlights panel */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-paper/10 bg-paper/[0.03] p-8 backdrop-blur-sm">
                <p className="mb-6 text-xs uppercase tracking-[0.18em] text-paper/50">
                  Key outcomes
                </p>
                <dl className="space-y-5">
                  {cs.results.map((r) => (
                    <div key={r.label} className="flex items-baseline justify-between gap-4 border-b border-paper/10 pb-4 last:border-0 last:pb-0">
                      <dt className="text-sm text-paper/65">{r.label}</dt>
                      <dd className="font-display text-xl text-emerald-200 shrink-0">{r.metric}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUMMARY + CHALLENGE ═══ */}
      <section className="border-b border-ink-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">

            {/* Summary */}
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-emerald-700" />
                The engagement
              </div>
              <p className="text-xl leading-relaxed text-ink-700 md:text-2xl font-light">
                {cs.summary}
              </p>
            </div>

            {/* Meta sidebar */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="space-y-6 rounded-2xl border border-ink-100 p-7">
                {[
                  { label: "Industry", value: cs.industry },
                  { label: "Practice", value: cs.practice },
                  { label: "Duration", value: cs.duration },
                  { label: "Team", value: cs.teamSize },
                ].map((m) => (
                  <div key={m.label} className="flex items-start justify-between gap-4 border-b border-ink-100 pb-5 last:border-0 last:pb-0">
                    <span className="text-xs uppercase tracking-[0.18em] text-ink-400">{m.label}</span>
                    <span className="text-sm font-medium text-ink-900 text-right">{m.value}</span>
                  </div>
                ))}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-400">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink-100 bg-paper-soft px-2.5 py-1 text-[10px] uppercase tracking-[0.13em] text-ink-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGE ═══ */}
      <section className="bg-paper-soft border-b border-ink-100 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-emerald-700" />
                The challenge
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-ink-700">
                {cs.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ APPROACH — Dark ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.15),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200/70">
            <span className="h-px w-8 bg-emerald-400" />
            Our approach
          </div>
          <h2 className="font-display text-3xl font-light leading-[1.1] tracking-tight text-paper md:text-4xl mb-16 max-w-2xl">
            How we <span className="italic text-emerald-300">tackled it</span>, step by step.
          </h2>

          <div className="grid gap-px bg-emerald-500/10 overflow-hidden rounded-2xl border border-emerald-500/15 md:grid-cols-2">
            {cs.approach.map((step, i) => (
              <div key={i} className="bg-ink-900/60 p-8 hover:bg-ink-900/40 transition-colors">
                <div className="mb-4 flex items-start gap-4">
                  <span className="font-display text-2xl font-light text-emerald-300/25 leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                </div>
                <p className="text-sm leading-relaxed text-paper/70">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ═══ */}
      <section className="border-b border-ink-100 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            <span className="h-px w-8 bg-emerald-700" />
            The results
          </div>
          <h2 className="font-display text-3xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-4xl mb-16">
            Outcomes that <span className="italic text-emerald-700">speak for themselves</span>.
          </h2>

          <div className="grid grid-cols-2 gap-px bg-ink-100 overflow-hidden rounded-2xl border border-ink-100 lg:grid-cols-4">
            {cs.results.map((r) => (
              <div key={r.label} className="bg-paper p-10 text-center hover:bg-paper-soft transition-colors">
                <div className="font-display text-4xl font-light text-emerald-700 mb-3 md:text-5xl">
                  {r.metric}
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-ink-400 leading-relaxed">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="bg-paper-soft border-b border-ink-100 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="font-display text-6xl text-emerald-200 leading-none mb-6 select-none">"</div>
          <blockquote className="font-display text-2xl font-light leading-relaxed text-ink-900 md:text-3xl">
            {cs.quote}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-600" />
            <span className="text-sm font-medium text-ink-700">{cs.quoteRole}</span>
            <span className="text-sm text-ink-400">·</span>
            <span className="text-sm text-ink-400">{cs.quoteCompany}</span>
          </div>
        </div>
      </section>

      {/* ═══ NEXT CASE STUDY + CTA ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper py-24 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Next case study */}
            {next && (
              <Link href={`/work/${next.slug}`} className="group rounded-2xl border border-emerald-500/20 bg-paper/[0.03] p-8 transition-colors hover:border-emerald-300/40 hover:bg-paper/[0.05]">
                <p className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-4">Next case study</p>
                <h3 className="font-display text-2xl font-light text-paper group-hover:text-emerald-200 transition-colors">
                  {next.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-all group-hover:gap-3">
                  Read it
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            )}

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-4">Start a project</p>
              <h3 className="font-display text-2xl font-light text-paper mb-6">
                Ready to see results like these?
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-medium text-paper transition-all hover:bg-emerald-500"
                >
                  Schedule a strategy call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/50 hover:text-emerald-200"
                >
                  All case studies
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}