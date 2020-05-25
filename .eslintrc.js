module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "emotion", "react", "prettier"],
  env: {
    jest: true,
  },
  parser: "@typescript-eslint/parser",
}
