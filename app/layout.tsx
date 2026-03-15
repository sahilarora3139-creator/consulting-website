import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import PageTransition from "./components/PageTransition";
import Script from "next/script";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechShieldAnalytics | Cloud, Data & AI Engineering",
    template: "%s | TechShieldAnalytics",
  },
  description:
    "We architect scalable cloud infrastructure, modern data platforms and AI-driven systems for growing businesses.",
  keywords: [
    "Cloud Consulting",
    "Data Engineering",
    "AI Consulting",
    "Machine Learning",
    "Cloud Architecture",
  ],
  openGraph: {
    title: "TechShieldAnalytics | Cloud, Data & AI Engineering",
    description:
      "Scalable cloud architecture, advanced data engineering and AI-powered systems for modern businesses.",
    url: "https://yourconsulting.vercel.app",
    siteName: "TechShieldAnalytics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechShieldAnalytics | Cloud, Data & AI Engineering",
    description:
      "Scalable cloud architecture and AI-driven systems built for growth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900`}
      >
        {/* Navbar Component */}
        <Navbar />

        {/* Page Content */}
        <div className="pt-24">
          <PageTransition>
          {children} 
          </PageTransition>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                TechShieldAnalytics
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Engineering scalable cloud, data and AI systems
                for modern businesses.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="hover:text-white transition">
                    Cloud Consulting
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition">
                    Data Engineering
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition">
                    AI & ML
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:sahil.arora3139@gmail.com"
                    className="hover:text-white transition"
                  >
                    sahil.arora3139@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} TechShieldAnalytics. All rights reserved.
          </div>
        </footer>
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