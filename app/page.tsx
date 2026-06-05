"use client";

import { useState, useEffect, useRef } from "react";
import FadeIn from "./components/FadeIn";
import Counter from "./components/Counter";
import TechStrip from "./components/TechStrip";
import ArchitectureBuilder from "./components/ArchitectureBuilder";
import {
  ArrowUpRight,
  Calendar,
  Cloud,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

// ─── Live Data Pipeline Visualization ───────────────────────────────────────
function PipelineViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Pipeline nodes definition — 4 layers: Source → Ingest → Process → Output
    const layers = [
      { label: "Sources", nodes: ["S3 Bucket", "Kafka", "REST API", "Postgres"] },
      { label: "Ingest", nodes: ["Spark", "Flink"] },
      { label: "Process", nodes: ["Transform", "ML Model", "Validate"] },
      { label: "Output", nodes: ["Warehouse", "Dashboard", "Alerts"] },
    ];

    // Packet colors
    const PACKET_COLORS = [
      { r: 52, g: 211, b: 153 },   // emerald
      { r: 110, g: 231, b: 183 },  // light emerald
      { r: 16, g: 185, b: 129 },   // medium emerald
    ];

    type Packet = {
      fromLayer: number; fromNode: number;
      toLayer: number; toNode: number;
      progress: number; speed: number;
      color: { r: number; g: number; b: number };
      size: number;
    };

    let packets: Packet[] = [];

    // Spawn a packet along a random valid edge
    const spawnPacket = () => {
      const fromLayer = Math.floor(Math.random() * (layers.length - 1));
      const fromNode = Math.floor(Math.random() * layers[fromLayer].nodes.length);
      const toLayer = fromLayer + 1;
      const toNode = Math.floor(Math.random() * layers[toLayer].nodes.length);
      packets.push({
        fromLayer, fromNode, toLayer, toNode,
        progress: 0,
        speed: 0.004 + Math.random() * 0.006,
        color: PACKET_COLORS[Math.floor(Math.random() * PACKET_COLORS.length)],
        size: 3 + Math.random() * 3,
      });
    };

    // Pre-populate
    for (let i = 0; i < 12; i++) {
      const p = { fromLayer: Math.floor(Math.random() * (layers.length - 1)), fromNode: 0, toLayer: 0, toNode: 0, progress: Math.random(), speed: 0.004 + Math.random() * 0.006, color: PACKET_COLORS[0], size: 3 + Math.random() * 3 };
      p.fromNode = Math.floor(Math.random() * layers[p.fromLayer].nodes.length);
      p.toLayer = p.fromLayer + 1;
      p.toNode = Math.floor(Math.random() * layers[p.toLayer].nodes.length);
      p.color = PACKET_COLORS[Math.floor(Math.random() * PACKET_COLORS.length)];
      packets.push(p);
    }

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const PADDING_X = 40;
      const PADDING_Y = 60;
      const usableW = W - PADDING_X * 2;
      const usableH = H - PADDING_Y * 2;

      // Compute node positions
      const nodePos: { x: number; y: number; label: string }[][] = layers.map((layer, li) => {
        const x = PADDING_X + (li / (layers.length - 1)) * usableW;
        return layer.nodes.map((label, ni) => {
          const y = PADDING_Y + ((ni + 0.5) / layer.nodes.length) * usableH;
          return { x, y, label };
        });
      });

      // Draw layer labels
      layers.forEach((layer, li) => {
        const x = nodePos[li][0].x;
        ctx.font = "10px monospace";
        ctx.fillStyle = "rgba(52,211,153,0.4)";
        ctx.textAlign = "center";
        ctx.fillText(layer.label.toUpperCase(), x, PADDING_Y - 28);
        // Column divider line
        ctx.strokeStyle = "rgba(52,211,153,0.06)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.moveTo(x, PADDING_Y - 18);
        ctx.lineTo(x, H - PADDING_Y + 10);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw ALL edges (faint)
      for (let li = 0; li < layers.length - 1; li++) {
        for (let ni = 0; ni < layers[li].nodes.length; ni++) {
          for (let nj = 0; nj < layers[li + 1].nodes.length; nj++) {
            const from = nodePos[li][ni];
            const to = nodePos[li + 1][nj];
            ctx.strokeStyle = "rgba(52,211,153,0.07)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            // Curved bezier
            const cx = (from.x + to.x) / 2;
            ctx.moveTo(from.x, from.y);
            ctx.bezierCurveTo(cx, from.y, cx, to.y, to.x, to.y);
            ctx.stroke();
          }
        }
      }

      // Move and draw packets
      packets = packets.filter(p => p.progress <= 1);
      packets.forEach(p => {
        p.progress += p.speed;
        const from = nodePos[p.fromLayer][p.fromNode];
        const to = nodePos[p.toLayer][p.toNode];
        const cx = (from.x + to.x) / 2;

        // Bezier interpolation
        const t1 = p.progress;
        const t2 = 1 - t1;
        const bx = t2 * t2 * from.x + 2 * t2 * t1 * cx + t1 * t1 * to.x;
        const byv1 = t2 * t2 * from.y + 2 * t2 * t1 * from.y + t1 * t1 * to.y;
        // use proper bezier for y
        const byCurve = t2 * t2 * from.y + 2 * t2 * t1 * ((from.y + to.y) / 2) + t1 * t1 * to.y;

        const { r, g, b } = p.color;
        const alpha = 0.5 + 0.5 * Math.sin(p.progress * Math.PI);

        // Trail
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.3})`;
        ctx.lineWidth = 1.5;
        const trailSteps = 6;
        ctx.beginPath();
        for (let s = trailSteps; s >= 0; s--) {
          const tp = Math.max(0, p.progress - s * 0.018);
          const tt = 1 - tp;
          const tx = tt * tt * from.x + 2 * tt * tp * cx + tp * tp * to.x;
          const ty = tt * tt * from.y + 2 * tt * tp * ((from.y + to.y) / 2) + tp * tp * to.y;
          if (s === trailSteps) ctx.moveTo(tx, ty); else ctx.lineTo(tx, ty);
        }
        ctx.stroke();

        // Packet dot
        ctx.beginPath();
        ctx.arc(bx, byCurve, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();

        // Glow
        const grd = ctx.createRadialGradient(bx, byCurve, 0, bx, byCurve, p.size * 4);
        grd.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.4})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(bx, byCurve, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      // Spawn new packets
      if (Math.random() < 0.06) spawnPacket();

      // Draw nodes
      nodePos.forEach((layer, li) => {
        layer.forEach((node, ni) => {
          const pulse = 0.7 + 0.3 * Math.sin(t * 1.5 + li * 1.1 + ni * 0.8);
          const isActive = packets.some(p =>
            (p.toLayer === li && p.toNode === ni && p.progress > 0.85) ||
            (p.fromLayer === li && p.fromNode === ni && p.progress < 0.15)
          );

          // Node outer ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
          ctx.strokeStyle = isActive
            ? `rgba(52,211,153,${0.5 + 0.5 * pulse})`
            : `rgba(52,211,153,${0.18 * pulse})`;
          ctx.lineWidth = isActive ? 1.5 : 1;
          ctx.stroke();

          // Node fill
          ctx.beginPath();
          ctx.arc(node.x, node.y, 14, 0, Math.PI * 2);
          ctx.fillStyle = isActive
            ? `rgba(52,211,153,0.18)`
            : `rgba(15,30,25,0.85)`;
          ctx.fill();
          ctx.strokeStyle = `rgba(52,211,153,${isActive ? 0.5 : 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Node label
          ctx.font = `${node.label.length > 7 ? "7.5" : "9"}px monospace`;
          ctx.fillStyle = isActive ? "rgba(110,231,183,0.95)" : "rgba(110,231,183,0.55)";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(node.label, node.x, node.y);

          // Active glow ring
          if (isActive) {
            const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 32);
            grd.addColorStop(0, `rgba(52,211,153,0.12)`);
            grd.addColorStop(1, "rgba(52,211,153,0)");
            ctx.beginPath();
            ctx.arc(node.x, node.y, 32, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }
        });
      });

      // Throughput counter at bottom
      const count = packets.length;
      ctx.font = "10px monospace";
      ctx.fillStyle = "rgba(52,211,153,0.3)";
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(`PACKETS IN FLIGHT: ${String(count).padStart(2, "0")}`, PADDING_X, H - 14);

      ctx.textAlign = "right";
      const fps = Math.floor(60 + Math.sin(t) * 2);
      ctx.fillText(`PIPELINE STATUS: ACTIVE`, W - PADDING_X, H - 14);

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: "420px" }}
    />
  );
}

const services = [
  {
    icon: Cloud,
    tag: "Cloud",
    title: "Cloud Consulting",
    desc: "Cloud architecture design, migrations, cost optimization and secure scalable infrastructure.",
  },
  {
    icon: BarChart3,
    tag: "Data",
    title: "Data Engineering",
    desc: "Modern data pipelines, warehousing and analytics platforms enabling real-time insights.",
  },
  {
    icon: Bot,
    tag: "AI / ML",
    title: "AI & Machine Learning",
    desc: "Predictive systems, automation workflows and AI-driven intelligence for operations.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Assess & Architect",
    body: "We evaluate your current infrastructure, data workflows and system bottlenecks to design a future-ready architecture aligned with your business objectives.",
    bullets: [
      "Cloud & infrastructure audit",
      "Data platform review",
      "Cost & performance analysis",
      "Architecture blueprint",
    ],
  },
  {
    n: "02",
    title: "Design & Build",
    body: "We implement scalable cloud-native systems, modern data pipelines and AI-driven automation designed for performance, reliability and long-term flexibility.",
    bullets: [
      "Cloud-native architecture",
      "Modern data engineering",
      "AI & ML integration",
      "Infrastructure automation",
    ],
  },
  {
    n: "03",
    title: "Optimize & Scale",
    body: "We continuously monitor, optimize and refine systems to ensure predictable performance, cost control and sustained scalability as your business grows.",
    bullets: [
      "Performance tuning",
      "Cost governance",
      "Security hardening",
      "Long-term scalability planning",
    ],
  },
];

const whyUs = [
  {
    title: "Deep Technical Expertise",
    desc: "Proven experience in cloud-native systems, distributed architecture and advanced analytics.",
  },
  {
    title: "Business-Driven Solutions",
    desc: "Every solution is aligned with measurable business impact and long-term value creation.",
  },
  {
    title: "Scalable & Future-Ready",
    desc: "Systems built for performance, flexibility and sustained innovation.",
  },
];

const credibility = [
  {
    title: "10+ Years Engineering Experience",
    desc: "Deep expertise in distributed systems, cloud-native architecture and performance optimization.",
  },
  {
    title: "Multi-Industry Exposure",
    desc: "Experience across SaaS, FinTech, E-commerce and enterprise modernization initiatives.",
  },
  {
    title: "Architecture-First Approach",
    desc: "Solutions designed for scalability, reliability and measurable business impact — not short-term fixes.",
  },
];

const testimonials = [
  {
    quote:
      "Delivered a scalable cloud architecture that improved system performance by over 30% while reducing infrastructure costs. The execution was structured, precise and forward-looking.",
    role: "CTO",
    company: "SaaS Company",
  },
  {
    quote:
      "Strong technical leadership combined with clear business understanding. Modernized our data platform and significantly improved reporting reliability.",
    role: "Head of Engineering",
    company: "FinTech",
  },
  {
    quote:
      "Professional execution, clean architecture and long-term scalability thinking. The solutions were designed for growth, not short-term fixes.",
    role: "Product Director",
    company: "E-Commerce Platform",
  },
];

const impactStats = [
  { value: 10, suffix: "+", label: "Years of Engineering Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Client-Focused Approach" },
];

export default function Home() {
  return (
    <main className="bg-paper text-ink-900">

      {/* ═══════════════════════════════════════════════════════════
          HERO — 2-column: copy left, live pipeline right
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper" style={{ minHeight: "100vh" }}>

        {/* Subtle grid background — full section */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Depth vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_30%_50%,rgba(6,78,59,0.28),transparent_65%)]" />
        {/* Top + bottom edge lines */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        {/* Vertical divider between columns — desktop only */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden lg:block w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 w-full" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <div className="grid w-full gap-12 py-24 lg:grid-cols-2 lg:gap-16 lg:py-0" style={{ minHeight: "100vh", alignItems: "center" }}>

            {/* ── LEFT — Copy ── */}
            <div className="flex flex-col justify-center">

              {/* Eyebrow */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-100 w-fit">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Cloud · Data · AI Consulting
              </div>

              {/* Headline */}
              <h1 className="font-display font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.6rem, 4.5vw, 5rem)" }}>
                Engineering
                <span className="block italic text-emerald-300">
                  Intelligent Systems
                </span>
                <span className="block text-paper/75 font-light" style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)", marginTop: "0.3em" }}>
                  for Scalable Growth.
                </span>
              </h1>

              <p className="mt-8 text-base leading-relaxed text-paper/60 max-w-lg md:text-lg">
                We partner with startups and enterprises to design, modernize and
                scale cloud-native architectures, data platforms and AI-driven
                solutions.
              </p>

              {/* Stats row */}
              <div className="mt-10 flex items-center gap-8 border-y border-emerald-500/10 py-6">
                {[
                  { v: "10+", l: "Years exp." },
                  { v: "20+", l: "Projects" },
                  { v: "30%", l: "Cost saved" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display text-2xl font-light text-emerald-300">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-paper/35 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-emerald-500"
                >
                  <Calendar className="h-4 w-4" strokeWidth={1.5} />
                  Schedule a Strategy Call
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-emerald-300/50 hover:text-emerald-200"
                >
                  Explore Services
                </a>
              </div>

              <p className="mt-5 text-[10px] text-paper/25 uppercase tracking-[0.2em]">
                No sales pitch. Just technical clarity.
              </p>
            </div>

            {/* ── RIGHT — Live Pipeline Visualization ── */}
            <div className="relative flex flex-col justify-center lg:pl-10">
              {/* Panel chrome */}
              <div className="rounded-2xl border border-emerald-500/20 bg-ink-900/60 overflow-hidden backdrop-blur-sm">
                {/* Terminal-style header bar */}
                <div className="flex items-center justify-between border-b border-emerald-500/15 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400/60">
                      data-pipeline.live
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400/50">LIVE</span>
                  </div>
                </div>
                {/* Canvas */}
                <div className="w-full" style={{ height: "420px" }}>
                  <PipelineViz />
                </div>
              </div>
              {/* Caption below panel */}
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/20">
                Real-time data engineering pipeline · Cloud · Spark · ML · Warehouse
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ TECH STRIP ═══ */}
      <div className="border-y border-ink-100">
        <TechStrip />
      </div>

      {/* ═══ ARCHITECTURE BUILDER ═══ */}
      <ArchitectureBuilder />

      {/* ═══════════════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-ink-100 bg-paper py-28 px-6">
        <div className="mx-auto max-w-7xl">

          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
              <span className="h-px w-8 bg-emerald-700" />
              /01 Our Expertise
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl mb-16">
              What we{" "}
              <span className="italic text-emerald-700">build for you</span>.
            </h2>
          </FadeIn>

          <div className="grid gap-px bg-ink-100 md:grid-cols-3 overflow-hidden rounded-2xl border border-ink-100">
            {services.map((svc, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-paper p-10 transition-colors hover:bg-paper-soft h-full flex flex-col">
                  {/* Tag */}
                  <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-600/25 bg-emerald-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-700">
                    {svc.tag}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700/[0.07] text-emerald-700 mb-5 ring-1 ring-emerald-500/20">
                    <svc.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-2xl font-light text-ink-900 mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed mb-6 flex-1">
                    {svc.desc}
                  </p>

                  <a
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:gap-2.5 transition-all"
                  >
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HOW WE WORK — Dark section
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper py-32 px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,140,112,0.18),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200/70">
            <span className="h-px w-8 bg-emerald-400" />
            /02 How We Deliver
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-5xl mb-6 max-w-2xl">
            A structured,{" "}
            <span className="italic text-emerald-300">engineering-first</span>{" "}
            approach.
          </h2>
          <p className="text-paper/60 max-w-xl mb-20 leading-relaxed">
            Designed to reduce risk, accelerate execution and build systems that scale.
          </p>

          <div className="grid gap-px bg-emerald-500/10 md:grid-cols-3 overflow-hidden rounded-2xl border border-emerald-500/15">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-ink-900/70 p-10 hover:bg-ink-900/50 transition-colors">
                <div className="font-display text-5xl font-light text-emerald-300/30 mb-6 leading-none">
                  /{step.n}
                </div>
                <h3 className="font-display text-2xl font-light text-paper mb-4">
                  {step.title}
                </h3>
                <p className="text-paper/55 leading-relaxed mb-8 text-sm">
                  {step.body}
                </p>
                <ul className="space-y-2.5">
                  {step.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-paper/50">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500 shrink-0" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY US
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-paper-soft py-28 px-6 border-t border-ink-100">
        <div className="mx-auto max-w-7xl">

          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            <span className="h-px w-8 bg-emerald-700" />
            /03 Why Partner With Us
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl mb-16 max-w-2xl">
            Built for{" "}
            <span className="italic text-emerald-700">outcomes</span>, not outputs.
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {whyUs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative pl-6 border-l border-emerald-600/30">
                  <CheckCircle2 className="absolute -left-3 top-0 h-6 w-6 text-emerald-600 bg-paper-soft" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-light text-ink-900 mb-3 mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOUNDER CREDIBILITY — Dark
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper py-32 px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,140,112,0.14),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl mb-20">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200/70">
              <span className="h-px w-8 bg-emerald-400" />
              /04 The Team
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-5xl mb-6">
              Built by an engineer,{" "}
              <span className="italic text-emerald-300">focused on outcomes</span>.
            </h2>
            <p className="text-paper/55 leading-relaxed text-lg">
              With over a decade of hands-on engineering experience across
              cloud-native systems, modern data platforms and AI-driven
              architectures, we focus on building scalable, cost-efficient
              systems designed for long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-emerald-500/10 overflow-hidden rounded-2xl border border-emerald-500/15">
            {credibility.map((item, i) => (
              <div key={i} className="bg-ink-900/60 p-10 hover:bg-ink-900/40 transition-colors">
                <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-emerald-400/70">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg font-light text-emerald-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-paper/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-paper py-28 px-6 border-t border-ink-100">
        <div className="mx-auto max-w-7xl">

          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            <span className="h-px w-8 bg-emerald-700" />
            /05 What Clients Value
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl mb-4">
            Trusted to deliver{" "}
            <span className="italic text-emerald-700">measurable impact</span>.
          </h2>
          <p className="text-ink-500 max-w-xl mb-16 leading-relaxed">
            Trusted by technology leaders to deliver scalable architecture,
            modern data platforms and intelligent systems.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-ink-100 overflow-hidden rounded-2xl border border-ink-100">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-paper p-10 hover:bg-paper-soft transition-colors flex flex-col">
                {/* Quote mark */}
                <div className="font-display text-5xl text-emerald-200 leading-none mb-6 select-none">
                  "
                </div>
                <p className="text-ink-700 leading-relaxed mb-8 flex-1 text-base">
                  {t.quote}
                </p>
                <div className="pt-6 border-t border-ink-100">
                  <div className="text-sm font-medium text-ink-900">{t.role}</div>
                  <div className="text-xs text-ink-400 mt-0.5 uppercase tracking-[0.15em]">
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CASE STUDIES — Dark
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper py-32 px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(31,140,112,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200/70">
            <span className="h-px w-8 bg-emerald-400" />
            /06 Case Studies
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-paper md:text-5xl mb-4">
            Selected{" "}
            <span className="italic text-emerald-300">engagements</span>.
          </h2>
          <p className="text-paper/50 max-w-xl mb-20 leading-relaxed">
            Real-world engagements delivering measurable impact across
            cloud, data and AI transformation.
          </p>

          {/* Featured case study */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/30 overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-emerald-500/15">
                <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-emerald-400/70">
                  Featured
                </div>
                <h3 className="font-display text-2xl font-light text-paper mb-6">
                  Cloud Modernization for a Growing SaaS Platform
                </h3>
                <p className="text-paper/55 leading-relaxed mb-8 text-sm">
                  A rapidly scaling SaaS company faced infrastructure
                  instability and rising cloud costs. We redesigned their cloud
                  architecture, implemented cost governance controls and
                  introduced performance monitoring frameworks.
                </p>
                <ul className="space-y-3">
                  {[
                    "30% reduction in infrastructure cost",
                    "40% improvement in system performance",
                    "Scalable cloud-native architecture",
                  ].map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-paper/50">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500 shrink-0" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <div className="font-display text-4xl text-emerald-300/20 leading-none mb-6 select-none">
                  "
                </div>
                <p className="text-paper/70 leading-relaxed text-lg mb-8">
                  The engagement transformed our infrastructure from reactive to
                  scalable. We now have predictable costs and performance aligned
                  with our growth.
                </p>
                <div className="text-sm text-paper/40 uppercase tracking-[0.15em]">
                  CTO · SaaS Company
                </div>
              </div>
            </div>
          </div>

          {/* Two snapshots */}
          <div className="grid md:grid-cols-2 gap-px bg-emerald-500/10 overflow-hidden rounded-2xl border border-emerald-500/15">
            {[
              {
                label: "FinTech",
                title: "Data Platform Modernization",
                desc: "Re-architected BigQuery data warehouse and built scalable ETL pipelines enabling real-time executive reporting.",
                bullets: [
                  "Reduced reporting latency by 50%",
                  "Improved data reliability & governance",
                  "Executive dashboard transformation",
                ],
              },
              {
                label: "E-Commerce",
                title: "AI-Driven Process Automation",
                desc: "Implemented predictive modeling and workflow automation to optimize operational decision-making.",
                bullets: [
                  "25% improvement in forecasting accuracy",
                  "Reduced manual workload across teams",
                  "Automated operational insights",
                ],
              },
            ].map((cs, i) => (
              <div key={i} className="bg-ink-900/60 p-12 hover:bg-ink-900/40 transition-colors">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-400">
                  {cs.label}
                </div>
                <h4 className="font-display text-xl font-light text-paper mb-4">
                  {cs.title}
                </h4>
                <p className="text-paper/50 leading-relaxed text-sm mb-6">
                  {cs.desc}
                </p>
                <ul className="space-y-2">
                  {cs.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-paper/40">
                      <ChevronRight className="h-3 w-3 text-emerald-600 shrink-0" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IMPACT STATS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-paper-soft py-28 px-6 border-t border-ink-100">
        <div className="mx-auto max-w-7xl">

          <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            <span className="h-px w-8 bg-emerald-700" />
            /07 Impact & Experience
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink-900 md:text-5xl mb-4">
            Numbers that{" "}
            <span className="italic text-emerald-700">speak for themselves</span>.
          </h2>
          <p className="text-ink-500 max-w-xl mb-16 leading-relaxed">
            Delivering reliable, scalable and performance-driven solutions
            across cloud, data and AI ecosystems.
          </p>

          <div className="grid grid-cols-2 gap-px bg-ink-100 md:grid-cols-4 overflow-hidden rounded-2xl border border-ink-100">
            {impactStats.map((item, i) => (
              <div key={i} className="bg-paper p-10 text-center hover:bg-paper-soft transition-colors">
                <div className="font-display text-5xl font-light text-emerald-700 mb-3">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>
                <p className="text-ink-500 text-xs uppercase tracking-[0.15em] leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — Dark with emerald glow
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper py-32 px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(6,78,59,0.40),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-100">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available · Responds within 1 business day
          </div>

          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-6xl mb-6">
            Schedule a 30-minute{" "}
            <span className="italic text-emerald-300">Architecture Strategy Call</span>.
          </h2>

          <p className="text-paper/55 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            Discuss your cloud, data or AI architecture challenges.
            Walk away with actionable technical clarity.
          </p>

          <p className="text-paper/30 text-xs uppercase tracking-[0.2em] mb-12">
            No obligation. No generic sales pitch.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-medium text-paper transition-all hover:bg-emerald-500"
            >
              <Calendar className="h-4 w-4" strokeWidth={1.5} />
              Book Your Strategy Call
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-8 py-4 text-sm font-medium text-paper transition-colors hover:border-emerald-300/50 hover:text-emerald-200"
            >
              Send us a message
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}