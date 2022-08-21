<template>
  <div class="TodoListBox">
    <div class="basic">
      <Input @addItem="addItem"></Input>
      <List :TodoList="TodoList" @deleteItem="deleteItem" @editItem="editItem"></List>
      <OutCome
        :TodoList="TodoList"
        @deleteDoneItem="deleteDoneItem"
        @checkAll="checkAll"
      ></OutCome>
    </div>
  </div>
</template>

<script>
//引入nanoid
import { nanoid } from "nanoid";
import Input from "./Input";
import List from "./List";
import OutCome from "./OutCome";
export default {
  name: "TodoList",
  data() {
    return {
      TodoList: [],
    };
  },
  components: {
    Input,
    List,
    OutCome,
  },
  methods: {
    //添加项目
    addItem(value) {
      //去掉两边空格
      //如果值没有就返回
      if (!value.trim()) return alert("不能输入空格!");
      //创建项目对象
      const Todoitem = {
        id: nanoid(),
        title: value,
        done: false,
        isEditing:false,
      };
      //添加数据
      this.TodoList.unshift(Todoitem);
    },
    //删除项目
    deleteItem(item) {
      //判断是否勾选
      if (item.done) {
        if (confirm("确定要删除任务吗？")) {
          //遍历数组
          this.TodoList.forEach((element, index, arr) => {
            //通过id查找
            if (element.id === item.id) {
              //然后删除
              arr.splice(index, 1);
            }
          });
        }
      }
    },
    //删除完成的项目
    deleteDoneItem() {
      if (confirm("确定要删除已完成任务吗？")) {
        this.TodoList = this.TodoList.filter((element) => {
          return !element.done;
        });
      }
    },
    //编辑项目
    editItem(item,newTitle) {
      if(!newTitle.trim()) return alert("不能输入空格");
      this.TodoList.forEach(el => {
        if(el.id === item.id) {
          el.title = newTitle;
        }
      });
    },
    checkAll(done) {
      this.TodoList.forEach((el) => {
        el.done = done;
      });
    },
    //添加本地缓存
    setLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    //读取本地缓存
    getLocalStorage(key) {
      let result = JSON.parse(localStorage.getItem(key));
      if (!result) {
        result = [];
      }
      this.TodoList = result;
    },
  },
  created() {
    //初始化时读取本地缓存
    this.getLocalStorage("TodoList");
  },
  mounted () {
    this.$on("editItem", this.editItem);
  },
  watch: {
    //深度监听
    TodoList: {
      deep: true,
      handler(newValue) {
        this.setLocalStorage("TodoList", newValue);
      },
    },
  },
};
</script>

<style scoped>
.TodoListBox {
  margin: 50px auto;
  width: 600px;
  border-radius: 5px;
  border: 2px solid gray;
  box-shadow: 4px 4px 6px 3px gray;
}
.basic {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}
</style>