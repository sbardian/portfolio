module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: ["emotion", "react", "prettier", "@typescript-eslint"],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "import/extensions": [".js", ".jsx", ".json", ".ts", ".tsx"],
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": "off",
  },
}
