/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paradox-bg': '#ede9e4',
        'paradox-dark': '#170f0b',
        'paradox-black': '#222',
        'paradox-brown': '#bdb4af',
        'paradox-gray': '#7a6f6a',
        'paradox-light': '#edece3',
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'clash': ['"Clash Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
