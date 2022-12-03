/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '728px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    fontFamily: {
      Anek: ['Anek Devanagari', 'sans-serif'],
      Oswald: ['Oswald', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
