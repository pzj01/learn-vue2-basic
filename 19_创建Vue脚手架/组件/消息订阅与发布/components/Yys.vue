<template>
  <div>
    <h2>游戏名: {{ name }}</h2>
    <h2>服务器: {{ server }}</h2>
    <yys-rule></yys-rule>
    <button @click="publishMessage">发布消息</button>
  </div>
</template>

<script>
//引入发布订阅库
// import pubsub from "pubsub-js";
import YysRule from "./YysRule.vue";
export default {
  name: "YysItem",
  data() {
    //函数形式是因为每次调用返回的内存地址但是不一样的,所以对象的值不会互相干扰
    return {
      name: "阴阳师",
      server: "犬夜叉",
      message:{name:"铃鹿御前",type:"SSR"}
    };
  },
  methods: {
    publishMessage() {
      //发布消息
      this.$pubsub.publish('铃鹿御前',this.message);
    }
  },
  components: {
    YysRule,
  },
};
</script>