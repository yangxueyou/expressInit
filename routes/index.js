var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // 这个斜杠是二级路由
  res.render('index', { title: 'Express' }); // 渲染index.ejs模板到浏览器中
});

router.get('/a', function(req, res, next) { // 这个斜杠是二级路由
  res.render('error', { title: 'Express' }); // 渲染error.ejs模板到浏览器中
});

module.exports = router;
