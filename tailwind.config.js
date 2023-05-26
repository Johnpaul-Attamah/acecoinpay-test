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

