module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "settings": {
  "import/resolver": {
    "node": {
      "extensions": [
        ".js",
        ".tsx"
      ]
    }
  }
},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 1,
    'import/order':[
      'error',
      {
        'groups': ['builtin', 'external', 'internal', [
          "parent",
          'sibling',
          'index'
        ]],
        "newlines-between":"always"
      }
    ]
  },
}
