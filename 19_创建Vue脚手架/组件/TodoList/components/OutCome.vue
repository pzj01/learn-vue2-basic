<template>
  <div class="OutComeBox" v-show="total">
    <label>
      <input
        class="allCheckbox"
        type="checkbox"
        v-model="isAll"
      />已完成 {{ doneItem }} / 全部 {{ total }}
      <button class="deleteFinishBtn" @click="deleteDoneItem">
        删除已完成任务
      </button>
    </label>
  </div>
</template>

<script>
export default {
  name: "OutCome",
  computed: {
    total() {
      return this.TodoList.length;
    },
    doneItem() {
      let doneNumber = 0;
      this.TodoList.forEach((element) => {
        if (element.done) {
          doneNumber++;
        }
      });
      return doneNumber;
    },
    isAll:{
      get() {
        return this.total === this.doneItem && this.total > 0;
      },
      set(value) {
        this.$emit("checkAll",value);
      }
    }
  },
  methods: {
    deleteDoneItem() {
      this.$emit("deleteDoneItem");
    },
  },
  props: ["TodoList"],
};
</script>

<style scoped>
.OutComeBox {
  width: 100%;
  height: 40px;
}
.allCheckbox {
  width: 16px;
  height: 16px;
  margin: 0 5px;
  outline: none;
}
.deleteFinishBtn {
  position: absolute;
  border-radius: 5px;
  text-align: center;
  right: 10px;
  width: 120px;
  height: 30px;
  background-color: rgb(233, 75, 75);
  color: rgb(230, 230, 230);
  border: 0;
  box-shadow: 0px 2px 1px 1px rgb(196, 92, 92);
  transition: all 0.5s;
}
.deleteFinishBtn:hover {
  background-color: rgb(189, 13, 13);
  box-shadow: 0px 2px 1px 1px rgb(143, 4, 4);
  color: #fff;
}
.OutComeBox label {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  line-height: 20px;
}

</style>