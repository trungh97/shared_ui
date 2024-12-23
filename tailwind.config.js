/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        25: '#fdfdfd',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e9eaeb',
        300: '#d5d7da',
        400: '#a4a7ae',
        500: '#717680',
        600: '#535862',
        700: '#414651',
        800: '#252B37',
        900: '#181D27',
      },
      brand: {
        25: '#FCFAFF',
        50: '#F9F5FF',
        100: '#F4EBFF',
        200: '#E9D7FE',
        300: '#D6BBFB',
        400: '#B692F6',
        500: '#9E77ED',
        600: '#7F56D9',
        700: '#6941C6',
        800: '#53389E',
        900: '#42307D',
      },
      error: {
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        200: '#FECDCA',
        300: '#FDA29B',
        400: '#F97066',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#912018',
        900: '#7A271A',
      },
      white: '#fff',
      purple: {
        25: '#FAFAFF',
        50: '#F4F3FF',
        100: '#EBE9FE',
        200: '#D9D6FE',
        300: '#BDB4FE',
        400: '#9B8AFB',
        500: '#7A5AF8',
        600: '#6938EF',
        700: '#5925DC',
        800: '#4A1FB8',
        900: '#3E1C96',
      },
      social: {
        facebook: {
          standard: '#1877F2',
          hover: '#0C63D4',
        },
      },
    },
    extend: {
      boxShadow: {
        'button-normal': '0px 1px 2px rgba(10, 12.67, 18, 0.05)',
        'button-focus': '0px 0px 0px 4px #F4EBFF',
        'social-button-standard': '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',
        'social-button-focus':
          '0px 1px 2px 0px rgba(10, 13, 18, 0.05), 0px 0px 0px 4px #F5F5F5',
        input: '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',
        'input-focus':
          '0px 1px 2px 0px rgba(10, 13, 18, 0.05), 0px 0px 0px 4px #F4EBFF',
        'error-input-focus':
          '0px 1px 2px 0px rgba(10, 13, 18, 0.05), 0px 0px 0px 4px #FEE4E2',
      },
    },
  },
  plugins: [],
};
