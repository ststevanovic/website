/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  // corePlugins: {
  //   preflight: false, // disable preflight to avoid conflicts
  // },
  // important: true,
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '14px': '14px',
      },
      colors: {
        'cgray': '#666',
        'corange':'#FF6100'
      },
      backgroundColor:{
        'corange':'#FF6100'
      },
      screens: {
        'mm-c': '22em',
        'sm-c': '40em', 
        'lg-c': '64em', 
      },
    },
  },
  plugins: [
    // About: https://github.com/tailwindlabs/tailwindcss/discussions/2119
    // Can be reduced by: https://github.com/shimyshack/tailwindcss-pseudo-element-plugin
    plugin(({ addVariant, e }) => {
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.content-after': {
          content: 'attr(data-after)',
        },
      };

      addUtilities(contentUtilities, ['after']);
    }),
  ],
};