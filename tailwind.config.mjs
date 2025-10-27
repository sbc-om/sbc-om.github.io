/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/forms"),
  ],
  daisyui: {
    themes: [
      {
        // Light Theme
        light: {
          primary: "#0098ea",
          secondary: "#1976d2", 
          accent: "#f59e0b",
          neutral: "#374151",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#e5e7eb",
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f59e0b", 
          error: "#ef4444",
          
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem", 
          "--rounded-badge": "1rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
        
        // Dark Theme
        dark: {
          primary: "#38bdf8",
          secondary: "#818cf8",
          accent: "#f471b5", 
          neutral: "#1f2937",
          "base-100": "#1f2937",
          "base-200": "#374151",
          "base-300": "#4b5563",
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "1rem", 
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px", 
          "--tab-radius": "0.5rem",
        },
        
        // Abyss Theme (Original)
        abyss: {
          primary: "#0098ea",
          secondary: "#0098ea",
          accent: "#F1D302",
          neutral: "#A0A0A0",
          "base-100": "#1e1e1e",
          "base-200": "#2a2a2a",
          "base-300": "#3a3a3a",
          warning: "#FFA500",
          success: "#28A745",
          error: "#DC3545",

          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "1rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "2px",
          "--tab-border": "2px",
          "--tab-radius": "0.5rem",
        },
        
        // Luxury Theme
        luxury: {
          primary: "#d4af37",
          secondary: "#c9a96e", 
          accent: "#e11d48",
          neutral: "#2d1b0e",
          "base-100": "#0f0f0f",
          "base-200": "#1a1a1a",
          "base-300": "#2d2d2d",
          info: "#60a5fa",
          success: "#34d399", 
          warning: "#fbbf24",
          error: "#f87171",
          
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s", 
          "--btn-focus-scale": "0.95",
          "--border-btn": "2px",
          "--tab-border": "2px",
          "--tab-radius": "0.75rem",
        },
      },
    ],
  },
};
