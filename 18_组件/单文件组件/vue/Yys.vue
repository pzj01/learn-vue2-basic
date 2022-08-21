<template>
  <div>
    <h2>游戏名: {{ name }}</h2>
    <h2>服务器: {{ server }}</h2>
    <yys-rule></yys-rule>
  </div>
</template>

<script>
import YysRule from './YysRule.vue';
export default {
  name: "Yys",
  data() {
    //函数形式是因为每次调用返回的内存地址但是不一样的,所以对象的值不会互相干扰
    return {
      name: "阴阳师",
      server: "犬夜叉",
    };
  },
  components: {
    YysRule,
  }
};
</script>