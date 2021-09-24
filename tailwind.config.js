module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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

      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out',
        fadeInRight: 'fadeInRight 0.9s ease-out',
        fadeInAbove: 'fadeInAbove 1.1s ease-out',
        speedAboveEntrance: 'speedAboveEntrance 5s ease-out',
      },

      keyframes: {
        fadeInLeft: {
          '0%': { transform: 'translateX(30px)', opacity: "20%" },
          '40%': { opacity: "60%" },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(-40px)', opacity: "20%" },
          '40%': { opacity: "60%" },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        fadeInAbove: {
          '0%': { transform: 'translateY(40px)', opacity: "20%" },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
        speedAboveEntrance: {
          '0%': { transform: 'translateY(200px)', opacity: "20%" },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
};
