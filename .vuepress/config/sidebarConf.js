module.exports = {
  // 下面的写法是不分组的
  // "/docs/interview/": [
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
  // ],
  "/docs/interview/": [
    "mine",
    "",
    "html",
    {
      title: 'CSS',
      collapsable: false,
      children: [
        { title: '前端高频面试题-css上篇', path: 'css01' },
        { title: '前端高频面试题-css下篇', path: 'css02' },
      ]
    },
    {
      title: 'JAVASCRIPT',
      collapsable: false,
      children: [
        { title: '前端高频面试题-js上篇', path: 'javascript01' },
        { title: '前端高频面试题-js中篇', path: 'javascript02' },
        { title: '前端高频面试题-js下篇', path: 'javascript03' },
      ]
    },
    {
      title: 'VUE.js',
      collapsable: false,
      children: [
        { title: '前端高频面试题-vue上篇', path: 'vue01' },
        { title: '前端高频面试题-vue下篇', path: 'vue02' },
      ]
    },
    "code"
  ],
}