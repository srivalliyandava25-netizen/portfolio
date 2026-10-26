/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eceef5',
          200: '#d6d9e6',
          300: '#b0b6cc',
          400: '#7e87a6',
          500: '#5a6488',
          600: '#434c6e',
          700: '#333a55',
          800: '#1f2538',
          900: '#131726',
          950: '#0a0d1a',
        },
        accent: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8fb6ff',
          400: '#5b8def',
          500: '#3a6fe0',
          600: '#2754c4',
          700: '#1f429e',
          800: '#1d387c',
          900: '#1b3163',
          950: '#15204a',
        },
        cream: {
          50: '#fbfaf7',
          100: '#f7f4ee',
          200: '#efe9dc',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.08)',
        card: '0 1px 0 rgba(15,23,42,0.04), 0 18px 40px -20px rgba(15,23,42,0.18)',
        glow: '0 0 0 1px rgba(91,141,239,0.18), 0 18px 50px -18px rgba(59,111,224,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'marquee-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.55' },
          '70%': { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        'grow-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.7s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'marquee-spin': 'marquee-spin 32s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s ease-out infinite',
        'grow-line': 'grow-line 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
