<template>
  <div>
    <h2>自定义事件</h2>
    <button @click="DiyEvent">触发</button>
    <br>
    <button @click="unbind">解绑</button>
    <br>
    <button @click="death">销毁该组件</button>
  </div>
</template>

<script>
export default {
    name:"Diy",
    data () {
        return {
          message:"我是自定义的数据"
        }
    },
    methods: {
        DiyEvent() {
            this.$emit("diy-event",this.message);
        },
        unbind() {
            this.$off("diy-event");//解绑单个事件
            // this.$off(["diy-event","demo"]);//解绑多个事件
            //  this.$off();//默认解绑所有的自定义事件
        },
        death() {
            this.$destroy();
        }
    }
}
</script>

<style scoped>

</style>
    