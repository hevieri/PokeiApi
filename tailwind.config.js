import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pokeball: {
          red: '#b71626',
          dark: '#0d1115',
        },
      },
    },
  },
  plugins: [],
}
