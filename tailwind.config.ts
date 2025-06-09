import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-8': '#09363F',
        'blue-6': '#2563eb',
        'blue-7': '#1d4ed8',
        'blue-1': '#f0f9ff',
        'grey-1': '#e5e7eb',
        'grey-3': '#d1d5db',
        'grey-6': '#4b5563',
        'dashgreen-active': '#059669'
      },
      animation: {
        'logo-slide-carousel-no-edges': 'logoSlide 30s linear infinite'
      },
      keyframes: {
        logoSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
};

export default config;
