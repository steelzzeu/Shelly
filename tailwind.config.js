/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ssrp: {
          navy: '#0a192f',
          orange: '#f97316',
          bg: '#060a13',
        },
        accent: '#f97316',
        background: '#060a13',
      },
      boxShadow: {
        'ssrp-card': '0 4px 24px 0 rgba(10, 25, 47, 0.6)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}