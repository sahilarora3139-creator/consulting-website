"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Brain, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gray-950 text-white">

      {/* 🌌 Background Glow (same as services) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[160px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full top-1/2 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 space-y-40">

        {/* 🔷 HERO */}
        <section className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-400">TechShieldAnalytics</span>
          </h1>

          <p className="text-gray-400 text-xl mb-6">
            A modern technology advisory firm delivering scalable cloud,
            data and AI systems for enterprise transformation.
          </p>

          <p className="text-gray-500 text-lg">
            We partner with organizations to design high-performance
            technology foundations that enable long-term growth,
            operational efficiency and intelligent decision-making.
          </p>
        </section>


        {/* 🔷 WHAT WE DO (glass cards like services grid) */}
        <section className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Cloud Architecture",
              desc: "Design and optimize secure, scalable infrastructure across AWS and Google Cloud.",
              icon: <Cloud className="text-blue-400 mb-4" />
            },
            {
              title: "Data Engineering",
              desc: "Build modern data platforms, pipelines and analytics systems for real-time insights.",
              icon: <Database className="text-blue-400 mb-4" />
            },
            {
              title: "Artificial Intelligence",
              desc: "Develop predictive systems, automation workflows and AI-driven decision engines.",
              icon: <Brain className="text-purple-400 mb-4" />
            },
            {
              title: "Business Intelligence",
              desc: "Deliver dashboards, reporting ecosystems and BI platform migrations.",
              icon: <BarChart3 className="text-blue-400 mb-4" />
            }
          ].map((item, i) => (
<div
  key={i}
  className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl hover:-translate-y-1 transition"
>
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </section>


        {/* 🔷 EXPERTISE (structured blocks instead of plain grid) */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div className="space-y-10">

            {[
              {
                title: "Cloud Platforms",
                desc: "AWS, Google Cloud, infrastructure scaling and cost optimization."
              },
              {
                title: "Data Systems",
                desc: "SQL, Python pipelines, ETL workflows and data modeling."
              },
              {
                title: "Analytics & BI",
                desc: "Looker, Power BI, Alteryx and enterprise reporting systems."
              },
              {
                title: "AI & Automation",
                desc: "Machine learning pipelines and intelligent workflow systems."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 p-14 rounded-3xl backdrop-blur-xl">
            <h2 className="text-3xl font-semibold mb-6">
              Technology Expertise
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our expertise spans across cloud infrastructure, modern data
              platforms and AI-driven systems — enabling organizations to
              operate with scalability, speed and intelligence.
            </p>
          </div>

        </section>


        {/* 🔷 APPROACH */}
        <section className="bg-white/5 border border-white/10 p-16 rounded-3xl backdrop-blur-xl text-center">

          <h2 className="text-3xl font-semibold mb-8">
            Our Approach
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            Every transformation begins with clarity. We deeply understand
            business objectives, system constraints and long-term vision
            before designing any architecture.
          </p>

          <p className="text-gray-500 max-w-3xl mx-auto">
            From advisory to execution, we focus on scalability,
            performance and measurable outcomes — ensuring technology
            becomes a growth driver.
          </p>

        </section>


        {/* 🔷 FOUNDER SECTION (premium highlight) */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Founder Perspective
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              With 10+ years of experience in cloud engineering, data platforms
              and analytics transformation, we bring both execution depth and
              strategic clarity.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Every solution is designed with long-term scalability,
              architectural integrity and real-world business impact.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 p-14 rounded-3xl backdrop-blur-xl">
            <p className="text-gray-300 text-lg">
              "Technology should not just support business —
              it should accelerate it."
            </p>
          </div>

        </section>


        {/* 🔷 CTA */}
        <section className="text-center">

          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-white/10 p-20 rounded-3xl backdrop-blur-xl">

            <h3 className="text-3xl font-semibold mb-6">
              Build Intelligent Systems
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              From cloud architecture to AI-driven platforms,
              we design scalable systems that power modern organizations.
            </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-500 px-10 py-4 rounded-xl font-semibold 
          transition-all duration-300 
          hover:bg-blue-600 hover:scale-105 
          hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          Schedule Consultation
        </Link>

          </div>

        </section>

      </div>
    </main>
  );
}