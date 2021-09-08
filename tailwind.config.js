module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        2: "2rem",
        4: "4rem",
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
