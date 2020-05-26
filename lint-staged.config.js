module.exports = {
  "*.{js}": ["prettier --write", "eslint --fix"],
  "*.{tsx,ts}": ["pritter --write", "eslint --fix", "tsc"],
  "*.{html,json,md,yml,yaml}": ["prettier --write"],
}
