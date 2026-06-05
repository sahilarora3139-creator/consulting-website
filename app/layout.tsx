import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import PageTransition from "./components/PageTransition";
import Script from "next/script";
import {
  Menu,
  X,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Github,
  Mail,
} from "lucide-react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechShield Analytics | Cloud, Data, AI & Audit Engineering",
    template: "%s | TechShield Analytics",
  },
  description:
    "We architect scalable cloud infrastructure, modern data platforms, AI systems and audit programs for enterprises and growth-stage teams.",
  keywords: [
    "Cloud Consulting",
    "Data Engineering",
    "AI Consulting",
    "Cybersecurity Audit",
    "VAPT",
    "Machine Learning",
    "Cloud Architecture",
    "GRC",
  ],
  openGraph: {
    title: "TechShield Analytics | Cloud, Data, AI & Audit Engineering",
    description:
      "Scalable cloud architecture, advanced data engineering, AI systems and audit programs for modern businesses.",
    url: "https://techshieldanalytics.com",
    siteName: "TechShield Analytics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechShield Analytics | Cloud, Data, AI & Audit Engineering",
    description:
      "Scalable cloud architecture and AI-driven systems built for growth.",
  },
};

// ─── Footer link data ─────────────────────────────────────────────────────────
const footerLinks = {
  services: [
    { label: "Cloud & Digital Transformation", href: "/services/cloud" },
    { label: "Audit, Risk & Cybersecurity", href: "/services/audit" },
    { label: "Data & Business Intelligence", href: "/services/data" },
    { label: "Artificial Intelligence", href: "/services/ai" },
    { label: "SaaS Solutions", href: "/services/saas" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

const social = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/techshield-analytics/",
    external: true,
  },

  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/TechShieldAnalytics", 
    external: true,
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/techshieldanalytics?igsh=MWx0Mmh6OXd0bmNmbA==", 
    external: true,
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:support@techshieldanalytics.com",
    external: false,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${interTight.variable}`}
    >
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink-900">
        <Navbar />

        <div className="pt-20">
          <PageTransition>{children}</PageTransition>
        </div>

        {/* ═══ FOOTER — editorial dark ═══ */}
        <footer className="relative mt-32 overflow-hidden bg-ink-900 text-paper/70">
          {/* Top hairline accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

          {/* Subtle grid backdrop */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20">
            <div className="grid gap-12 pb-16 md:grid-cols-12">
              {/* ─── Brand block ─── */}
              <div className="md:col-span-5">
                <Link href="/" className="group inline-flex items-center gap-3">
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-paper font-display text-lg italic leading-none text-ink-900 transition-colors group-hover:bg-emerald-300">
                    T
                    <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 ring-2 ring-ink-900" />
                  </span>
                  <div className="flex flex-col leading-none">
                    <span className="font-display text-lg text-paper">
                      TechShield
                    </span>
                    <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-paper/50">
                      Analytics
                    </span>
                  </div>
                </Link>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
                  Engineering as craft. Consulting as conversation. We build
                  cloud, data, AI and audit programs for enterprises and
                  growth-stage teams.
                </p>

                {/* Social icons row — all 4 kept */}
                <div className="mt-8 flex items-center gap-2">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.external ? "_blank" : undefined}
                      rel={s.external ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-all hover:border-emerald-300/60 hover:bg-emerald-500/10 hover:text-emerald-200"
                    >
                      <s.icon className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              {/* ─── Services ─── */}
              <div className="md:col-span-3">
                <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-paper">
                  Services
                </h4>
                <ul className="space-y-3 text-sm">
                  {footerLinks.services.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-paper/65 transition-colors hover:text-emerald-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ─── Company ─── */}
              <div className="md:col-span-2">
                <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-paper">
                  Company
                </h4>
                <ul className="space-y-3 text-sm">
                  {footerLinks.company.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-paper/65 transition-colors hover:text-emerald-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ─── Get in touch ─── */}
              <div className="md:col-span-2">
                <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-paper">
                  Get in touch
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="mailto:support@techshieldanalytics.com"
                      className="break-all text-paper/65 transition-colors hover:text-emerald-300"
                    >
                      support@techshieldanalytics.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+918287758018"
                      className="text-paper/65 transition-colors hover:text-emerald-300"
                    >
                      +91 82877 58018
                    </a>
                  </li>
                  <li className="pt-2 leading-relaxed text-paper/50">
                    Dwarka
                    <br />
                    New Delhi — 110078
                  </li>
                </ul>
              </div>
            </div>

            {/* ─── Bottom strip ─── */}
            <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/50 md:flex-row md:items-center">
              <p>
                © {new Date().getFullYear()} TechShield Analytics. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-paper"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-paper"
                >
                  Terms
                </Link>
                <span className="hidden font-mono text-paper/30 md:inline">
                  v1.0
                </span>
              </div>
            </div>
          </div>
        </footer>

        {/* Tawk.to live chat */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/699db01953ab851c38d9bff6/1ji7vfpu6';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}