/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'io-space': '#0B0F14',
        'io-blue': '#5C7CFA',
        'io-gold': '#F5C542',
        'io-slate': '#94A3B8'
      },
      boxShadow: {
        highlight: '0 20px 45px -15px rgba(92, 124, 250, 0.35)'
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        tech: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
