module.exports = {
  content: ['./dist/*.html', './src/*.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['FiraMono', 'mono'],
    },
    extend: {
      colors: {
        primary: '#0ca5e8',
        secondary: '#818cf8',
        dark: '#0b1121',
        gray1: '#1e283b',
        gray2: '#727e92',
        gray3: '#94a3b8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
