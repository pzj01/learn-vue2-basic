import axios from "axios";
import { nanoid } from "nanoid";
export default {
    namespaced: true,
    actions: {
        //创建和提交项目
        addItem(context, value) {
            if (!value) {
                return alert("输入不能为空!");
            }
            context.dispatch("getPersonalizedSignature", { id: nanoid(), name: value});
        },
        //获取个性签名
        getPersonalizedSignature(context,person) {
            //发送get请求
            axios.get("https://api.uixsj.cn/hitokoto/get")
            .then(response => {
                person.PersonalizedSignature = response.data;
                context.commit("ADD_ITEM",person);
            },reason => {
                throw reason;
            })
        }
    },
    mutations: {
        //添加人员
        ADD_ITEM(state, person) {
            state.personList.unshift(person);
        }
    },
    state: {
        personList: []
    },
    getters: {
        eachLastName(state) {
            let arr = [];
            state.personList.forEach(el => {
                arr.push(el.name[0]);
            });
            return `${arr}`;
        }
    },
};