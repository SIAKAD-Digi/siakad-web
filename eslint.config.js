import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import perfectionist from 'eslint-plugin-perfectionist';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      perfectionist,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          tabWidth: 2,
          semi: true,
          printWidth: 100,
          endOfLine: 'auto',
        },
      ],
      'perfectionist/sort-named-imports': [1, { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-named-exports': [1, { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-exports': [
        1,
        {
          order: 'asc',
          type: 'line-length',
          groupKind: 'values-first',
        },
      ],
    },
  },
);
