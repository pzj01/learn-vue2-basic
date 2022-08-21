<template>
  <div class="listBox">
    <label class="item" :for="item.id" v-for="item of TodoList" :key="item.id">
      <input
        class="itemCheckbox"
        type="checkbox"
        :value="item.title"
        :id="item.id"
        v-model="item.done"
      />{{ item.title }}
      <button @click="deleteItem(item)" class="cancelBtn">删除</button>
    </label>
  </div>
</template>

<script>
export default {
  name: "List",
  methods: {
    deleteItem(item) {
      this.$emit("deleteItem",item);
    }
  },
  props: ["TodoList"],
};
</script>

<style scoped>
.listBox {
  width: 100%;
  margin: 10px 0;
  border-bottom: 1px solid gray;
}
.item {
  position: relative;
  display: flex;
  transition: background-color .3s;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-top: 1px solid gray;
  border-bottom: 0px solid gray;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  align-items: center;
}
.item:hover {
    background-color: rgba(167, 162, 162, 0.518);
}
.item:hover .cancelBtn {
  opacity: 1;
}
.itemCheckbox {
  width: 16px;
  height: 16px;
  margin: 0 5px;
}
.cancelBtn {
  position: absolute;
  border-radius: 5px;
  text-align: center;
  right: 10px;
  width: 50px;
  height: 30px;
  background-color: rgb(233, 75, 75);
  color: rgb(230, 230, 230);
  border: 0;
  box-shadow: 0px 2px 1px 1px rgb(196, 92, 92);
  transition: background-color,opacity,box-shadow 0.3s;
  opacity: 0;
}
.cancelBtn:hover {
  background-color: rgb(189, 13, 13);
  box-shadow: 0px 2px 1px 1px rgb(143, 4, 4);
  color: #fff;
}
</style>