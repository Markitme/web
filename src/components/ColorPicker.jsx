"use client";

import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";

const COLOR_PALETTES = {
  sage: {
    name: "Sage",
    colors: {
      light: {
        background: "#f8f4ee",
        foreground: "#111111",
        surface: "#f2ebdf",
        surfaceSecondary: "#ece1d0",
        card: "#fffdfb",
        border: "rgba(0, 0, 0, 0.12)",
        muted: "rgba(0, 0, 0, 0.62)",
        accent: "#7d8f63",
        accentBright: "#c7d6a4",
        accentMuted: "#8db800",
      },
      dark: {
        background: "#0a0a0a",
        foreground: "#f5f5f0",
        surface: "#101010",
        surfaceSecondary: "#171717",
        card: "#151515",
        border: "rgba(255, 255, 255, 0.11)",
        muted: "rgba(255, 255, 255, 0.62)",
        accent: "#c7d6a4",
        accentBright: "#dfe9c6",
        accentMuted: "#a7d503",
      },
    },
    preview: "#7d8f63",
  },
  orange: {
    name: "Orange",
    colors: {
      light: {
        background: "#fff8f2",
        foreground: "#17120f",
        surface: "#fdf0e5",
        surfaceSecondary: "#f7dfcc",
        card: "#fffdfb",
        border: "rgba(160, 75, 25, 0.14)",
        muted: "rgba(23, 18, 15, 0.62)",
        accent: "#d96b32",
        accentBright: "#f3b184",
        accentMuted: "#e47d42",
      },
      dark: {
        background: "#0a0908",
        foreground: "#fff6ef",
        surface: "#120e0b",
        surfaceSecondary: "#1c1510",
        card: "#17110d",
        border: "rgba(255, 170, 110, 0.13)",
        muted: "rgba(255, 235, 220, 0.62)",
        accent: "#f08a4b",
        accentBright: "#ffb47e",
        accentMuted: "#df7137",
      },
    },
    preview: "#d96b32",
  },
  pink: {
    name: "Pink",
    colors: {
      light: {
        background: "#fff7f8",
        foreground: "#171114",
        surface: "#fcecef",
        surfaceSecondary: "#f7dfe5",
        card: "#fffafb",
        border: "rgba(160, 60, 85, 0.14)",
        muted: "rgba(23, 17, 20, 0.62)",
        accent: "#c45a78",
        accentBright: "#f2b6c6",
        accentMuted: "#d87996",
      },
      dark: {
        background: "#0a0809",
        foreground: "#fff5f7",
        surface: "#120d0f",
        surfaceSecondary: "#1b1215",
        card: "#171012",
        border: "rgba(255, 180, 200, 0.13)",
        muted: "rgba(255, 235, 240, 0.62)",
        accent: "#e58aa4",
        accentBright: "#f5b8c9",
        accentMuted: "#d96588",
      },
    },
    preview: "#c45a78",
  },
  teal: {
    name: "Teal",
    colors: {
      light: {
        background: "#f2f8f8",
        foreground: "#0f1717",
        surface: "#e5f1f1",
        surfaceSecondary: "#d5e8e8",
        card: "#fafefe",
        border: "rgba(0, 100, 110, 0.12)",
        muted: "rgba(15, 23, 23, 0.62)",
        accent: "#2a8b8f",
        accentBright: "#6bbfc6",
        accentMuted: "#4a9fa5",
      },
      dark: {
        background: "#050a0a",
        foreground: "#ecf5f5",
        surface: "#0a1414",
        surfaceSecondary: "#121d1d",
        card: "#0d1818",
        border: "rgba(100, 200, 210, 0.12)",
        muted: "rgba(235, 250, 250, 0.62)",
        accent: "#5dced5",
        accentBright: "#8ae0e7",
        accentMuted: "#44b8bf",
      },
    },
    preview: "#2a8b8f",
  },
  blue: {
    name: "Blue",
    colors: {
      light: {
        background: "#f2f6fc",
        foreground: "#0f1417",
        surface: "#e5ecf7",
        surfaceSecondary: "#d5e1f0",
        card: "#fafcfe",
        border: "rgba(13, 71, 161, 0.12)",
        muted: "rgba(15, 20, 23, 0.62)",
        accent: "#1e40af",
        accentBright: "#6b9ef5",
        accentMuted: "#3b5cb8",
      },
      dark: {
        background: "#050609",
        foreground: "#ecf0f6",
        surface: "#0a1120",
        surfaceSecondary: "#111c2e",
        card: "#0d1524",
        border: "rgba(107, 158, 245, 0.12)",
        muted: "rgba(236, 240, 246, 0.62)",
        accent: "#60a5fa",
        accentBright: "#93c5fd",
        accentMuted: "#3b82f6",
      },
    },
    preview: "#1e40af",
  },
  purple: {
    name: "Purple",
    colors: {
      light: {
        background: "#faf8fd",
        foreground: "#15100f",
        surface: "#f3ecf7",
        surfaceSecondary: "#e8dff4",
        card: "#fcf9ff",
        border: "rgba(126, 34, 206, 0.12)",
        muted: "rgba(21, 16, 15, 0.62)",
        accent: "#7e22ce",
        accentBright: "#d8b4fe",
        accentMuted: "#a855f7",
      },
      dark: {
        background: "#050309",
        foreground: "#f5ecf9",
        surface: "#0f0915",
        surfaceSecondary: "#1a0f26",
        card: "#140a1f",
        border: "rgba(216, 180, 254, 0.12)",
        muted: "rgba(245, 236, 249, 0.62)",
        accent: "#d8b4fe",
        accentBright: "#e9d5ff",
        accentMuted: "#c084fc",
      },
    },
    preview: "#7e22ce",
  },
  red: {
    name: "Red",
    colors: {
      light: {
        background: "#fef8f7",
        foreground: "#17100e",
        surface: "#fde5e0",
        surfaceSecondary: "#f7d1c8",
        card: "#fffbfa",
        border: "rgba(190, 24, 93, 0.12)",
        muted: "rgba(23, 16, 14, 0.62)",
        accent: "#be185d",
        accentBright: "#f472b6",
        accentMuted: "#ec4899",
      },
      dark: {
        background: "#0a0605",
        foreground: "#fff5f3",
        surface: "#140909",
        surfaceSecondary: "#1f0f0c",
        card: "#19080b",
        border: "rgba(244, 114, 182, 0.12)",
        muted: "rgba(255, 245, 243, 0.62)",
        accent: "#f43f5e",
        accentBright: "#ff80ab",
        accentMuted: "#ec4899",
      },
    },
    preview: "#be185d",
  },
  emerald: {
    name: "Emerald",
    colors: {
      light: {
        background: "#f0fdf6",
        foreground: "#0e3d2e",
        surface: "#d1f2e5",
        surfaceSecondary: "#bde9dc",
        card: "#fafffe",
        border: "rgba(5, 150, 105, 0.12)",
        muted: "rgba(14, 61, 46, 0.62)",
        accent: "#059669",
        accentBright: "#6ee7b7",
        accentMuted: "#10b981",
      },
      dark: {
        background: "#050b08",
        foreground: "#ecfdf5",
        surface: "#064e3b",
        surfaceSecondary: "#0d4c39",
        card: "#051c15",
        border: "rgba(110, 231, 183, 0.12)",
        muted: "rgba(236, 253, 245, 0.62)",
        accent: "#10b981",
        accentBright: "#6ee7b7",
        accentMuted: "#34d399",
      },
    },
    preview: "#059669",
  },
  amber: {
    name: "Amber",
    colors: {
      light: {
        background: "#fffbf0",
        foreground: "#16130d",
        surface: "#fef3c7",
        surfaceSecondary: "#fce7b8",
        card: "#fffdf9",
        border: "rgba(217, 119, 6, 0.12)",
        muted: "rgba(22, 19, 13, 0.62)",
        accent: "#d97706",
        accentBright: "#fcd34d",
        accentMuted: "#f59e0b",
      },
      dark: {
        background: "#0a0705",
        foreground: "#fef8ed",
        surface: "#160f06",
        surfaceSecondary: "#231a0c",
        card: "#1b130a",
        border: "rgba(252, 211, 77, 0.12)",
        muted: "rgba(254, 248, 237, 0.62)",
        accent: "#f59e0b",
        accentBright: "#fbbf24",
        accentMuted: "#fcd34d",
      },
    },
    preview: "#d97706",
  },
  violet: {
    name: "Violet",
    colors: {
      light: {
        background: "#faf6ff",
        foreground: "#160e23",
        surface: "#ede9fe",
        surfaceSecondary: "#ddd6fe",
        card: "#fdfbff",
        border: "rgba(108, 99, 255, 0.12)",
        muted: "rgba(22, 14, 35, 0.62)",
        accent: "#6c63ff",
        accentBright: "#c4b5fd",
        accentMuted: "#8b5cf6",
      },
      dark: {
        background: "#06030d",
        foreground: "#f5f3ff",
        surface: "#0f0620",
        surfaceSecondary: "#1a0e30",
        card: "#13081f",
        border: "rgba(196, 181, 253, 0.12)",
        muted: "rgba(245, 243, 255, 0.62)",
        accent: "#a78bfa",
        accentBright: "#ddd6fe",
        accentMuted: "#c4b5fd",
      },
    },
    preview: "#6c63ff",
  },
  indigo: {
    name: "Indigo",
    colors: {
      light: {
        background: "#f3f4fc",
        foreground: "#0f0f1a",
        surface: "#e0e7ff",
        surfaceSecondary: "#c7d2fe",
        card: "#faf9ff",
        border: "rgba(79, 70, 229, 0.12)",
        muted: "rgba(15, 15, 26, 0.62)",
        accent: "#4f46e5",
        accentBright: "#a5b4fc",
        accentMuted: "#6366f1",
      },
      dark: {
        background: "#050507",
        foreground: "#f0f0ff",
        surface: "#0a0a1a",
        surfaceSecondary: "#151527",
        card: "#0d0d1f",
        border: "rgba(165, 180, 252, 0.12)",
        muted: "rgba(240, 240, 255, 0.62)",
        accent: "#818cf8",
        accentBright: "#c7d2fe",
        accentMuted: "#a5b4fc",
      },
    },
    preview: "#4f46e5",
  },
  slate: {
    name: "Slate",
    colors: {
      light: {
        background: "#f7f8fa",
        foreground: "#0f1115",
        surface: "#e8eef3",
        surfaceSecondary: "#dce3ec",
        card: "#fafbfe",
        border: "rgba(71, 85, 105, 0.12)",
        muted: "rgba(15, 17, 21, 0.62)",
        accent: "#475569",
        accentBright: "#cbd5e1",
        accentMuted: "#64748b",
      },
      dark: {
        background: "#050609",
        foreground: "#f1f5f9",
        surface: "#0f1419",
        surfaceSecondary: "#1a202c",
        card: "#111827",
        border: "rgba(203, 213, 225, 0.12)",
        muted: "rgba(241, 245, 249, 0.62)",
        accent: "#94a3b8",
        accentBright: "#cbd5e1",
        accentMuted: "#a0aec0",
      },
    },
    preview: "#475569",
  },
  coral: {
    name: "Coral",
    colors: {
      light: {
        background: "#fffaf8",
        foreground: "#170f0d",
        surface: "#ffe5dd",
        surfaceSecondary: "#ffd4c7",
        card: "#fffcfb",
        border: "rgba(255, 87, 34, 0.12)",
        muted: "rgba(23, 15, 13, 0.62)",
        accent: "#ff5722",
        accentBright: "#ffab91",
        accentMuted: "#ff7043",
      },
      dark: {
        background: "#0a0605",
        foreground: "#fff7f5",
        surface: "#1a0a07",
        surfaceSecondary: "#25130f",
        card: "#1f0e0a",
        border: "rgba(255, 171, 145, 0.12)",
        muted: "rgba(255, 247, 245, 0.62)",
        accent: "#ff6e40",
        accentBright: "#ffab91",
        accentMuted: "#ff7043",
      },
    },
    preview: "#ff5722",
  },
  lime: {
    name: "Lime",
    colors: {
      light: {
        background: "#fafde9",
        foreground: "#1a1c0d",
        surface: "#e5f8b8",
        surfaceSecondary: "#d4f3a1",
        card: "#fffefb",
        border: "rgba(132, 204, 22, 0.12)",
        muted: "rgba(26, 28, 13, 0.62)",
        accent: "#84cc16",
        accentBright: "#dcfce7",
        accentMuted: "#bef264",
      },
      dark: {
        background: "#070905",
        foreground: "#f7fbeb",
        surface: "#1a2008",
        surfaceSecondary: "#26300f",
        card: "#1f2818",
        border: "rgba(220, 252, 231, 0.12)",
        muted: "rgba(247, 251, 235, 0.62)",
        accent: "#a3e635",
        accentBright: "#d4fc79",
        accentMuted: "#bef264",
      },
    },
    preview: "#84cc16",
  },
  roseRed: {
    name: "Rose Red",
    colors: {
      light: {
        background: "#fef6f7",
        foreground: "#1a0d10",
        surface: "#fce4e9",
        surfaceSecondary: "#f5d1dc",
        card: "#fffbfc",
        border: "rgba(220, 38, 38, 0.12)",
        muted: "rgba(26, 13, 16, 0.62)",
        accent: "#dc2626",
        accentBright: "#fca5ac",
        accentMuted: "#ef4444",
      },
      dark: {
        background: "#0a0506",
        foreground: "#fde8eb",
        surface: "#16080b",
        surfaceSecondary: "#221114",
        card: "#1a0a0d",
        border: "rgba(252, 165, 172, 0.12)",
        muted: "rgba(253, 232, 235, 0.62)",
        accent: "#f87171",
        accentBright: "#fca5ac",
        accentMuted: "#fecaca",
      },
    },
    preview: "#dc2626",
  },
  chocolate: {
    name: "Chocolate",
    colors: {
      light: {
        background: "#faf8f3",
        foreground: "#1a140f",
        surface: "#e8dace",
        surfaceSecondary: "#dcc4b0",
        card: "#fdfbf8",
        border: "rgba(120, 53, 15, 0.12)",
        muted: "rgba(26, 20, 15, 0.62)",
        accent: "#78350f",
        accentBright: "#d2b48c",
        accentMuted: "#92400e",
      },
      dark: {
        background: "#050403",
        foreground: "#faf5f0",
        surface: "#1a1410",
        surfaceSecondary: "#28201a",
        card: "#1f1815",
        border: "rgba(210, 180, 140, 0.12)",
        muted: "rgba(250, 245, 240, 0.62)",
        accent: "#a16207",
        accentBright: "#d2b48c",
        accentMuted: "#b45309",
      },
    },
    preview: "#78350f",
  },
  plum: {
    name: "Plum",
    colors: {
      light: {
        background: "#faf5ff",
        foreground: "#17120b",
        surface: "#f0dff8",
        surfaceSecondary: "#e6c9f5",
        card: "#fcf7ff",
        border: "rgba(147, 51, 234, 0.12)",
        muted: "rgba(23, 18, 11, 0.62)",
        accent: "#9333ea",
        accentBright: "#e9d5ff",
        accentMuted: "#c084fc",
      },
      dark: {
        background: "#050208",
        foreground: "#f5f0fb",
        surface: "#12061a",
        surfaceSecondary: "#1c0f2e",
        card: "#160a24",
        border: "rgba(233, 213, 255, 0.12)",
        muted: "rgba(245, 240, 251, 0.62)",
        accent: "#d8b4fe",
        accentBright: "#f3e8ff",
        accentMuted: "#e9d5ff",
      },
    },
    preview: "#9333ea",
  },
  yellow: {
    name: "Yellow",
    colors: {
      light: {
        background: "#fffef0",
        foreground: "#1a1a0d",
        surface: "#fef8d1",
        surfaceSecondary: "#fef3b3",
        card: "#fffffe",
        border: "rgba(202, 138, 4, 0.12)",
        muted: "rgba(26, 26, 13, 0.62)",
        accent: "#ca8a04",
        accentBright: "#fef08a",
        accentMuted: "#eab308",
      },
      dark: {
        background: "#080805",
        foreground: "#fffde8",
        surface: "#1a1700",
        surfaceSecondary: "#262000",
        card: "#1f1b00",
        border: "rgba(254, 240, 138, 0.12)",
        muted: "rgba(255, 253, 232, 0.62)",
        accent: "#eab308",
        accentBright: "#facc15",
        accentMuted: "#fbbf24",
      },
    },
    preview: "#ca8a04",
  },
  peach: {
    name: "Peach",
    colors: {
      light: {
        background: "#fffaf5",
        foreground: "#17120d",
        surface: "#ffe4d6",
        surfaceSecondary: "#ffd1ba",
        card: "#fffcfa",
        border: "rgba(234, 88, 12, 0.12)",
        muted: "rgba(23, 18, 13, 0.62)",
        accent: "#ea580c",
        accentBright: "#fed7aa",
        accentMuted: "#f97316",
      },
      dark: {
        background: "#0a0603",
        foreground: "#fff6f1",
        surface: "#1a0f08",
        surfaceSecondary: "#261810",
        card: "#1f120a",
        border: "rgba(254, 215, 170, 0.12)",
        muted: "rgba(255, 246, 241, 0.62)",
        accent: "#f97316",
        accentBright: "#fed7aa",
        accentMuted: "#fb923c",
      },
    },
    preview: "#ea580c",
  },
  mint: {
    name: "Mint",
    colors: {
      light: {
        background: "#f0fefb",
        foreground: "#0d1817",
        surface: "#ccf0e8",
        surfaceSecondary: "#99e6d3",
        card: "#f5fffb",
        border: "rgba(16, 185, 129, 0.12)",
        muted: "rgba(13, 24, 23, 0.62)",
        accent: "#10b981",
        accentBright: "#a7f3d0",
        accentMuted: "#6ee7b7",
      },
      dark: {
        background: "#051d1a",
        foreground: "#ecfef9",
        surface: "#064e3b",
        surfaceSecondary: "#047857",
        card: "#0d4433",
        border: "rgba(167, 243, 208, 0.12)",
        muted: "rgba(236, 254, 249, 0.62)",
        accent: "#6ee7b7",
        accentBright: "#a7f3d0",
        accentMuted: "#d1fae5",
      },
    },
    preview: "#10b981",
  },
  navy: {
    name: "Navy",
    colors: {
      light: {
        background: "#f0f5fb",
        foreground: "#0c0f1a",
        surface: "#d9e5f7",
        surfaceSecondary: "#c4d7f0",
        card: "#f8fbff",
        border: "rgba(30, 58, 138, 0.12)",
        muted: "rgba(12, 15, 26, 0.62)",
        accent: "#1e3a8a",
        accentBright: "#93c5fd",
        accentMuted: "#3b82f6",
      },
      dark: {
        background: "#050810",
        foreground: "#ecf0f9",
        surface: "#0c1e48",
        surfaceSecondary: "#132766",
        card: "#0f1a3d",
        border: "rgba(147, 197, 253, 0.12)",
        muted: "rgba(236, 240, 249, 0.62)",
        accent: "#60a5fa",
        accentBright: "#bfdbfe",
        accentMuted: "#93c5fd",
      },
    },
    preview: "#1e3a8a",
  },
  rose: {
    name: "Rose",
    colors: {
      light: {
        background: "#fff1f5",
        foreground: "#1a0e11",
        surface: "#ffe4ec",
        surfaceSecondary: "#f8bbd0",
        card: "#fffbfd",
        border: "rgba(244, 63, 94, 0.12)",
        muted: "rgba(26, 14, 17, 0.62)",
        accent: "#f43f5e",
        accentBright: "#fbcfe8",
        accentMuted: "#f72585",
      },
      dark: {
        background: "#0a0508",
        foreground: "#ffe0eb",
        surface: "#1a0d14",
        surfaceSecondary: "#25111d",
        card: "#1f0b17",
        border: "rgba(251, 207, 232, 0.12)",
        muted: "rgba(255, 224, 235, 0.62)",
        accent: "#fb7185",
        accentBright: "#fbcfe8",
        accentMuted: "#f43f5e",
      },
    },
    preview: "#f43f5e",
  },
  fuchsia: {
    name: "Fuchsia",
    colors: {
      light: {
        background: "#fdf4ff",
        foreground: "#1a0f1a",
        surface: "#f5d8f7",
        surfaceSecondary: "#f0aeeb",
        card: "#fefdff",
        border: "rgba(217, 70, 239, 0.12)",
        muted: "rgba(26, 15, 26, 0.62)",
        accent: "#d946ef",
        accentBright: "#f0d9ff",
        accentMuted: "#e879f9",
      },
      dark: {
        background: "#0a0410",
        foreground: "#fce9fb",
        surface: "#1a0726",
        surfaceSecondary: "#2c0a3e",
        card: "#22051e",
        border: "rgba(240, 217, 255, 0.12)",
        muted: "rgba(252, 233, 251, 0.62)",
        accent: "#f472b6",
        accentBright: "#f0d9ff",
        accentMuted: "#ec4899",
      },
    },
    preview: "#d946ef",
  },
  cyan: {
    name: "Cyan",
    colors: {
      light: {
        background: "#ecf9fd",
        foreground: "#082f46",
        surface: "#cffafe",
        surfaceSecondary: "#a5f3fc",
        card: "#f0feff",
        border: "rgba(6, 182, 212, 0.12)",
        muted: "rgba(8, 47, 70, 0.62)",
        accent: "#06b6d4",
        accentBright: "#67e8f9",
        accentMuted: "#22d3ee",
      },
      dark: {
        background: "#051820",
        foreground: "#ecf8fa",
        surface: "#164e63",
        surfaceSecondary: "#0d4158",
        card: "#0a3439",
        border: "rgba(103, 232, 249, 0.12)",
        muted: "rgba(236, 248, 250, 0.62)",
        accent: "#22d3ee",
        accentBright: "#67e8f9",
        accentMuted: "#a5f3fc",
      },
    },
    preview: "#06b6d4",
  },
  sky: {
    name: "Sky",
    colors: {
      light: {
        background: "#f0f9ff",
        foreground: "#082f46",
        surface: "#e0f2fe",
        surfaceSecondary: "#bae6fd",
        card: "#f8fcff",
        border: "rgba(2, 132, 199, 0.12)",
        muted: "rgba(8, 47, 70, 0.62)",
        accent: "#0284c7",
        accentBright: "#87ceeb",
        accentMuted: "#38bdf8",
      },
      dark: {
        background: "#050e1a",
        foreground: "#e0f2fe",
        surface: "#0c2d44",
        surfaceSecondary: "#164e63",
        card: "#0a2e3d",
        border: "rgba(135, 206, 235, 0.12)",
        muted: "rgba(224, 242, 254, 0.62)",
        accent: "#38bdf8",
        accentBright: "#87ceeb",
        accentMuted: "#0ea5e9",
      },
    },
    preview: "#0284c7",
  },
  rose2: {
    name: "Rose 2",
    colors: {
      light: {
        background: "#fdf2f8",
        foreground: "#1a0d15",
        surface: "#fbcfe8",
        surfaceSecondary: "#f8bbd0",
        card: "#fffcfd",
        border: "rgba(236, 72, 153, 0.12)",
        muted: "rgba(26, 13, 21, 0.62)",
        accent: "#ec4899",
        accentBright: "#fbcfe8",
        accentMuted: "#f472b6",
      },
      dark: {
        background: "#0a0609",
        foreground: "#fde8f3",
        surface: "#190817",
        surfaceSecondary: "#24101c",
        card: "#1d0a15",
        border: "rgba(251, 207, 232, 0.12)",
        muted: "rgba(253, 232, 243, 0.62)",
        accent: "#f472b6",
        accentBright: "#fbcfe8",
        accentMuted: "#f91e63",
      },
    },
    preview: "#ec4899",
  },
  orange2: {
    name: "Orange 2",
    colors: {
      light: {
        background: "#fff7ed",
        foreground: "#16130d",
        surface: "#fed7aa",
        surfaceSecondary: "#fcc26d",
        card: "#fffcf9",
        border: "rgba(249, 115, 22, 0.12)",
        muted: "rgba(22, 19, 13, 0.62)",
        accent: "#f97316",
        accentBright: "#fed7aa",
        accentMuted: "#fb923c",
      },
      dark: {
        background: "#0a0502",
        foreground: "#ffe5cf",
        surface: "#1a0a04",
        surfaceSecondary: "#251404",
        card: "#1e0e06",
        border: "rgba(254, 215, 170, 0.12)",
        muted: "rgba(255, 229, 207, 0.62)",
        accent: "#fb923c",
        accentBright: "#fed7aa",
        accentMuted: "#f59e0b",
      },
    },
    preview: "#f97316",
  },
  lime2: {
    name: "Lime 2",
    colors: {
      light: {
        background: "#f7fee7",
        foreground: "#1a1f0f",
        surface: "#dcfce7",
        surfaceSecondary: "#bbf7d0",
        card: "#fefce8",
        border: "rgba(101, 163, 13, 0.12)",
        muted: "rgba(26, 31, 15, 0.62)",
        accent: "#65a30d",
        accentBright: "#bef264",
        accentMuted: "#84cc16",
      },
      dark: {
        background: "#060b02",
        foreground: "#f4f7eb",
        surface: "#1a1f0f",
        surfaceSecondary: "#232d0a",
        card: "#1a210d",
        border: "rgba(190, 242, 100, 0.12)",
        muted: "rgba(244, 247, 235, 0.62)",
        accent: "#a3e635",
        accentBright: "#dcfce7",
        accentMuted: "#84cc16",
      },
    },
    preview: "#65a30d",
  },
  teal2: {
    name: "Teal 2",
    colors: {
      light: {
        background: "#f0fdfa",
        foreground: "#0e4f4f",
        surface: "#ccf5f2",
        surfaceSecondary: "#99ebe8",
        card: "#f8fffd",
        border: "rgba(20, 184, 166, 0.12)",
        muted: "rgba(14, 79, 79, 0.62)",
        accent: "#14b8a6",
        accentBright: "#99ebe8",
        accentMuted: "#2dd4bf",
      },
      dark: {
        background: "#050f0e",
        foreground: "#ecfdf5",
        surface: "#134e4a",
        surfaceSecondary: "#0d514b",
        card: "#0a3a36",
        border: "rgba(45, 212, 191, 0.12)",
        muted: "rgba(236, 253, 245, 0.62)",
        accent: "#2dd4bf",
        accentBright: "#99ebe8",
        accentMuted: "#5eead4",
      },
    },
    preview: "#14b8a6",
  },
};

export default function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("#7e22ce");
  const containerRef = useRef(null);

  useEffect(() => {
    // Get current accent color from CSS variable
    const updateColor = () => {
      const root = document.documentElement;
      const color = getComputedStyle(root).getPropertyValue("--accent").trim();
      setCurrentColor(color || "#7e22ce");
    };

    updateColor();

    // Watch for changes
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const applyTheme = (palette) => {
    const root = document.documentElement;
    const isDark = document.body.classList.contains("dark");
    const colors = isDark ? palette.colors.dark : palette.colors.light;

    // Apply colors to CSS variables
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty("--surface", colors.surface);
    root.style.setProperty("--surface-secondary", colors.surfaceSecondary);
    root.style.setProperty("--card", colors.card);
    root.style.setProperty("--border", colors.border);
    root.style.setProperty("--muted", colors.muted);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--accent-bright", colors.accentBright);
    root.style.setProperty("--accent-muted", colors.accentMuted);

    // Save to localStorage for persistence
    localStorage.setItem("selected-theme", palette.name.toLowerCase());

    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <style>{`
        @keyframes liquidWave {
          0% {
            clip-path: polygon(
              0% 70%, 2.5% 68%, 5% 70%, 7.5% 72%, 10% 70%, 12.5% 68%, 
              15% 70%, 17.5% 72%, 20% 70%, 22.5% 68%, 25% 70%, 27.5% 72%, 
              30% 70%, 32.5% 68%, 35% 70%, 37.5% 72%, 40% 70%, 42.5% 68%, 
              45% 70%, 47.5% 72%, 50% 70%, 52.5% 68%, 55% 70%, 57.5% 72%, 
              60% 70%, 62.5% 68%, 65% 70%, 67.5% 72%, 70% 70%, 72.5% 68%, 
              75% 70%, 77.5% 72%, 80% 70%, 82.5% 68%, 85% 70%, 87.5% 72%, 
              90% 70%, 92.5% 68%, 95% 70%, 97.5% 72%, 100% 70%,
              100% 100%, 0% 100%
            );
          }
          25% {
            clip-path: polygon(
              0% 60%, 2.5% 58%, 5% 60%, 7.5% 62%, 10% 60%, 12.5% 58%, 
              15% 60%, 17.5% 62%, 20% 60%, 22.5% 58%, 25% 60%, 27.5% 62%, 
              30% 60%, 32.5% 58%, 35% 60%, 37.5% 62%, 40% 60%, 42.5% 58%, 
              45% 60%, 47.5% 62%, 50% 60%, 52.5% 58%, 55% 60%, 57.5% 62%, 
              60% 60%, 62.5% 58%, 65% 60%, 67.5% 62%, 70% 60%, 72.5% 58%, 
              75% 60%, 77.5% 62%, 80% 60%, 82.5% 58%, 85% 60%, 87.5% 62%, 
              90% 60%, 92.5% 58%, 95% 60%, 97.5% 62%, 100% 60%,
              100% 100%, 0% 100%
            );
          }
          50% {
            clip-path: polygon(
              0% 50%, 2.5% 48%, 5% 50%, 7.5% 52%, 10% 50%, 12.5% 48%, 
              15% 50%, 17.5% 52%, 20% 50%, 22.5% 48%, 25% 50%, 27.5% 52%, 
              30% 50%, 32.5% 48%, 35% 50%, 37.5% 52%, 40% 50%, 42.5% 48%, 
              45% 50%, 47.5% 52%, 50% 50%, 52.5% 48%, 55% 50%, 57.5% 52%, 
              60% 50%, 62.5% 48%, 65% 50%, 67.5% 52%, 70% 50%, 72.5% 48%, 
              75% 50%, 77.5% 52%, 80% 50%, 82.5% 48%, 85% 50%, 87.5% 52%, 
              90% 50%, 92.5% 48%, 95% 50%, 97.5% 52%, 100% 50%,
              100% 100%, 0% 100%
            );
          }
          75% {
            clip-path: polygon(
              0% 60%, 2.5% 58%, 5% 60%, 7.5% 62%, 10% 60%, 12.5% 58%, 
              15% 60%, 17.5% 62%, 20% 60%, 22.5% 58%, 25% 60%, 27.5% 62%, 
              30% 60%, 32.5% 58%, 35% 60%, 37.5% 62%, 40% 60%, 42.5% 58%, 
              45% 60%, 47.5% 62%, 50% 60%, 52.5% 58%, 55% 60%, 57.5% 62%, 
              60% 60%, 62.5% 58%, 65% 60%, 67.5% 62%, 70% 60%, 72.5% 58%, 
              75% 60%, 77.5% 62%, 80% 60%, 82.5% 58%, 85% 60%, 87.5% 62%, 
              90% 60%, 92.5% 58%, 95% 60%, 97.5% 62%, 100% 60%,
              100% 100%, 0% 100%
            );
          }
          100% {
            clip-path: polygon(
              0% 70%, 2.5% 68%, 5% 70%, 7.5% 72%, 10% 70%, 12.5% 68%, 
              15% 70%, 17.5% 72%, 20% 70%, 22.5% 68%, 25% 70%, 27.5% 72%, 
              30% 70%, 32.5% 68%, 35% 70%, 37.5% 72%, 40% 70%, 42.5% 68%, 
              45% 70%, 47.5% 72%, 50% 70%, 52.5% 68%, 55% 70%, 57.5% 72%, 
              60% 70%, 62.5% 68%, 65% 70%, 67.5% 72%, 70% 70%, 72.5% 68%, 
              75% 70%, 77.5% 72%, 80% 70%, 82.5% 68%, 85% 70%, 87.5% 72%, 
              90% 70%, 92.5% 68%, 95% 70%, 97.5% 72%, 100% 70%,
              100% 100%, 0% 100%
            );
          }
        }
        @keyframes boilPulse {
          0% {
            box-shadow: 0 0 0 0 ${currentColor}99;
          }
          50% {
            box-shadow: 0 0 0 8px ${currentColor}33;
          }
          100% {
            box-shadow: 0 0 0 0 ${currentColor}0;
          }
        }
        .liquid-wave {
          animation: liquidWave 3s ease-in-out infinite;
        }
        .boil-pulse {
          animation: boilPulse 1.5s ease-out infinite;
        }
      `}</style>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 overflow-hidden transition-all duration-300"
        style={{
          borderColor: currentColor,
        }}
        aria-label="Color theme picker"
        title="Change color theme"
      >
        {/* Liquid Wave Background */}
        <div
          className="absolute inset-0 liquid-wave"
          style={{
            backgroundColor: currentColor,
            opacity: 0.4,
          }}
        />
        
        {/* Settings Icon */}
        <Settings size={20} className="relative z-10" style={{ color: currentColor }} />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 top-full mt-2 w-96 rounded-2xl border border-black/10 bg-white shadow-xl transition-all duration-300 dark:border-white/10 dark:bg-[#151515] ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="p-4">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-black dark:text-white">
            Color Palette
          </p>

          <div className="grid grid-cols-6 gap-2">
            {Object.entries(COLOR_PALETTES).map(([key, palette]) => (
              <button
                key={key}
                onClick={() => applyTheme(palette)}
                className="relative h-8 w-8 rounded-full border-2 border-black/15 shadow-md transition-all duration-200 hover:scale-110 hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
                style={{
                  backgroundColor: palette.preview,
                }}
                title={palette.name}
                aria-label={`${palette.name} theme`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-black/10 px-4 py-2.5 dark:border-white/10">
          <p className="text-xs text-black/65 dark:text-white/65">
            Click to apply
          </p>
        </div>
      </div>
    </div>
  );
}
