const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/typescript/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    // ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
});
