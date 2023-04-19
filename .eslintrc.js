module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['import', 'react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
