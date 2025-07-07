import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),

  // ✅ FRONTEND (React, Vite)
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // ✅ BACKEND (Node.js files)
  {
    files: ['server.js', 'db.js', 'routes/**/*.js', 'controllers/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node, // ✅ tambahkan global node.js
      sourceType: 'module',
    },
    rules: {
      // Aturan tambahan opsional
    },
  },
]);
