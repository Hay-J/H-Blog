const moment = require('moment');
moment.locale("zh-cn");
module.exports = [
  ['@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        // 不要忘了安装 moment
        return moment(timestamp).format("LLLL")
      }
    }
  ],

  ['@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }
  ],

  // 音乐插件
  ['meting',
    {
      // metingApi: 'https://api.injahow.cn/meting/',
      // metingApi: 'https://api.iwz.me/meting/',
      meting: {
        server: "netease",
        type: "song",
        mid: "445450723",
        // type: "palylist",
        // id: "6844640990",
        // https://music.163.com/song?id=445450723&userid=112894274
        // https://music.163.com/playlist?id=6844640990&userid=112894274
        // auto: 'https://music.163.com/playlist?id=6844640990',
      },// 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        // mini: false,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 循环模式
        loop: 'all',
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.6,
        // 关闭歌词显示
        lrcType: 3
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      }
    }
  ],

  // 动态标题---会导致标题logo加载不出来
  // ["dynamic-title",
  //   {
  //     showIcon: "vuepress/smile.ico",
  //     showText: "(/≧▽≦/)我就知道你会回来！",
  //     hideIcon: "vuepress/cry.ico",
  //     hideText: "(●—●)我在这儿等着你回来！",
  //     recoverTime: 2000
  //   }
  // ],

  ["vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }
  ],
  [
    //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
    '@vuepress\plugin-medium-zoom', {
      selector: '.page img',
      delay: 1000,
      options: {
        margin: 24,
        background: 'rgba(25,18,25,0.9)',
        scrollOffset: 40
      }
    }
  ],
  [
    //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
    'flowchart'
  ],
  //分享插件
  // ["social-share",
  //   {
  //     networks: ["qq", "email"], //分享类型
  //     email: "843990246@gmail.com", //email地址
  //     // twitterUser: "a1124851454", //Twitter账号
  //   }
  // ],

  // 加载进度条
  ["@vuepress/nprogress"],
  // 阅读进度条
  ["reading-progress"]
]