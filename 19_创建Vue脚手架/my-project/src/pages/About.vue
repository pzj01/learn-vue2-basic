<template>
  <div class="AboutBasic">
    <h2>About</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log("About组件挂载完毕");
  },
  beforeDestroy() {
    console.log("About组件即将销毁");
  },
  //通过路由规则,进入该组件之前时调用
  beforeRouteEnter(to,from,next) {
    console.log("beforeRouteEnter",to,from);
    next();
  },
  //通过路由规则,离开该组件之前时调用
  beforeRouteLeave(to,from,next) {
    console.log("beforeRouteLeave",to,from);
    next()
  },
};
</script>

<style scoped>
h2 {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.AboutBasic {
  border: #fff 1px solid;
  padding: 20px;
}
</style>