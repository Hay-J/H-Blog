/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8a010469d601d7f091a1650d060e65f8"
  },
  {
    "url": "assets/css/0.styles.36abd98f.css",
    "revision": "e5dbca8941228c891836a8482161d5d1"
  },
  {
    "url": "assets/img/0cb225cf71d748a8b2d6a5615e402711~tplv-k3u1fbpfcp-zoom-1.6f4b8764.png",
    "revision": "6f4b8764846e290277a615e3385fda08"
  },
  {
    "url": "assets/img/1ed2565845f2415b8243c8c355b2c6d6~tplv-k3u1fbpfcp-zoom-1.494c5ebc.png",
    "revision": "494c5ebc1bbc9a768e5e0d62a77cfa6e"
  },
  {
    "url": "assets/img/2911f98bbacf4b1cbffbb9e1527a4977~tplv-k3u1fbpfcp-zoom-1.8ecdc5a4.png",
    "revision": "8ecdc5a4a96e315f97674447ef37e4d4"
  },
  {
    "url": "assets/img/2a44f18af182434d901b74df18491dea~tplv-k3u1fbpfcp-zoom-1.71cc8495.png",
    "revision": "71cc8495f4c53ab661c737ed1f04c4d5"
  },
  {
    "url": "assets/img/30821909377545248d244b0a4e965bb1~tplv-k3u1fbpfcp-zoom-1.1c585c7f.png",
    "revision": "1c585c7f8269712a54eb448968df004f"
  },
  {
    "url": "assets/img/3d58c5313e884e38b1545a5896613250~tplv-k3u1fbpfcp-zoom-1.ba28a5c6.png",
    "revision": "ba28a5c63a4a6cd115eec2e3022c5a03"
  },
  {
    "url": "assets/img/3f63fdc5979647e09bbde92d964a9656~tplv-k3u1fbpfcp-zoom-1.a8f9339e.png",
    "revision": "a8f9339ef7022d25feda83be5fbeba93"
  },
  {
    "url": "assets/img/40194bdc07024b78b6da8bb43d84a7d8~tplv-k3u1fbpfcp-zoom-1.f12f60c3.png",
    "revision": "f12f60c30f72abe9dec3c214cdaa4b9b"
  },
  {
    "url": "assets/img/4040de9fef1a49f4ae0ae66039edcfe0~tplv-k3u1fbpfcp-zoom-1.cfdcb221.png",
    "revision": "cfdcb221fa83af29cac8f8f1347ec584"
  },
  {
    "url": "assets/img/4544d45b5a0c47a58c0c33a7d8fbac09~tplv-k3u1fbpfcp-zoom-1.853acf5c.png",
    "revision": "853acf5c69767bc2e6a80f890ba0f2d2"
  },
  {
    "url": "assets/img/5e7df745017242a7beaba81e854a0f97~tplv-k3u1fbpfcp-zoom-1.2d885133.png",
    "revision": "2d885133ca0c554156f5ee91f58d08fe"
  },
  {
    "url": "assets/img/5f1da1cbae9b45528cc2b33f74eb32f2~tplv-k3u1fbpfcp-zoom-1.44ae2e4a.png",
    "revision": "44ae2e4a2f56ef2abe464cb20bd9051f"
  },
  {
    "url": "assets/img/6fd41339dfd14200bb006815eab31324~tplv-k3u1fbpfcp-zoom-1.defa7567.png",
    "revision": "defa75674497ebff369b31c7faf06281"
  },
  {
    "url": "assets/img/76b3d747986e45e096abaf64faf5e332~tplv-k3u1fbpfcp-zoom-1.d16fe403.png",
    "revision": "d16fe403c8b8a91587d21c46b2896a21"
  },
  {
    "url": "assets/img/92fc4b2c6e414344b9b22bc057dcd39c~tplv-k3u1fbpfcp-zoom-1.916e3ae5.png",
    "revision": "916e3ae50e192de6e35b001b4696dcfb"
  },
  {
    "url": "assets/img/a14ffbb3df2646a4a84f4a0c7d62d975~tplv-k3u1fbpfcp-zoom-1.80dee8e2.png",
    "revision": "80dee8e2ee565b21193dcfab59891d3c"
  },
  {
    "url": "assets/img/a286bdc076ae425fb9591bb8c4153240~tplv-k3u1fbpfcp-zoom-1.94e8dacd.png",
    "revision": "94e8dacd865596901befc3012153a9cc"
  },
  {
    "url": "assets/img/a65e1b9145894647a25788caf12ddd26~tplv-k3u1fbpfcp-zoom-1.67acbfc9.png",
    "revision": "67acbfc935c167d9b69fdcad7571b9f3"
  },
  {
    "url": "assets/img/a8af7dca29f84b7e9d1f94232713ef07~tplv-k3u1fbpfcp-zoom-1.96322745.png",
    "revision": "9632274539bc124256d0fcd3e78161bf"
  },
  {
    "url": "assets/img/b1b16025a35b4cd2b343a92e740621b7~tplv-k3u1fbpfcp-zoom-1.87d619f8.png",
    "revision": "87d619f8a20dcc3bbd96b3b1fcc92b39"
  },
  {
    "url": "assets/img/bg-sky.645d9343.jpg",
    "revision": "645d9343d776659bc8fc425ca3727c15"
  },
  {
    "url": "assets/img/c451c19e23dd4726b3f36223b6c18a1e~tplv-k3u1fbpfcp-zoom-1.9d0da93f.png",
    "revision": "9d0da93f320fd03454fc6249ea8ed13d"
  },
  {
    "url": "assets/img/c57fc165a4ce4d5b9a2885867d4f1cab~tplv-k3u1fbpfcp-zoom-1.24e1ab17.png",
    "revision": "24e1ab17893d57c26149ac84d73857ce"
  },
  {
    "url": "assets/img/c68fcad75ea54d62a9404aa02cafc65c~tplv-k3u1fbpfcp-zoom-1.059a5fe1.png",
    "revision": "059a5fe182b03df016f9bd1ec69b143d"
  },
  {
    "url": "assets/img/d5ce15b7b704483eb91ee1f5d1d64786~tplv-k3u1fbpfcp-zoom-1.16f0c1c5.png",
    "revision": "16f0c1c5eecee7723ec6bf251c6ec470"
  },
  {
    "url": "assets/img/e55fc36b191340e69698782fbd67ef4f~tplv-k3u1fbpfcp-zoom-1.15ec0dbc.png",
    "revision": "15ec0dbca435af4590b1088b8658bdf0"
  },
  {
    "url": "assets/img/fbc59ae1adb5454c8c7f60582df10ff9~tplv-k3u1fbpfcp-zoom-1.947b0695.png",
    "revision": "947b06959149758abffbb5bac63488f4"
  },
  {
    "url": "assets/img/fc9240467b46494ca8fdc2d35d9f729e~tplv-k3u1fbpfcp-watermark.61bad4bb.png",
    "revision": "61bad4bb736a46e720932974155f5000"
  },
  {
    "url": "assets/js/1.25afa2cc.js",
    "revision": "57385b4032bef02539fece102af98abb"
  },
  {
    "url": "assets/js/10.824f3432.js",
    "revision": "ca4d425932565bbe0e21c0df610e6dc3"
  },
  {
    "url": "assets/js/11.896c9014.js",
    "revision": "935cc9a013a2ba41c23eec580cec773d"
  },
  {
    "url": "assets/js/12.c0d698c1.js",
    "revision": "24bea3ddb083c5e6494bcf27c20ccc06"
  },
  {
    "url": "assets/js/13.7e2a4729.js",
    "revision": "9e8f925139727f30641d687a6098fde0"
  },
  {
    "url": "assets/js/14.8992a7f6.js",
    "revision": "79b430b8a03fc807cc8004195e79f1d9"
  },
  {
    "url": "assets/js/15.3c086082.js",
    "revision": "fb6bec02aa081fd84a3c65742384044f"
  },
  {
    "url": "assets/js/16.d0085ada.js",
    "revision": "095989ee0733743db1f05ba75b521aa4"
  },
  {
    "url": "assets/js/17.bace2717.js",
    "revision": "c9656f95f21d4568b5c5f5cdd6046d3d"
  },
  {
    "url": "assets/js/18.0c23eff1.js",
    "revision": "da5d3871d9b7b6fa9c80253fc972a5b5"
  },
  {
    "url": "assets/js/19.feb6d3f0.js",
    "revision": "30086edf6f7e1050714c59feff29ae60"
  },
  {
    "url": "assets/js/2.187ce8ab.js",
    "revision": "34d3d38c14c47eef03b83bea7db8c9ff"
  },
  {
    "url": "assets/js/20.2b56810b.js",
    "revision": "c42a458c1331a186b6a8a058f6c3565f"
  },
  {
    "url": "assets/js/21.2d43e7f5.js",
    "revision": "67ddbb2d584bf3d095f860c0b033ba93"
  },
  {
    "url": "assets/js/22.c8a19711.js",
    "revision": "bb85421849fe4f3e7b84417f0fabec34"
  },
  {
    "url": "assets/js/23.cb923c2a.js",
    "revision": "f66aeb9fbb112e5d96d195b13a9ea409"
  },
  {
    "url": "assets/js/24.87c8784c.js",
    "revision": "3914e613977d8803d73d84fd823b4715"
  },
  {
    "url": "assets/js/25.53dcaa32.js",
    "revision": "30b89ab5aa1f66a4e6830b64c855659f"
  },
  {
    "url": "assets/js/26.5ccd41d8.js",
    "revision": "60df2c82cbb6e30eb35ccfd6df9bdff1"
  },
  {
    "url": "assets/js/27.a196d1ff.js",
    "revision": "3e9dcfc102006b37a285f59b803af0e9"
  },
  {
    "url": "assets/js/28.9402488b.js",
    "revision": "500b903b6cb3429099c0d5fc2307c97c"
  },
  {
    "url": "assets/js/29.93e72dfe.js",
    "revision": "6cf051c8bb87c4e13d823adf17927014"
  },
  {
    "url": "assets/js/5.26440250.js",
    "revision": "2d3a49e19ae37a639102dc02050fe6ac"
  },
  {
    "url": "assets/js/6.365b8ce2.js",
    "revision": "643eb6d7fbec41f4123a3f4da5c3427c"
  },
  {
    "url": "assets/js/7.239f14fd.js",
    "revision": "a8ce03912d616a2926744359a46021a8"
  },
  {
    "url": "assets/js/8.ee885e57.js",
    "revision": "311b024891fab025836c8eadabfe3a67"
  },
  {
    "url": "assets/js/9.5092eca5.js",
    "revision": "edc5c682e6820690e836cfcde59f9872"
  },
  {
    "url": "assets/js/app.28d7df9b.js",
    "revision": "c2aa8eb7c1f4580baff1ff61f2fb7172"
  },
  {
    "url": "assets/js/vendors~flowchart.482ad577.js",
    "revision": "ef2ec9c4f2bf803903c46fc870d7ce25"
  },
  {
    "url": "avatar.png",
    "revision": "1940bdeab16ece586915b61725a6ef6e"
  },
  {
    "url": "blogs/comment/index.html",
    "revision": "d728a3a6506f3afd9ae4fcb8ee04594c"
  },
  {
    "url": "blogs/courses/blog.html",
    "revision": "885818c92c7ceda8f3b64584d28c452c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "ce684cd0f61814d2d39b774561f3b273"
  },
  {
    "url": "blogs/sites/index.html",
    "revision": "52f4a07078e5c5b0ecffe274cddfb820"
  },
  {
    "url": "categories/index.html",
    "revision": "74e8bbbafc0c2d3c74e4d408fb09d94f"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "07b76ce9c4310efcf04d8044f3cbebdb"
  },
  {
    "url": "categories/网站/index.html",
    "revision": "43c20992c72439316dc74010c0132bb7"
  },
  {
    "url": "categories/面经/index.html",
    "revision": "e313438b81c980a0dbc1c775e2c7c700"
  },
  {
    "url": "categories/面经/page/2/index.html",
    "revision": "19159cf58106e0e93b60f4726c0d2d7a"
  },
  {
    "url": "docs/interview/code.html",
    "revision": "dcae87c8e3928dc83d527523bacac45e"
  },
  {
    "url": "docs/interview/css01.html",
    "revision": "521eaf8132ab578b98dab59384af78f7"
  },
  {
    "url": "docs/interview/css02.html",
    "revision": "11f18adbd552eeb2584a0b50c1b1625c"
  },
  {
    "url": "docs/interview/html.html",
    "revision": "07faf88dd42ec302bc2d0f58969b970d"
  },
  {
    "url": "docs/interview/index.html",
    "revision": "0cfead83ff684e40ac2d4225e503c796"
  },
  {
    "url": "docs/interview/javascript01.html",
    "revision": "89377d761fb0a5ecc44bb561107ea2d8"
  },
  {
    "url": "docs/interview/javascript02.html",
    "revision": "6ea652752b7b694f6235eae5bee0825c"
  },
  {
    "url": "docs/interview/javascript03.html",
    "revision": "658909b043777db6ce5089fdb9ff2332"
  },
  {
    "url": "docs/interview/mine.html",
    "revision": "f082a884cfe2091eee754bae3fb7cd72"
  },
  {
    "url": "docs/interview/vue01.html",
    "revision": "bd54083748256666da2d245142e53b37"
  },
  {
    "url": "docs/interview/vue02.html",
    "revision": "acf741bac84856001fcc83a5940f5d05"
  },
  {
    "url": "index.html",
    "revision": "a8383bb35e697b22713c56b779cff3d0"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "82918146f303c6c3e218a1b4f08b1200"
  },
  {
    "url": "tag/css/index.html",
    "revision": "1221f2acc1aac05a83fb1173558ee281"
  },
  {
    "url": "tag/html/index.html",
    "revision": "451ecb1fd9e42e36204f00a376c2c908"
  },
  {
    "url": "tag/index.html",
    "revision": "c741abc8b568cea89a17b4c60d9566a4"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9a404200394ed950703b5f6d9a323150"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c078ab521f5878a66857a5a971498289"
  },
  {
    "url": "tag/亲身经历/index.html",
    "revision": "ae30f4a9d3d88cffb7c8f1a79c3b5edb"
  },
  {
    "url": "tag/代码/index.html",
    "revision": "97375207d4145b334bc1dc403acb8b79"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "f7722481a2ab599804f2e81eba3b87a0"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "bcfdae7b4b9484dc25f774c7f199cc42"
  },
  {
    "url": "tag/推荐/index.html",
    "revision": "98e99827d86c0def3b2f9c832935085d"
  },
  {
    "url": "tag/教程/index.html",
    "revision": "886e4c8dd6057cf930fcc2020176ddc0"
  },
  {
    "url": "tag/笔试/index.html",
    "revision": "88cf371a30a127657716204aed364fc6"
  },
  {
    "url": "tag/网站/index.html",
    "revision": "19e415c00251376f96d1a2844048acd1"
  },
  {
    "url": "tag/配置/index.html",
    "revision": "fda92f280c9dff88334c309b09d29954"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "b2f0bd7371566f19469933934572bd28"
  },
  {
    "url": "tag/面试/page/2/index.html",
    "revision": "258751b1cc7efa7f2d54ea8a3839d70d"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2f50743321b57b444892309d34ec2ba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
