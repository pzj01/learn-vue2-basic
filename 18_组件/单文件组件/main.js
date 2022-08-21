//引入Vue.js
// import Vue from "../../vue_js/vue";
//引入应用程序入口
import App from "./vue/App.vue";
Vue.config.productionTip = false;
window.onload = function() {
    //创建Vue实例
    const vm = new Vue({
        //绑定根元素
        el:"#app",
        template:`<App></App>`,
        //注册组件
        components: {
            App,
        }
    });
};