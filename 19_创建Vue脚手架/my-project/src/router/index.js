//引入vue
import Vue from "vue";
//引入vue-router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";
const router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/Home",
            component:Home,
             //meta可以存放我们想放的自定义属性
             meta:{isAuth:true,title:"主页"},
            children:[
                {
                    path:"News",
                    component:News,
                    children:[
                        {
                            name:"细节",
                            path:"Detail/:id/:title",
                            component:Detail,
                             //props的第一种写法,对象式,数据为key-value的形式传入,不过是死数据,使所以这种方式不推荐使用
                            // props:{a:1,b:"hello"},
                            
                            //props第二种写法,布尔值,值如果为真,就会把该路由组件收到的params(不包括query)参数,作为props的形式传入,
                            //这样就可以直接定义接收了,可以不用写$route.params
                            props:true,
                            //配置独享路由守卫
                            beforeEnter(to,from,next) {
                                console.log(to,from,next());
                            }
                            
                        }
                    ]
                },
                {
                    path:"Message",
                    component:Message,
                    children:[
                        {
                            path:"Detail",
                            component:Detail,
                            //props第三种写法,函数式,接收一个参数$route,返回一个对象,该路由组件使用props接收这个对象中的值
                            props({query:{title}}) {
                                return {
                                    title:title
                                }
                            }
                        }
                    ]
                },
            ]
        },
        {
            path:"/About",
            component:About,
        },
    ]
});
//添加全局前置路由守卫——路由初始化和每次切换之前的时候调用
router.beforeEach((to, from, next) => { 
    // console.log(to,from);  
    // //如果为true就检验
    // if(to.meta.isAuth) {
    //     //.....
    //     alert("您没有权限查看！")
    // }else {
    //     next();
    // }
    console.log("beforeEach",to,from);
    next();
});
//添加全局后置路由守卫——路由初始化和每次切换之后的时候调用
router.afterEach((to,from) => {
    console.log("afterEach",to,from);
    // document.title = to.meta.title || "";
}) 
export default router;