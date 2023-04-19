module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'vue',
    'prettier',
    'simple-import-sort',
    'import',
  ],
  rules: {
    // 0 = off | 1 = warn | 2 = error
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    eqeqeq: 'off',
    // Import & Simple import rules
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    // TypeScript rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    // Vue rules
    'vue/no-multiple-objects-in-class': 'warn',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-child-content': 'error',
    'vue/no-unused-vars': 'warn',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'warn',
    'vue/html-self-closing': 'off',
    'vue/html-comment-content-newline': 'warn',
    'vue/multi-word-component-names': 'off',
  },
}
