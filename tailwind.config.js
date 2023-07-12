/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      950 : '#451a03',
      900 : '#78350f',
      800 : '#9a3412',
      700 : '#c2410c',
      600 : '#ea580c',
      500 : '#f97316',
      400 : '#fb923c',
      300 : '#fdba74',
      200 : '#fed7aa',
      100 : '#ffedd5',
      50 : '#fffbeb',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
