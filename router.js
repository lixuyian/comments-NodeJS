// 1.引包
var express = require('express');
var comments = require('./comments');
var bodyParser = require('body-parser');
// 2.创建路由容器
var router = express.Router();
// 3.把路由挂载到router容器上
router.use(bodyParser.urlencoded({exten7ded:false}));
// 把内容转化成json格式
router.use(bodyParser.json());
// 4.创建基本路由
router.get('/',function(req,res){
    // 添加app.engine引擎后，art-template给express提供了render方法
    // express默认页面放在views中
    // 如果要改变路径，使用app.set('views',assert)
    res.render('index.html',
    // {
    //     name:"abc",
    //     age:18,
    //     fruits:[
    //         "apple","banana","pears","peach","orange"
    //     ]
    // }
    {
        // key  : value
        comments:comments
    }
    )
})
router.get('/post',function(req,res){
    // res.send('这里是post页面')
    //express提供send方法，用于向客户端写入数据，默认声明了相应头，所以这里的文字不会乱码，但send不能用于渲染data
    res.render('post.html');
})
router.post('/post',function(req,res){
    var content = req.body;
    comments.unshift(content);
    res.redirect('/');
})

// 4.导出
module.exports = router;