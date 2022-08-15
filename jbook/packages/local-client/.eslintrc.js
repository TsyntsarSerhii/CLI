module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  extends: ['airbnb-typescript-prettier'],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['jsx-a11y'],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-debugger': 1,
    'dot-notation': 0,
    'no-loop-func': 0,
    "default-param-last": 0,
    'no-restricted-syntax': 0,
    'spaced-comment': 0,
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
