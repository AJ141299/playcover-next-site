module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#D2AC4A',
        'gold-light': '#FFD700',
        'pastel-pink': '#9c2f64',
        'menu-pink': '#E23B8B',
        'logo-pink': '#FF0066',
        'logo-purple-light': '#c549f5',
        'logo-purple': '#b634e9',
        'logo-purple-dark': '#952abf',
        'logo-purple-darker': '#7f24a3',
        'text-purple': '#9861ff',
        body: '#F3F4F6',
        'body-dark': '#141516',
        'nav-footer': '#101011',
      },
      fontFamily: {
        sourceSansPro: "'Source Sans Pro', Arial, sans-serif;",
        openSans: "'Open Sans', Arial, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
