/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange10: '#039339',
        brown90: '#3E2723',
        brown80: '#4E342E',
        brown70: '#5D4037',
        brown60: '#6D4C41',
        brown50: '#795548',
        brown40: '#8D6E63',
        brown30: '#A1887F',
        brown20: '#BCAAA4',
        brown10: '#D7CCC8',
        brown05: '#EFEBE9',
        gray70: '212121',
        gray60: '424242',
        gray50: '616161',
        gray40: '757575',
        gray30: '9E9E9E',
        gray20: 'BDBDBD',
        gray10: 'E0E0E0',
        white: '#FFFFFF',
        black: '#000000',
      },
      spacing: {
        1: '1px',
        2: '2px',
        //...
      },
      fontSize: {
        56: '56px',
        48: '48px',
        40: '40px',
        36: '36px',
        32: '32px',
        24: '24px',
        18: '18px',
        16: '16px',
        14: '14px',
        12: '12px',
      },
      fontFamily: {
        garamond: 'GaramondPremrPro, Arial, sans-serif',
        noto: 'Noto Sans, Arial, sans-serif',
        pretendard: 'Pretendard',
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
        150: '1.5',
        140: '1.4',
        130: '1.3',
        125: '1.25',
        120: '1.2',
        110: '1.1',
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
    ({ addUtilities, theme }) => {
      const fontUtilities = {
        '.d-display': {
          fontSize: theme('fontSize.56'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.110'),
        },
        '.d-headline-1': {
          fontSize: theme('fontSize.40'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.150'),
        },
        '.d-headline-2': {
          fontSize: theme('fontSize.32'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.150'),
        },
        '.d-headline-3': {
          fontSize: theme('fontSize.24'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.125'),
        },
        '.d-headline-4': {
          fontSize: theme('fontSize.18'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
        '.d-body-sb18': {
          fontSize: theme('fontSize.18'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.140'),
        },
        '.d-body-m16': {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.140'),
        },
        '.d-body-r16': {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.140'),
        },
        '.d-body-m14': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.140'),
        },
        '.d-body-r14': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.140'),
        },
        '.d-caption-r12': {
          fontSize: theme('fontSize.12'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-display': {
          fontSize: theme('fontSize.48'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.110'),
        },
        '.t-headline-1': {
          fontSize: theme('fontSize.32'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.150'),
        },
        '.t-headline-2': {
          fontSize: theme('fontSize.24'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.125'),
        },
        '.t-headline-3': {
          fontSize: theme('fontSize.18'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
        '.t-headline-4': {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
        '.t-body-sb16': {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-body-m14': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-body-r14': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-body-m12': {
          fontSize: theme('fontSize.12'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-body-r12': {
          fontSize: theme('fontSize.12'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-caption-r12': {
          fontSize: theme('fontSize.12'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
        '.m-display': {
          fontSize: theme('fontSize.36'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.110'),
        },
        '.m-headline-1': {
          fontSize: theme('fontSize.24'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.125'),
        },
        '.m-headline-2': {
          fontSize: theme('fontSize.18'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
        '.m-headline-3': {
          fontSize: theme('fontSize.26'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
        '.m-headline-4': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
        '.m-body-sb16': {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.m-body-m14': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.m-body-r14': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.m-body-m12': {
          fontSize: theme('fontSize.12'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.m-body-r12': {
          fontSize: theme('fontSize.12'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.m-caption-r12': {
          fontSize: theme('fontSize.12'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.120'),
        },
      };
      const buttonUtilities = {
        '.button-default': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '6px',
          border: 0,
          borderRadius: '8px',
          cursor: 'pointer',
        },
        '.button-loading': {
          cursor: 'wait',
        },
        '.button-primary-loading': {
          '@apply button-primary': {},
          '@apply button-loading': {},

          backgroundColor: theme('colors.brown40'),

          '&:hover': {
            backgroundColor: theme('colors.brown40'),
          },
        },

        '.button-primary': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.brown40'),

          '&:hover': {
            backgroundColor: theme('colors.brown60'),
          },

          '&:disabled': {
            backgroundColor: theme('colors.brown20'),
            cursor: 'not-allowed',
          },
        },

        '.button-secondary-loading': {
          '@apply button-secondary': {},
          '@apply button-loading': {},

          '&:hover': {
            backgroundColor: theme('colors.white'),
          },
        },

        '.button-secondary': {
          border: `1px solid ${theme('colors.brown60')}`,
          color: theme('colors.brown60'),
          backgroundColor: theme('colors.white'),

          '&:hover': {
            backgroundColor: theme('colors.brown10'),
          },

          '&:disabled': {
            border: 0,
            color: theme('colors.brown20'),
            backgroundColor: theme('colors.brown05'),
            cursor: 'not-allowed',
          },
        },

        '.button-tertiary-loading': {
          '@apply button-tertiary': {},
          '@apply button-loading': {},

          '&:hover': {
            color: theme('colors.brown40'),
          },
        },

        '.button-tertiary': {
          minWidth: 'inherit',
          padding: 0,
          color: theme('colors.brown40'),
          backgroundColor: 'transparent',
          textDecoration: 'underline',

          '&:hover': {
            color: theme('colors.brown60'),
          },

          '&:disabled': {
            color: theme('colors.brown20'),
            cursor: 'not-allowed',
          },
        },

        '.button-full': {
          '@apply button-default': {},
          padding: '16px 20px',
          fontSize: '15px',
          minWidth: '200px',
        },

        '.button-lg': {
          '@apply button-default': {},
          padding: '16px 20px',
          fontSize: '14px',
        },
        '.button-md': {
          '@apply button-default': {},
          padding: '12px 20px',
          fontSize: '12px',
        },
        '.button-sm': {
          '@apply button-default': {},
          padding: '8px 12px',
          fontSize: '11px',
        },
      };

      addUtilities(buttonUtilities, ['hover', 'focus']);
      addUtilities(fontUtilities);
    },
  ],
};
