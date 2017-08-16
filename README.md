# Shareable Eslint Config for VizEat projects

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code produced by VizEat's Team.

## Usage

We need a few plugins that are peer dependencies of `eslint-config-standard`

```sh
npm install --save-dev eslint-config-vizeat eslint-plugin-import eslint-plugin-node eslint-plugin-promise
```

Then, extend `vizeat` in your `.eslintrc`:

```json
{ "extends": ["vizeat"] }
```

or

```json
{ "extends": ["vizeat/react"] }
```

### `vizeat` config

it contains generic rules for all JS projects (back & front)

### `vizeat/react` config

it extends `vizeat` config and add JSX / React specific rules

## A Note on Dependencies
`eslint-config-vizeat` has `babel-eslint` and `eslint` as peer deps because it relies on recent versions of those packages for ES2015 support.
