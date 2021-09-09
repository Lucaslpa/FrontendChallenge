module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    "comma-dangle": "off",
    semi: "off",
    "react/react-in-jsx-scope": "off",
    "space-before-function-paren": "off",
    "no-undef": "off",
    "multiline-ternary": "off",
    "keyword-spacing": "off",
    "no-sequences": "off",
    indent: "off",
    "no-trailing-spaces": "off",
    "block-spacing": "off",
  },
};
