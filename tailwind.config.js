/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brown50: '#F0EDEC',
        brown100: '#D2C8C4',
        brown200: '#BCADA8',
        brown300: '#9D8780',
        brown400: '#8A7067',
        brown500: '#6D4C41',
        brown600: '#63453B',
        brown700: '#4D362E',
        brown800: '#3C2A24',
        brwon900: '#2E201B',
        blue50: '#E6F0FF',
        blue100: '#6BA6FF',
        blue200: '#2B7FFF',
        blue300: '#0065FF',
        blue400: '#0047B3',
        blue500: '#00329C',
        red50: '#FAE6EB',
        red100: '#E36B89',
        red200: '#DB2E56',
        red300: '#CE0033',
        red400: '#900024',
        red500: '#7E001F',
        gray50: '#F2F2F2',
        gray100: '#D6D6D6',
        gray200: '#C2C2C2',
        gray300: '#A6A6A6',
        gray400: '#959595',
        gray500: '#7A7A7A',
        gray600: '#6F6F6F',
        gray700: '#575757',
        gray800: '#434343',
        gray900: '#333333',
        kakao: '#FEE500',
        naver: '#03C75A',
      },
      spacing: {
        1: '1px',
        2: '2px',
        7: '7px',
        9: '9px',
        10: '10px',
        16: '16px',
        20: '20px',
        32: '32px',
        96: '96px',
        200: '200px',
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
      zIndex: {
        TOAST: '1000',
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
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        show: 'show 200ms cubic-bezier(.6, 0, .4, 1) 1000ms forwards',
        fadeIn: '0.3s forwards fadeIn',
        fadeOut: '0.3s forwards fadeOut',
      },
    },
    screens: {
      mobile: '576px',
      tablet: '768px',
      labtop: '992px',
      desktop: '1200px',
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

      addUtilities(fontUtilities);
    },
  ],
};
