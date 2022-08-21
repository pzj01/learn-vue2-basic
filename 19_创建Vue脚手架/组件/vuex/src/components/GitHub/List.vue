<template>
  <div>
    <ul class="basic">
        <h1 v-show="information.isFirst">welcome you used.</h1>
        <h1 v-show="information.isLoading">Loading...</h1>
        <h1 v-show="information.errorMessage">请求出错了! 错误信息为{{information.errorMessage}}</h1>
        <li v-show="information.users.length" v-for="user of information.users" :key="user.id">
            <a :href="user.html_url">
                <img :src="user.avatar_url" alt="">
                <span>{{user.login}}</span>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
// import {nanoid} from "nanoid";
export default {
    name:"List",
    data () {
        return {
            information:{
                users:[],
                isFirst:true,
                isLoaling:false,
                errorMessage:""
            }
        }
    },
    methods: {
        upDate(data) {
            this.information = {...this.information,...data};
        }
    },
    mounted () {
        this.$bus.$on("updateListData",this.upDate);
    }
}
</script>

<style scoped>
    .basic {
        width: 80%;
        /* border: 1px solid black; */
        display: flex;
        list-style: none;
        margin: 0 auto;
        flex-flow: wrap;
        justify-content:space-between;
        align-content: space-between;
        padding: 10px;
    }
    .basic li {
        width: 25%;
    }
    .basic li a {
        margin: 10px auto;
        width: 80%;
        height: 160px;
        /* border: 1px solid gray; */
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        align-items: center;
        text-decoration: none;
        border-radius: 5%;
        transition: box-shadow .3s;
    }
    .basic li a:hover {
        box-shadow: 2px 2px 5px 1px black;
    }
    .basic li>a>img{
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
    .basic li>a span {
        font-family: 'Courier New', Courier, monospace;
        display: inline-block;
        color: black;
    }
</style>