/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // sm: "640px",
      sm: "640px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1440px",
      "3xl": "1640px"
      // rest of the breakpoints
    },
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      colors: {
        'main': '#ffffff',
        'primary': '#FF5403',
        'secondary':'#131316',
        'tertiary':'#E5E5E5',
        'submain':'#56616B',
        'greyText':'#31373D',
        'greyBorder':'#EFF1F6',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '10rem',
      },
    },
    animation: {
      'ping-map': 'ping 2s linear infinite',
    },
  },
  plugins: [],
}

