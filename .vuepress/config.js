const headConf = require('./config/headConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');
const friendLinkConf = require('./config/friendLinkConf')

module.exports = {
  "title": "H's blog",
  "description": "This is H's blog and note!",
  "dest": "public",
  "base": '/H-Blog/',
  "head": headConf,
  "theme": "reco",
  "themeConfig": {
    "nav": navConf,
    "sidebar": sidebarConf,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": friendLinkConf,
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新时间",
    "author": "Hay-J",
    "authorAvatar": "/avatar.png",
    "record": "这是一个简单的博客",
    "startYear": "2021",
    // valineConfig: {
    //   appId: 'w8LRtv6dzdubvJLHbvOxOygc-gzGzoHsz',// your appId
    //   appKey: 'MQDIkHUgSV09XRsisfkepHeU', // your appKey
    // }
  },
  "markdown": {
    "lineNumbers": true
  }
}