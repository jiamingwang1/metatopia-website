/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GameFi电竞主题色彩
        'space-blue': '#0a0e27',
        'esports-purple': '#6366f1',
        'neon-cyan': '#06b6d4',
        'esports-gold': '#fbbf24',
        'success-green': '#10b981',
        'warning-orange': '#f59e0b',
        'dark-gray': '#1f2937',
        'mid-gray': '#374151',
        'light-gray': '#9ca3af',
      },
      backgroundImage: {
        'gradient-purple-cyan': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
        'gradient-gold-purple': 'linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%)',
        'tech-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4' },
          '100%': { boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4' },
        },
      },
    },
  },
  plugins: [],
}