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
      // => @media (min-width: 1200px) { ... }

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
      },

      animation: {
        shiver: 'shiver 2.5s ease-in-out infinite',
        fadeIn: 'fadeIn 2.5s ease-in-out',
        fadeInSlow: 'fadeIn 7s ease-in-out',
        fadeInLeft: 'fadeInLeft 2s ease-out',
        fadeInLeftFaster: 'fadeInLeft 1.5s ease-out',
        fadeInRightFaster: 'fadeInRight 1.5s ease-out',
        fadeInRight: 'fadeInRight 2s ease-out',
        fadeInAbove: 'fadeInAbove 2s ease-out',
        speedAboveEntranceNormal: 'speedAboveEntrance 0.6s ease-out',
        speedAboveEntranceSlow: 'speedAboveEntrance 0.8s ease-out',
        speedAboveEntranceSlowest: 'speedAboveEntrance 0.9s ease-out',
        slideUp: 'slideUp 1.5s ease-out',
        fadeSlideUp: 'fadeSlideUp 2.2s ease-out',
        scaleUp: 'scaleUp 0.7s ease-out',
      },

      keyframes: {
        shiver: {
          '0%': { filter: "saturate(100%)" },
          '45%': { filter: "saturate(150%)" },
          '75%': { filter: "saturate(80%)" },
          '100%': { filter: "saturate(100%)" },
        },
        fadeIn: {
          '0%': { opacity: "0%" },
          '60%': { opacity: "0%" },
          '100%': { opacity: "100%" },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(150px)', opacity: "0%" },
          '30%': { transform: 'translateX(20px)', opacity: "50%" },
          '100%': { transform: 'translateX(0px)', opacity: "100%" },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(-150px)', opacity: "0%" },
          '30%': { transform: 'translateX(-20px)', opacity: "50%" },
          '100%': { transform: 'translateX(0px)', opacity: "100%" },
        },
        fadeInAbove: {
          '0%': { transform: 'translateY(150px)', opacity: "0%" },
          '30%': { transform: 'translateY(20px)', opacity: "50%" },
          '100%': { transform: 'translateY(0px)', opacity: "100%" },
        },
        speedAboveEntrance: {
          '0%': { transform: 'translateY(150px)', opacity: "0%" },
          '100%': { transform: 'translateY(0px)', opacity: "100%" },
        },
        slideUp: {
          '0%': { transform: 'translateY(80px)' },
          '30%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeSlideUp: {
          '0%': { transform: 'translateY(100px)', opacity: "0%" },
          '30%': { transform: 'translateY(-10px)', opacity: "60%" },
          '100%': { transform: 'translateY(0px)', opacity: "100%" },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.5)', opacity: "0%" },
          '100%': { transform: 'scale(1)', opacity: "100%" },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
};
