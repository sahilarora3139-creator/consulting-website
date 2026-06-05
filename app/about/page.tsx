// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe,
  Building2,
} from "lucide-react";
import { CTASection } from "@/components/services/CTASection";
import { VerticalWordMarquee } from "@/components/about/VerticalWordMarquee";

export const metadata: Metadata = {
  title: "About — Engineering as craft, consulting as conversation",
  description:
    "TechShield Analytics is a Delhi-based technology firm building cloud, data, AI and audit programs for enterprises and growth-stage teams. Founded by engineers, run as engineers.",
  alternates: { canonical: "/about" },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const stats = [
  { k: "10+", v: "Years in cloud, data & cyber" },
  { k: "5", v: "Service practices" },
  { k: "35+", v: "Specialized capabilities" },
  { k: "3", v: "Cloud platforms (AWS · Azure · GCP)" },
];

const milestones = [
  {
    year: "Foundation",
    title: "The firm is founded",
    desc: "TechShield Analytics established with a simple conviction — engineering firms should ship systems, not slide decks.",
  },
  {
    year: "Cloud-first era",
    title: "Multi-cloud engagements",
    desc: "Delivered cloud assessment, migration and security programs across AWS, Azure and Google Cloud for BFSI and ITES clients.",
  },
  {
    year: "Audit & Risk practice",
    title: "Security becomes a pillar",
    desc: "Expanded into VAPT, TPRM, GRC and breach-response, building a dedicated audit-and-risk capability under the firm.",
  },
  {
    year: "Data & AI practice",
    title: "Decision intelligence",
    desc: "Added data engineering, BI and AI/MLOps services. Built analytics platforms and ML systems for analytics-driven clients.",
  },
  {
    year: "Today",
    title: "Five practices, one team",
    desc: "Cloud · Audit · Data · AI · SaaS — embedded teams and advisory engagements across India and global markets.",
  },
  {
    year: "What's next",
    title: "Product-led services",
    desc: "Techshieldors Intelligence Pvt Ltd incorporated to scale product offerings alongside the core consulting practice.",
  },
];

const principles = [
  {
    n: "01",
    title: "Engineering rigor at advisory speed",
    body: "We don't separate the people who think from the people who ship. Every recommendation we make is one we'd be willing to build ourselves.",
  },
  {
    n: "02",
    title: "Conversation before slide decks",
    body: "The first meeting isn't a pitch — it's a diagnostic. We listen for the real constraint before designing for the stated one.",
  },
  {
    n: "03",
    title: "Security as native posture",
    body: "Every system we touch passes through our audit lens. Encryption, RBAC, observability and compliance aren't a phase — they're foundations.",
  },
  {
    n: "04",
    title: "Knowledge transferred, not hoarded",
    body: "We leave behind runbooks, dashboards and infrastructure your team owns. No black boxes only we can maintain.",
  },
  {
    n: "05",
    title: "Outcomes, measured and observable",
    body: "Uptime, audit-readiness, model accuracy, time-to-decision — we scope to metrics that matter to your business, not consultant hours.",
  },
];

const capabilities = [
  { title: "Cloud & Digital Transformation", desc: "Secure, scalable cloud foundations across AWS, Azure and GCP — from assessment to managed services.", href: "/services/cloud" },
  { title: "Audit, Risk & Cybersecurity", desc: "VAPT, TPRM, GRC and breach response — security as a native posture, not a bolt-on.", href: "/services/audit" },
  { title: "Data & Business Intelligence", desc: "Modern data platforms, real-time analytics and decision intelligence on Snowflake, Databricks and the BI stack.", href: "/services/data" },
  { title: "Artificial Intelligence", desc: "ML systems, MLOps, GenAI applications and computer vision — production-grade, not proof-of-concept.", href: "/services/ai" },
  { title: "SaaS Solutions", desc: "Multi-tenant product development, design, MDM, virtual desktops and SaaS integrations.", href: "/services/saas" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "CERT-In Aligned", desc: "Security audit methodology aligned with CERT-In framework" },
  { icon: Award, label: "ISO 27001 Aligned", desc: "Information security management aligned with ISO 27001:2022 controls" },
  { icon: Globe, label: "Multi-Cloud Practitioners", desc: "Hands-on engineering depth across AWS, Microsoft Azure and Google Cloud" },
  { icon: Building2, label: "DPDP Compliant", desc: "Programs aligned with India's Digital Personal Data Protection Act, 2023" },
];

const techPartners = [
  "AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Databricks",
  "Power BI", "Tableau", "Looker", "Microsoft 365", "Google Workspace",
  "Kubernetes", "Terraform", "MongoDB", "PostgreSQL", "Docker", "GitHub",
];

// ─── CAPABILITY CARD ──────────────────────────────────────────────────────────
function CapabilityCard({ c, index }: { c: typeof capabilities[0]; index: number }) {
  return (
    <Link
      href={c.href}
      className="group relative flex flex-col gap-5 bg-paper p-8 transition-colors hover:bg-paper-soft md:p-10"
    >
      <span className="font-display text-xs tracking-widest text-ink-300">
        0{index + 1}
      </span>
      <h3 className="font-display text-2xl font-light leading-tight tracking-tight text-ink-900">
        {c.title}
      </h3>
      <p className="flex-1 text-base leading-relaxed text-ink-500">
        {c.desc}
      </p>
      <span className="inline-flex items-center gap-2 pt-4 text-sm font-medium text-emerald-700 transition-all group-hover:gap-3">
        Explore practice
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-paper text-ink-900">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 md:grid-cols-3">
          <VerticalWordMarquee
            words={["ENGINEER", "BUILD", "DESIGN", "MIGRATE", "DELIVER", "SECURE"]}
            direction="up"
            duration={48}
          />
          <VerticalWordMarquee
            words={["PROTECT", "SCALE", "AUDIT", "OBSERVE", "GOVERN", "MEASURE"]}
            direction="down"
            duration={58}
            className="hidden md:block"
          />
          <VerticalWordMarquee
            words={["ARCHITECT", "PREDICT", "REFINE", "ANALYZE", "OPERATE", "LISTEN"]}
            direction="up"
            duration={42}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-ink-900 via-ink-900/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-ink-900 via-ink-900/90 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.15),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-44">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-ink-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              About TechShield Analytics
            </div>
            <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
              We build the{" "}
              <span className="italic text-emerald-300">foundations</span>
              <br />
              enterprises rely on.
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-paper/75 md:text-xl">
              A Delhi-based technology firm building cloud, data, AI and audit
              programs for enterprises and growth-stage teams.
              Engineering-led, security-first, outcome-obsessed.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink-900 transition-all hover:bg-emerald-300"
              >
                Explore practices
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300 hover:text-emerald-200"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="relative border-b border-ink-100 bg-paper-soft py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-px bg-ink-100 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="flex flex-col gap-3 bg-paper-soft px-6 py-8 md:px-8 md:py-10">
                <span className="font-display text-4xl font-light leading-none text-emerald-700 md:text-5xl">{s.k}</span>
                <span className="text-sm leading-snug text-ink-700">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ /02 THE FIRM ═══ */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
              <span className="h-px w-8 bg-emerald-700" />
              /02 The firm
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
              Engineering as craft.{" "}
              <span className="italic text-emerald-700">Consulting as conversation.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-lg leading-relaxed text-ink-700">
              <p>
                Most technology consulting firms ship slide decks. We ship
                systems. TechShield Analytics was founded on a simple
                conviction — the people advising on architecture should be the
                same ones capable of building it.
              </p>
              <p>
                We work across cloud, data engineering, artificial
                intelligence, audit and SaaS — but our real product is{" "}
                <span className="text-ink-900">engineering judgment applied to business problems</span>
                . Whether that means designing your cloud landing zone, running
                a VAPT against your production stack, or building the data
                platform your analytics team has been waiting two years for.
              </p>
              <p>
                Headquartered in New Delhi, we partner with enterprises and
                growth-stage teams in India and globally — embedded teams when
                you need depth, advisory engagements when you need clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ /03 OUR STORY ═══ */}
      <section className="border-y border-ink-100 bg-paper-soft py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-emerald-700" />
                /03 Our story
              </div>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
                From a single audit project to a{" "}
                <span className="italic text-emerald-700">multi-practice firm</span>.
              </h2>
            </div>
            <p className="self-end text-lg leading-relaxed text-ink-700 lg:col-span-6 lg:col-start-7">
              TechShield Analytics started as a focused consulting practice and
              has grown into a full-stack technology firm — covering cloud,
              data, AI, audit and SaaS for clients across India and beyond.
            </p>
          </div>
          <div className="relative">
            <div className="absolute bottom-2 left-3 top-2 w-px bg-ink-100 md:left-[10rem]" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="relative grid gap-4 pl-10 md:grid-cols-[10rem_1fr] md:gap-12 md:pl-0">
                  <div className="font-display text-base uppercase tracking-[0.18em] text-emerald-700">{m.year}</div>
                  <div className="relative">
                    <span className="absolute left-[-2.05rem] top-2 block h-3 w-3 rounded-full border-2 border-emerald-700 bg-paper-soft md:left-[-3.75rem]" />
                    <h3 className="font-display text-2xl font-light leading-snug text-ink-900">{m.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ /04 PRINCIPLES ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
              <span className="h-px w-8 bg-emerald-400" />
              /04 Principles
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-6xl">
              How we work.{" "}
              <span className="italic text-emerald-300">And what we won&apos;t compromise on.</span>
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <article key={p.n} className="group relative border-l border-emerald-500/20 pl-6 transition-colors hover:border-emerald-300">
                <span className="font-display text-sm text-emerald-300/80">/{p.n}</span>
                <h3 className="mt-3 font-display text-2xl font-light leading-snug text-paper">{p.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-paper/65">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ /05 CAPABILITIES — 3 + 2 layout, no ghost cell ═══ */}
      <section className="border-b border-ink-100 bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-emerald-700" />
                /05 Capabilities
              </div>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
                Five practices,{" "}
                <span className="italic text-emerald-700">one team</span>.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 transition-all hover:gap-3"
            >
              See full service catalogue
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Row 1 — 3 cards, full width */}
          <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-3">
            {capabilities.slice(0, 3).map((c, i) => (
              <CapabilityCard key={c.title} c={c} index={i} />
            ))}
          </div>

          {/* Row 2 — 2 cards, centred to match 2/3 width of row above */}
          <div className="mt-px grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-2 md:w-2/3">
            {capabilities.slice(3).map((c, i) => (
              <CapabilityCard key={c.title} c={c} index={i + 3} />
            ))}
          </div>

        </div>
      </section>

      {/* ═══ /06 TRUST & TECH ALLIANCES ═══ */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            <span className="h-px w-8 bg-emerald-700" />
            /06 Trust &amp; alliances
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
            Standards we hold to.{" "}
            <span className="italic text-emerald-700">Platforms we run on.</span>
          </h2>
        </div>

        <div className="mb-16 grid gap-px bg-ink-100 md:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex flex-col gap-4 bg-paper p-8 transition-colors hover:bg-paper-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700/[0.06] text-emerald-700 ring-1 ring-emerald-500/30">
                <b.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-ink-900">{b.label}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-100 pt-12">
          <p className="mb-10 text-center text-xs uppercase tracking-[0.22em] text-ink-500">
            Technology alliances · Platforms we engineer across
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll items-center">
              {[...techPartners, ...techPartners].map((p, i) => (
                <div key={i} className="flex shrink-0 items-center">
                  <span className="whitespace-nowrap px-10 font-display text-xl italic text-ink-500">{p}</span>
                  <span className="h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection />
    </main>
  );
}