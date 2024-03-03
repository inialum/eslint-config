# @inialum/eslint-config

[![npm version](https://badge.fury.io/js/@inialum%2Feslint-config.svg)](https://www.npmjs.com/package/@inialum/eslint-config)

ESLint config for [INIALUM](https://inialum.org)

## Installation

```bash
pnpm add -D eslint @inialum/eslint-config
```

## Configuration Example

### Default (TypeScript)

If no config is specified, the base `typescript` config will be used.

```js
module.exports = {
  extends: ['@inialum'], // same as "@inialum/eslint-config/typescript"
  parserOptions: {
    project: './tsconfig.json',
  },
}
```

### Next.js

```js
module.exports = {
  extends: ['@inialum/eslint-config/next'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
```

When you use this config, you should also install `eslint-config-next` and `eslint-plugin-storybook` as devDependencies.

```bash
pnpm add -D eslint-config-next eslint-plugin-storybook
```

### React Testing Library

```js
module.exports = {
  extends: [
    '@inialum', // Optional
    '@inialum/eslint-config/react-testing-library',
  ],
}
```

When you use this config, you should also install `eslint-plugin-testing-library` as devDependencies.

```bash
pnpm add -D eslint-plugin-testing-library
```

### Minimal

e.g.) `.js` files

```js
module.exports = {
  extends: ['@inialum/eslint-config/base'],
}
```

## Release (for maintainers)

Run [Release workflow (GitHub Actions)](https://github.com/inialum/eslint-config/actions/workflows/release.yml) to publish new version to npm.
You can choose `major`, `minor`, or `patch` version to be released.
This workflow will automatically create a new release in GitHub and publish the package to npm.

## License

Licensed under [Apache License 2.0](LICENSE).
