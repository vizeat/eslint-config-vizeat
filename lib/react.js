module.exports = {
  extends: ['vizeat/lib/defaults', 'plugin:react/recommended', 'standard-jsx', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true,
      jsx: true,
    },
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
}
