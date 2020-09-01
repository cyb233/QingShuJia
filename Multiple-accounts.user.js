// ==UserScript==
// @name         轻书架切换登录
// @namespace    Schwi
// @version      0.1
// @description  轻书架账号切换，在任意轻书架页面url后添加“/id”访问即可，需要当前浏览器打开期间至少打开过一次正常网站页面
// @author       Schwi
// @match        https://www.acgdmzy.com/*
// @grant        none
// ==/UserScript==

window.onhashchange=function(){
    console.log('页面变化：' + window.location.href);
    if ( /^.*\/id$/g.test(window.location.href) ){//判断url
        console.log('账号切换页');
        //获取token和用户名，如果token不一致则更新
        var username;
        if ( localStorage.getItem('token') == null ) {
			console.log('未获取到token，未登录');
            username = null;
        } else {
            username = sessionStorage.getItem('username');
			console.log('已登录' + username);
            if ( localStorage.getItem('user_app_' + username) != null && localStorage.getItem('user_app_' + username) != localStorage.getItem('token')) {
				console.log('更新token');
                localStorage.setItem('user_app_' + username,localStorage.getItem('token'));
            }
        }
        //导入HTML
        setTimeout(function(){
			console.log('载入账号切换页')
            document.head.innerHTML='<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">';
            document.body.innerHTML='<p id="login" "center"></p><form><fieldset><legend align="center">请选择账号:</legend><div align="center"><input type="radio" id="id0" name="contact" value="id0"><label for="id0" id="id00">账号1</label></input><br><input type="radio" id="id1" name="contact" value="id1"><label for="id1" id="id11">账号2</label></input><br><input type="radio" id="id2" name="contact" value="id2"><label for="id2" id="id22">账号3</label></input></div></fieldset></form><div align="center"><button type="submit" onclick="localStorage.removeItem(localStorage.getItem(\'id0\'));localStorage.removeItem(localStorage.getItem(\'id1\'));localStorage.removeItem(localStorage.getItem(\'id2\'));localStorage.removeItem(\'id0\');localStorage.removeItem(\'id1\');localStorage.removeItem(\'id2\');document.getElementById(\'id00\').innerText = \'账号1\';document.getElementById(\'id11\').innerText = \'账号2\';document.getElementById(\'id22\').innerText = \'账号3\';alert(\'已清空！\');">清空记录</button><button type="submit" onclick="var item = null;var obj = document.getElementsByName(\'contact\');for (var i = 0; i < obj.length; i++) {if (obj[i].checked) {num = i;item = obj[i].value;obj[i].checked = false;}}if (item == null) {alert(\'请选择账号！\');} else {var token = localStorage.getItem(\'token\');if ( token == null ) {alert(\'您还没有登录账号！\');} else {localStorage.setItem(item,username);localStorage.setItem(\'user_app_\' + username,token);document.getElementById(item + num).innerText = username;alert(\'已保存用户：\' + username);}}">添加/修改</button><button type="submit" onclick="var item = null;var obj = document.getElementsByName(\'contact\');for (var i = 0; i < obj.length; i++) {if (obj[i].checked) {item = obj[i].value;obj[i].checked = false;}}if (item == null) {alert(\'请选择账号！\');} else {var username = localStorage.getItem(item);if ( username == null ) {alert(\'您还没有保存账号！\');} else {var token = localStorage.getItem(\'user_app_\' + username);localStorage.setItem(\'token\',token);alert(\'已切换用户：\' + username);window.location.href=\'\/#\/home\';}}">切换账号</button></div>';
        },100);
        //修改选项名
        setTimeout(function(){
			console.log('修改页面内容');
            if ( username != null ){
                document.getElementById('login').innerText = '当前登录用户昵称为：' + username;
            } else {
                document.getElementById('login').innerText = '当前未登录';
            }
            if ( localStorage.getItem('id0') != null ) {
                document.getElementById('id00').innerText = localStorage.getItem('id0');
            }
            if ( localStorage.getItem('id1') != null ) {
                document.getElementById('id11').innerText = localStorage.getItem('id1');
            }
            if ( localStorage.getItem('id2') != null ) {
                document.getElementById('id22').innerText = localStorage.getItem('id2');
            }
        },150)
    } else {
        console.log('获取token和用户名，如果token不一致则更新');
        //展开头像
        if ( localStorage.getItem('token') != null ) {
			console.log('展开头像');
            document.getElementsByClassName("v-avatar ml-1")[0].click();
        }
        //获取token和用户名，如果token不一致则更新
        setTimeout(function(){
            var username;
            if ( localStorage.getItem('token') == null ) {
				console.log('未获取到token，未登录');
                username = null;
            } else {
                username = document.getElementsByClassName("v-list-item__title")[7].innerText;
                sessionStorage.setItem('username',username);
                if ( localStorage.getItem('user_app_' + username) != null && localStorage.getItem('user_app_' + username) != localStorage.getItem('token')) {
					console.log('token不一致,更新token');
                    localStorage.setItem('user_app_' + username,localStorage.getItem('token'));
                }
            }
        },50);
        //收起头像
        setTimeout(function(){
            if ( localStorage.getItem('token') != null ) {
				console.log('收起头像');
                document.getElementsByClassName("v-avatar ml-1")[0].click();
            }
        },100);
    }
}
