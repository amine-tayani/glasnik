module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sand: "quicksand",
        tweb: "Titillium Web",
      },
      height: {
        100: "500px",
        "1p": "1px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
