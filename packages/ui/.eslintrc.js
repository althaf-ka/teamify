module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  rules: {
    "react/function-component-definition": "off", // Ignore function component definition warnings
    "@typescript-eslint/explicit-function-return-type": "off", // Ignore missing return type warnings
    "react/jsx-sort-props": "off", // Ignore prop sorting warnings
  },
};
