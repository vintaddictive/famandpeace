/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        "3xl": " -1px 1px 24px 6px rgba(212, 18, 22, 0.08)",
      },
      colors: {
        white: "#f6f6f6",
        red: "#d41216",
        gray: "#222222",
        "neutral-800": "#2f2f2f",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, #68BDEB 0%, #61B3E4 19.00%, #519AD3 52.00%, #3771B7 93.00%, #3269B2 100%)",
        "gradient-rainred":
          "linear-gradient(98deg, #D41216 0%, #D61B1E 17.00%, #DD3437 46.00%, #EE5152 83.00%, #EE7372 100%)",
        "gradient-oval": "radial-gradient(#f18f8e, #d41216)",
        "gradient-blue": "radial-gradient(#519ad3 , #3771b7)",
      }),
      fontFamily: {
        golos: ["Golos Text", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        fruit: {
          words: ["apple", "banana", "orange", "pear", "strawberry"],
          delay: 3,
        },
      },
    }),
  ],
};
