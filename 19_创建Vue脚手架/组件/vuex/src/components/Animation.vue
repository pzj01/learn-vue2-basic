<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
    <h1 class="default" v-show="isShow">你好啊!</h1>
    </transition>
    <transition name="yys" appear>
        <h1 class="default" v-show="isShow">阴阳师</h1>
    </transition>
    <transition-group name="bookCase" appear>
            <li v-show="book.isShow" v-for="book of bookCase" :key="book.id">
                书名:{{book.name}}
            <button @click="book.isShow = !book.isShow">显示/隐藏</button>
            </li>
    </transition-group>
  </div>
</template>

<script>
import {nanoid} from "nanoid";
export default {
    name:"Animation",
    data () {
        return {
            isShow:true,
            bookCase:[
                {id:nanoid(),name:"剑来",isShow:true},
                {id:nanoid(),name:"玄浑道章",isShow:true},
                {id:nanoid(),name:"大道争锋",isShow:true},
                {id:nanoid(),name:"雪中悍刀行",isShow:true},
                {id:nanoid(),name:"圣堂",isShow:true},
            ]
        }
    }
}
</script>

<style scoped>
    .default {
        background-color: aquamarine;
        width: 50%;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    .v-enter-active {
        animation: move 0.5s ;
    }
    .v-leave-active {
        animation: move 0.5s reverse;
    }
    @keyframes move {
        from{
            transform: translateX(-100%);
        } 
        to {
            transform: translateX(0%);
        }
    }
    /* 进入的启动,离开的终点 */
    .yys-enter,.yys-leave-to {
        transform: translateX(-100%);
    }
    /* 进入的过程中,离开的过程中 */
    .yys-enter-active,.yys-leave-active {
        transition: all .3s;
    }
    /* 进入的终点,离开的起点 */
    .yys-enter-to,.yys-leave {
        transform: translateX(0%);
    }
    /* .yys-leave {
        transform: translateX(0%);
    } */
    /* .yys-leave-to {
        transform: translateX(-100%);
    } */
    .bookCase-enter-active,.bookCase-leave-active {
         transition: all 1s;
    }
    .bookCase-enter,.bookCase-leave-to {
        opacity: 1;
    }
    .bookCase-enter-to,.bookCase-leave {
        opacity: 0;
    }
</style>