---
title: "Latex Note"
date: 2023-12-09T12:51:32+08:00
tag: tex
draft: false
---

# [Latex 制作表格](https://www.cnblogs.com/TH-guan/p/16482671.html)



# 前言

`提示：这里可以添加本文要记录的大概内容：`

Latex 表格代码汇总，包括三线表[跨页]、简单表[表格基本配置（表名、表宽、注解、字号）]、单元格合并、斜线表头、

---

`提示：以下是本篇文章正文内容，下面案例可供参考`

# 一、Latex三线表

### 1、普通三线表

三线表需要一个专门的宏包==booktabs==。通过该宏包，可以使用以下代码画不同粗细的表线。

|代码|含义|
|---|---|
|\toprule|顶部粗线|
|\midrule|中间细线|
|\bottomrule|底部粗线|

示例代码：

```c
\documentclass{article}
\usepackage{booktabs} % 导入三线表需要的宏包

\begin{document}

\begin{tabular}{ccc}% 其中，tabular是表格内容的环境；c表示centering，即文本格式居中；c的个数代表列的个数
\toprule %[2pt]设置线宽     
a & b  &  c \\ %换行
\midrule %[2pt]  
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\bottomrule %[2pt]     
\end{tabular}

\end{document}
```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/bda985bee6c84682896aa429a57b16c9.png#pic_center)

### 2、跨页三线表

跨页表格需要导入宏包 ==longtable==，并将原来的表格内容环境==tabular==改成==longtable==即可。

示例代码：

```c
\documentclass{article}
\usepackage{booktabs} % 导入三线表需要的宏包
\usepackage{longtable}% 导入跨页表格所需宏包
\begin{document}

\begin{longtable}{ccc}% 其中，tabular是表格内容的环境；c表示centering，即文本格式居中；c的个数代表列的个数
\toprule %[2pt]设置线宽     
a & b  &  c \\ %换行
\midrule %[2pt]  
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\bottomrule %[2pt]     
\end{longtable}

\end{document}
```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/0ab8256d989e40b2af53e44823f51b6d.png#pic_center)

# 二、简单表

### 1、基本需求表

表格，简而言之就是被 **横竖表线** 框起来文本。

1.横线：

|代码|含义|
|---|---|
|\hline|表格所有列的一整条表线|
|\cline{a-b}|指定列数的表线，a-b表示从第a列到第b列|

2.竖线：| |  
3.文本位置：

|参数|含义|
|---|---|
|c|centering，表示文本居中|
|l|left，表示文本靠左|
|r|rigth，表示文本靠右|

参考代码：

```c
\begin{document}

\begin{tabular}{|c|c|c|c|r|l|} \hline % 其中，|c|表示文本居中，文本两边有竖直表线。
aaaaa & bbbbb & ccccc & ddddd & eeeee & fffff  \\ \hline
1 & 2 & 3 & 4 & 5 & 6  \\ \hline
7 &	8 &	9 &	10 & 11 & 12\\ \hline
13 & 14 & 15 & 16 &	17 & 18\\ \hline
\end{tabular}

\end{document}
```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/ffe72f54a6a648d8a35479076e1dc4cd.png#pic_center)

### 2、表格整体相关设置【表名及位置、表宽、注解、字号】

很多时候，我们都是对表格整体进行相关设置，来达到自己的相关需求。而对表格整体的相关设置其实与表格内容并无太大关系。

因此我们需要在表格内容环境【如上文中的 **\begin{tabular}、\begin{longtable}** 】外面进行相关环境设置。

```c
\begin{table}%表格环境

...表格整体相关设置
\begin{tabular}% 表格内容环境
\end{tabular}
...表格整体相关设置

\end{table}
```

#### 1. 表格标题及位置

1.标题  
导入宏包 ==caption==，使用代码：==\caption{表格标题}==（位置上下均可）

2.位置  
==\begin{table}[!ht]==，中的参数 ==!ht== 就是对表格位置的相关设置。

==[!ht]== 这个参数组合是我比较喜欢用的，含义：尽量放在代码当前位置，实在放不下，将放在下一页的顶部。

其他参数及含义如下：

|参数|含义|
|---|---|
|h|（here）代码当前位置|
|t|（top）页面顶部|
|b|(bottom) 页面底部|
|p|单独一个页面，只含浮动对象|
|！|忽略系统排版美学因素，尽可能按照你的代码参数放置表格位置|
|H|需导入宏包 ==float== ,放在当前代码位置，放不下则不显示（错误）|

[位置参数参考](https://blog.csdn.net/xovee/article/details/109378160)

参考代码：

```c
\begin{table}[!ht] % [!ht]表格在文本中放置的位置参数（努力放在当前位置，实在放不下，将放在下一页的顶部）
\centering % 表格整体居中
\caption{表格标题}
\begin{tabular}{|c|c|c|c|r|l|} \hline % 其中，|c|表示文本居中，文本两边有竖直表线。
aaaaa & bbbbb & ccccc & ddddd & eeeee & fffff  \\ \hline
1 & 2 & 3 & 4 & 5 & 6  \\ \hline
7 &	8 &	9 &	10 & 11 & 12\\ \hline
13 & 14 & 15 & 16 &	17 & 18\\ \hline
\end{tabular}
\end{table}
```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/01054193e61e42eba5d65021cb2a43fe.png#pic_center)

#### 2. 表宽设置

由于latex的表格长宽都是通过表格中文本的最大长度来设定的，这就可能造成表格过窄或过宽导致的不美观现象。  
因此，如果你对表格的美观程度要求较高的话，就还需要设定一些参数。

1.自定义表格整体大小  
首先需要导入==graphics、graphicx、pdfpages== 这三个宏包中的任意一个，然后在表格内部环境外面进行相关设置。  
==resizebox{表宽}{表长}{…表格内部环境…}==  
其中，表宽和表长可以自己定义多少厘米，也可以采用页面的相关长度来进行设置。  
以下是相关参数及含义：

|参数|含义|
|---|---|
|\linewidth|当前环境宽度，即上下文宽度|
|\textwidth|文本宽度|
|！|（高度或宽度）随着另一个参数的改变而改变|

[宽度参数参考](https://zhuanlan.zhihu.com/p/142826485)

存在的缺陷：改变了表格的大小，同时也会自动改变表格中文本字体的大小，如果你对表格中的字体还有要求的话，那么这个代码并不适用。

参考代码：

```c
\usepackage{graphics}
\begin{document}


\begin{table}[!ht]

\resizebox{\textwidth}{!}{ % 表格环境外部设置（头）
\begin{tabular}{|c|c|c|c|r|l|} \hline % 其中，|c|表示文本居中，文本两边有竖直表线。
aaaaa & bbbbb & ccccc & ddddd & eeeee & fffff  \\ \hline
1 & 2 & 3 & 4 & 5 & 6  \\ \hline
7 &	8 &	9 &	10 & 11 & 12\\ \hline
13 & 14 & 15 & 16 &	17 & 18\\ \hline
\end{tabular}
}% 外部环境设置（尾）

\end{table}


\end{document}
```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/5b54425aa8a2419995d23f46e06e125c.png#pic_center)  
2. 设置每列文本宽度

① ==\setlength{\tabcolsep}{宽度}{…表格内部环境…}==，设置表格中每列的宽度（每个单元格都是一样的）。

② 导入宏包==array==，使用 ==\begin{tabular}{宽度设置}== 进行设置

宽度设置相关参数：

|参数|含义|
|---|---|
|p{宽度}|指定单元格宽度，==汉字内容==超出宽度自动换行，文本在单元格中的位置为垂直靠上|
|m{宽度}|指定单元格宽度，==汉字内容==超出宽度自动换行，文本在单元格中的位置为垂直居中|
|b{宽度}|指定单元格宽度，==汉字内容==超出宽度自动换行，文本在单元格中的位置为垂直靠下|
|<{\raggedright}|单元格内容左对齐|
|<{\raggedleft}|单元格内容右对齐|
|<{\centering}|单元格内容居中|

参考代码：

```c
\begin{tabular}{|p{6cm}<{\raggedleft}|p{4cm}<{\raggedright}|p{4cm}<{\centering}|} \hline

汉字文本文本文本文本&汉字文本文本文本文本汉字文本文本文本文本&汉字文本文本文本文本汉字文本文本文本文本汉字文本文本文本文本\\ \hline
汉字文本&汉字文本&汉字文本\\ \hline
aaaaaaaaa&aaaaaaaaa&aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\\ \hline
111111111&111111111&111111111111111111111111111111111111\\ \hline

\end{tabular}
```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/05397f7eea624c70afdb1b64c156c69f.png#pic_center)  
[文本对齐参数参考](https://blog.csdn.net/qq_40157728/article/details/113344860)

3.更多方法  
当然，如果你实在不想管这些东西，你还可以利用空格来增加文本的宽度，快速的得到你想要的表格。  
空格的相关设置参数如下：

|参数|含义|
|---|---|
|a\ b|ab之间1个m的宽度|
|a\quad b|ab之间2个m的宽度|

[空格参数参考](https://blog.csdn.net/hysterisis/article/details/114123131)

#### 3. 表格注解

导入宏包 ==threeparttable==，使用 ==\begin{threeparttable}== 进行设置。

参考代码：

```c
\centering
\begin{threeparttable}
\begin{tabular}{|c|c|c|c|c|c|} \hline

班级层次&平均值	&个案数	&标准偏差	&最小值&最大值\\ \hline
1&	53.74&	77	&29.819&	4	&96\\ \hline
2	&57.60	&119&	28.971&	4	&100\\ \hline
3	&58.94&	119&	29.930	&0&	100\\ \hline
总计	&57.16	&315	&29.520&	0&	100\\ \hline
\end{tabular}
注： 1代表学习成绩低的同学；2代表学习层次居中的同学；3代表学习层次较好的同学。
\end{threeparttable}
```

代码结果图片：

![在这里插入图片描述](https://img-blog.csdnimg.cn/0fe5d8e096e54910973c821344703101.png#pic_center)

#### 4. 字号设置

由前文对表格整体的设置可知，当对表格整体进行设置的时候，只需在表格内容环境的外面进行相关设置，就可以改变表格的整体。  
同样的，字号也是一样，字号设置的位置决定了你的作用域在哪里。  
下面给出字体设置的相关参数：

|参数|含义|
|---|---|
|\small|小五|
|\large|小四|

[字体字号参数参考](https://blog.csdn.net/weixin_44026026/article/details/104096778)

# 三、复杂表

### 1、合并单元格

导入宏包 ==multirow==  
对行合并：使用 ==\multirow{合并行数}{*}{文本内容}==  
对列合并：使用 ==\multicolumn{合并列数}{c|}{文本内容}==  
对行列进行合并：使用 ==\multicolumn{合并列数}{|c|}{\multirow{合并行数}{*}{内容}}==

参考代码：

```c
\begin{table}[!ht]

\center
\begin{tabular}{|c|c|c|c|}\hline
\multicolumn{1}{|c|}{\multirow{2}{*}{aaaa}} & \multicolumn{3}{c|}{bbbb}\\ \cline{2-4}
 & cccc  & dddd & eeee \\ \hline
\multirow{2}{*}{aaaa}& 50 & 86 & 122  \\ \cline{2-4}
\multirow{2}{*}{ }& 5 & 78  & 107   \\ \hline
 3& 25 & 48  & 101  \\ \hline
 4& 28 & 60 & 106  \\ \hline
\end{tabular}

\end{table}

```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/9350ae5e2dbb4da8a4b96e107c7b2ab9.png#pic_center)

### 2、斜线表头

导入宏包==diagbox==  
利用 ==\diagbox{A}{B}{C}== 来写某个单元格的分块内容

代码参考：

```c
\centering
\begin{threeparttable}
\begin{tabular}{|c|c|c|c|c|c|} \hline

\diagbox{班级层次}{班级层次}&平均值	&个案数	&标准偏差	&最小值&最大值\\ \hline
1&	53.74&	77	&29.819&	4	&96\\ \hline
2	&57.60	&119&	28.971&	4	&100\\ \hline
3	&58.94&	119&	29.930	&0&	100\\ \hline
总计	&57.16	&315	&29.520&	0&	100\\ \hline
\end{tabular}
注： 1代表学习成绩低的同学；2代表学习层次居中的同学；3代表学习层次较好的同学。
\end{threeparttable}
```

代码结果图片：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/d03e9e5afd8c43c99e8549f219737482.png#pic_center)  
[斜线表头参考](https://blog.csdn.net/juechenyi/article/details/77116011)

# 五、常用表格模板代码

1.代码1：

```c
\begin{table*}[!ht]
%\usepackage{multirow}
\center
\caption{不同层次学生显著性分析}
\begin{threeparttable}
\resizebox{\linewidth}{!}{ 
\begin{tabular}{|c|c|c|c|c|c|c|c|} \hline


\multirow{2}{*}{} &\multirow{2}{*}{(I) 班级层次} &\multirow{2}{*}{(J) 班级层次} &\multirow{2}{*}{平均值差值 (I-J)} &\multirow{2}{*}{标准 错误} &\multirow{2}{*}{显著性} &\multicolumn{2}{c|}{95\% 置信区间}\\ \cline{7-8}

\multirow{2}{*}{}&\multirow{2}{*}{} &\multirow{2}{*}{} &\multirow{2}{*}{} &\multirow{2}{*}{} &\multirow{2}{*}{} &上限&下限   \\ \hline

\multirow{6}{*}{塔姆黑尼}&\multirow{2}{*}{1} &2&	-3.856	&4.313	&.753&	-14.26&	6.55  \\ \cline{3-8}
\multirow{6}{*}{}&\multirow{2}{*}{} & 3	&-5.201&4.368&	.553&	-15.74&	5.34 \\ \cline{2-8}

\multirow{6}{*}{}&\multirow{2}{*}{2} &1&	3.856&	4.313&	.753&	-6.55&	14.26  \\ \cline{3-8}
\multirow{6}{*}{}&\multirow{2}{*}{} &  3&	-1.345	&3.819&	.979	&-10.53&	7.84\\ \cline{2-8}

\multirow{6}{*}{}&\multirow{2}{*}{3} &1&	5.201&	4.368&	.553	&-5.34&	15.74  \\ \cline{3-8}
\multirow{6}{*}{}&\multirow{2}{*}{} & 2	&1.345&	3.819&	.979&	-7.84	&10.53 \\ \hline

\multirow{2}{*}{邓尼特 t（双侧）} & 1&	3	&-5.201&4.321	&.384&	-14.83	&4.43 \\ \cline{2-8}
\multirow{2}{*}{} & 2&	3&	-1.345	&3.830	&.917	&-9.88	&7.19\\ \hline

\end{tabular}
}	
\begin{tablenotes}
\item[1] 1代表学习成绩低的同学；2代表学习层次居中的同学；3代表学习层次较好的同学。
\end{tablenotes}
\end{threeparttable}
\end{table*}

```

代码1结果图：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/0365585f06ea4bb6b9240ac0324e6772.png#pic_center)

# 总结