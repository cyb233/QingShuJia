# <a name="title">常见问题</a>
### 关于非第三方APP的问题，即浏览器与PWA，以及网站本身的使用说明，请阅读[轻书架官方Q&A](https://afdian.net/p/7b6f839ab6ee11eb917e52540025c377)
#### 如有以下常见内容之外的问题，可通过APP内问题反馈，或<a href="https://github.com/cyb233/QingShuJia/issues">在GitHub提出issue</a>，或发送邮件至 Schwi@Foxmail.com

<center><div>目录</div></center>

> 0. <a href="#download">下载地址</a>
> 1. <a href="#page">网页白屏/阅读页排版异常/页面无法拖动</a>
> 2. <a href="#font">字体加载不出/空白/方框/乱码</a>
> 3. <a href="#load">网站打不开/页面持续处于加载状态</a>
> 4. <a href="#toolbar">第三方APP有时显示出了网站本身的顶栏等</a>
> 5. <a href="#crash">第三方APP安装闪退</a>
> 6. <a href="#virus">第三方APP提示风险/报毒</a>
> 7. <a href="#install">第三方APP无法安装</a>
> 8. <a href="#login">无法登录/无法注册/收不到注册邮件</a>
> 9. <a href="#usage">第三方APP部分操作说明</a>
> 10. <a href="#save">第三方文件保存路径</a>
> 11. <a href="#error">注册/登陆提示</a>
---
0. <a name="download" href="#download">下载地址：</a>

> [最新release](https://github.com/cyb233/QingShuJia/releases/latest)
> - 如果直连打不开/下不动，可尝试借助以下几个链接：
>     - https://ghproxy.com/
>     - http://app.schwi.xyz/qsj

1. <a name="page" href="#page">网页白屏/阅读页排版异常/页面无法拖动：</a>

> WebView版本过旧的解决：  
> - 网站最低要求的WebView内核版本为80，请检查WebView
>     - 第三方APP检查WebView版本：APP内“关于”页，网站正常使用要求不低于80版本  
> 解决方案：  
> 1. Google play搜索更新`Android System WebView`(或从别处下载，只要版本高于80即可)
>     - 如果手机用的是原生WebView，这时就应该已经正常了，如果是定制版，请继续往下看
> 2. 设置→关于手机→连点“软件版本号”启用开发者选项
> 3. 设置→开发者选项→WebView实现→看看有没有新安装的WebView的选项
> 4. 如果有，就换到新安装的WebView，如果没有，就换手机//换官方APP//百度一下你的手机型号怎么升级WebView  

2. <a name="font" href="#font">字体加载不出/空白/方框/乱码：</a>

> 网站需要加载字体包，加载不出请尝试刷新，还不行就清空APP缓存再刷新，可能是网络问题导致的加载失败，建议在良好的网络环境下使用本站

3. <a name="load" href="#load">网站打不开/页面持续处于加载状态：</a>

> 通常是网络原因，建议在良好的网络环境下使用本站  
> 能打开页面但是无法登陆等，通常是由于token异常或ip更换，尝试清除缓存或重启路由和设备

4. <a name="toolbar" href="#toolbar">第三方APP有时显示出了网站本身的顶栏等</a>

> 刷新一下就好

5. <a name="crash" href="#crash">第三方APP安装闪退：</a>

> 1. QQ内点击安装包闪退：请从文件管理中安装APP  
>> PS：QQ文件下载路径：`Android/data/ com.tencent.mobileqq/ Tencent/QQfile_recv/`  
> 2. 应用包安装程序闪退：建议直接放弃，等待后续解决

6. <a name="virus" href="#virus">第三方APP提示风险/报毒：</a>

> 大概是安装更新包的部分代码导致的，无视即可

7. <a name="install" href="#install">第三方APP无法安装：</a>

> 请确保手机安卓版本不低于Android 6.0，如果仍无法解决请反馈

8. <a name="login" href="#login">无法登录/无法注册/收不到注册邮件：</a>

> **这些事儿真的跟第三方APP无关啊！** 请阅读[轻书架官方Q&A](https://afdian.net/p/7b6f839ab6ee11eb917e52540025c377)
<!---总是收到这类反馈我想骂人了怎么办？填问卷前一个个都根本不审题的--->
9. <a name="usage" href="#usage">第三方APP部分操作说明：</a>
> - 登录后：点击头像进入个人中心  
> - 阅读时：全屏状态可长按屏幕暂时退出全屏，再次长按进入全屏  
> - 阅读时：长按图片可保存图片  
> - 阅读时：返回键会直接后退至最后访问的书籍信息页面  

10. <a name="save" href="#save">第三方文件保存路径：</a>

⁻ 由于第三方APP数据保存路径曾多次变更，此处数据以最新版本为准
> - 下载更新：`Android/data/ com.schwi.qingshujia/ Download/`
> - 保存图片：`Pictures/`
> - 下载书籍：`Documents/`

11. <a name="error" href="#error">注册/登陆提示：</a>

  - 提示 未知错误
> 通常是ip或账号被封禁  
> 建议先更换ip再尝试登录，如仍提示未知错误，则账号被封禁

  - 提示 access denied
> 访问被拒，多半是正在维护或网络不好

  - 提示 该用户不存在
> 输错账号或因为未验证邮箱而被删号

  - 其他提示
> 请先尽量自己理解文字含义，如果不能理解可在官群咨询

0. <a name="fuck" href="#title">关于评论我网页套壳之类：</a>

> 懒得写UI，况且网站本身UI美观度也很高，单页应用流畅度也没问题，觉得不好的你行你上就是了，难为我一个航海技术大专毕业生没意思
<!---我这个人偶尔心眼小一下，就算是网页套壳也花了我不少功夫的好吧，而且在生日看到有人这么说超不开心的--->
