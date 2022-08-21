<template>
  <div>
    <ul>
      <li v-for="rule of SSR" :key="rule.id">
        式神:{{ rule.type }} 稀有度:{{ rule.name }}
      </li>
    </ul>
  </div>
</template>

<script>
//引入发布订阅库
// import pubsub from "pubsub-js";
export default {
  name: "YysRule",
  data() {
    return {
      SSR: [
        { id: "001", name: "铃彦姬", type: "SSR" },
        { id: "002", name: "不见岳", type: "SSR" },
      ],
      pubId:"",
    };
  },
  methods: {
    recientRole(messageName,role) {
      console.log(`收到${messageName}消息`);
      role.type === "SSR" && this.SSR.push(role);
    }
  },
  mounted () {
    //发布订阅
    this.subId = this.$pubsub.subscribe('铃鹿御前',this.recientRole);
  },
  beforeDestroy () {
    //取消订阅
    this.$pubsub.unsubscrible(this.subId);
  }
};
</script>