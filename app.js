//express 不是node的核心模块，需要手动安装
// 1.引包
var express = require('express');
var fs = require('fs');
// 2.创建一个服务器引用程序实例
// var bodyParser = require('body-parser');
// 7.导入路由模块
var router = require('./router');
var app = express();
// 8.挂载router到app上
app.use(router);

// 5.使用express-art-template渲染html文件
app.engine('html',require('express-art-template'));
// 6.以下代码可以直接开放静态资源文件夹 从而引用css和图片
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));
// express 实例使用body-parser中间件
// app.use(bodyParser.urlencoded({exten7ded:false}));
// 把内容转化成json格式
// app.use(bodyParser.json());

// 3.开启端口
app.listen(3000,function(){
    console.log("express server is running");
})


