/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange10: '#039339',
      },
      spacing: {
        1: '1px',
        2: '2px',
        //...
      },
      fontSize: {
        'title-0': '90px',
        //...
        'head-0': '45px',
        //...
        'body-1': '18px',
        //...
        'caption-1': '12px',
        //...
      },
      fontFamily: {
        garamond: 'GaramondPremrPro, Arial, sans-serif',
        noto: 'Noto Sans, Arial, sans-serif',
      },
      fontWeight: {
        ultralight: 100,
        light: 200,
        thin: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      lineHeight: {
        default: '1.2',
        12: '12px',
        //...
      },
      minWidth: {
        320: '320px',
        //...
      },
      maxWidth: {
        140: '140px',
        //...
      },
      minHeight: {
        882: '882px',
      },
      maxHeight: {
        460: '460px',
      },
      boxShadow: {
        sm: '0px 0px 8px rgba(0, 0, 0, 0.1)',
        md: '0px 2px 16px rgba(0, 0, 0, 0.1)',
        lg: '0px 4px 32px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        show: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      animation: {
        show: 'show 200ms cubic-bezier(.6, 0, .4, 1) 1000ms forwards',
        fadeIn: 'fadeIn 300ms cubic-bezier(.6, 0, .4, 1) forwards',
      },
    },
    screens: {
      xsm: '320px',
      sm: '428px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
