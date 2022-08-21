<template>
  <div class="HomeBasic">
    <h2>Home</h2>
    <div>
      <div class="container">
        <!-- <a href="#" class="HomeActive">News</a>
        <a href="#">Message</a> -->
        <router-link class="HomeRoute" active-class="HomeActive" to="/Home/News">News</router-link>
        <router-link class="HomeRoute" active-class="HomeActive" to="/Home/Message">Message</router-link>
      </div>
      <!-- 该属性缓存的组件是根据组件的name来缓存的 -->
      <keep-alive include="Message">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
    name:"Home",
    // mounted () {
    //   console.log("Home组件挂载完毕");
    // },
    // beforeDestroy () {
    //   console.log("Home组件即将销毁");
    // },
}
</script>

<style scoped>
    h2 {
        width: 100%;
        height: 40px;
        text-align: center;
        font-size: 32px;
        line-height: 40px;
        border-bottom: #fff 1px solid;
        box-sizing:content-box;
        padding-bottom: 10px;
    }
    .HomeBasic {
      border: #fff 1px solid;
      padding: 20px;
    }
    .container {
      width: 100%;
      height: 30px;
    }
    .HomeRoute {
      width: 50%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      display: inline-block;
      text-decoration: none;
      color: #fff;
      border-left:1px #fff solid ;
      border-right:1px #fff solid ;
      border-bottom:1px #fff solid ;
    }
    .HomeActive {
      background-color: rgb(19, 34, 48);
    }
</style>