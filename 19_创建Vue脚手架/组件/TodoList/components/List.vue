<template>
  <div class="listBox">
    <label class="item" :for="item.id" v-for="item of TodoList" :key="item.id">
      <input
        class="itemCheckbox"
        type="checkbox"
        :value="item.title"
        :id="item.id"
        v-model="item.done"
      />
      <span v-show="!item.isEditing">{{ item.title }}</span>
      <input
        ref="inputTitle"
        @keydown.enter="editItem(item)"
        class="edit"
        v-show="item.isEditing"
        type="text"
        v-model.trim="value"
      />
      <button
        :class="
          item.isEditing
            ? ['editBtn', 'editBtn:hover']
            : ['doneBtn', 'doneBtn:hover']
        "
        @click="editItem(item)"
        class="editBtn"
      >
        {{ item.isEditing ? "完成" : "编辑" }}
      </button>
      <button @click="deleteItem(item)" class="cancelBtn">删除</button>
    </label>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    deleteItem(item) {
      this.$emit("deleteItem", item);
    },
    editItem(item) {
      //编辑状态取反
      item.isEditing = !item.isEditing;
      //编辑状态就把当前的值添加到输入框
      console.log(this.value,item.title);
      item.isEditing?this.value = item.title
      //否则调用编辑事件,并把输入框数据传入
      :this.$emit("editItem",item,this.value);
      this.$nextTick(() => {
        this.$refs.inputTitle.forEach(el => {
            el.focus();
        });
      })
    },
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
  transition: background-color 0.3s;
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
.item:hover .cancelBtn,
.item:hover .editBtn {
  opacity: 1;
}
.itemCheckbox {
  outline: none;
  width: 16px;
  height: 16px;
  margin: 0 5px;
}
.cancelBtn,
.editBtn {
  position: absolute;
  border-radius: 5px;
  text-align: center;
  right: 10px;
  width: 50px;
  height: 30px;
  outline: none;
  background-color: rgb(233, 75, 75);
  color: rgb(230, 230, 230);
  border: 0;
  box-shadow: 0px 2px 1px 1px rgb(196, 92, 92);
  transition: all 0.5s;
  opacity: 0;
}
.cancelBtn:hover {
  background-color: rgb(189, 13, 13);
  box-shadow: 0px 2px 1px 1px rgb(143, 4, 4);
  color: #fff;
}
.editBtn {
  right: 70px;
  background-color: rgb(67, 176, 209);
  box-shadow: 0px 2px 1px 1px rgb(25, 78, 83);
}
.editBtn:hover {
  background-color: rgb(14, 124, 172);
  box-shadow: 0px 2px 1px 1px rgb(1, 52, 62);
  color: #fff;
}
.doneBtn {
  right: 70px;
  background-color: rgb(77, 198, 105);
  box-shadow: 0px 2px 1px 1px rgb(44, 108, 58);
}
.doneBtn:hover {
  background-color: rgb(12, 137, 39);
  box-shadow: 0px 2px 1px 1px rgb(2, 75, 18);
  color: #fff;
}
.edit {
  border-radius: 2px;
  outline: none;
  padding: 0 2px;
  border: 2px solid rgb(86, 177, 216);
  height: 20px;
  line-height: 20px;
}
.edit:focus {
  border: 2px rgb(77, 198, 105) solid;
}
</style>