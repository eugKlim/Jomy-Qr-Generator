/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        KaushanScripts: ['"KaushanScript-Regular"', 'sans-serif'],
        RalewayRegular: ['"Raleway-Regular"', 'sans-serif'],
      },
      backgroundImage: {
        homeBg: "url('/image/homeBg.gif')",
      },
      backgroundSize: {
        full: '100% 100%',
      },
      screens: {
        sm: '320px',
        md: '650px',
        lg: '800px',
        xl: '1000px',
      },
      textShadow: {
        custom: '4px 4px 2px rgba(0, 0, 0, 0.6)',
      },
      boxShadow: {
        custom: '4px 4px 10px rgba(0, 0, 0, 0.5)',
        custom2: '4px 4px 5px 0px rgba(0,0,0,0.75);',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
