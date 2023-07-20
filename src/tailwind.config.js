/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../public/index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0e7490',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
