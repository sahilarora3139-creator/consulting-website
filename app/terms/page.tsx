// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for TechShield Analytics — the terms governing use of our website and engagement of our consulting services.",
  alternates: { canonical: "/terms" },
};

const COMPANY = "TechShield Analytics";
const ENTITY = "Techshieldors Intelligence Pvt Ltd";
const EMAIL = "support@techshieldanalytics.com";
const ADDRESS = "Dwarka, Sector 3, New Delhi — 110078, India";
const EFFECTIVE_DATE = "1 June 2025";
const LAST_UPDATED = "1 June 2025";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing or using the website at techshieldanalytics.com ("Website") or engaging ${COMPANY} (operated by ${ENTITY}) for any consulting, engineering or advisory services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you are accessing the Website or Services on behalf of a company or other legal entity, you represent that you have authority to bind that entity to these Terms. If you do not agree to these Terms, you must not use our Website or Services.`,
  },
  {
    id: "services",
    title: "Description of Services",
    content: `${COMPANY} provides technology consulting services including but not limited to cloud infrastructure design and migration, data engineering and analytics platform development, artificial intelligence and machine learning implementation, cybersecurity assessment and audit (including VAPT, GRC and TPRM), and SaaS product development. The specific scope, deliverables, timelines and fees for any engagement are governed by a separate Statement of Work ("SOW") or consulting agreement executed between ${COMPANY} and the client. These Terms apply in addition to and do not supersede any executed SOW or consulting agreement.`,
  },
  {
    id: "website-use",
    title: "Website Use",
    subsections: [
      {
        heading: "Permitted use",
        items: [
          "You may use our Website for lawful purposes only and in a manner consistent with these Terms",
          "You may access, browse and use the Website for the purpose of learning about our services and engaging with us",
          "You may submit contact forms, job applications and enquiries through the Website",
        ],
      },
      {
        heading: "Prohibited use",
        items: [
          "Using the Website in any way that violates applicable local, national or international law or regulation",
          "Transmitting any unsolicited commercial communications (spam)",
          "Attempting to gain unauthorised access to any part of the Website, server, or database",
          "Using automated tools (bots, scrapers, crawlers) to extract content or data without our prior written consent",
          "Uploading or transmitting malicious code, viruses or any material that is harmful, offensive or defamatory",
          "Reproducing, duplicating, selling or exploiting any part of the Website without express written permission",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `All content on the Website — including text, graphics, logos, icons, images, design, code and documentation — is the property of ${COMPANY} or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our Website without our prior written consent. Case study content, methodologies, frameworks and proprietary tools developed by ${COMPANY} remain our exclusive intellectual property. Work product developed specifically for a client under a signed SOW is governed by the IP provisions of that agreement.`,
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: `Both parties acknowledge that in the course of an engagement, each may receive confidential information of the other ("Confidential Information"). Each party agrees to: (a) hold the other's Confidential Information in strict confidence; (b) not disclose Confidential Information to any third party without prior written consent; (c) use Confidential Information only for the purposes of the engagement. This obligation does not apply to information that is publicly known, independently developed, or required to be disclosed by law. Specific confidentiality terms for client engagements are set out in the applicable SOW or NDA.`,
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: `The Website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. ${COMPANY} does not warrant that the Website will be uninterrupted, error-free or free of viruses. Information on the Website is for general informational purposes only and does not constitute professional advice. Outcomes described in case studies reflect specific client engagements and are not guarantees of similar results. Specific service warranties are addressed in executed client agreements.`,
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, ${COMPANY} and its directors, employees and agents shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of the Website or our Services, including but not limited to loss of profits, data, goodwill or business interruption. Our total aggregate liability for any claim arising out of or relating to these Terms or our Services shall not exceed the fees paid by you to ${COMPANY} in the three months preceding the claim. Nothing in these Terms limits liability for fraud, wilful misconduct, death or personal injury caused by negligence, or any other liability that cannot be excluded under applicable law.`,
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: `You agree to indemnify, defend and hold harmless ${COMPANY} and its officers, directors, employees and agents from and against any claims, liabilities, damages, losses and expenses (including reasonable legal fees) arising out of or relating to: (a) your use of the Website in violation of these Terms; (b) your violation of any applicable law or third-party rights; (c) any content or information you submit through our Website that is false, misleading or infringes third-party rights.`,
  },
  {
    id: "third-party",
    title: "Third-Party Links and Services",
    content: `The Website may contain links to third-party websites or services (including Calendly, LinkedIn, GitHub and other tools). These links are provided for convenience only. We have no control over the content, privacy policies or practices of third-party sites and assume no responsibility for them. Your use of third-party services is governed by their respective terms and policies. The presence of a link does not imply our endorsement of the linked site or service.`,
  },
  {
    id: "privacy",
    title: "Privacy",
    content: `Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Website, you consent to the collection and use of information as described in our Privacy Policy. In the event of any conflict between these Terms and the Privacy Policy regarding data protection matters, the Privacy Policy shall prevail.`,
  },
  {
    id: "modifications",
    title: "Modifications to Terms and Website",
    content: `We reserve the right to modify these Terms at any time. We will indicate the date of the most recent revision at the top of this page. Material changes will be communicated via a notice on our Website or, where appropriate, by email. Your continued use of the Website after changes are posted constitutes acceptance of the revised Terms. We may also modify, suspend or discontinue the Website or any part of it at any time without notice or liability.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `We reserve the right to terminate or suspend your access to the Website immediately, without prior notice or liability, if we believe you have violated these Terms or for any other reason at our sole discretion. Provisions of these Terms that by their nature should survive termination (including intellectual property, confidentiality, disclaimers, limitation of liability and governing law) shall survive termination.`,
  },
  {
    id: "governing-law",
    title: "Governing Law and Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms or the Website shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India. For client engagements, dispute resolution provisions in the applicable SOW or consulting agreement shall take precedence over this clause.`,
  },
  {
    id: "general",
    title: "General Provisions",
    items: [
      "Entire agreement — These Terms, together with our Privacy Policy and any executed client agreements, constitute the entire agreement between you and us regarding your use of the Website",
      "Severability — If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will remain in full force",
      "Waiver — Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights",
      "Assignment — You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction",
      "Force majeure — We shall not be liable for any failure or delay in performance due to causes beyond our reasonable control",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: "For questions about these Terms of Service, please contact us:",
    contact: true,
  },
];

export default function TermsPage() {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,140,112,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200/70">
              <span className="h-px w-8 bg-emerald-400" />
              Legal
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-6xl">
              Terms of <span className="italic text-emerald-300">Service</span>
            </h1>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-paper/50">
              <span>Effective: {EFFECTIVE_DATE}</span>
              <span>·</span>
              <span>Last updated: {LAST_UPDATED}</span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-paper/60 max-w-xl">
              These Terms govern your use of the {COMPANY} website and the engagement of our consulting services. Please read them carefully.
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

                {s.contact && (
                  <div className="mt-4 rounded-xl border border-ink-100 bg-paper-soft p-6 text-sm leading-relaxed text-ink-600 space-y-1">
                    <p className="font-medium text-ink-900">{COMPANY}</p>
                    <p className="text-ink-500 text-xs">(operated by {ENTITY})</p>
                    <p>{ADDRESS}</p>
                    <p>
                      Email:{" "}
                      <a href={`mailto:${EMAIL}`} className="text-emerald-700 underline underline-offset-2">
                        {EMAIL}
                      </a>
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Bottom nav */}
            <div className="flex items-center justify-between border-t border-ink-100 pt-10">
              <Link href="/privacy" className="text-sm text-emerald-700 hover:underline underline-offset-2">
                Read our Privacy Policy →
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