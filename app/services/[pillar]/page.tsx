// app/services/[pillar]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import {
  getPillar,
  getAllPillarSlugs,
  pillars,
} from "@/lib/services-data";
import { PillarIcon } from "@/components/services/PillarIcon";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { CTASection } from "@/components/services/CTASection";
import { BreadcrumbJsonLd } from "@/components/services/JsonLd";

// Statically generate all 5 pillar pages at build time
export async function generateStaticParams() {
  return getAllPillarSlugs().map((pillar) => ({ pillar }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string }>;
}): Promise<Metadata> {
  const { pillar } = await params;
  const p = getPillar(pillar);
  if (!p) return { title: "Not found" };
  return {
    title: p.metaTitle ?? `${p.label} | TechShield Analytics`,
    description: p.metaDescription ?? p.tagline,
    alternates: { canonical: `/services/${p.id}` },
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ pillar: string }>;
}) {
  const { pillar } = await params;
  const p = getPillar(pillar);
  if (!p) notFound();

  // For SaaS or any inactive pillar
  if (!p.active) {
    return <ComingSoon pillar={p} />;
  }

  const otherPillars = pillars.filter((x) => x.id !== p.id && x.active);

  return (
    <main className="bg-paper text-ink-900 min-h-screen font-sans">
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", url: "https://techshieldanalytics.com" },
          { name: "Services", url: "https://techshieldanalytics.com/services" },
          {
            name: p.shortLabel,
            url: `https://techshieldanalytics.com/services/${p.id}`,
          },
        ]}
      />

      {/* HERO */}
      <section className="relative border-b border-ink-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-100/50 blur-[110px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-32 pb-20 lg:pb-24">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: p.shortLabel },
            ]}
          />

          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 border border-emerald-700/30 bg-emerald-100/50 text-emerald-700 flex items-center justify-center">
                  <PillarIcon name={p.iconName} size={20} />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-medium">
                  Practice
                </p>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[1.02] tracking-tight">
                {p.label}
              </h1>

              <div className="mt-10 max-w-2xl space-y-5">
                {p.intro.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-lg text-ink-700 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 lg:pl-10 lg:border-l border-ink-100">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-5">
                In this practice
              </p>
              <ul className="space-y-1">
                {p.subcategories.map((s, i) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${p.id}/${s.id}`}
                      className="group flex items-center justify-between gap-3 py-3 border-b border-ink-100 hover:border-emerald-700 transition-colors"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-display text-xs text-ink-300 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-ink-900 group-hover:text-emerald-700 transition-colors font-medium">
                          {s.title}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-ink-300 group-hover:text-emerald-700 transition-colors shrink-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-3">
            Service areas
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink-900 tracking-tight">
            What we deliver.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100">
          {p.subcategories.map((s, idx) => (
            <Link
              key={s.id}
              href={`/services/${p.id}/${s.id}`}
              className="group bg-paper hover:bg-paper-soft transition-colors p-8 flex flex-col gap-6 min-h-[300px]"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-display text-sm text-ink-300 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-2xl text-ink-900 leading-tight mb-3 group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-ink-700 text-sm leading-relaxed line-clamp-3">
                  {s.intro.split(".")[0]}.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-ink-100">
                <span className="text-xs text-ink-500 tabular-nums">
                  {s.services.length} services · {s.faqs.length} FAQs
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-emerald-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* OTHER PRACTICES */}
      <section className="border-t border-ink-100 bg-paper-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-6">
            Other practices
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100">
            {otherPillars.map((op) => (
              <Link
                key={op.id}
                href={`/services/${op.id}`}
                className="group bg-paper-soft hover:bg-paper transition-colors p-6 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <PillarIcon
                    name={op.iconName}
                    size={18}
                    className="text-emerald-700"
                  />
                  <span className="font-medium text-ink-900 group-hover:text-emerald-700 transition-colors">
                    {op.shortLabel}
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-ink-300 group-hover:text-emerald-700 transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Let's plan your ${p.shortLabel.toLowerCase()} engagement.`}
      />
    </main>
  );
}

// ─── COMING SOON FALLBACK ─────────────────────────────────────────────────────

function ComingSoon({ pillar }: { pillar: ReturnType<typeof getPillar> }) {
  if (!pillar) return null;
  return (
    <main className="bg-paper text-ink-900 min-h-screen font-sans">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: pillar.shortLabel },
          ]}
        />
        <div className="mt-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 font-medium mb-6">
            Coming soon
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-ink-900 tracking-tight leading-[1.05]">
            {pillar.label}
          </h1>
          <p className="mt-8 text-lg text-ink-700 leading-relaxed">
            This practice is currently in development. Reach out if you'd like
            an early conversation — we're already taking selective engagements.
          </p>
          <div className="mt-12 flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink-900 text-paper px-7 py-4 hover:bg-emerald-700 transition-colors font-medium"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-ink-900 px-7 py-4 hover:bg-ink-900 hover:text-paper transition-colors font-medium"
            >
              Back to services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
