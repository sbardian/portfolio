module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["@emotion", "react", "prettier", "@typescript-eslint"],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": "off",
  },
}
