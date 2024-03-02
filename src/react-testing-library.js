/**
 * ESLint configuration for React Testing Library
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
