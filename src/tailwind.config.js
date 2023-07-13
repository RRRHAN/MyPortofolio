/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../public/index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0e7490',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
