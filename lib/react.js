module.exports = {
  extends: ['vizeat/lib/defaults', 'plugin:react/recommended', 'standard-jsx'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-indent': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
