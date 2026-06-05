// app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for TechShield Analytics — how we collect, use and protect your personal data in accordance with India's Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: "/privacy" },
};

const COMPANY = "TechShield Analytics";
const EMAIL = "support@techshieldanalytics.com";
const ADDRESS = "Dwarka, Sector 3, New Delhi — 110078, India";
const EFFECTIVE_DATE = "1 June 2025";
const LAST_UPDATED = "1 June 2025";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `${COMPANY} ("we", "us", "our") is a technology consulting firm headquartered in New Delhi, India. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose and safeguard information when you visit our website (techshieldanalytics.com), contact us, or engage our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.`,
  },
  {
    id: "data-we-collect",
    title: "Information We Collect",
    subsections: [
      {
        heading: "Information you provide directly",
        items: [
          "Name, email address and phone number when you submit our contact form or enquire about services",
          "Company name, job title and project details when you schedule a strategy call or engage our services",
          "Résumés, cover letters and professional history when you apply for a role through our careers page",
          "Communication records including emails, messages and meeting notes in the course of a client engagement",
        ],
      },
      {
        heading: "Information collected automatically",
        items: [
          "IP address, browser type, operating system and referring URLs when you visit our website",
          "Pages visited, time spent on pages and links clicked via analytics tools (e.g. Google Analytics)",
          "Cookie data as described in our Cookie section below",
        ],
      },
      {
        heading: "Information from third parties",
        items: [
          "Publicly available professional information from LinkedIn or similar platforms when you connect with us",
          "Referral information when a partner or existing client introduces you to us",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    items: [
      "To respond to your enquiries and provide the services you have requested",
      "To schedule, conduct and follow up on strategy calls and consulting engagements",
      "To process job applications and communicate with candidates",
      "To send service-related communications, project updates and invoices",
      "To improve our website, services and user experience through analytics",
      "To comply with legal obligations, including under the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable laws",
      "To protect our legitimate business interests, including fraud prevention and security",
      "We do not sell, rent or trade your personal data to third parties for their marketing purposes.",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    content: `Where applicable (including under the DPDP Act and GDPR for data subjects in the European Economic Area), we process your personal data on the following bases: (a) Consent — where you have given clear consent for a specific purpose, such as submitting a contact form; (b) Contract — where processing is necessary to perform a contract with you or take steps at your request before entering a contract; (c) Legitimate interests — where processing is necessary for our legitimate interests and those interests are not overridden by your rights; (d) Legal obligation — where processing is necessary to comply with applicable law.`,
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    subsections: [
      {
        heading: "Service providers",
        items: [
          "Hosting and infrastructure providers (e.g. Vercel, AWS) who process data on our behalf under data processing agreements",
          "Analytics providers (e.g. Google Analytics) subject to their own privacy policies",
          "Communication tools (e.g. email providers, scheduling tools like Calendly) used to communicate with you",
          "CRM and project management software used to manage client relationships",
        ],
      },
      {
        heading: "Legal and regulatory disclosure",
        items: [
          "We may disclose your information where required by law, court order, or governmental authority",
          "We may disclose information to enforce our Terms of Service or protect our rights, property or safety",
          "In the event of a merger, acquisition or sale of assets, your data may be transferred as part of that transaction",
        ],
      },
    ],
    footer: "All third-party service providers are contractually required to process your data only on our instructions and in accordance with applicable data protection law.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected. Specifically: enquiry and contact form data is retained for up to 2 years; client engagement records are retained for 7 years for legal and accounting purposes; job application data is retained for 12 months after the recruitment process concludes, unless you consent to a longer retention period; website analytics data is retained per the default retention settings of the analytics provider. When data is no longer required, we securely delete or anonymise it.`,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `Our website uses cookies and similar tracking technologies to improve your browsing experience and analyse site traffic. We use: (a) Strictly necessary cookies — required for the website to function; (b) Analytics cookies — to understand how visitors interact with our website (e.g. Google Analytics). You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use our website. We do not use advertising or tracking cookies for third-party marketing.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `Under the DPDP Act, 2023 and other applicable laws, you have the following rights regarding your personal data:`,
    items: [
      "Right to access — request a copy of the personal data we hold about you",
      "Right to correction — request that we correct inaccurate or incomplete data",
      "Right to erasure — request deletion of your personal data where there is no compelling reason for its continued processing",
      "Right to withdraw consent — where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing",
      "Right to grievance redressal — raise a complaint about how we handle your data",
      "Right to nominate — nominate another individual to exercise your rights on your behalf in case of death or incapacity",
    ],
    footer: `To exercise any of these rights, contact us at ${EMAIL}. We will respond within 30 days. We may need to verify your identity before processing your request.`,
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. These include encrypted data transmission (TLS/HTTPS), access controls and role-based permissions, secure credential management, and regular security reviews. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.`,
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: `Some of our service providers are located outside India. Where we transfer personal data internationally, we do so only to countries that provide an adequate level of data protection, or under appropriate contractual safeguards (such as standard contractual clauses). By using our services and submitting your information, you acknowledge that your data may be transferred to and processed in countries outside your country of residence.`,
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: `Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at ${EMAIL} and we will delete it promptly.`,
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites (e.g. LinkedIn, GitHub). This Privacy Policy does not apply to those sites. We encourage you to review the privacy policies of any third-party sites you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last Updated" date at the top of this page and, where appropriate, by email. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy. We encourage you to review this page periodically.`,
  },
  {
    id: "contact",
    title: "Contact & Grievance Officer",
    content: `For any questions, concerns or requests relating to this Privacy Policy or the processing of your personal data, please contact us at:`,
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-paper text-ink-900">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(31,140,112,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200/70">
              <span className="h-px w-8 bg-emerald-400" />
              Legal
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-6xl">
              Privacy <span className="italic text-emerald-300">Policy</span>
            </h1>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-paper/50">
              <span>Effective: {EFFECTIVE_DATE}</span>
              <span>·</span>
              <span>Last updated: {LAST_UPDATED}</span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-paper/60 max-w-xl">
              This policy explains how {COMPANY} collects, uses and protects your personal data. It applies to our website and all services we provide.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Sticky table of contents — desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 rounded-2xl border border-ink-100 p-6">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">
                Contents
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-ink-500 transition-colors hover:bg-paper-soft hover:text-emerald-700"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="lg:col-span-8 lg:col-start-5 space-y-14">
            {sections.map((s, idx) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-400">
                  <span className="h-px w-6 bg-emerald-600" />
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-2xl font-light leading-snug text-ink-900 mb-5">
                  {s.title}
                </h2>

                {s.content && (
                  <p className="text-base leading-relaxed text-ink-600 mb-4">
                    {s.content}
                  </p>
                )}

                {s.subsections?.map((sub) => (
                  <div key={sub.heading} className="mb-6">
                    <h3 className="text-sm font-medium text-ink-900 mb-3 uppercase tracking-[0.12em]">
                      {sub.heading}
                    </h3>
                    <ul className="space-y-2">
                      {sub.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-600">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {s.items && !s.subsections && (
                  <ul className="space-y-2 mb-4">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-600">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {s.footer && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-500 border-l-2 border-emerald-600/30 pl-4">
                    {s.footer}
                  </p>
                )}

                {s.contact && (
                  <div className="mt-4 rounded-xl border border-ink-100 bg-paper-soft p-6 text-sm leading-relaxed text-ink-600 space-y-1">
                    <p className="font-medium text-ink-900">{COMPANY}</p>
                    <p>{ADDRESS}</p>
                    <p>
                      Email:{" "}
                      <a href={`mailto:${EMAIL}`} className="text-emerald-700 underline underline-offset-2">
                        {EMAIL}
                      </a>
                    </p>
                    <p className="pt-2 text-ink-500">
                      We aim to acknowledge all privacy-related queries within 48 hours and resolve them within 30 days.
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Bottom nav */}
            <div className="flex items-center justify-between border-t border-ink-100 pt-10">
              <Link href="/terms" className="text-sm text-emerald-700 hover:underline underline-offset-2">
                Read our Terms of Service →
              </Link>
              <Link href="/contact" className="text-sm text-ink-500 hover:text-ink-900">
                Questions? Contact us
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}