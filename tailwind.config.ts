import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-gradient": "text 4.5s linear infinite",
      },
      keyframes: {
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
      transitionTimingFunction: {
        back: "cubic-bezier(.13,1.85,.77,.79)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "secondary-muted": "var(--secondary-muted)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        "info-text": "var(--info-text)",
        "info-bg": "var(--info-bg)",
        "warning-text": "var(--warning-text)",
        "warning-bg": "var(--warning-bg)",
        "danger-text": "var(--danger-text)",
        "danger-bg": "var(--danger-bg)",
      },
    },
    fontFamily: {
      fallback: "var(--font-fallback)",
      display: "var(--font-display)",
      mono: "var(--font-mono)",
    },
    fontSize: {
      h1: [
        "var(--font-size-6)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-500)",
        },
      ],
      h2: [
        "var(--font-size-5)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-500)",
        },
      ],
      h3: [
        "var(--font-size-4)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-500)",
        },
      ],
      h4: [
        "var(--font-size-3)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-500)",
        },
      ],
      h5: [
        "var(--font-size-2)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-500)",
        },
      ],
      h6: [
        "var(--font-size-1)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-500)",
        },
      ],
      s1: [
        "var(--font-size-0)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-400)",
        },
      ],
      s2: [
        "var(--font-size-1)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-400)",
        },
      ],
      s3: [
        "var(--font-size-2)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-400)",
        },
      ],
      s4: [
        "var(--font-size-3)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-400)",
        },
      ],
      s5: [
        "var(--font-size-4)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-400)",
        },
      ],
      s6: [
        "var(--font-size-5)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-400)",
        },
      ],
      s7: [
        "var(--font-size-6)",
        {
          lineHeight: "var(--space-6)",
          letterSpacing: "-0.5px",
          fontWeight: "var(--font-weight-400)",
        },
      ],
    },
  },
  plugins: [],
};
export default config;
