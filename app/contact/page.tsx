"use client";

import { useState } from "react";
import Script from "next/script";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", company: "", message: "" });
    }

    setLoading(false);
  };

  const openCalendly = () => {
    (window as any).Calendly.initPopupWidget({
      url: "https://calendly.com/sahil-arora3139/30min",
    });
    return false;
  };

  return (
    <main className="relative overflow-hidden bg-gray-950 text-white">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[160px] rounded-full -top-40 -left-40"></div>
    <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full top-1/2 right-0"></div>
  </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 space-y-24">

        {/* Schedule Call Block */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let’s Start a <span className="text-blue-400">Conversation</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Prefer to schedule directly? Book a 30-minute strategy call.
            No sales pitch — just clarity.
          </p>

          <button
            onClick={openCalendly}
            className="bg-blue-500 px-10 py-4 rounded-xl text-lg font-semibold 
transition-all duration-300 
hover:bg-blue-600 hover:scale-105 
hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            Schedule a 30-Minute Strategy Call
          </button>
        </section>


        {/* Contact Layout (UNCHANGED) */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              What Happens Next?
            </h2>

            <ul className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <li>
                <span className="font-semibold text-white">1.</span> We review your inquiry and business context.
              </li>
              <li>
                <span className="font-semibold text-white">2.</span> Schedule a strategy discussion.
              </li>
              <li>
                <span className="font-semibold text-white">3.</span> Provide clear next steps and engagement options.
              </li>
            </ul>

            <div className="mt-12 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                Prefer direct communication with us?
              </p>

              <a
                href="mailto:sahil.arora35@gmail.com"
                className="text-blue-400 font-semibold hover:underline block mt-2"
              >
                techshieldorsintelligence@gmail.com
              </a>
            </div>
          </div>


          {/* Right Side – Original Form (unchanged) */}
          <div className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10">

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl 
text-white placeholder-gray-500 
focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl 
text-white placeholder-gray-500 
focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={form.company}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl 
text-white placeholder-gray-500 
focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Briefly describe your project or challenge"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl 
text-white placeholder-gray-500 
focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 py-4 rounded-xl font-semibold 
transition-all duration-300 
hover:bg-blue-600 hover:scale-[1.02]"
              >
                {loading ? "Sending..." : "Request Consultation"}
              </button>

              {success && (
                <p className="text-green-400 text-center mt-4">
                  Thank you. We’ll be in touch shortly.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

    </main>
  );
}