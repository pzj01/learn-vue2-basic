<template>
  <div class="basic">
    <h1>Vue Router Demo</h1>
    <div class="histroy">
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
    </div>
    <div class="contentBox">
        <div class="nav">
            <!-- HTML原生的链接实现跳转页面 -->
            <!-- <a class="active" href="#">Home</a>
            <a href="#">About</a> -->

            <!-- 使用router -->
            <router-link replace class="route" active-class="active" to="/Home">Home</router-link>
            <router-link class="route" active-class="active" to="/About">About</router-link>
        </div>
        <div class="content">
            <!-- <Home ></Home>
            <About v-show="false"></About> -->
            <router-view></router-view>
        </div>
    </div>
     <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  </div>
</template>

<script>
export default {
    name:"Container",
    data () {
        return {
            value:"",
             pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      }
    },
    methods: {
        back() {
            this.$router.back();
            //使用go方法实现也行,go(1)
        },
        forward() {
            this.$router.forward();
        }
    }
}
</script>

<style scoped>
    .basic {
        width: 60%;
        min-width:800px ;
        color:#fff;
        padding: 20px;
        margin: 0 auto;
        background-color: rgb(38, 60, 79);
        box-shadow: 0px 0px 6px rgb(14, 27, 39);
        transition: box-shadow,height .3s;
    }
    .basic:hover {
        box-shadow: 0px 0px 10px rgb(1, 57, 114);
    }
    .basic h1 {
        font-size: 40px;
        border-bottom: 1px soild rgb(255, 255, 255);
        text-align: center;
        height: 100px;
    }
    .basic .contentBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .basic .contentBox .nav {
        border: 1px solid #fff;
        min-width: 100px;
        width: 20%;
        height: 100%;
    }
    .basic .contentBox .nav .route:nth-child(1){
        border-bottom:1px solid #fff ;
    }
    .basic .contentBox .nav .route {
        padding-left: 20px;
        color: rgb(255, 255, 255);
        font-size: 24px;
        text-decoration: none;
        display: block;
        height: 50px;
        line-height: 50px;
        transition: background-color .3s;
    }
    .default:hover {
        background-color: rgb(22, 46, 70);
    }
    .basic .contentBox .content {
        /* background-color: aqua; */
        width: 60%;
        display: inline-flex;
        flex-flow: column wrap;
    }
    .active {
        background-color: rgb(19, 34, 48);
    }
    .histroy {
        display: flex;
        justify-content: space-between;
        width: 20%;
        height: 40px;
        margin-bottom: 20px;
    }
    .histroy button {
        background-color: transparent;
        color: #fff;
        border: #fff 1px solid;
        width:80px;
        height: 100%;
        transition: background-color .3s;
    }
    .histroy button:hover {
        background-color:rgb(19, 34, 48) ;
    }
</style>