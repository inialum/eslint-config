/**
 * ESLint configuration for Next.js projects.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve('./typescript'),
    'next/core-web-vitals',
    'plugin:storybook/recommended',
  ],
}
