// ==UserScript==
// @name         轻书架更新token
// @namespace    Schwi
// @version      0.1
// @description  获取用户名和更新已保存的轻书架token
// @author       Schwi
// @exclude      https://www.acgdmzy.com*id
// @match        https://www.acgdmzy.com/*
// @grant        none
// ==/UserScript==


window.onload=function(){

    //展开头像
    if ( localStorage.getItem('token') != null ) {
        document.getElementsByClassName("v-avatar ml-1")[0].click();
    }
    //获取token和用户名，如果token不一致则更新
    setTimeout(function(){
        var username
        if ( localStorage.getItem('token') == null ) {
            username = null
        } else {
            username = document.getElementsByClassName("v-list-item__title")[7].innerText;
            sessionStorage.setItem('username',username);
            if ( localStorage.getItem('user_app_' + username) != null && localStorage.getItem('user_app_' + username) != localStorage.getItem('token')) {
                localStorage.setItem('user_app_' + username,localStorage.getItem('token'));
            }
        }
    },50);
    //收起头像
    setTimeout(function(){
        if ( localStorage.getItem('token') != null ) {
            document.getElementsByClassName("v-avatar ml-1")[0].click();
        }
    },100);

}
