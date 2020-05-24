module.exports = {
  "*.{js}": ["prettier --write", "eslint --fix"],
  "*.{html,json,md,yml,yaml}": ["prettier --write"],
}
