const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/react",
      "@vercel/style-guide/eslint/next",
    ].map(require.resolve),
    "turbo",
  ],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off", // Disables the rule that disallows default exports
    "@typescript-eslint/explicit-function-return-type": "off", // Disables the rule that enforces specifying return types on functions
    eqeqeq: "off", // Disables the rule that enforces using '===' instead of '=='
    "jsx-a11y/heading-has-content": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["test/**"],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "no-console": ["error", { allow: ["error"] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
