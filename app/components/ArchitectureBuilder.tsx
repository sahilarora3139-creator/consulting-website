"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Brain, BarChart3, Workflow } from "lucide-react";

const architecture = [
  {
    icon: Cloud,
    title: "Cloud",
    desc: "AWS • Azure • GCP",
  },
  {
    icon: Workflow,
    title: "Pipeline",
    desc: "ETL • Streaming",
  },
  {
    icon: Database,
    title: "Warehouse",
    desc: "BigQuery • Snowflake",
  },
  {
    icon: Brain,
    title: "AI",
    desc: "ML • GenAI",
  },
  {
    icon: BarChart3,
    title: "Insights",
    desc: "Dashboards",
  },
];

export default function ArchitectureBuilder() {
  return (
    <section className="relative overflow-hidden py-32 px-6 border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
            Architecture Visualization
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            How Modern Systems
            <span className="text-emerald-500"> Create Value</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Every scalable platform follows the same foundation:
            cloud infrastructure, reliable data pipelines,
            intelligent automation and actionable insights.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          {architecture.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center">
                {/* Node */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-3xl bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative w-64 h-56 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-emerald-400" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Connection */}
                {index !== architecture.length - 1 && (
                  <div className="relative w-24 h-2 mx-2 overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 rounded-full" />

                    <motion.div
                      animate={{
                        x: ["-100%", "250%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-0 h-2 w-12 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.9)]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Version */}

        <div className="lg:hidden space-y-6">
          {architecture.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-flex items-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700 hover:scale-105"
          >
            Discuss Your Architecture
          </a>
        </div>
      </div>
    </section>
  );
}