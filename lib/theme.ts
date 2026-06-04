// lib/theme.ts
// Design tokens for the "Refined Editorial" theme.
// These are reference values — apply them via Tailwind config (see snippet at bottom).

export const themeTokens = {
  colors: {
    paper: "#FAF8F4",          // warm off-white background
    paperSoft: "#F4F0E8",      // alternating section background
    ink: {
      900: "#1A1A1A",
      700: "#3D3D3D",
      500: "#6B6B6B",
      300: "#A8A8A8",
      100: "#E5E1D8",
    },
    emerald: {
      700: "#0F5C4A",
      600: "#15735C",
      500: "#1F8C70",
      100: "#E8F0EC",
    },
    sienna: "#B8492B",
  },
  fonts: {
    display: '"Fraunces", "Times New Roman", serif',
    body: '"Inter Tight", system-ui, sans-serif',
  },
  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "22px",
  },
} as const;

/*
═══════════════════════════════════════════════════════════════════════════════
TAILWIND CONFIG SNIPPET — paste into tailwind.config.ts theme.extend:

extend: {
  colors: {
    paper: "#FAF8F4",
    "paper-soft": "#F4F0E8",
    ink: {
      900: "#1A1A1A",
      700: "#3D3D3D",
      500: "#6B6B6B",
      300: "#A8A8A8",
      100: "#E5E1D8",
    },
    emerald: {
      700: "#0F5C4A",
      600: "#15735C",
      500: "#1F8C70",
      100: "#E8F0EC",
    },
    sienna: "#B8492B",
  },
  fontFamily: {
    display: ['"Fraunces"', 'serif'],
    sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
  },
},
═══════════════════════════════════════════════════════════════════════════════
*/
