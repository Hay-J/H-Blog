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

  // //音乐插件
  // ["@vuepress-reco/vuepress-plugin-bgm-player",
  //   {
  //     audios: [
  //       {
  //         name: "DROP",
  //         artist: "ROOKiEZ is PUNK'D",
  //         url: "/bgm/DROP.mp3",
  //         cover: "/img/DROP.jpg"
  //       },
  //       // {
  //       //   name: "Faster Than Light",
  //       //   artist: "Andreas Waldetoft / Mia Stegmar",
  //       //   url:
  //       //     "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3",
  //       //   cover:
  //       //     "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
  //       // },
  //     ],
  //     autoShrink: true,
  //   }
  // ],

  // 音乐插件
  ['meting',
    {
      // metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        // // 网易
        // server: "netease",
        // // 读取歌单
        // type: "playlist",
        // mid: "2539599584",
        // auto: 'https://music.163.com/song?id=22768523'
        // https://music.163.com/playlist?id=138813208&userid=112894274
        auto: 'https://music.163.com/playlist?id=138813208'
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      }
    }
  ],

  // 动态标题
  ["dynamic-title",
    {
      showIcon: "vuepress/smile.ico",
      showText: "(/≧▽≦/)欢迎帅哥美女！",
      hideIcon: "vuepress/cry.ico",
      hideText: "(●—●)呜呜，不要走嘛！！",
      recoverTime: 2000
    }
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