---
title: 前端高频面试题-html篇
date: 2020-05-29
# sidebar: 'auto'
tags:
 - 面试
categories:
 - 面经
publish: false
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
- <input type="button">,<input type="submit">,<input type="rest">