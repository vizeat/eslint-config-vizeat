# Shareable Eslint Config by the VizEat Team

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code produced by VizEat's Team.

### `vizeat` config

it contains generic rules for all JS projects (back & front)

### `vizeat/react` config

it extends `vizeat` config and add JSX / React specific rules

## Usage

At VizEat we use `eslint` and a config based on `eslint-config-standard` to lint our code and `eslint-prettier` to format it.

Here is how you can set it up to easily get up and running:

```sh
yarn add --dev eslint-config-vizeat eslint-plugin-import eslint-plugin-node eslint-plugin-promise babel-eslint eslint
```

Then, extend `vizeat` or `vizeat/react` in your `.eslintrc` depending on the kind of projects you're working on.
`vizeat/react` extends `vizeat` config so for mixed projects (React + SSR) `vizeat/react` is enough.

```json
{ "extends": ["vizeat"] }
```

or

```json
{ "extends": ["vizeat/react"] }
```

## Going further

At VizEat we also use `prettier-eslint-cli`

```
yarn add --dev eslint-prettier-cli
```

And setup helper script in our `package.json`:

```
"scripts": {
  "lint": "eslint ./",
  "fmt": "prettier-eslint \"{./*@(.js|.jsx),./!(node_modules|build|dist)/**/*@(.js|.jsx)}\" --write"
}
```

Happy hacking !
