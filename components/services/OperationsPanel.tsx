"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const initialLogs = [
  "VAPT scan complete · 0 critical, 2 medium",
  "ML model retrained · accuracy 94.7%",
  "Cloud migration · client #4421 · 100%",
  "DevSecOps pipeline · all gates passed",
  "Data ingest · 1.2 TB processed",
  "SOC 2 controls · verified",
  "Threat intel feed · synced",
  "Power BI workspace · published",
  "TPRM assessment · vendor #87 cleared",
  "GenAI copilot · 412 queries served",
];

export function OperationsPanel() {
  const [metrics, setMetrics] = useState({
    threats: 12847,
    queries: 89.3,
    models: 247,
    uptime: 99.97,
  });
  const [logIdx, setLogIdx] = useState(0);
  const [time, setTime] = useState("");

  // Set client-side time to avoid hydration mismatch
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  // Tick metrics
  useEffect(() => {
    const t = setInterval(() => {
      setMetrics((m) => ({
        threats: m.threats + Math.floor(Math.random() * 4),
        queries: +(m.queries + Math.random() * 0.08).toFixed(1),
        models: m.models + (Math.random() > 0.94 ? 1 : 0),
        uptime: 99.97,
      }));
    }, 1800);
    return () => clearInterval(t);
  }, []);

  // Rotate log feed
  useEffect(() => {
    const t = setInterval(
      () => setLogIdx((i) => (i + 1) % initialLogs.length),
      2400,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-paper/[0.03] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-emerald-500/10 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-200/90">
            Live operations
          </span>
        </div>
        <span className="font-mono text-[10px] text-paper/40 tabular-nums">
          {time || "—"}
        </span>
      </div>

      {/* Metrics grid (2×2) */}
      <div className="grid grid-cols-2 gap-px bg-emerald-500/10">
        <Metric
          label="Threats blocked"
          value={metrics.threats.toLocaleString()}
          suffix="/24h"
        />
        <Metric
          label="Queries processed"
          value={metrics.queries.toFixed(1) + "K"}
          suffix="/min"
        />
        <Metric label="Models in prod" value={metrics.models.toString()} suffix="" />
        <Metric
          label="Platform uptime"
          value={metrics.uptime.toFixed(2) + "%"}
          suffix=""
        />
      </div>

      {/* Sparkline */}
      <div className="border-t border-emerald-500/10 bg-ink-900 px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-paper/40">
            7-day throughput
          </span>
          <span className="font-mono text-xs text-emerald-300 tabular-nums">
            +24.3%
          </span>
        </div>
        <Sparkline />
      </div>

      {/* Log feed */}
      <div className="border-t border-emerald-500/10 bg-ink-900/60 px-5 py-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono text-emerald-400">›</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={logIdx}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.35 }}
              className="truncate text-paper/70"
            >
              {initialLogs[logIdx]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix: string;
}) {
  return (
    <div className="bg-ink-900 px-5 py-4">
      <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-paper/40">
        {label}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-2xl text-emerald-200 tabular-nums">
          {value}
        </span>
        {suffix && (
          <span className="font-mono text-[10px] text-paper/40">{suffix}</span>
        )}
      </div>
    </div>
  );
}

function Sparkline() {
  const points = [12, 18, 14, 22, 19, 28, 25, 32, 28, 38, 35, 42, 40, 48];
  const max = Math.max(...points);
  const w = 280;
  const h = 50;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-12 w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(31,140,112)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="rgb(31,140,112)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark-grad)" />
      <path
        d={path}
        stroke="rgb(110,231,183)"
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      {/* End-point dot */}
      <circle
        cx={w}
        cy={h - (points[points.length - 1] / max) * h}
        r="2.5"
        fill="rgb(110,231,183)"
      />
    </svg>
  );
}