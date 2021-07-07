module.exports = {
  // "/docs/theme-reco/": [
  //   "",
  //   "theme",
  //   "plugin",
  //   "api"
  // ],
  "/docs/interview/": [
    "",
    "html",
    {
      title: 'CSS',
      collapsable: true,
      children: [
        { title: '前端高频面试题-css上篇', path: 'css01' },
        { title: '前端高频面试题-css下篇', path: 'css02' },
      ]
    },
    {
      title: 'JAVASCRIPT',
      collapsable: true,
      children: [
        { title: '前端高频面试题-js上篇', path: 'javascript01' },
        { title: '前端高频面试题-js中篇', path: 'javascript02' },
        { title: '前端高频面试题-js下篇', path: 'javascript03' },
      ]
    },
    {
      title: 'VUE.js',
      collapsable: true,
      children: [
        { title: '前端高频面试题-vue上篇', path: 'vue01' },
        { title: '前端高频面试题-vue下篇', path: 'vue02' },
      ]
    },
    "code"
    // 下面的写法是不分组的
    // "",
    // "html",
    // "css01",
    // "css02",
    // "javascript01",
    // "javascript02",
    // "javascript03",
    // "vue01",
    // "vue02",
    // "code"
  ],
}