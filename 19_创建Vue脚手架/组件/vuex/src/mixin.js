//混合方法和数据
export const alertName = {
    methods: {
        showMeg() {
            alert(this.name);
        }
    }
};
export const data = {
    data(){
        return {
            x:100,
            y:100
        }
    }
}
// export const lifeCycleHook = {
//     mounted() {
//         console.log("@",this.name);
//     }
// }