<template>
  <!-- 组件的结构 -->
  <div class=".demo">
    <h2>游戏名: {{ name }}</h2>
    <h2>
      最喜欢的从者: {{ slave }}<span v-if="show">({{ job }})</span>
    </h2>
    <button @click="showJob">点我解放职介</button>
  </div>
</template>

<script>
    // 组件交互的代码(数据,方法)
    export default {
        name:"Fgo",
        data() {
            return {
                name:"Fate/GO",
                slave:"摩根",
                job:"Berserker",
                show:false,
            }
        },
        methods: {
            showJob() {
                this.show = true;
            }
        },
    };
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: aquamarine;
    }
</style>