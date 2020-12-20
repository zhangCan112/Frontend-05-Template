# 学习笔记

## 简单选择器

1. * 通配选择器
2. div svg|a 标签类型选择器
3. .cls  类选择器
4. #id id选择器
5. [attr=value] 标签属性选择器
6. :hover 伪类
7. ::before 伪元素

## 选择器的优先级

 [参考文档来自MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
从高到低依次为

1. 内联选择器
2. id选择器
3. 类选择器，属性选择器，伪类
4. 标签类型选择器, 伪元素
最后 通配选择符(*) 关系选择符 和 否定伪类对优先级没有影响，但是，在 :not() 内部声明的选择器会影响优先级
还有一个坏习惯的例外：当在一个样式声明中使用一个 !important 规则时，此声明将覆盖任何其他声明，包含内联样式！

## 伪类

### 链接/行为

1. :any-link
2. :link :visited
3. :hover
4. :active
5. :focus
6. :target

### 树结构

1. :empty
2. :nth-child()
3. :nth-last-child()
4. :first-child :last-child :only-child

### 逻辑型

1. :not 伪类
2. :where :has

## 伪元素

1. ::before
2. ::after
3. ::first-line
4. ::first-letter

### 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

first-letter 是对第一个字符起效果，因此比较容易确定样式的范围
first-line 是应用在某个块级元素中的第一行的样式。第一行的长度取决于很多元素，包括元素宽度，文档宽度和文本的文字大小等。使用float改变了元素布局的浮动属性，会对第一行的范围产生影响，导致布局范围混乱。
因此不止是float，在一个使用了 ::first-line 伪元素的选择器中，只有很小的一部分css属性能被使用：
所有和字体有关的属性
颜色属性
所有和背景有关的属性
上述没提到的属性都不推荐使用。
[参考自MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line)
