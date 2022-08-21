<template>
  <div>
    <h1>{{message}}</h1>
    <ul class="normal">
        <li>
            <h2>书名:{{bookName}}</h2>
            <h2>作者:{{author}}</h2>
            <h2>作者年龄:{{authorAgeCopy}}</h2>
            <button @click="authorAgeCopy++">点我增加作者年龄</button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"BookCase",
    data () {
        return {
            message:"这是我的书架",
            authorAgeCopy:this.authorAge,
        }
    },
    // props: ["bookName","author","authorAge"] //简单接收
    //对接收的数据进行类型限制
    // props: {
    //     bookName:String,
    //     author:String,
    //     authorAge:Number
    // }
    //对接收的数据进行类型限制,以及必要性和默认值的设置
    props: {
        bookName:{
            type:String,//设置数据类型
            required:true,//设置该数据是否必要的
        },
        author:{
            type:String,
            required:true,
        },
        authorAge:{
            type:Number,
            default:40 //设置默认值
        }
    }
}
</script>

<style>
    .normal {
        list-style-type: none;
    }
</style>