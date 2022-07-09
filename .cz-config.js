// 参考资料：
// https://github.com/leoforfree/cz-customizable
// https://juejin.cn/post/6976891381914533918
// https://juejin.cn/post/6844904025868271629
// https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
'use strict';
module.exports = {
    //可选类型
    types: [
        { value: 'feat', name: 'feat:    新功能' },
        { value: 'fix', name: 'fix:    修复bug' },
        { value: 'docs', name: 'docs:    文档变更' },
        { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
        { value: 'perf', name: 'perf:    性能优化' },
        { value: 'style', name: 'style:    样式变更（不影响代码运行的变动）' },
        { value: 'refactor', name: 'refactor:    重构（即不是增加feature，也不是修复bug）' },
        { value: 'revert', name: 'revert:    回退' },
        { value: 'test', name: 'test:    增加测试' },
    ],
    scopes: [
        { name: '登录' },
        { name: '后台-首页' },
        { name: '后台-计算资源' },
        { name: '后台-存储资源' },
    ],
    //步骤
    messages: {
        type: '选择一种提交的类型:',
        scope: '请输入修改的范围 (可选):',
        // used if allowCustomScopes is true
        customScope: '请输入修改的范围(可选)',
        subject: '请简要描述提交(必填)\n',
        body: '请输入详细描述(可选)，使用|换行:\n',
        breaking: '列出所有重大更改 (可选):\n',
        footer: '请输入要关闭的issue(可选)，例如：#31, #34:\n',
        confirmCommit: '确认要使用以上信息提交？',
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    skipQuestions:['body','footer'],
    subjectLimit: 100,
};
