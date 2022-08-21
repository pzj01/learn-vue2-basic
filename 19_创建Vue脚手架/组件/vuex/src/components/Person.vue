<template>
  <div class="basic">
    <h1>人员列表</h1>
    <h4>上方的和是:{{n}}</h4>
    <h4>上方的放大10倍的积是:{{tenTimes}}</h4>
    <h2>人员姓氏:{{eachLastName}}</h2>
    <input @keydown.enter="addItem" type="text" placeholder="请输入姓名" v-model.trim="value">
    <ul>
        <li v-for="p of personList" :key="p.id">
            {{p.name}} ———————— 个性签名:{{p.PersonalizedSignature}}
        </li>
    </ul>
  </div>
</template>

<script>
import {  mapState,mapGetters } from "vuex";
export default {
    name:"Person",
    data () {
        return {
            value:""
        }
    },
    computed: {
        ...mapState("person",["personList"]),
        ...mapState("count",["n"]),
        ...mapGetters("count",["tenTimes"]),
        eachLastName() {
            return this.$store.getters["person/eachLastName"];
        }
    },
    methods: {
        // ...mapActions(["addItem"])
        addItem() {
            //派遣行为
            this.$store.dispatch('person/addItem', this.value);
            console.log(this.$store);
            //清空输入框
            this.value = "";
        }
    }
}
</script>

<style scoped>
    .basic {
        margin: 50px;
        color: #fff;
    }

</style>