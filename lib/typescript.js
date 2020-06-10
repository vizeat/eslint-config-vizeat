module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'vizeat/lib/defaults',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/standard',
  ],
  rules: {
    camelcase: 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
