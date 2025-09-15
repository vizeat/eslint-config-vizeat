import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import defaults from './defaults.js'

export default [
  defaults,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    rules: {
      camelcase: 'off',
      '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-extra-semi': 'off',
      // https://github.com/typescript-eslint/typescript-eslint/issues/2502#issuecomment-689595020
      'no-use-before-define': [0],
      '@typescript-eslint/no-use-before-define': [1],
    },
  },
]
