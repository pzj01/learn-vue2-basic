<template>
  <div class="test">
    <h2>学生姓名: {{name}} </h2>
    <h2>学生年龄: {{age}} </h2>
    <button @click="showMeg">点我显示名称</button>
    <input type="text">
  </div>
</template>

<script>
import {alertName} from "../mixin"
export default {
    name:"Student",
    data () {
        return {    
            name:"张三",
            age:30
        }
    },
    mixins: [alertName]
}
</script>

<style scoped>
/* 加上scoped可以使同名的选择器不会发生冲突 */
  .test {
    background-color: aquamarine;
  }
</style>