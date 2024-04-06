/**
 * ESLint configuration for React projects.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve('./typescript'),
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
}
