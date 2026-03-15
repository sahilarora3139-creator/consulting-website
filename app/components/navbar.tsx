"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold text-blue-600 tracking-tight"
        >
          TechShieldAnalytics
        </Link>

        {/* Desktop Navigation + Social + CTA */}
        <div className="hidden md:flex items-center gap-10">
          
          {/* Nav Links */}
          <nav className="flex items-center gap-8 text-base font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-600">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <Github size={18} />
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn-premium bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-8 py-6 space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-lg ${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block bg-blue-600 text-white px-4 py-3 rounded-xl text-center font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}