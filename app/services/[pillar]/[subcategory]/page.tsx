// app/services/[pillar]/[subcategory]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import {
  getPillar,
  getSubcategory,
  getAllPillarSubcategoryPairs,
} from "@/lib/services-data";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { SubSubFramework } from "@/components/services/SubSubFramework";
import { CTASection } from "@/components/services/CTASection";
import {
  BreadcrumbJsonLd,
  ServiceJsonLd,
  FaqJsonLd,
} from "@/components/services/JsonLd";

// Statically generate all ~30 subcategory pages at build time
export async function generateStaticParams() {
  return getAllPillarSubcategoryPairs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string; subcategory: string }>;
}): Promise<Metadata> {
  const { pillar, subcategory } = await params;
  const s = getSubcategory(pillar, subcategory);
  const p = getPillar(pillar);
  if (!s || !p) return { title: "Not found" };
  return {
    title: s.metaTitle ?? `${s.title} | ${p.label} | TechShield Analytics`,
    description:
      s.metaDescription ?? s.intro.split(".").slice(0, 2).join(".") + ".",
    alternates: { canonical: `/services/${p.id}/${s.id}` },
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ pillar: string; subcategory: string }>;
}) {
  const { pillar, subcategory } = await params;
  const p = getPillar(pillar);
  const s = getSubcategory(pillar, subcategory);
  if (!p || !s) notFound();

  // Related subcategories within same pillar (max 3)
  const related = p.subcategories.filter((x) => x.id !== s.id).slice(0, 3);

  const canonicalUrl = `https://techshieldanalytics.com/services/${p.id}/${s.id}`;

  return (
    <main className="bg-paper text-ink-900 min-h-screen font-sans">
      <ServiceJsonLd
        name={s.title}
        description={s.metaDescription ?? s.intro}
        url={canonicalUrl}
      />
      <FaqJsonLd faqs={s.faqs} />
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", url: "https://techshieldanalytics.com" },
          { name: "Services", url: "https://techshieldanalytics.com/services" },
          {
            name: p.shortLabel,
            url: `https://techshieldanalytics.com/services/${p.id}`,
          },
          { name: s.title, url: canonicalUrl },
        ]}
      />

      {/* HERO */}
      <section className="relative border-b border-ink-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-emerald-100/60 blur-[100px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-32 pb-20">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: p.shortLabel, href: `/services/${p.id}` },
              { label: s.title },
            ]}
          />

          <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{s.icon}</span>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-medium">
                  {p.shortLabel}
                </p>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[1.02] tracking-tight">
                {s.title}
              </h1>

              <p className="mt-8 text-lg lg:text-xl text-ink-700 leading-relaxed max-w-2xl">
                {s.intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-ink-900 text-paper px-6 py-3.5 hover:bg-emerald-700 transition-colors font-medium text-sm"
                >
                  Discuss this engagement
                  <ArrowUpRight
                    size={15}
                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
                <Link
                  href={`/services/${p.id}`}
                  className="inline-flex items-center gap-2 border border-ink-100 hover:border-ink-900 px-6 py-3.5 transition-colors font-medium text-sm text-ink-700 hover:text-ink-900"
                >
                  ← Back to {p.shortLabel}
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:pl-10 lg:border-l border-ink-100 lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-5">
                On this page
              </p>
              <nav className="space-y-2 text-sm">
                <a
                  href="#outcomes"
                  className="block py-2 text-ink-700 hover:text-emerald-700 border-b border-ink-100"
                >
                  Key Outcomes
                </a>
                <a
                  href="#services"
                  className="block py-2 text-ink-700 hover:text-emerald-700 border-b border-ink-100"
                >
                  Our Services
                </a>
                {s.deliverables && (
                  <a
                    href="#deliverables"
                    className="block py-2 text-ink-700 hover:text-emerald-700 border-b border-ink-100"
                  >
                    What You Get
                  </a>
                )}
                {s.approach && (
                  <a
                    href="#approach"
                    className="block py-2 text-ink-700 hover:text-emerald-700 border-b border-ink-100"
                  >
                    Our Approach
                  </a>
                )}
                {s.subSubs && (
                  <a
                    href="#frameworks"
                    className="block py-2 text-ink-700 hover:text-emerald-700 border-b border-ink-100"
                  >
                    Specialized Frameworks
                  </a>
                )}
                <a
                  href="#why-us"
                  className="block py-2 text-ink-700 hover:text-emerald-700 border-b border-ink-100"
                >
                  Why TechShield Analytics
                </a>
                <a
                  href="#faqs"
                  className="block py-2 text-ink-700 hover:text-emerald-700"
                >
                  Frequently Asked Questions
                </a>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* KEY OUTCOMES */}
        <Section id="outcomes" eyebrow="Outcomes" title="Key Outcomes">
          <div className="grid md:grid-cols-2 gap-px bg-ink-100 border border-ink-100">
            {s.keyOutcomes.map((o, i) => (
              <div key={i} className="bg-paper p-6 lg:p-8 flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Check size={15} strokeWidth={2} />
                </div>
                <p className="text-ink-700 leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SERVICES */}
        <Section id="services" eyebrow="Capabilities" title="Our Services">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
            {s.services.map((svc, i) => (
              <div key={i} className="bg-paper p-7 min-h-[220px]">
                <span className="text-3xl mb-5 block">{svc.icon}</span>
                <h3 className="font-display text-lg text-ink-900 mb-4 leading-snug">
                  {svc.title}
                </h3>
                <ul className="space-y-2">
                  {svc.points.map((pt, j) => (
                    <li
                      key={j}
                      className="text-sm text-ink-700 flex gap-2 items-start"
                    >
                      <span className="text-emerald-700 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* DELIVERABLES */}
        {s.deliverables && s.deliverables.length > 0 && (
          <Section
            id="deliverables"
            eyebrow="Deliverables"
            title="What You Get"
          >
            <div className="grid md:grid-cols-2 gap-px bg-ink-100 border border-ink-100">
              {s.deliverables.map((d, i) => (
                <div key={i} className="bg-paper p-6 lg:p-8 flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sienna/10 text-sienna flex items-center justify-center font-display text-sm tabular-nums">
                    {i + 1}
                  </div>
                  <p className="text-ink-700 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* APPROACH */}
        {s.approach && s.approach.length > 0 && (
          <Section id="approach" eyebrow="Methodology" title="Our Approach">
            <ol className="space-y-0">
              {s.approach.map((step, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-7 border-b border-ink-100 last:border-b-0"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-display text-2xl text-emerald-700 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-ink-900 mb-2">
                      {step.step}
                    </h4>
                    <p className="text-ink-700 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* SUB-SUB FRAMEWORKS */}
        {s.subSubs && s.subSubs.length > 0 && (
          <Section
            id="frameworks"
            eyebrow="Specialized practices"
            title="Frameworks within this service"
          >
            <SubSubFramework subSubs={s.subSubs} />
          </Section>
        )}

        {/* WHY US */}
        <Section
          id="why-us"
          eyebrow="Differentiation"
          title="Why TechShield Analytics"
        >
          <div className="bg-ink-900 text-paper p-10 lg:p-14">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {s.whyUs.map((w, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-display text-emerald-500 tabular-nums shrink-0 text-sm pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-paper/85 leading-relaxed">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQS */}
        <Section
          id="faqs"
          eyebrow="Questions"
          title="Frequently Asked Questions"
        >
          <FaqAccordion faqs={s.faqs} />
        </Section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="py-20 lg:py-24 border-t border-ink-100">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-5">
              Related in {p.shortLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-900 mb-10 tracking-tight">
              Continue exploring.
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-ink-100">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/services/${p.id}/${r.id}`}
                  className="group bg-paper hover:bg-paper-soft transition-colors p-6 flex flex-col gap-4"
                >
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <h3 className="font-display text-xl text-ink-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-ink-500 mt-2 line-clamp-2">
                      {r.intro.split(".")[0]}.
                    </p>
                  </div>
                  <span className="mt-auto text-emerald-700 text-sm font-medium flex items-center gap-1.5">
                    Read more
                    <ArrowUpRight
                      size={13}
                      className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <CTASection
        title={`Ready to start your ${s.title} engagement?`}
        subtitle="Share your scope and timeline. We'll come back with a focused proposal — typically within one business day."
      />
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 lg:py-24 border-t border-ink-100 first:border-t-0">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink-900 tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
