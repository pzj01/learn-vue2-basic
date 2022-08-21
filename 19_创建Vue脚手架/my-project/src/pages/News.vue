<template>
  <div>
    <ul class="NMbasic">
        <li v-for="(item) of a" :key="item.id">
            <!-- 路由传参:字符串写法 -->
            <!-- <router-link class="NMRoute" :to="`/Home/News/Detail?title=${item.name}`">{{item.name}}</router-link> -->
            <!-- 路由传参:对象写法 -->
            <router-link  class="NMRoute" :to="{
                name:'细节',
                params:{
                    id:item.id,
                    title:item.name

                }
            }">{{item.name}}</router-link>
            <button @click="pushShow(item)">push</button>
            <button @click="replaceShow(item)">replace</button>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import {nanoid} from "nanoid";
export default {
    name:"News",
    data () {
        return {
            a:[
                {id:nanoid(),name:"蜗居时代"},
                {id:nanoid(),name:"牛逼时代"},
                {id:nanoid(),name:"雀食时代"},
                {id:nanoid(),name:"果汁时代"},
            ]
        }
    },
    methods: {
        pushShow(item) {
            this.$router.push({
                name:'细节',
                params:{
                    id:item.id,
                    title:item.name

                }
            })
        },
        replaceShow(item) {
            this.$router.replace({
                name:'细节',
                params:{
                    id:item.id,
                    title:item.name

                }
            })
        }
    }
}
</script>

<style>
    .NMbasic {
        list-style: none;
        margin-bottom: 20px;
    }
    .NMbasic li {
        position: relative;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        border-left:1px #fff solid ;
        border-right:1px #fff solid ;
        border-bottom:1px #fff solid ;
        transition: background-color .5s;
    }
    .NMbasic li button {
        color: #fff;
        background-color: transparent;
        border: none;
        height: 29px;
        line-height: 29px;
        margin: 0 5px ;
        transition: color,transform .3s;
    }
    .NMbasic li button:hover {
        color: rgb(68, 222, 132);
        transform: scale(1.1);
    }
    .NMbasic li:hover {
        background-color: rgb(15, 31, 50);
    }
    .NMbasic li::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        right: 10px;
        top: 10px;
        border-radius: 50%;
        background-color: rgb(14, 225, 116);
        opacity: 0;
        transition: opacity .5s;
    }
    .NMbasic li:hover::after {
        opacity: 1;
    }
</style>