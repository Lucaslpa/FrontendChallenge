module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        1: "0.1rem",
      },
      maxWidth: {
        2: "2rem",
        4: "4rem",
        10: "10rem",
        500: "50rem"
      },
      minWidth: {
        500: "50rem",
      },
      fontSize: {
        init: "62.5%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
