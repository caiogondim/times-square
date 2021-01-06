module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['prettier', 'json'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
}
