# Shareable Eslint Config by the VizEat Team

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code produced by VizEat's Team.

### `vizeat` config

it contains generic rules for all JS projects (back & front)

### `vizeat/react` config

it extends `vizeat` config and add JSX / React specific rules

## Usage

At VizEat we use `eslint` and a config based on `eslint-config-standard` and `eslint-plugin-prettier` to lint & format our code.

Here is how you can set it up to easily get up and running:

```sh
yarn add --dev eslint-config-vizeat eslint-plugin-import eslint-plugin-node eslint-plugin-promise babel-eslint eslint
```
> `eslint-plugin-import` `eslint-plugin-node` `eslint-plugin-promise` are peer dependencies of `eslint-config-standard`

Then, extend `vizeat` or `vizeat/react` in your `.eslintrc` depending on the kind of projects you're working on.
`vizeat/react` extends `vizeat` config so for mixed projects (React + SSR) `vizeat/react` is enough.

```json
{ "extends": ["vizeat"] }
```

or

```json
{ "extends": ["vizeat/react"] }
```

Happy hacking !
