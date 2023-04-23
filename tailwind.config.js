/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple': {
          '50': '#f2f2fa',
          '100': '#e6e6f5',
          '200': '#bfbedd',
          '300': '#9993c5',
          '400': '#4d3e8f',
          '500': '#192a56',
          '600': '#17264d',
          '700': '#121e3f',
          '800': '#0e1731',
          '900': '#0b1225',
        },
        'darkblue': {
          '50': '#f5f5fa',
          '100': '#ebebf5',
          '200': '#c8c8dd',
          '300': '#a5a5c5',
          '400': '#5f5f8f',
          '500': '#121063',
          '600': '#101c5a',
          '700': '#0d154c',
          '800': '#0a0f3e',
          '900': '#080a31',
        },
      },
    },
  },
  plugins: [],
}
