<template>
  <div>
    <h1 ref="title">欢迎学习Vue脚手架!</h1>
    <button @click="showDom">点我获取DOM</button>
    <img src="./assets/logo.png" alt="" />
    <!-- 给组件加上ref属性可以获取组件实例对象 -->
    <Yys ref="yys"></Yys>
    <div>
      <School></School>
      <hr />
      <Student></Student>
    </div>
    <TodoList></TodoList>
  </div>
</template>

<script>
import Yys from "./components/Yys.vue";
import Student from "./components/Student.vue";
import School from "./components/School.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    Yys,
    // Fgo,
    // BookCase,
    Student,
    School,
    TodoList,
    // Diy,
  },
  methods: {
    showDom() {
      // console.log(this.$refs.title);
      //ref 被用来给元素或子组件注册引用信息。
      //引用信息将会注册在父组件的 $refs 对象上。
      //如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
      // console.log(this.$refs.yys);
      this.hello();
    },
    DiyEvent(data) {
      console.log("Diy",data);
    },
    native() {
      console.log("调用了组件的原生事件");
    }
  },
};
</script>