module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:eslint-plugin-prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'prettier.config.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-refresh',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-prettier',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'all', ignoreRestSiblings: false },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
