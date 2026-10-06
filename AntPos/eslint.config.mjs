import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import configPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['**/dist/**', '**/node_modules/**', 'dev-dist/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue', '**/*.js', '**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        frappe: 'readonly',
        __: 'readonly',
      },
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/prop-name-casing': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/v-on-event-hyphenation': 'off',
      // Cart lines are store objects handed to Item.vue to edit in place;
      // only replacing a prop outright is an error.
      'vue/no-mutating-props': ['error', { shallowOnly: true }],
      // frappe-ui's Button is registered globally under that name.
      'vue/no-reserved-component-names': 'off',
      'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
      'no-undef': 'error',
    },
  },
  configPrettier,
]
