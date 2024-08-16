/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {},
    fontFamily: {
      spoqa: ['Spoqa Han Sans Neo', 'sans-serif'],
      noto: ['Noto Sans KR', 'sans-serif']
    },
    boxShadow: {
      card: '0px 3px 8px 0px rgba(0, 0, 0, 0.08)',
      signal: '0px 4px 10px 0px rgba(0, 0, 0, 0.15)',
      bubble: '0px 5px 8px 0px rgba(0, 0, 0, 0.15)',
      web: '0px 4px 8px 0px rgba(0, 0, 0, 0.08)'
    },
    transitionDelay: {
      700: '700ms',
      750: '750ms',
      800: '800ms',
      850: '850ms',
      900: '900ms',
      950: '950ms',
      1000: '1000ms',
      2000: '2000ms',
      3000: '3000ms'
    },
    screens: {
      md: '600px',
      lg: '1024px'
    }
  },
  plugins: []
}
