module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: {
          50: '#f8feed',
          100: '#e7fabd',
          200: '#def9a5',
          300: '#d5f78d',
          400: '#cdf576',
          500: '#bbf246',
          600: '#a9ef16',
          700: '#9bdc0f',
          800: '#8ac40e',
          900: '#68950a',
        },
        themeBlack: {
          50: '#607f92',
          100: '#4c6473',
          200: '#415664',
          300: '#374954',
          400: '#2d3c45',
          500: '#192126',
          600: '#050607',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        themeGrayLight: {
          50: '#e7e8e8',
          100: '#cdced0',
          200: '#c0c2c3',
          300: '#b2b5b7',
          400: '#a5a8ab',
          500: '#8B8F92',
          600: '#717679',
          700: '#65696b',
          800: '#595c5e',
          900: '#404244',
        },
        themeGray: {
          50: '#b9bdc0',
          100: '#9ea4a7',
          200: '#91979b',
          300: '#838a8f',
          400: '#767e83',
          500: '#5E6468',
          600: '#464a4d',
          700: '#3a3d40',
          800: '#2e3032',
          900: '#151718',
        },
        themeTrueGray: {
          50: '#8d9aa4',
          100: '#71818d',
          200: '#65747f',
          300: '#5a6771',
          400: '#4f5a62',
          500: '#384046',
          600: '#21262a',
          700: '#16191c',
          800: '#0b0c0d',
          900: '#000000',
        },
        themePurple: {
          50: '#ffffff',
          100: '#faf8fe',
          200: '#e9e2fb',
          300: '#d8ccf7',
          400: '#c6b6f4',
          500: '#A48AED',
          600: '#825ee6',
          700: '#7048e3',
          800: '#5f32df',
          900: '#481ec0',
        },
        themeRed: {
          50: '#fdeaea',
          100: '#f8bbbb',
          200: '#f6a4a4',
          300: '#f48d8d',
          400: '#f27575',
          500: '#ED4747',
          600: '#e81919',
          700: '#d31515',
          800: '#bc1212',
          900: '#8d0e0e',
        },
        themeYellow: {
          50: '#ffffff',
          100: '#fff7ec',
          200: '#feedd3',
          300: '#fee3ba',
          400: '#fdd8a1',
          500: '#FCC46F',
          600: '#fbb03d',
          700: '#faa524',
          800: '#fa9b0b',
          900: '#ce7e04',
        },
        themeBlue: {
          50: '#ffffff',
          100: '#fafdfe',
          200: '#e6f3f8',
          300: '#d2e9f3',
          400: '#bddfee',
          500: '#95CCE3',
          600: '#6db9d8',
          700: '#58afd3',
          800: '#44a5ce',
          900: '#2f8ab0',
        },
      }
    },
    fontFamily: {
      'sans': ['Lato', 'ui-sans-serif', 'system-ui'],
      'serif': ['Lato', 'ui-serif', 'Georgia'],
      'mono': ['Lato', 'ui-monospace', 'SFMono-Regular'],      
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
