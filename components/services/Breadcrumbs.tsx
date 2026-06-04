// components/services/Breadcrumbs.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-ink-500 font-sans"
    >
      {items.map((c, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {c.href && !isLast ? (
              <Link
                href={c.href}
                className="hover:text-emerald-700 transition-colors"
              >
                {c.label}
              </Link>
            ) : (
              <span className={isLast ? "text-ink-900 font-medium" : ""}>
                {c.label}
              </span>
            )}
            {!isLast && <ChevronRight size={14} className="text-ink-300" />}
          </span>
        );
      })}
    </nav>
  );
}
