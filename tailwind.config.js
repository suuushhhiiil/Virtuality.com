/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#8B0F1A',
        wine: '#5A0A14',
        charcoal: '#111111',
        cream: '#F6EFE7',
        taupe: '#C7B7A6',
        gold: '#C89D5A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        brand: '0.22em',
      },
      maxWidth: {
        measure: '40rem',
        page: '72rem',
      },
    },
  },
  plugins: [],
}
