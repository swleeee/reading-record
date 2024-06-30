/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      light: {
        brown: {
          50: '#F0EDEC',
          100: '#D2C8C4',
          200: '#BCADA8',
          300: '#9D8780',
          400: '#8A7067',
          500: '#6D4C41',
          600: '#63453B',
          700: '#4D362E',
          800: '#3C2A24',
          900: '#2E201B',
        },
        navy: {
          50: '#E6EBF5',
          100: '#CCD6EB',
          200: '#B3C0E0',
          300: '#99ABD6',
          400: '#8096CC',
          500: '#6681C1',
          600: '#4D6BB7',
          700: '#3366AD',
          800: '#1A50A2',
          900: '#005B98',
        },
        red: {
          50: '#FFDCE0',
          100: '#FFC8D0',
          200: '#FFB4C0',
          300: '#FFA0B0',
          400: '#FF8CA0',
          500: '#FF7890',
          600: '#FF6480',
          700: '#FF5070',
          800: '#FF3C60',
          900: '#FF2850',
        },
        grey: {
          50: '#FEFEFE',
          100: '#FDFDFD',
          200: '#F7F8F9',
          300: '#E9EBEE',
          400: '#C5C8CE',
          500: '#646F7C',
          600: '#374553',
          700: '#28323C',
          800: '#161D24',
        },
      },
      dark: {
        brown: {
          50: '#231A16',
          100: '#33241D',
          200: '#46302A',
          300: '#5D403B',
          400: '#73514B',
          500: '#89695E',
          600: '#9F8379',
          700: '#B49C93',
          800: '#CAB5AC',
          900: '#E0CDC5',
        },
        navy: {
          50: '#003FAB',
          100: '#004CBF',
          200: '#005AD3',
          300: '#0068E6',
          400: '#0075FA',
          500: '#008DFF',
          600: '#009BFF',
          700: '#00A9FF',
          800: '#00B7FF',
          900: '#00C5FF',
        },
        red: {
          50: '#BF1F3E',
          100: '#CA2B4A',
          200: '#D53756',
          300: '#E14362',
          400: '#EC4F6E',
          500: '#F26175',
          600: '#F6737D',
          700: '#FF8590',
          800: '#FF97A8',
          900: '#FFA9BE',
        },
        // TODO: 컬러 전체적으로 수정 필요
        grey: {
          50: '#171B1C',
          100: '#1E2427',
          200: '#2E363A',
          250: '#383F43',
          300: '#41474C',
          400: '#5A6166',
          450: '#7A8083',
          500: '#999FA4',
          550: '#AFB4B9',
          600: '#C5C8CE',
          650: '#D6D8E4',
          700: '#F7F8F9',
          800: '#FDFDFD',
        },
      },
      white: '#FFF',
      black: '#000',
      transparent: 'transparent',
      black_50: 'rgba(0,0,0,0.5)',
      kakao: '#FEE500',
      naver: '#03C75A',
    },
    extend: {
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
        17: '17px',
        16: '16px',
        15: '15px',
        14: '14px',
        13: '13px',
        12: '12px',
      },
      fontFamily: {
        pretendard: 'Pretendard',
        roboto: 'Roboto',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
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
      gridTemplateColumns: {
        'auto-fill-144': 'repeat(auto-fill, minmax(144px, 1fr))',
        'auto-fill-192': 'repeat(auto-fill, minmax(192px, 1fr))',
        'auto-fill-308': 'repeat(auto-fill, minmax(308px, 1fr))',
      },
      backgroundImage: {
        check: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
      },
      zIndex: {
        HEADER: '1000',
        SIDEBAR: '10000',
        TOAST: '10000',
        MODAL: '10000',
        POPUP: '10000',
      },
      boxShadow: {
        radioButton: `0 0 0 1.6px theme('colors.light.brown.400')`,
        radioDarkButton: `0 0 0 1.6px theme('colors.dark.brown.600')`,
        radioButtonDisabled: `0 0 0 1.6px theme('colors.light.grey.300')`,
        radioButtonDarkDisabled: `0 0 0 1.6px theme('colors.dark.grey.600')`,
        light_sm:
          '0 1px 3px 0 rgba(45, 39, 39, 0.12), 0 1px 2px -1px rgba(45, 39, 39, 0.12)',
        light_md:
          '0 2px 6px -1px rgba(45, 39, 39, 0.12), 0 1px 4px -2px rgba(45, 39, 39, 0.12)',
        light_lg:
          '0 5px 15px -3px rgba(45, 39, 39, 0.12), 0 2px 6px -4px rgba(45, 39, 39, 0.12)',
        light_xl:
          '0 10px 25px -5px rgba(45, 39, 39, 0.12), 0 4px 16px -6px rgba(45, 39, 39, 0.12)',
        dark_sm:
          '0 1px 3px 0 rgba(211, 211, 211, 0.12), 0 1px 2px -1px rgba(211, 211, 211, 0.12)',
        dark_md:
          '0 2px 6px -1px rgba(211, 211, 211, 0.12), 0 1px 4px -2px rgba(211, 211, 211, 0.12)',
        dark_lg:
          '0 5px 15px -3px rgba(211, 211, 211, 0.12), 0 2px 6px -4px rgba(211, 211, 211, 0.12)',
        dark_xl:
          '0 10px 25px -5px rgba(211, 211, 211, 0.12), 0 4px 16px -6px rgba(211, 211, 211, 0.12)',
      },
      keyframes: {
        show: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        hide: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        openSidebar: {
          '0%': { right: '-300px', opacity: 0 },
          '100%': { right: '0', opacity: 1 },
        },
        closeSidebar: {
          '0%': { right: '0', opacity: 1 },
          '100%': { right: '-300px', opacity: 0 },
        },
        shakingUpAndDown: {
          from: {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(10px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '75%': {
            transform: 'translateY(10px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        show: '0.7s forwards show',
        hide: '0.7s forwards hide',
        fadeIn: '0.3s forwards fadeIn',
        fadeOut: '0.3s forwards fadeOut',
        openSidebar: '1s forwards openSidebar',
        closeSidebar: '1s forwards closeSidebar',
        shakingUpAndDown: '4s forwards 0s infinite shakingUpAndDown',
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
      addUtilities({
        '.google-login': {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.roboto'),
          lineHeight: theme('lineHeight.140'),
        },
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
        '.d-body-m17': {
          fontSize: theme('fontSize.17'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.140'),
        },
        '.d-body-r17': {
          fontSize: theme('fontSize.17'),
          fontWeight: theme('fontWeight.normal'),
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
        '.d-body-m15': {
          fontSize: theme('fontSize.15'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.140'),
        },
        '.d-body-r15': {
          fontSize: theme('fontSize.15'),
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
        '.t-body-m15': {
          fontSize: theme('fontSize.15'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-body-r15': {
          fontSize: theme('fontSize.15'),
          fontWeight: theme('fontWeight.normal'),
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
        '.t-body-m13': {
          fontSize: theme('fontSize.13'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.t-body-r13': {
          fontSize: theme('fontSize.13'),
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
          fontSize: theme('fontSize.16'),
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
        '.m-body-m15': {
          fontSize: theme('fontSize.15'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.m-body-r15': {
          fontSize: theme('fontSize.15'),
          fontWeight: theme('fontWeight.normal'),
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
        '.m-body-m13': {
          fontSize: theme('fontSize.13'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.pretendard'),
          lineHeight: theme('lineHeight.130'),
        },
        '.m-body-r13': {
          fontSize: theme('fontSize.13'),
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
        '.light-bg-base': {
          backgroundColor: theme('colors.light.grey.200'),
        },
        '.dark-bg-base': {
          backgroundColor: theme('colors.dark.grey.100'),
        },
        '.dark-bg-elevated': {
          backgroundColor: theme('colors.dark.grey.200'),
        },
        '.dark-bg-grouped-base': {
          backgroundColor: theme('colors.dark.grey.300'),
        },
        '.dark-bg-grouped-contents': {
          backgroundColor: theme('colors.dark.grey.400'),
        },
        '.dark-border-basic': {
          border: `1px solid theme('colors.dark.grey.200')`,
        },
      });
    },
  ],
};