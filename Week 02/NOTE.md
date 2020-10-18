# 学习笔记

1. 在本周第四讲的练习题中有一个这样的代码片段,其中遇到了析构赋值后代码死循环的情况。经过组内大佬的解释和链接，我了解了 JS 的ASI机制，防止在今后的工作中遇到类似的问题。
   相关链接：<https://segmentfault.com/a/1190000004548664>
   JavaScript 语句后应该加分号么？ - 尤雨溪的回答 - 知乎<https://www.zhihu.com/question/20298345/answer/49551142>

   ```js
    while(x !== start[0] || y !== start[1]) {
              path.push([x, y]);//省略;会让出现ASI错误，让JS解释器以为代码是这样的
              //path.push([x, y])[x, y] = table[y*size + x]
              //出现死循环的情况
              [x, y] = table[y*size + x];
              await sleep(30);
              container.children[y * size + x].style.backgroundColor = "purple";
          }
   ```

2. 寻路算法的优化(todo)
   （1）最短路径的计算优化部分，winter老师给了提示，但是还是没思路。下周需要研究下winter老师给的作业答案，慢慢体会下。
   （2）Sorted数据结构可以选用小顶堆更合适一些。
