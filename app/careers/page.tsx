// app/careers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  Plus,
  Users,
  Globe,
  Zap,
  TrendingUp,
  Shield,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Build work that compounds",
  description:
    "Open positions at TechShield Analytics across Sales, Marketing and Engineering. Work on real problems with senior engineers in a Delhi-based technology firm.",
  alternates: { canonical: "/careers" },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SUPPORT_EMAIL = "support@techshieldanalytics.com";

const whyJoin = [
  {
    n: "01",
    title: "Outcomes, not hours",
    body: "We measure people by what they ship and the impact it creates — not how long they sit at a desk. Strong work gets noticed and rewarded fast.",
  },
  {
    n: "02",
    title: "Senior-by-default mentorship",
    body: "Every team has senior engineers and practice leads who code, sell or write alongside you. No 'junior pool' — you're in the work from day one.",
  },
  {
    n: "03",
    title: "Real ownership",
    body: "You'll own outcomes, not tickets. Clients you work with, campaigns you run, code you ship — your name is on it, and so is the credit.",
  },
  {
    n: "04",
    title: "Cross-practice exposure",
    body: "Sales talks to engineering. Marketing pairs with practice leads. You'll see how the whole firm runs — and learn faster because of it.",
  },
];

type Vacancy = {
  id: string;
  title: string;
  department: "Sales" | "Marketing" | "Engineering";
  location: string;
  type: string;
  experience: string;
  desc: string;
  responsibilities: string[];
  requirements: string[];
};

const vacancies: Vacancy[] = [
  {
    id: "01",
    title: "Sales Executive — Enterprise Accounts",
    department: "Sales",
    location: "New Delhi",
    type: "Full-time",
    experience: "1–3 years",
    desc: "Drive new business across mid-market and enterprise accounts in BFSI, ITES and SaaS. Own the full sales cycle from prospecting to close.",
    responsibilities: [
      "Build and manage a pipeline of qualified enterprise opportunities across cloud, audit and data services",
      "Run discovery conversations with CTOs, CISOs and Heads of Data — understand technical buying motions",
      "Partner with practice leads to scope and price multi-quarter consulting engagements",
      "Hit quarterly bookings targets and contribute to pipeline forecasting",
    ],
    requirements: [
      "1–3 years of B2B sales experience, preferably in IT services, SaaS or technology consulting",
      "Comfortable selling technical services — you don't need to code, but you need to be conversant",
      "Strong written and verbal communication; experience with enterprise sales tools (CRM, LinkedIn Sales Nav)",
      "Based in or willing to relocate to Delhi NCR",
    ],
  },
  {
    id: "02",
    title: "Inside Sales Representative",
    department: "Sales",
    location: "New Delhi · Hybrid",
    type: "Full-time",
    experience: "0–2 years",
    desc: "Generate qualified leads through outbound prospecting, inbound qualification and account research. Work side-by-side with marketing and senior sales.",
    responsibilities: [
      "Research target accounts and identify decision-makers across India and global markets",
      "Run outbound campaigns via email, LinkedIn and phone — book qualified discovery calls",
      "Qualify inbound leads from the website, campaigns and partner referrals",
      "Maintain a clean CRM and contribute to weekly pipeline reviews",
    ],
    requirements: [
      "0–2 years of sales, BD or SDR experience (freshers with strong communication welcome)",
      "Excellent written English — you'll write a lot of cold emails",
      "Comfort with rejection and a structured approach to outbound",
      "Curiosity about cloud, data and cybersecurity — willingness to learn the technical landscape",
    ],
  },
  {
    id: "03",
    title: "Marketing Lead — Content & Demand Gen",
    department: "Marketing",
    location: "New Delhi · Hybrid",
    type: "Full-time",
    experience: "3–5 years",
    desc: "Own the content engine and demand generation funnel. Build the brand, drive organic traffic and turn it into qualified pipeline.",
    responsibilities: [
      "Run the content strategy: blog posts, case studies, LinkedIn, technical whitepapers",
      "Drive SEO across our service pillar pages — own organic growth metrics",
      "Plan and execute multi-channel demand gen campaigns (paid, email, partner co-marketing)",
      "Work with sales on lead qualification, attribution and pipeline conversion",
    ],
    requirements: [
      "3–5 years in B2B marketing — ideally at a SaaS, services or technology firm",
      "Strong writing skills; ability to brief and edit external writers",
      "Hands-on with SEO tools, marketing automation and analytics (GA4, Search Console, HubSpot or similar)",
      "Strategic enough to plan, hands-on enough to ship",
    ],
  },
  {
    id: "04",
    title: "Software Engineering Intern",
    department: "Engineering",
    location: "New Delhi · Hybrid",
    type: "6-month internship",
    experience: "Pre-final or final year",
    desc: "Work on real client engagements across cloud, data and AI. Ship production code, learn from senior engineers, walk out with portfolio-grade projects.",
    responsibilities: [
      "Contribute to client projects across our cloud, data engineering and AI practices",
      "Pair with senior engineers on architecture, code reviews and deployment",
      "Build internal tools, scripts and automations that compound across engagements",
      "Document your work and present learnings at weekly engineering reviews",
    ],
    requirements: [
      "Pre-final or final year B.Tech / B.E. / M.Sc. in CS, IT, Data Science or related field",
      "Solid grounding in at least one of: Python, TypeScript / JavaScript, SQL",
      "Curiosity about cloud (AWS / Azure / GCP), data engineering or ML — bonus if you've shipped side projects",
      "6-month commitment, with a clear path to full-time conversion based on performance",
    ],
  },
];

const departmentAccent: Record<Vacancy["department"], string> = {
  Sales: "bg-emerald-100 text-emerald-700",
  Marketing: "bg-[#FCEEE7] text-sienna",
  Engineering: "bg-ink-100 text-ink-900",
};

// ─── COMPANY SNAPSHOT — shown inside every job posting ────────────────────────
const companyStats = [
  { icon: Globe,     value: "4+",    label: "Industries served" },
  { icon: TrendingUp, value: "10+",  label: "Years engineering" },
  { icon: Users,     value: "20+",   label: "Projects delivered" },
  { icon: Zap,       value: "30%",   label: "Avg. infra cost saved" },
];

const companyPractices = [
  { icon: Shield,   label: "Cybersecurity & Audit" },
  { icon: Database, label: "Data Engineering" },
  { icon: Zap,      label: "AI & Machine Learning" },
  { icon: Globe,    label: "Cloud Infrastructure" },
];

function CompanyAbout() {
  return (
    <div className="mb-10 overflow-hidden rounded-xl border border-emerald-600/20 bg-gradient-to-br from-emerald-950/40 to-ink-900/60">
      {/* Header stripe */}
      <div className="flex items-center justify-between border-b border-emerald-500/15 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-400/80">
            About TechShield Analytics
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
          New Delhi · India
        </span>
      </div>

      <div className="p-6 md:p-8">

        {/* Two-col: description + stats */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left — who we are */}
          <div>
            <h4 className="mb-3 font-display text-lg font-light text-ink-900">
              Who we are
            </h4>
            <p className="text-sm leading-relaxed text-ink-600">
              TechShield Analytics is a Delhi-based technology consulting firm
              specialising in cloud infrastructure, data engineering,
              AI/ML and cybersecurity. We partner with startups and
              enterprises — from Series A SaaS companies to large BFSI
              institutions — to design, modernise and scale the systems that
              run their business.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              We&apos;re a small, senior-weighted team that moves fast and
              works on real problems. Every engagement is owned end-to-end —
              no offshore body-shops, no PowerPoint-first consulting. We build
              things that ship.
            </p>

            {/* Practice tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {companyPractices.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700"
                >
                  <p.icon className="h-3 w-3" strokeWidth={1.5} />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {companyStats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-ink-100 bg-paper p-4"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700/[0.07] text-emerald-700">
                  <s.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="font-display text-2xl font-light text-emerald-700">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-ink-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip — culture line */}
        <div className="mt-6 border-t border-ink-100 pt-5">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              "Engineering-first culture",
              "Senior mentorship on every team",
              "Outcome-driven, not hours-driven",
              "Fast feedback loops",
              "Clear path to full-time (interns)",
            ].map((trait) => (
              <span
                key={trait}
                className="flex items-center gap-2 text-xs text-ink-500"
              >
                <span className="h-1 w-1 rounded-full bg-emerald-600" />
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const counts = vacancies.reduce(
    (acc, v) => {
      acc[v.department] = (acc[v.department] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <main className="bg-paper text-ink-900">
      {/* ═══ HERO — Dark editorial ═══ */}
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,140,112,0.22),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,73,43,0.12),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            {/* Headline */}
            <div className="lg:col-span-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Careers · {vacancies.length} open positions
              </div>

              <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Build work that{" "}
                <span className="italic text-emerald-300">compounds</span>.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
                We&apos;re hiring across sales, marketing and engineering.
                Small team. Real ownership. Senior mentorship by default. If
                you want to ship work you&apos;re proud of, we&apos;d like to
                meet you.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#open-positions"
                  className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink-900 transition-all hover:bg-emerald-300"
                >
                  View open positions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=General%20Application`}
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/60 hover:text-emerald-200"
                >
                  Send your CV
                </a>
              </div>
            </div>

            {/* Now-hiring panel */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-paper/10 bg-paper/[0.03] p-8 backdrop-blur-sm">
                <p className="mb-6 text-xs uppercase tracking-[0.18em] text-paper/50">
                  Now hiring
                </p>
                <dl className="space-y-5">
                  {Object.entries(counts).map(([dept, count]) => (
                    <div
                      key={dept}
                      className="flex items-baseline justify-between gap-4 border-b border-paper/10 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-paper/70">{dept}</dt>
                      <dd className="font-display text-lg text-emerald-200">
                        {count} {count === 1 ? "role" : "roles"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ /01 WHY JOIN US ═══ */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            <span className="h-px w-8 bg-emerald-700" />
            /01 Why join us
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
            Small team.{" "}
            <span className="italic text-emerald-700">
              Disproportionate impact.
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {whyJoin.map((p) => (
            <div key={p.n} className="relative">
              <div className="mb-5 font-display text-sm text-emerald-700">
                /{p.n}
              </div>
              <h3 className="font-display text-2xl font-light leading-snug text-ink-900">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ /02 OPEN POSITIONS ═══ */}
      <section
        id="open-positions"
        className="border-y border-ink-100 bg-paper-soft py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-emerald-700" />
                /02 Open positions
              </div>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
                {vacancies.length} roles open right now.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-500">
              Tap a role to see the full description. Apply via email to{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-emerald-700 underline underline-offset-2"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
            {vacancies.map((v) => (
              <details
                key={v.id}
                className="group border-b border-ink-100 last:border-0"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 transition-colors hover:bg-paper-soft md:p-8">
                  <div className="flex-1">
                    {/* Top row */}
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="font-display text-xs tracking-widest text-ink-300">
                        /{v.id}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${departmentAccent[v.department]}`}
                      >
                        {v.department}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-light leading-snug text-ink-900 md:text-2xl">
                      {v.title}
                    </h3>

                    {/* Meta row */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {v.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {v.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {v.experience}
                      </span>
                    </div>
                  </div>

                  {/* Toggle icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-100 text-ink-500 transition-all group-open:rotate-45 group-open:border-emerald-700 group-open:bg-emerald-700 group-open:text-paper group-hover:border-emerald-700/60 group-hover:text-emerald-700">
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </summary>

                {/* ── Details panel ── */}
                <div className="border-t border-ink-100 bg-paper-soft/40 px-6 pb-8 pt-6 md:px-8 md:pb-10">

                  {/* Role summary */}
                  <p className="mb-8 max-w-3xl text-base leading-relaxed text-ink-700">
                    {v.desc}
                  </p>

                  {/* ── ABOUT THE COMPANY ── */}
                  <CompanyAbout />

                  {/* ── What you'll do + Requirements ── */}
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
                        What you&apos;ll do
                      </h4>
                      <ul className="space-y-3">
                        {v.responsibilities.map((r, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-ink-700"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-700" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
                        What we&apos;re looking for
                      </h4>
                      <ul className="space-y-3">
                        {v.requirements.map((r, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-ink-700"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-700" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply CTA */}
                  <div className="mt-10 flex flex-col items-start gap-4 border-t border-ink-100 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-ink-500">
                      Interested? Send your CV with the role title in the
                      subject line.
                    </p>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                        `Application: ${v.title}`,
                      )}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper transition-all hover:bg-emerald-700"
                    >
                      Apply for this role
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ /03 GENERAL APPLICATION — Dark closing ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.15),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
                <span className="h-px w-8 bg-emerald-400" />
                /03 Don&apos;t see a fit?
              </div>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-5xl">
                Send your CV{" "}
                <span className="italic text-emerald-300">anyway</span>.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
                We&apos;re always interested in hearing from people who care
                about the craft. If your background doesn&apos;t match an open
                role today, we&apos;ll keep you in mind as the team grows.
              </p>
            </div>

            <div className="lg:col-span-5">
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=General%20Application`}
                className="group block rounded-2xl border border-emerald-500/20 bg-paper/[0.03] p-8 transition-colors hover:border-emerald-300/40 hover:bg-paper/[0.05]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-paper/50">
                  Send your CV to
                </p>
                <p className="mt-3 font-display text-2xl text-emerald-200 md:text-3xl">
                  {SUPPORT_EMAIL}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper transition-all group-hover:gap-3">
                  Open in mail
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}