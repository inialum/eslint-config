/**
 * Base ESLint configuration
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:redos/recommended'],
  plugins: ['import', 'unused-imports'],
  rules: {
    'no-debugger': 'warn',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '@/constants/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/libs/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/routes/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/types/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
