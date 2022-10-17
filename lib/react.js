module.exports = {
  extends: ['vizeat/lib/defaults', 'plugin:react/recommended', 'standard-jsx', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks'],
  parser: '@babel/eslint-parser',
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
    // Enforce JSX indentation
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 2],

    // Enforce spacing before closing bracket in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    'react/jsx-space-before-closing': ['off', 'always'],

    // Disallow React to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md#disallow-react-to-be-incorrectly-marked-as-unused-reactjsx-uses-react
    'react/jsx-uses-react': 'error',

    // Disallow variables used in JSX to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true,
    }],

    // Forbid certain propTypes (any, array, object)
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-handler-names': 'warn',

    // Enforce a specific function type for function components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': ['error', {
      namedComponents: ['function-declaration', 'function-expression'],
      unnamedComponents: 'function-expression',
    }],

    // Prevent unused propType definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: true,
    }],

    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': ['error', {
      allowRequiredDefaults: false,
    }],

    // Prefer exact proptype definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/8785c169c25b09b33c95655bf508cf46263bc53f/docs/rules/prefer-exact-props.md
    'react/prefer-exact-props': 'error',
  },
}
