<template>
  <div class="inputBox">
    <input
      @keydown.enter="addItem"
      type="text"
      v-model.trim="value"
      placeholder="请输入你的任务,按回车键确认"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    addItem() {
      this.$emit("addItem", this.value);
      this.value = "";
    },
  },
  //接收父组件的函数
  // props: ["addItem"],
};
</script>

<style scoped>
.inputBox {
  text-align: center;
  width: 100%;
}
input {
  position: relative;
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  transition: border 0.3s;
  line-height: 40px;
}
input:hover {
  border: 2px solid rgb(83, 192, 222);
}
input::placeholder {
  color: gray;
}
</style>