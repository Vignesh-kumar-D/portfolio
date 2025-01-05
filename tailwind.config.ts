import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyUi from 'daisyui';
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#6B7280',
        dark: '#111827',
      },
      animation: {
        border: 'border-animation 3s linear infinite',
        glow: 'glow 2s linear infinite',
        slideRight: 'slideRight 3s linear infinite',
        slideLeft: 'slideLeft 3s linear infinite',
        slideUp: 'slideUp 3s linear infinite',
        slideDown: 'slideDown 3s linear infinite',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(200%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-200%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [typography, daisyUi],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#22c55e',
          secondary: '#0ea5e9',
          accent: '#f97316',
          neutral: '#374151',
          'base-100': '#1f2937',
          'base-200': '#111827',
          info: '#06b6d4',
          success: '#22c55e',
          warning: '#fbbf24',
          error: '#ef4444',
        },
      },
    ],
  },
} satisfies Config;
