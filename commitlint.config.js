module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  roles: {
    // 大小写不做校验
    'subject-case': [0, 'never'],
    // type的类型定义：git提交的type必须在以下类型范围之内
    'type-enum': [
      2, // 代表必须输入
      'always',
      [
        'feat', // 一个新的特性
        'fix', // 修复一个Bug
        'docs', // 变更的只有文档
        'refactor', // 代码重构，注意和特性、修复区分开
        'test', // 添加一个测试
        'chore', // 构建过程或辅助工具的变动
        'perf', // 性能优化
        'style', // 样式变更
        'revert' // 回滚到上一个版本
      ]
    ]
  }
}
