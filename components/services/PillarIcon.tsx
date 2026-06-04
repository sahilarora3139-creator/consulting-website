// components/services/PillarIcon.tsx
import { Cloud, Database, Brain, Shield, Layers, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  Cloud,
  Database,
  Brain,
  Shield,
  Layers,
};

export function PillarIcon({
  name,
  size = 22,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = map[name] ?? Cloud;
  return <Icon size={size} className={className} strokeWidth={1.5} />;
}
