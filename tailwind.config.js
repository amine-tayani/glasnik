module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sand: "quicksand",
        tweb: "Titillium Web",
        inter: "Inter",
        barlow: "Barlow",
      },
      height: {
        100: "500px",
        "1p": "1px",
      },
      zIndex: {
        max: "2147483647 ",
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require("daisyui")],
};
