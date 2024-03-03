/**
 * ESLint configuration for TypeScript projects
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: require.resolve('./base.js'),
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended-type-checked'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
      },
    },
  ],
}
