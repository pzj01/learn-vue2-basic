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
export default {
  name: "YysRule",
  data() {
    return {
      SSR: [
        { id: "001", name: "铃彦姬", type: "SSR" },
        { id: "002", name: "不见岳", type: "SSR" },
      ],
    };
  },
};
</script>