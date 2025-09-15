import babelParser from '@babel/eslint-parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import neostandard from 'neostandard'
import defaults from './defaults.js'

export default [
  defaults,
  react.configs.recommended,
  ...neostandard({ noJsx: false }),
  prettierRecommended,
  {
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        classes: true,
        jsx: true,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-indent': 'off',
      'react/jsx-space-before-closing': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],
      'react/forbid-prop-types': [
        'warn',
        { forbid: ['any', 'array', 'object'], checkContextTypes: false, checkChildContextTypes: false },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-handler-names': 'warn',
    },
  },
]
