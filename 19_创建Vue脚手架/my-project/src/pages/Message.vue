<template>
  <div>
     <ul class="NMbasic">
        <li v-for="(item,i) of a" :key="i">
            <router-link class="NMRoute" :to="`/Home/Message/Detail?title=${item.name}`">{{item.name}}</router-link>
            <input type="text" placeholder="请输入...">
        </li>
    </ul>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:"Message",
     data () {
        return {
            a:[
                {name:"牛逼商店"},
                {name:"玩家商店"},
                {name:"嘿嘿商店"},
                {name:"卧槽商店"},
            ]
        }
    },
    //激活时调用
    activated () {
      console.log("组件被激活了");
    },
    //失活时调用
    deactivated () {
      console.log("组件失活了");
    }
}
</script>

<style>
  .NMRoute {
    display: inline-block;
    height: 100%;
    width: 50%;
    text-decoration: none;
    color: #fff;
    padding-left: 20px;
    /* border-right: 1px #fff solid; */
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  input {
    outline: none;
    background-color: transparent;
    color: #fff;
    padding-left: 4px;
  }
  input::placeholder {
    color: rgb(192, 178, 178);
  }
</style>