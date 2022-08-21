<template>
  <div class="basic">
        <h2>{{listData.type}} 类型</h2>
         <!-- 定义一个插槽 等待开发者放入标签 -->
        <slot>我是默认值</slot>
        <!-- 具名插槽 -->
        <slot name="vue"></slot>
        <slot name="abc"></slot>
        <!-- <ul>
            <li v-for="(item,index) of listData.list" :key="index">
                {{item}}
            </li>
        </ul> -->
  </div>
</template>

<script>
export default {
    name:"Category",
    props: ["listData"]
}
</script>

<style scoped>
    .basic {
        padding: 20px;
        background-color: rgb(1, 22, 31);
        color: #fff;
        display: inline-block;
        display: inline-flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-around;
        transition: box-shadow .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .basic:hover {
        box-shadow: 0px 0px 10px rgb(1, 63, 92);
       
    }
    .basic>h2 {
        /* margin-bottom: 50px; */
        height: 60px;
        text-align: center;
        font-size: 36px;
        font-family:'Courier New', Courier, monospace;
    }
    .basic ul { 
        height: 50%;
        width: 100%;
        list-style: none;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        align-items:flex-start; 
        
    }
    .basic ul li {
        margin: 10px auto;
        font-family:'Courier New', Courier, monospace;
        color: rgb(255, 255, 255);
        font-size: 20px;
        transition: transform .3s;
    }
    .basic ul li:hover {
        transform: scale(1.5);
    }
    .basic img {
        width: 100px;
        height: 100px;
    }
    .basic a {
        display: block;
        text-decoration: none;
        color: #fff;
        font-size:24px;
        transition: transform .3s;
    }
    .basic a:hover {
        transform: scale(1.5);
    }
</style>