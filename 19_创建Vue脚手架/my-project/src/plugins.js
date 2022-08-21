export default {
    //插件适合定义全局的配置
    install(Vue,) {
        //定义全局指令
        Vue.directive("fbind",{
            bind(el,binding) {
                el.value = binding.value;
            },
            inserted(el) {
                el.focus()
            },
            updata(el,binding) {
                el.value = binding.value
            }
        })
        //定义Vue原型方法,Vue实例对象和组件实例对象都能使用
        Vue.prototype.hello = function() {
            console.log("hello");
        }
    }
}