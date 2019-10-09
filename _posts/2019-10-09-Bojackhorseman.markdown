---
layout: post
title: First Personal Blog Post 
date: 2019-10-09 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: fengjing.jpg # Add image post (optional)
tags: [Productivity, Software] # add tag
---

## This is my first article in blog 

#### 什么是事件委托?

对"事件处理程序过多"问题的**解决方案**,就是需要触发子事件时,只用给某父元素指定一个事件处理程序,就可以管理某一类型的所有事件.

#### 事件委托的原理和优点?

**1.原理:** 事件冒泡

- 当元素的事件被触发后，所有的父级元素的同名事件会被依次触发,子元素 -> 父元素 -> body -> html -> document -> window,IE8 和之前的浏览器只到 document

**2.优点:**

- 整个页面占用的内存更少,能够提升整体性能
- document 对象能很快被访问,而且在页面生命周期的任何时间点为它添加事件处理程序(无需等待 DOMContentLoaded 或者 load 事件),换句话说:只要可单击的元素呈现在页面当中,就可以立即获得适当的功能
- 在页面中设置事件处理程序的事件更少,所需要引用的 DOM 更少,时间更短.

![code area]({{site.baseurl}}/assets/img/carbon.png)

> 这是一条引用哦 请看清楚吧


#### 用途

**1.多个元素注册同一事件时**

例:比如给下列每一个 li 元素注册一个点击事件

**原始**写法,循环遍历注册(数据一多就会消耗大量的内存)

```
    <ul id='ul'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <script>
        var liList = document.getElementsByTagName('li');
        for (var i = 0; i < liList.length; i++) {
            liList[i].onclick = function () {
                alert(this.innerHTML)
            }
        }
    </script>
```

**采用事件委托,只需要给 li 的父元素注册点击事件即可**

```
        document.getElementById('ul').onclick = function (e) {
            //事件的兼容性代码
            e = e || window.event;
            //e.target就是li
            console.log(e.target.innerHTML);
        }
```

target:可返回触发该事件的节点,如生成事件的元素、文档或窗口等
event.target.nodeName 　 //获取事件触发元素标签 name（li,p...）
event.target.id 　　　　　　 //获取事件触发元素 id
event.target.className 　　//获取事件触发元素 classname
event.target.innerHTML 　　//获取事件触发元素的内容（li）

#### 若 ul 有其他的元素不用注册点击事件,怎么做?

使用 e.target 做判断筛选即可



**2.动态添加属性**

例:设置一个新增 Li 标签的按钮,并为其注册点击事件

**原始的循环遍历并不能为新增的标签增加事件**

```
    <ul id='ul'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <button id="btn">
        点我有惊喜
    </button>
    <script>
        var ul = document.getElementById('ul')
        var liList = document.getElementsByTagName('li');
        for (var i = 0; i < liList.length; i++) {
            liList[i].onclick = function () {
                alert(this.innerHTML)
            }
        }
        document.getElementById('btn').onclick = function(){
            let li = document.createElement('li');
            li.innerHTML = '欢迎来到德莱联盟';
            ul.appendChild(li);
        }
    </script>
```

**事件委托:后续添加的每一个 li 都有点击事件**

```
    <ul id='ul'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <button id="btn">
        点我有惊喜
    </button>
    <script>
        var ul = document.getElementById('ul')
        ul.onclick = function (e) {
            //事件的兼容性代码
            e = e || window.event;
            //e.target就是li
            console.log(e.target.innerHTML);
        }
        ul.onclick = function(){
            let li = document.createElement('li');
            li.innerHTML = '欢迎来到德莱联盟';
            ul.appendChild(li);
        }
    </script>
```

---

**最适合事件委托技术的事件有:**

- **click**
- **mousedown**
- **mouseup**
- **keyup**
- **keydown**

虽然 mouseover 和 mouseout 也有事件冒泡,但要适当处理它们并不容易,因为需要经常计算元素的位置(在移入移出时)



#### jQuery 的事件委托语法

```
        //$('父元素').on('事件名','子元素触发',事件触发时的回调函数);
        $('ul').on('click','li',function(e){
            console.log(e.target.innerHTML);
        })
```

