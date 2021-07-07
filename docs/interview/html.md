---
title: 前端高频面试题-html篇
date: 2020-06-01
tags:
 - 面试
 - html
categories:
 - 面经
publish: true
---

<!-- more -->

## 1. HTML5常用的结构标签有哪些,它替代了之前哪些标签

```html
常用标签：<header>,<nav>,<main>,<article>,<aside>,<footer>,<section>等
替代标签：<div class='header'>等
```

## 2. HTML文档采用UTF-8编码集的优势是什么

- utf-8: 使用3个字节表示一个符号, 基本上可以覆盖世界上所有语言
- 与传统的gb2312,gbk相比, 可识别的字符集更多, 也是行业界推荐

## 3. 标签中最常用的四大属性是什么

- id, class , title, style

## 4. 标签中的title与alt属性的区别是什么

- title: 是标签的描述, 当鼠标移入时,稍等会出现这个描述信息
- alt: 用在可置换元素上, 当外部资源无法正确加载时, 这个信息会显示在该占位符上

## 5. 标签中的href 与 src属性有什么区别

- 二者都是对外部资源的引用
- href: 用于超文本或样式，用在link和a标签上
- src: 用在外部资源占位标签上,如img,iframe,script,video

## 6. 什么是置换元素和非置换元素,每种类型至少举出二个案例

- 置换元素的内容来自外部, 该元素仅是外部资源的占位符,如img,video,audio
- 非置换元素内容来自当前文档,必须使用双标签,如p,h1-h6,ul

## 7. iframe标签主要功能是什么, 有什么优缺点

- 优点: 当前页面,直接加载其它页面, 而不必发生跳转
- 缺点: 框架中的内容不会被搜索引擎读取, 且会增加过多的HTTP请求,影响页面载入速度

## 8. from标签中的name属性与表单控件，如input中的name有何不同

- form中的name属性，与他的id是一样的，用来唯一标识该标签
- 表单控件中的name属性，是提供给服务器端应用程序读到表单数据的变量名

## 9. 表单中的按钮有几种，常用的标签有哪几个

- 按钮有三种：普通，提交，重置
```html
<input type="button">,<input type="submit">,<input type="rest">
```

## 10. html5有哪些更新

### 1. 语义化标签

- header：定义文档的页眉（头部）；
- nav：定义导航链接的部分；
- footer：定义文档或节的页脚（底部）；
- article：定义文章内容；
- section：定义文档中的节（section、区段）；
- aside：定义其所处内容之外的内容（侧边）；

### 2. 媒体标签

（1） audio：音频

```html
<audio src='' controls autoplay loop='true'></audio>

```

属性：

- controls 控制面板
- autoplay 自动播放
- loop=‘true’ 循环播放

（2）video视频

```html
<video src='' poster='imgs/aa.jpg' controls></video>

```

属性：

- poster：指定视频还没有完全下载完毕，或者用户还没有点击播放前显示的封面。默认显示当前视频文件的第一针画面，当然通过poster也可以自己指定。
- controls 控制面板
- width
- height

（3）source标签 因为浏览器对视频格式支持程度不一样，为了能够兼容不同的浏览器，可以通过source来指定视频源。

```html
<video>
 	<source src='aa.flv' type='video/flv'></source>
 	<source src='aa.mp4' type='video/mp4'></source>
</video>

```

### 3. 表单

**表单类型：**

- email ：能够验证当前输入的邮箱地址是否合法
- url ： 验证URL
- number ： 只能输入数字，其他输入不了，而且自带上下增大减小箭头，max属性可以设置为最大值，min可以设置为最小值，value为默认值。
- search ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。
- range ： 可以提供给一个范围，其中可以设置max和min以及value，其中value属性可以设置为默认值
- color ： 提供了一个颜色拾取器
- time ： 时分秒
- data ： 日期选择年月日
- datatime ： 时间和日期(目前只有Safari支持)
- datatime-local ：日期时间控件
- week ：周控件
- month：月控件

**表单属性：**

- placeholder ：提示信息
- autofocus ：自动获取焦点
- autocomplete=“on” 或者 autocomplete=“off” 使用这个属性需要有两个前提：
  - 表单必须提交过
  - 必须有name属性。
- required：要求输入框不能为空，必须有值才能够提交。
- pattern=" " 里面写入想要的正则模式，例如手机号patte="^(+86)?\d{10}$"
- multiple：可以选择多个文件或者多个邮箱
- form=" form表单的ID"

**表单事件：**

- oninput 每当input里的输入框内容发生变化都会触发此事件。
- oninvalid 当验证不通过时触发此事件。

### 4. 进度条、度量器

- progress标签：用来表示任务的进度（IE、Safari不支持），max用来表示任务的进度，value表示已完成多少
- meter属性：用来显示剩余容量或剩余库存（IE、Safari不支持）
  - high/low：规定被视作高/低的范围
  - max/min：规定最大/小值
  - value：规定当前度量值

设置规则：min < low < high < max

### 5.DOM查询操作

- document.querySelector()
- document.querySelectorAll()

它们选择的对象可以是标签，可以是类(需要加点)，可以是ID(需要加#)

### 6. Web存储

HTML5 提供了两种在客户端存储数据的新方法：

- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个 session 的数据存储

### 7. 其他

- 拖放：拖放是一种常见的特性，即抓取对象以后拖到另一个位置。设置元素可拖放：

```html
<img draggable="true" />

```

- 画布（canvas ）： canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

```html
<canvas id="myCanvas" width="200" height="100"></canvas>

```

- SVG：SVG 指可伸缩矢量图形，用于定义用于网络的基于矢量的图形，使用 XML 格式定义图形，图像在放大或改变尺寸的情况下其图形质量不会有损失，它是万维网联盟的标准
- 地理定位：Geolocation（地理定位）用于定位用户的位置。‘

**总结：** （1）新增语义化标签：nav、header、footer、aside、section、article （2）音频、视频标签：audio、video （3）数据存储：localStorage、sessionStorage （4）canvas（画布）、Geolocation（地理定位）、websocket（通信协议） （5）input标签新增属性：placeholder、autocomplete、autofocus、required （6）history API：go、forward、back、pushstate

**移除的元素有：**

- 纯表现的元素：basefont，big，center，font, s，strike，tt，u;
- 对可用性产生负面影响的元素：frame，frameset，noframes；