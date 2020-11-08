# 学习笔记

## Reactivity
在这部分winter老师带我们实现了如何使用Proxy来实现Vue的Reactivity特性的简单原理。
我对使用Proxy实现Reactivity的实现有2点理解：
1. 通过对Get方法的代理和指定的Effect函数来实现待绑定数据的数据侦查和保存。
2. 通过对Set方法的代码来实现一个方向的数据绑定。
由此可以扩展一下对于任意一种语言，只要实现了对对象Get和Set方法的代理，都可以尝试对其添加Reactivity特性。比如跨平台的rx系列。

## Dragdrop

1. 组件拖拽的模板代码

   ```js
   dragable.addEventListener("mousedown", function (event) {
    let up = (event) => {
      //dosomething
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };

    let move = (event) => {
       dragable.style.transform = `translate(${
           baseX + event.clientX - startX
        }px, ${baseY + event.clientY - startY}px)`;
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);

  });
  ```

2. CSSOM
   从之前小课的学习中有了解到Range相关API，本次课程中了解到了CSSOM这个知识点，大致查了下他的概念和相关资料，记录如下：
   CSSOM，即CSS Object Model，CSS对象模型，是对CSS样式表的对象化表示，同时还提供了相关API用来操作CSS样式。
   这里有一个问题：既然已经有了DOM树结构来表示HTML文档结构，那为什么不把CSS顺便放在在DOM上，以便我们直接从Element上获取所有样式信息呢？
   很明显，如果把CSS信息一起建模在DOM结构上，就会违背”单一职责原则“。因为正如在网页中HTML承担了语义职能，CSS承担了表现职能一样，在计算机中DOM承担了语义职能，而CSSOM承担了表现职能。
