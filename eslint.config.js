import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

import customRules from './tools/eslint/index.js'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      custom: customRules,
    },
    rules: {
      'custom/align-import-from': 'error',
      'custom/jsx-attributes-newline': 'error',
      'function-paren-newline': ['error', 'consistent'],
      'indent': ['error', 2, {
        SwitchCase: 1,
        // (tuỳ) nếu TS/JSX gây false-positive, thêm ignoredNodes ở đây
      }],
    },
  },
])
