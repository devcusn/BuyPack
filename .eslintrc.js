module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/dot-notation': ['off'],
    '@typescript-eslint/parser': ['off'],
    '@typescript-eslint/no-throw-literal': ['off'],
    '@typescript-eslint/await-thenable': ['off'],
    '@typescript-eslint/consistent-type-exports': ['off'],
    '@typescript-eslint/no-base-to-string': ['off'],
    '@typescript-eslint/triple-slash-reference': ['off'],
    '@typescript-eslint/consistent-type-definitions': ['off'],
    '@typescript-eslint/array-type': ['off'],
    '@typescript-eslint/consistent-type-imports': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off']
  }
}
