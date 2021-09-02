const path = require("path");
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [path.resolve(__dirname) + "/layouts/**/*.html"],
    options: {
      whitelist: [],
    },
  },

  theme: {
    colors : {
      newblack: "#101920",
      newblack2: "#242930",
      newgrey: "#2a2e35ff",
      newgreen: "#7af86aff",
      neworange: "#ffe715",
      newwhite: "#ffffff",
      newgrey2: '#e8eaed',
      newyellow : '#ffdf00',
      youtube : '#FF0000',
      twitter : '#1DA1F2',
      discord: "#5865f2"
    },
    extend: {

      fontFamily: {
        ...fontFamily,
        'sans': 'Varela Round, sans-serif'
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.800'),
            },

            h3: {
              color: theme('colors.gray.700'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            em: {
              color: theme('colors.gray.400'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.gray.300')
              },
            },
          },
        },
      })
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}

