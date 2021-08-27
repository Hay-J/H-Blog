---
title: 我的面试之旅
date: 2020-08-20
tags:
 - 面试
 - 笔试
 - 亲身经历
categories:
 - 面经
sticky: 3
publish: true
---

::: tip
我的面试之旅！！！括号内容表示出现的次数例如:（**x3**）
:::

<!-- more -->

## 一、html和css相关
### 1. 如何让文本垂直居中显示？

如果是水平居中的话很简单，用text-align:center

```css
单行文本
#div{
	height: 100px;
    border:1px soild red;
    line-height:100px;/*行高等于高度,垂直居中*/ 
}

多行文本
又分两类：父元素-高度固定-和-由父元素内容-撑开
多行不能设置line-height属性，这样只有第一行居中，其他文本会跑出父div
第一类：不设置父元素高度
#div{
    padding: 0 20px;/*设置内边距上=下（其实本来父元素高度不固定本来就垂直居中了，设置内边距只是为了看起来更像）*/
}

第二类：父元素高度固定
第一种方法
#parent{
    height:300px;
    border:1px soild red;
    display:table;
}
#child{
    display:table-cell;
    vertical-align:middle;
}
第二种方法：子元素设为行内块元素，利用相对定位平移
#parent{
    height:300px;
    border:1px soild red;

}
#child{
    display:inline-block;
    position:relative;
    top:50%;
    transform:translateY(-50%);
}
第三种方法：利用flex布局加align-items属性
#parent{
    height:300px;
    border:1px soild red;
    display:flex;
    align-items:center;
}
```

### 2. 画一个三角形？

~~~css
第一种:用border画，border的实质是一个由内容的长宽决定的梯形（当内容宽高都为0则是个三角）
div{
    /*此时的三角形是一个等腰实心三角形，颜色为黄*/
	width:0;
    height:0;
    border-width:0 50px 50px;/*将上半border高度（这里的高度指的是梯形的高，高为0则为空*/
    border-color:transparent transparent yellow;/*将上、左右的颜色设置为透明*/
}
第二种:如果要画一个带边框的三角形，或者是箭头类型的
利用两个三角形重叠，小的叠在大的上面
~~~

### 3. px和rem的区别？其实还有em，rpx统一讲

- px

  像素（pixel）。相对长度单位，是相对于显示器分辨率而言。

  特点：

- em

  相对长度单位，相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。(引自CSS2.0手册)

  特点：em的值不是固定的；并且会继承父级元素的字体的大小

  > 任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明**Font-size=62.5%**，这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的**原来的px数值除以10**，然后换上em作为单位就行了。
  >
  > 所以我们在写CSS的时候，需要注意两点：
  >
  > - 1. body选择器中声明Font-size=62.5%；
  > - 2. 将你的原来的px数值除以10，然后换上em作为单位；
  > - 3. 重新计算那些被放大的字体的em数值。避免字体大小的重复声明。
  >
  > 也就是避免1.2 * 1.2= 1.44的现象。比如说你在#content中声明了字体大小为1.2em，那么在声明p的字体大小时就只能是1em，而不是1.2em, 因为此em非彼em，它因继承#content的字体高而变为了1em=12px。

- rem

  css3新增的单位，也是相对单位，但相对的只是HTML根元素。默认也是16px，为了计算方便，也是再font-size值为62.5%

  特点：避免了像em字体大小逐层复合的连锁反应。

- rpx

  是微信对于rem的一种应用规定，规定 屏幕宽度为20rem，750rpx，1rem=32.5rpx

### 4. 简单说明一下bfc及其应用场景

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

如何创建BFC
1、float的值不是none。
2、position的值不是static或者relative。
3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4、overflow的值不是visible

------

应用场景：

(1) **同一个**BFC的两个相邻Box的margin会发生重叠。此时将第二个box再包裹一个div创建bfc

(2) 同一个bfc下，如果一个box设置了float，另一个没有设置浮动的box会与float重叠。此时将没有设置float的那个box单独成为bfc

(3) 不给父节点设置高度，子节点设置浮动的时候，会发生高度塌陷，这个时候我们就要给父元素清除浮动。

### 5. 如何让一个div全屏居中

### 6. css盒子模型的分类和区别，如何更改盒子模型

分标准盒子模型和ie盒子模型：

标准：content+padding+border+margin   ie：content包含padding和border

通过修改box-sizing: content-box; box-sizing: border-box; box-sizing: inherit;

### 7. relative、fixed、absolute和static四种定位有什么区别

1、static（静态定位）：默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

2、relative（相对定位）：生成相对定位的元素，通过top,bottom,left,right的设置相对于其正常（原先本身）位置进行定位。可通过z-index进行层次分级。不会脱离正常的文档流，relative定位的层总是相对于其最近的父元素，无论其父元素是何种定位方式。

3、absolute（绝对定位）：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。脱离正常文档流。对于absolute定位的层总是相对于其最近的定义为absolute或relative的父层，而这个父层并不一定是其直接父层。如果其父层中都未定义absolute或relative，则其将相对body进行定位

4、fixed（固定定位）：生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。

## 二、js相关
### 1. javascript 中的typeof()可能返回的结果

| undefined | 未定义的变量或值                    |
| --------- | ----------------------------------- |
| boolean   | 布尔类型的变量或值                  |
| string    | 字符串类型的变量或值                |
| number    | 数字类型的变量或值                  |
| object    | 对象类型的变量或值，**null和array** |
| function  | 函数类型的变量或值                  |

### 2. 讲一下let、var、const的区别？（**x2**）

var和let区别

（1）作用域

​		var 声明的变量的作用域是它当前的执行上下文，即如果是在任何函数外面，则是全局执行上下文，如果在函数里面，则是当前函数执行上下文。换句话说，var 声明的变量的作用域只能是全局或者整个函数块的。

​		let 声明的变量的作用域则是它当前所处代码块，即它的作用域既可以是全局或者整个函数块，也可以是 if、while、switch等用`{}`限定的代码块。

（2）重复声明

​		var 允许在同一作用域中重复声明，而 let 不允许在同一作用域中重复声明，否则将抛出异常。

~~~js
//var示例
var a = 1;
var a = 2;
console.log(a) // 2
function test() {
  var a = 3;
  var a = 4;
  console.log(a) // 4
}
test()

//let示例1
if(false) {
  let a = 1;
  let a = 2; // SyntaxError: Identifier 'a' has already been declared
}
//let示例2
switch(index) {
  case 0:
    let a = 1;
  break;

  default:
    let a = 2; // SyntaxError: Identifier 'a' has already been declared
    break;
}
从上述示例中可以看出，let声明的重复性检查是发生在词法分析阶段，也就是在代码正式开始执行之前就会进行检查。
~~~

（3）绑定全局对象

​		var 在全局环境声明变量，会在全局对象里新建一个属性，而 let 在全局环境声明变量，则不会在全局对象里新建一个属性。

（4）变量提升与暂存死区

​		执行上下文有三个周期，创建、执行、释放

​		而用var的声明和函数的创建会放在创建阶段

~~~js
console.log(a) // undefined        var a;
var a = 1;                     ===>console.log(a)
console.log(a) // 1                a= 1;
								   console.log(a)
~~~

​		const

​		声明的是一个只读变量，并且声明后不允许改变值，一旦声明必须初始化，否则报错。

> **如何理解声明之后不允许改变其值？**
>
> 其实 const 其实保证的不是变量的值不变，而是保证变量指向的内存地址所保存的数据不允许改动（即栈内存在的值和地址）。
>
> JavaScript 的数据类型分为两类：原始值类型和对象（Object类型）。
>
> 对于原始值类型（undefined、null、true/false、number、string），值就保存在变量指向的那个内存地址（在栈中），因此 const 声明的原始值类型变量等同于常量。
>
> 对于对象类型（object，array，function等），变量指向的内存地址其实是保存了一个指向实际数据的指针，所以 const 只能保证指针是不可修改的，至于指针指向的数据结构是无法保证其不能被修改的（在堆中）。

### 3. javascript 中call与applay的作用，以及区别

`call`和`apply`可以用来**重新定义函数的执行环境**，也就是`this`的指向；`call`和`apply`都是为了改变某个函数运行时的`context`，即上下文而存在的，换句话说，就是为了改变函数体内部`this`的指向。

function.call(obj,params) `call()`可以让**括号里的对象obj来继承括号外函数function的属性**。

区别就是传参不同，第一个参数都是

### 4. 什么是闭包，闭包的优缺点

闭包就是能够读取其他函数内部变量的函数

原理，函数可以访问外部（全局）变量，外面不可以访问函数内部（局部）变量，利用这一特性，利用函数的嵌套，内层函数使用外层函数的变量（对于内部函数来说他属于全局变量），将整个内部函数作为外层函数的返回值，就可以访问到外层函数的变量了。

优点：创建一个安全的环境，保证内部代码不受外部的干涩

​			让父函数的变量的值始终保存在内存中

缺点：内存消耗大，容易造成内存泄漏

​			每次调用完需要手动回收变量

用处：闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中

重用变量又不能造成全局污染

最简洁、直击要害的回答，我能想到的分别有这么三句（版权属于 @张恂老师 ）：

1、闭包是一个有状态（不消失的私有数据）的函数。

2、闭包是一个有记忆的函数。

3、闭包相当于一个只有一个方法的紧凑对象

### 5. undefined和null的区别。并回答以下三个结果？

null表示“没有对象，一个空对象指针”，即此处不应该有值

undefined表示“缺少值”，就是此处应该有一个值，但是没有

> （1）变量被声明了，但没有赋值时，就等于undefined。
>
> （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
>
> （3）对象没有赋值的属性，该属性的值为undefined。
>
> （4）函数没有返回值时，默认返回undefined。

~~~js
alert(null == undefined)          ture
alert(ever1);					undefined
var ever1;
alert(ever2);					报错，引用错误
~~~



## 三、vue相关

### 1. vue2数据双向绑定原理（x2）

### 2. 什么是vue生命周期，列举一下生命周期钩子函数和其作用

### 3. 什么是渐进式增强，如何为功能受限的浏览器提供页面

渐进式增强使用web技术以分层的方式，允许所有人访问网页的基本内容和功能，同时为更先进的浏览器提供这些页面的一个增强版。

这个策略的优点是它允许所有人使用任何浏览器和网络连接能够访问到网页的基础内容和功能，也同时为使用高版本浏览器或者高带宽的用户提供一个增强版本的网页。

第二个问题：渐进式增强或者优雅降级

### 4. vue2中的v-show和v-if的区别

## 四、网络相关

### 1. 什么是跨域请求？列举如何解决跨域

向不满足**同源策略**的接口访问请求页面或资源，这种请求就叫跨域请求。

解决：

**jsonp**：JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单适用，兼容性好（兼容低版本IE），缺点是只支持get请求，不支持post请求。
核心思想：网页通过添加一个script元素，向服务器请求 JSON 数据，服务器收到请求后，将数据放在一个指定名字的回调函数的参数位置传回来。
**CORS**:  是跨域资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，属于跨源 AJAX 请求的根本解决方法。
1、普通跨域请求：只需服务器端设置Access-Control-Allow-Origin
2、带cookie跨域请求：前后端都需要进行设置
**webpack本地代理**：

**Nginx反向代理**

### 2. 请阐述http原理、websocket原理。

http时应用层协议，基于tcp协议，分短链接和长链接，短链接需三次握手，长链接是在一定的期限内保持链接。保持 TCP 连接不断开。客户端与服务器通信，必须要有客户端发起然后服务器返回结果。客户端是主动的，服务器是被动的。

http1.0默认发送的是短链接，1.1改进为长链接

websocket是基于http协议的，是为了解决http只能由客户端发送并且要实现轮询功能的问题，是全双工通信技术。

### 3. 请阐述xss与csrf，防范手段有哪些？



## 五、浏览器相关

### 1. 请描述一下cookies sessionStorage 和 localstroage 区别

三者都是浏览器存储到本地的数据

cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。 cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。 sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存

存储大小

cookie数据大小不能超过4k。

sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。 

有期时间：

localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage 数据在当前浏览器窗口关闭后自动删除，同一页面不同窗口的session都是不一样的。cookie设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

## 六、编程题

~~~js
var x= 1,y=z=2;		//考点是变量提升，创建在前,使用在后  
												var x,y,z
function add(n){				  这个函数被覆盖了function add(n){return n=n+1}
    return n =n+1;								function add(n){return n=n+4}
}												x=1,y=z=2
y= add(x);										y= add(x);																	    console.log(y);    ---5
console.log(y);      					    	z= add(x);         
function add(n){								console.log(z);    ---5
    return n=n+4;
}
z= add(x);										
console.log(z);
~~~

~~~js
var a= 1;
fun();
console.log("1:"+a)         1:1
function fun(){
    console.log("2:"+a)     2:undefined
    var a=2;
    console.log("3:"+a)      3:2
}
~~~

~~~js
function Person(name){
    var a=1;
    this.name=name;
    this.fun=function(){}
}
Person.prototype.share=[];
Person.printName=function(){
    alert(this.name);
}
var person1 =new Person("B");
var person2 = new Person("F");

person1.share.push(1);
person2.share.push(2);		
console.log("ask1:"+person1.a); 						undefined
console.log("ask2:"+person2.share);					[1,2]
console.log("ask3:"+person1.printName);				undefined
console.log("ask4:"+person1.fun===person2.fun); 		false
~~~



## 七、其他

### 1. 简述对前后端分离的理解

先答概念，再进一步答优缺点

好处：

- 工作细化，提升开发效率
- 增强代码可维护性
- 一套接口多套产品

坏处：开发成本提升

### 2. 请阐述mvvm及其优缺点

优点：

- 数据双向绑定，方便测试

  在MVC下，Controller基本是无法测试的，里面混杂了个各种逻辑，而且分散在不同的地方。有了MVVM我们就可以测试里面的viewModel，来验证我们的处理结果对不对（Xcode7的测试已经越来越完善了）。

- 便于代码的移植

  比如iOS里面有iPhone版本和iPad版本，除了交互展示不一样外，业务逻辑的model是一致的。这样，我们就可以以很小的代价去开发另一个app。（以前做公司iPad的时候就深深感觉到，全部在VC里面是多么的痛苦和重新开发一个没有啥区别）。

- 兼容MVC

  MVVM是MVC的一个升级版，目前的MVC也可以很快的转换到MVVM这个模式。VC可以省去一大部分展示逻辑。

缺点：

- bug难以调试，页面异常有可能时view代码有问题，也有可能时model代码有问题。
- vm会越来越庞大
- 不利于view的重用，因为每个view都绑定了一个model

