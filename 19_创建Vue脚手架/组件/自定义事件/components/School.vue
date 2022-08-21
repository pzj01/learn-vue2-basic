<template>
  <div class="test">
    <h2>学校名称: {{name}} </h2>
    <h2>学校地址: {{address}} </h2>
    <button @click="showMeg">点我显示名称</button>
  </div>
</template>

<script>
//局部混入
import { alertName,data } from "../mixin";
export default {
    name:"School",
    data () {
        return {
            name:"江西工业工程职业技术学院",
            address:"江西省萍乡市"
        }
    },
    //混入选项接收一个混入对象的数组。这些混入对象可以像正常的实例对象一样包含实例选项,这些选项将会被合并到最终的选项中
    mixins: [alertName,data],
    // mounted() {
    //     console.log("#",this.address);
    // }
}
</script>

<style scoped>
  .test {
    background-color: aqua;
  }
</style>