export default {
    //使用模块化要开启命名空间
    namespaced: true,
    actions: {
        //求和
        oddAdd(context, value) {
            if (context.state.n % 2) {
                //添加需要执行的行为和要使用到的数据
                context.commit("ADD", value);
            }
        },
        //延时求和
        waitAdd(context, value) {
            setTimeout(() => {
                context.commit("ADD", value);
            }, 1000);
        },
    },
    mutations: {
        //相加
        ADD(state, value) {
            if (!value) {
                state.n++;
            } else {
                state.n += value;
            }
        },
        //相减
        SUBTRACT(state, value) {
            if (!value) {
                state.n--;
            } else {
                state.n -= value;
            }
        },
    },
    state: {
        n: 0,
        school: "B站",
        subject: "前端",
    },
    getters: {
        tenTimes(state) {
            return state.n * 10;
        },
    },
};
