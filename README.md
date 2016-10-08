# jnu-lib-mobile
来自第三方的图书馆前端优化项目 

我大JNU图书前端实在惨不忍睹, 主要问题有:

- 检索速度太慢
- 无法适配移动端

实际上后端是没问题的, 关键是前端加载时间过长, 所以做了个壳, 配合抓数据的后端API和用Vue写的简单前端便有了这个Demo

Demo
----
www.jnulib.us
ps: 我就是打死不备案, 所以这个Demo随时暴毙. 嗯.

如何运行
---
1. 打开`src/config/config.js`, 设置好后端的API地址, 开发时请务必使用本地服务器
2. `npm run build`
3. 扔到静态的Http服务上, 比如我在腾讯云上搭了个nginx. 

ps. 关于后端, 用SparkJava内建的Jetty运行即可, 不需要额外的servlet容器

TODOs
-----
* 检索翻页
* 缓存检索结果
* 新闻通知
* 登录
* 查询借阅记录
* 预约
* 发送书籍短信

吐槽
---
- 这种项目必须用中文写说明好吧
- 并没有使用太高深的技术, 甚至vuex都没有, 因为不需要, Store层只是一个可以随便存取的对象而已.
- 要毕业了! 要失业了! T_T
