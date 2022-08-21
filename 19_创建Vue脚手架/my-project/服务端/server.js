//搭建一个微型服务器
//使用express框架,引入
const express = require("express");
//引入connect-history-api-fallback中间件,解决history模式的问题
const history = require("connect-history-api-fallback");
//引入文件模块
const fs = require("fs");
//创建一个服务
const serve = express();
//端口为3000
const port = 3000;
//必须在静态资源部署之前使用
serve.use(history());
//部署服务静态文件
serve.use(express.static("../dist"))
//使用promises封装
const p = new Promise((resolve, reject) => {
  //接收get请求
  serve.get("/bookCase", (req, res) => {
    //设置响应头跨域
    // res.setHeader("Access-Control-Allow-Origin","*")
    console.log("请求的资源是",req.url);
    console.log("请求来自",req.get("Host"));
    //当前文件
    fs.readFile(`${__dirname}\\data.json`, (error, data) => {
      //出错就调用reject
      if (error) {
        reject(error);
      }
      //没有出错就将文件传给promise对象
      resolve(data);
    });
    //接收回调
    p.then(data => {
      //文件内容发送给请求者
      res.send(JSON.parse(data));
    }).catch(reason => {
      //抛出错误
      throw reason;
    })
  });
});
//监听端口
serve.listen(port, () => {
  console.log(`正在监听${port}端口......`);
});
