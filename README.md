https://www.npmjs.com/package/express

#1. 安装环境
```
(1)npm install express -g    // web应用开发框架
(2)npm install express-generator -g  // 安装express脚手架
```

#2. 创建一个工程
```
(1)express myapp    // 创建出来的是jade模板
     express -e myapp     // ejs模板-适合前端
(2)cd myapp && npm install     // 下载依赖
(3)npm start     // 以package.json创建这个脚本
(4)修改及重启node服务
(5)npm i -g node-dev，在package.json里改成node-dev ./bin/www就可以自动重启服务器了
```

#3. Features
让我们快速上手并可以更加简洁更加方便的写出一个http服务
- Robust routing: 健壮的路由系统
- Focus on high performance: (设计思路、并不是功能点) 专注高性能、功能和性能的取舍上选择了性能
- Super-high test coverage: (设计思路、并不是功能点) 广泛的测试覆盖率
- HTTP helpers (redirection, caching, etc): 帮你处理http请求能力、快速处理302、304等
- View system supporting 14+ template engines: 支持14多种模版引擎
- Content negotiation: 帮你处理http请求能力、快速处理accept头不内容
- Executable for generating applications quickly: 提供了一些列的脚手架

#4. 核心功能
- 路由
- request/response简化
--request: pathName、query等
--response: send()、json()、jsonp()等