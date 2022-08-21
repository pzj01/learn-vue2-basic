//该文件用于准备Vuex中最核心的store
//引入vue 
import Vue from "vue";
//引入Vuex
import vuex from "vuex";
import countOptions from "./options/countOptions";
import personOptions from "./options/personOptions";
//使用插件
Vue.use(vuex);
// //创建actions,用于响应组件的动作
// const actions = {};//定义行为 
// //创建mutations,用于操作数据
// const mutations = {};//定义操作
// //创建state,用于保存数据
// const state = {};
// //创建getters,用于将state中的数据进行加工
// const getters = {};
//创建store,并导出
export default new vuex.Store({
    modules: {
        count:countOptions,
        person:personOptions
    }
});

