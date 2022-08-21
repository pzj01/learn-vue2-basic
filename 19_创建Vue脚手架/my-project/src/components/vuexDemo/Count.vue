<template>
  <div class="basic">
    <h2>当前的和为:{{n}}</h2>
    <h2>当前的放大10倍的和为:{{tenTimes}}</h2>
    <h2>我在{{school}},学习{{subject}}</h2>
    <input type="number" v-model.trim.number="value">
    <button @click="add(value)">+</button>
    <button @click="subtract(value)">-</button>
    <button @click="oddAdd(value)">当前求和为奇数再加</button>
    <button @click="waitAdd(value)">等一等再加</button>
    <h4>下方总人数是:{{personList.length}}</h4>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
export default {
    name:"Count",
    data () {
        return {
            value:0
        }
    },
    methods: {
        //自己写的
        // addOne() {
        //     this.$store.commit('ADD',this.value);
        // },
        // subtractOne() {
        //     this.$store.commit("SUBTRACT",this.value);
        // },
        // oddAdd() {
        //     this.$store.dispatch("oddAdd",this.value);
        // },
        // waitAdd() {
        //     this.$store.dispatch("waitAdd",this.value);
        // },
        //通过mapMutations生成的(对象写法),适合方法名和操作名不一样(推荐)
        // ...mapMutations({add:"ADD",subtract:"SUBTRACT"}),
        //通过mapMutations生成的(数组写法),适合方法名和操作名一样
        // ...mapMutations(["ADD","SUBTRACT"])
        //通过mapActions生成的(对象写法),适合方法名和行为名不一样
        // ...mapActions({oddAdd:"oddAdd",waitAdd:"waitAdd"})
        //通过mapActions生成的(数组写法),适合方法名和行为名一样(推荐)
        // ...mapActions(["oddAdd","waitAdd"])
        ...mapMutations("count",{add:"ADD",subtract:"SUBTRACT"}),
        ...mapActions("count",["oddAdd","waitAdd"]),
    },
    computed: {
        //自己写的
        // n() {
        //     return this.$store.state.n;
        // },
        // tenTimes() {
        //     return this.$store.getters.tenTimes;
        // },
        // school() {
        //     return this.$store.state.school;
        // },
        // subject() {
        //     return this.$store.state.subject;
        // }
        //mapState函数生产(对象写法),用于计算属性名和数据源的名不一样
        // ...mapState({n:"n",school:"school",subject:"subject"}),
        //mapState函数生产(数组写法),用于计算属性名和数据源的名一样
        // ...mapState(["n","school","subject","personList"]),
        // ...mapGetters(["tenTimes"])
        ...mapState("count",["n","school","subject"]),
        ...mapState("person",["personList"]),
        ...mapGetters("count",["tenTimes"])
    },
}
</script>

<style scoped>
    .basic {
        /* width: 200px; */
        /* height: 300px; */
        font-family: 'Courier New', Courier, monospace;
        color: #fff;
        display: flex;
        flex-flow:column wrap;
        justify-content: space-between;
    }
   .basic h2 {
    white-space: nowrap;
    height: 60px;
    line-height: 60px;
   }
    input {
        width: 50px;
    }
    button {
        width: 80px;
    }
</style>