/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber': {
          900: '#13111C',
          800: '#1A1625',
          700: '#241F35',
        },
        'neon': {
          blue: '#00F5FF',
          purple: '#B026FF',
          pink: '#FF26B9',
        }
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};