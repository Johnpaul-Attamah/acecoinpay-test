/** @type {import('tailwindcss').Config} */
import defaultTheme  from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'overlay': "url('https://res.cloudinary.com/dahddvlgy/image/upload/v1685034894/code-tests/payment-modal/overlay-background.jpg')" 
      },
      fontFamily: {
        merry:['"Merriweather Sans"', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        "credit-card": "0 2.8px 2.2px rgba(255, 255, 255, 0.034), 0 6.7px 5.3px rgba(255, 255, 255, 0.048),0 12.5px 10px rgba(255, 255, 255, 0.06), 0 22.3px 17.9px rgba(255, 255, 255, 0.072),0 41.8px 33.4px rgba(255, 255, 255, 0.086),0 100px 80px rgba(255, 255, 255, 0.12)"
      },
      screens: {
        'television': '1850px',
        // => @media (min-width: 1850px) { ... }
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '850px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '680px'},
        // => @media (max-width: 639px) { ... }

        'xs': {'max': '490px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [
    plugin(function ({ matchVariant, theme }) {
      matchVariant(
        'nth',
        (value) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            DEFAULT: 'n', // Default value for `nth:`
            '2n': '2n', // `nth-2n:utility` will generate `:nth-child(2n)` CSS selector
            '3n': '3n',
            '4n': '4n',
            '5n': '5n',
            //... so on if you need
          },
        }
      );
    }),
  ],
}

