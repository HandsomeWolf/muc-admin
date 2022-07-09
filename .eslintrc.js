module.exports = {
  // 启动eslint检测的环境
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // vue官方的eslint-plugin-vue规则 https://eslint.vuejs.org/user-guide/#bundle-configurations
    'plugin:vue/vue3-strongly-recommended',
    // standard流行规则 https://standardjs.com/readme-zhcn.html
    'standard'
  ],
  // 解析器
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
