"use client";

// app/contact/page.tsx
import { useState } from "react";
import Script from "next/script";
import {
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ArrowUpRight,
  Check,
  Loader2,
} from "lucide-react";
import { RotatingWord } from "@/components/services/RotatingWord";

// ─── Contact details (edit in one place) ─────────────────────────────────────
const CONTACT = {
  email: "hello@techshieldanalytics.com",
  phoneDisplay: "+91 82877 58018",
  phoneRaw: "+918287758018",
  whatsapp: "https://wa.me/918287758018",
  calendly: "https://calendly.com/sahil-arora3139/30min",
  address: {
    line1: "TechShield Analytics",
    line2: "Dwarka, Sector 3",
    line3: "New Delhi — 110078",
    line4: "India",
  },
  coords: { lat: "28.5921° N", lng: "77.0460° E" },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dwarka+Sector+3+New+Delhi",
};

const directLines = [
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Call us",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneRaw}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: CONTACT.whatsapp,
    external: true,
  },
];

const nextSteps = [
  {
    n: "01",
    title: "We review your context",
    body: "Within one business day, a senior engineer reads through your inquiry and the relevant practice lead is looped in.",
  },
  {
    n: "02",
    title: "Strategy conversation",
    body: "A 30–45 minute call to understand the real constraint — not just the stated one. No pitch decks, no sales theatre.",
  },
  {
    n: "03",
    title: "Clear next steps",
    body: "If we're a fit, you get a scoped proposal with timelines and outcomes. If we aren't, we'll tell you who is.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setLoading(false);
  };

  const openCalendly = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Calendly?.initPopupWidget({ url: CONTACT.calendly });
    return false;
  };

  return (
    <main className="bg-paper text-ink-900">
      {/* ═══ HERO — Dark with rotating multilingual greeting ═══ */}
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
        {/* Radial vignettes */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(31,140,112,0.20),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(184,73,43,0.12),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-36">
          <div className="max-w-4xl">
            {/* Availability badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available · Responds within 1 business day
            </div>

            {/* Rotating greeting + headline */}
            <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
              <RotatingWord
                words={[
                  "Hello.",
                  "Namaste.",
                  "Hola.",
                  "Bonjour.",
                  "你好.",
                  "こんにちは.",
                  "안녕.",
                ]}
                interval={2000}
                className="italic text-emerald-300"
              />
              <span className="mt-2 block text-paper">
                Let&apos;s start a{" "}
                <span className="italic text-emerald-300">conversation</span>.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-paper/75 md:text-xl">
              Whether you have a defined project, a vague problem, or just want
              to compare notes on a technology choice — we&apos;d love to hear
              from you. No pitch decks, no sales theatre. Just clarity.
            </p>

            {/* Quick channel pills */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/60 hover:text-emerald-200"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                Email
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/60 hover:text-emerald-200"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                Call
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/60 hover:text-emerald-200"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                WhatsApp
              </a>
              <button
                type="button"
                onClick={openCalendly}
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink-900 transition-all hover:bg-emerald-300"
              >
                <Calendar className="h-4 w-4" strokeWidth={1.5} />
                Schedule a call
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIRECT LINES + FORM ═══ */}
      <section className="border-y border-ink-100 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* ─── LEFT — Direct lines ─── */}
            <aside className="lg:col-span-5">
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
                  <span className="h-px w-8 bg-emerald-700" />
                  /01 Direct lines
                </div>
                <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-ink-900 md:text-4xl">
                  Pick the channel that{" "}
                  <span className="italic text-emerald-700">works for you</span>
                  .
                </h2>
              </div>

              {/* Direct line cards */}
              <div className="overflow-hidden rounded-2xl border border-ink-100">
                <div className="grid gap-px bg-ink-100">
                  {directLines.map((line) => (
                    <a
                      key={line.label}
                      href={line.href}
                      target={line.external ? "_blank" : undefined}
                      rel={line.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-5 bg-paper p-5 transition-colors hover:bg-paper-soft md:p-6"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700/[0.06] text-emerald-700 ring-1 ring-emerald-500/30">
                        <line.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500">
                          {line.label}
                        </div>
                        <div className="mt-0.5 truncate text-base text-ink-900">
                          {line.value}
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700" />
                    </a>
                  ))}

                  {/* Calendly button (uses onClick instead of href) */}
                  <button
                    type="button"
                    onClick={openCalendly}
                    className="group flex items-center gap-5 bg-paper p-5 text-left transition-colors hover:bg-paper-soft md:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-paper">
                      <Calendar className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-700">
                        Schedule a call
                      </div>
                      <div className="mt-0.5 text-base text-ink-900">
                        Book a 30-min strategy session
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700" />
                  </button>
                </div>
              </div>

              {/* Response time */}
              <div className="mt-8 flex items-start gap-4 border-t border-ink-100 pt-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700/[0.06] text-emerald-700">
                  <Clock className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-display text-base text-ink-900">
                    Response within 1 business day
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    Office hours · Mon – Fri · 10am – 7pm IST
                  </p>
                </div>
              </div>
            </aside>

            {/* ─── RIGHT — Form ─── */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-paper-soft/40 p-8 md:p-10">
                <div className="mb-8">
                  <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
                    <span className="h-px w-8 bg-emerald-700" />
                    /02 Send a message
                  </div>
                  <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-ink-900 md:text-4xl">
                    Tell us about your{" "}
                    <span className="italic text-emerald-700">project</span>.
                  </h2>
                </div>

                {success ? (
                  <SuccessPanel onReset={() => setSuccess(false)} />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field
                        label="Full name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <Field
                        label="Work email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Field
                      label="Company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      optional
                    />

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-ink-500"
                      >
                        Project or challenge
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="A few sentences about what you're working on or what's blocking you…"
                        className="w-full resize-none rounded-lg border border-ink-100 bg-paper px-4 py-3 text-base text-ink-900 placeholder-ink-300 transition-colors focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/15"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-4 text-sm font-medium text-paper transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    {error && (
                      <p className="text-sm text-sienna">
                        Something went wrong sending your message. Please try
                        again, or email us at{" "}
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="underline"
                        >
                          {CONTACT.email}
                        </a>
                        .
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT HAPPENS NEXT ═══ */}
      <section className="bg-paper-soft py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
              <span className="h-px w-8 bg-emerald-700" />
              /03 What happens next
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl">
              No mystery. No pressure.{" "}
              <span className="italic text-emerald-700">Just clarity.</span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {nextSteps.map((step) => (
              <div key={step.n} className="relative">
                <div className="mb-5 font-display text-sm text-emerald-700">
                  /{step.n}
                </div>
                <h3 className="font-display text-2xl font-light leading-snug text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OFFICE — Dark stylized location ═══ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,140,112,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,140,112,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.15),transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
                <span className="h-px w-8 bg-emerald-400" />
                /04 Office
              </div>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-5xl">
                Headquartered in{" "}
                <span className="italic text-emerald-300">New Delhi</span>.
              </h2>

              <address className="mt-10 space-y-1 not-italic text-lg leading-relaxed text-paper/75">
                <div className="font-display text-paper">
                  {CONTACT.address.line1}
                </div>
                <div>{CONTACT.address.line2}</div>
                <div>{CONTACT.address.line3}</div>
                <div className="text-paper/50">{CONTACT.address.line4}</div>
              </address>

              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/60 hover:text-emerald-200"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-ink-900/40 backdrop-blur-sm">
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(110,231,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,183,1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,140,112,0.25),transparent_55%)]" />

                <div className="relative p-8 md:p-12">
                  <div className="mb-12 flex items-center justify-between border-b border-emerald-500/15 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-200/90">
                        Live location
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tabular-nums text-paper/40">
                      28.5921° N · 77.0460° E
                    </span>
                  </div>

                  <div className="text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/40">
                      District
                    </p>
                    <h3 className="mt-4 font-display text-5xl font-light tracking-tight text-paper md:text-6xl">
                      DWARKA
                    </h3>
                    <p className="mt-3 text-sm text-paper/60">
                      New Delhi · India
                    </p>

                    <div className="mx-auto mt-8 flex w-fit items-center gap-3 text-emerald-300/40">
                      <span className="h-px w-12 bg-current" />
                      <span className="h-2 w-2 rounded-full border border-emerald-300" />
                      <span className="h-px w-12 bg-current" />
                    </div>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-px border-t border-emerald-500/15 bg-emerald-500/10 pt-px">
                    <div className="bg-ink-900 p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-paper/40">
                        Time zone
                      </p>
                      <p className="mt-1 text-sm text-paper">
                        IST (UTC + 5:30)
                      </p>
                    </div>
                    <div className="bg-ink-900 p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-paper/40">
                        Office hours
                      </p>
                      <p className="mt-1 text-sm text-paper">
                        Mon – Fri · 10am – 7pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </main>
  );
}

// ─── Field component ─────────────────────────────────────────────────────────
function Field({
  label,
  name,
  type,
  value,
  onChange,
  required,
  optional,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-500"
      >
        {label}
        {optional && (
          <span className="text-[10px] normal-case tracking-normal text-ink-300">
            (optional)
          </span>
        )}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-ink-100 bg-paper px-4 py-3 text-base text-ink-900 placeholder-ink-300 transition-colors focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/15"
      />
    </div>
  );
}

// ─── Success panel ───────────────────────────────────────────────────────────
function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-100/50 p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-paper">
          <Check className="h-6 w-6" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-light text-ink-900">
            Message received.
          </h3>
          <p className="mt-2 text-base leading-relaxed text-ink-700">
            Thanks for reaching out. A member of the team will respond within
            one business day. If it&apos;s urgent, you can also reach us
            directly at{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-emerald-700 underline underline-offset-2"
            >
              {CONTACT.email}
            </a>
            .
          </p>
          <button
            onClick={onReset}
            className="mt-6 text-sm font-medium text-emerald-700 hover:underline"
          >
            Send another message →
          </button>
        </div>
      </div>
    </div>
  );
}