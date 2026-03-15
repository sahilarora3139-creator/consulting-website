"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Brain, BarChart3 } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-gray-950 text-white">

      {/* Floating Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[160px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full top-1/2 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 space-y-40">

        {/* HEADER */}
        <section className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Platform <span className="text-blue-400">Capabilities</span>
          </h1>

          <p className="text-gray-400 text-xl">
            SkillMine provides enterprise-grade cloud, data and AI systems
            designed to scale modern data platforms and intelligent
            decision systems.
          </p>
        </section>


        {/* CLOUD SECTION */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT FEATURE GRID */}
          <div className="grid grid-cols-2 gap-6">

            {[
              "Cloud Migration",
              "Infrastructure Design",
              "Security Architecture",
              "Cost Optimization"
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
              >
                <Cloud className="text-blue-400 mb-4" size={28} />
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}

          </div>


          {/* RIGHT VISUAL BOX */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 p-14 rounded-3xl border border-white/10 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-semibold mb-6">
              Cloud Architecture
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Modern cloud infrastructure designed for scalability,
              reliability and enterprise-grade security across
              AWS and Google Cloud environments.
            </p>

            <div className="h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 w-24"></div>
          </motion.div>

        </section>


        {/* DATA TIMELINE */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">

          {/* TIMELINE */}
          <div className="space-y-10">

            {[
              {
                title: "Data Ingestion",
                desc: "Collect and integrate structured and unstructured datasets."
              },
              {
                title: "Data Transformation",
                desc: "Process pipelines with SQL and Python engineering."
              },
              {
                title: "Warehouse Architecture",
                desc: "Design scalable BigQuery and data lake systems."
              },
              {
                title: "Analytics & Reporting",
                desc: "Deliver insights through BI and analytics platforms."
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6">

                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>

                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>

              </div>
            ))}

          </div>


          {/* VISUAL BOX */}
          <div className="bg-white/5 border border-white/10 p-14 rounded-3xl backdrop-blur-xl">
            <Database size={40} className="text-blue-400 mb-6" />

            <h2 className="text-3xl font-semibold mb-6">
              Data Engineering Platform
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Build scalable analytics architecture with
              modern data warehouses, automated pipelines
              and governance frameworks.
            </p>
          </div>

        </section>


        {/* AI SECTION */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT BIG CARD */}
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 rounded-3xl p-14 backdrop-blur-xl">

            <Brain size={40} className="text-purple-400 mb-6" />

            <h2 className="text-3xl font-semibold mb-6">
              Artificial Intelligence
            </h2>

            <p className="text-gray-400 mb-8">
              Intelligent systems that automate workflows,
              optimize predictions and drive operational efficiency.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>Predictive Modeling</div>
              <div>ML Pipelines</div>
              <div>AI Automation</div>
              <div>Workflow Optimization</div>
            </div>

          </div>


          {/* RIGHT FLOATING CARDS */}
          <div className="space-y-6">

            {[
              "Forecasting Models",
              "Operational Automation",
              "AI Workflow Systems"
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </section>


        {/* BI SECTION */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">

          {/* FEATURE GRID */}
          <div className="grid grid-cols-2 gap-6">

            {[
              "Looker Implementation",
              "Power BI Dashboards",
              "Alteryx Automation",
              "BI Migration"
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <BarChart3 className="text-blue-400 mb-3" />
                {item}
              </motion.div>
            ))}

          </div>


          {/* VISUAL BOX */}
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-14 rounded-3xl border border-white/10 backdrop-blur-xl">

            <h2 className="text-3xl font-semibold mb-6">
              Business Intelligence
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Executive dashboards and analytics ecosystems
              that transform data into real-time strategic insights.
            </p>

          </div>

        </section>


        {/* CTA */}
        <section className="text-center">

          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-white/10 p-20 rounded-3xl backdrop-blur-xl">

            <h3 className="text-3xl font-semibold mb-6">
              Build Intelligent Systems
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              From cloud architecture to AI-driven platforms,
              SkillMine helps organizations design modern
              technology ecosystems.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 transition px-10 py-4 rounded-xl font-semibold">
              Schedule Consultation
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}