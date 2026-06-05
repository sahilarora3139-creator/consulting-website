"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100 bg-paper/95 backdrop-blur-md"
          : "border-b border-transparent bg-paper/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-10">
        {/* Logo — unchanged */}
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label="TechShield Analytics Home"
        >
          <div className="flex items-center gap-4">
            <div className="h-14 w-1 rounded-full bg-emerald-600" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
                TechShield
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-[0.4em] text-emerald-700">
                ANALYTICS
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-3 text-base font-medium transition-colors lg:px-6 ${
                  active
                    ? "text-emerald-700"
                    : "text-ink-700 hover:text-ink-900"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-5 -bottom-1 h-0.5 bg-emerald-700 lg:inset-x-6" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Side — unchanged */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/techshield-analytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 text-ink-500 transition-all hover:bg-emerald-50 hover:text-emerald-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/techshieldanalytics?igsh=MWx0Mmh6OXd0bmNmbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 text-ink-500 transition-all hover:bg-emerald-50 hover:text-emerald-700"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/TechShieldAnalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 text-ink-500 transition-all hover:bg-emerald-50 hover:text-emerald-700"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-emerald-800"
          >
            Schedule a Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Button — unchanged */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 flex h-12 w-12 items-center justify-center rounded-md text-ink-900 transition-colors hover:bg-ink-100 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu — unchanged except navItems now includes Work */}
      {open && (
        <div className="absolute inset-x-0 top-24 border-t border-ink-100 bg-paper shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 pb-6 pt-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-ink-100 py-5 font-display text-2xl transition-colors last:border-0 ${
                    active ? "text-emerald-700" : "text-ink-900"
                  }`}
                >
                  {item.label}
                  <ArrowUpRight
                    className={`h-5 w-5 ${active ? "text-emerald-700" : "text-ink-300"}`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-base font-medium text-white"
            >
              Schedule a Call
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <div className="mt-6 flex items-center justify-center gap-5">
              <a href="https://www.linkedin.com/company/techshield-analytics/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-ink-500 hover:text-emerald-700" />
              </a>
              <a href="https://www.instagram.com/techshieldanalytics?igsh=MWx0Mmh6OXd0bmNmbA==" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-ink-500 hover:text-emerald-700" />
              </a>
              <a href="https://github.com/TechShieldAnalytics" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-ink-500 hover:text-emerald-700" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}