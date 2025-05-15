import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig, globalIgnores } from 'eslint/config'

import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', '**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },

  // sets up both eslint-plugin-prettier and eslint-config-prettier in one go
  eslintPluginPrettier,
  {
    rules: {
      'no-var': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }],

      'vue/multi-word-component-names': 'off',

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/semi': 'off',
    },
  },
])
