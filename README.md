# Shareable Eslint Config by the VizEat Team

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code produced by VizEat's Team.

Most of the rules are fixable and this config also make use of `eslint-plug-prettier` to configure & pilote `prettier` through eslint.

For everything to work well, **we recommend that you don't use a prettier plugin in your editor** alongside this configuration. Using `eslint --fix` will do it all, combined with *format on save* and *format on paste* you will get the most reliable formatting.

### `vizeat` config

it contains generic rules for all JS projects (back & front)

### `vizeat/react` config

it extends `vizeat` config and add JSX / React specific rules

### `vizeat/typescript` config

it extends `vizeat` config and add Typescript specific rules as well as overrides for incompatible rules

## Usage

The configuration requires a number of peer dependencies to be installed. This is due to how eslint plugin system works and how those dependencies are found in your file system.

#### Installing all (peer) dependencies for a project using any combination of configs

This is the easiest way of getting it working, but you may not need everything.

```sh
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard prettier
```

#### Installing (peer) dependencies for a project using the `vizeat` config

If you primarily use Node.js & vanilla JS, then this is likely enough

```sh
yarn add --dev eslint eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard prettier
```

#### Installing (peer) dependencies for a project using the `vizeat/react` config

For your React app

```sh
yarn add --dev babel-eslint eslint eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard prettier
```

#### Installing (peer) dependencies for a project using the `vizeat/typescript` config

For your TS project

```sh
yarn add --dev eslint eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Configuration

Then, extend `vizeat` or `vizeat/react` or `vizeat/typescript` in your `.eslintrc` depending on the kind of projects you're working on.
`vizeat/react` and `vizeat/typescript` extend `vizeat` config so for mixed projects (React + SSR) `vizeat/react` is enough.


```json
{ "extends": ["vizeat"] }
```

or

```json
{ "extends": ["vizeat/react"] }
```

or

```json
{ 
  "extends": ["vizeat/typescript"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
(see [typescript-eslint/parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject))

Happy hacking !
