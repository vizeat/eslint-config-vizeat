import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import defaults from './defaults.js'

export default defineConfig(defaults, tseslint.configs.recommended, prettierRecommended, {
  rules: {
    camelcase: 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/2502#issuecomment-689595020
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
  },
})
