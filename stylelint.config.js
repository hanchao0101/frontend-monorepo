module.exports = {
  extends: [
    "stylelint-config-recommended-vue",
    "stylelint-config-standard",
    "stylelint-config-prettier",
  ],
  overrides: [
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
    },
  ],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
  rules: {
    // "color-no-invalid-hex": true
  },
};
