module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-console": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "react/button-has-type": "off",
    "eslint-disable arrow-body-style": "on",
  },
};
