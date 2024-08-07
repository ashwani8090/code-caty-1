module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": ["tsconfig.app.json"]
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 1,
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', [
          "parent",
          'sibling',
          'index'
        ]],
        "newlines-between": "always"
      }
    ],
    "prettier/prettier": [
      "off",
      {
        "endOfLine": "auto",
        "parser": "flow"
      }
    ]
  },
}
