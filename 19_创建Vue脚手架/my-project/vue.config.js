const { defineConfig } = require('@vue/cli-service');
//Vue脚手架配置对象
module.exports = defineConfig({
  devServer:{
    // open:true,
    hot:true,
    //开启服务器代理,指定返回数据的服务器
    // proxy:"http://localhost:3000"//指定单个代理
    // proxy:{
    //   //代理前缀
    //   "/api":{
    //     //代理请求的服务器地址
    //     target:"http://localhost:3000",
    //     //重写url路径,使用正则表达式将前缀替换
    //     pathRewrite:{
    //       "/api":""
    //     },
    //     ws:true,//由于支持websocket,websocket可以使服务器向浏览器发送请求
    //     changeOrigin:true//用于控制请求头中的host值
    //   }
    // }
  },
  // lintOnSave:false,//关闭ESlint语法检查
  transpileDependencies: true
})
