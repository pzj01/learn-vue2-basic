<template>
  <div>
    <!-- <TodoList></TodoList> -->
    <!-- <Animation></Animation> -->
    <!-- <Animatecss></Animatecss> -->
    <!-- <HttpRequest></HttpRequest> -->
    <!-- <Search></Search>
    <List></List> -->
    <div class="container">
      <Category>
        <!-- 插槽作用域支持解构赋值 -->
        <template scope="{listData}">
          <ul>
            <li v-for="(item, index) of listData.list" :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
      </Category>
     <Category>
        <!-- 插槽作用域支持解构赋值 -->
        <template scope="{listData}">
          <ul>
            <li v-for="(item, index) of listData.list" :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
      </Category>
    </div>
  </div>
</template>

<script>
// import HttpRequest from "./components/HttpRequest";
// import TodoList from "./components/TodoList.vue";
// import Animation from "./components/Animation";
// import Animatecss from "./components/Animatecss";
// import Search from "./components/GitHub/Search";
// import List from "./components/GitHub/List"
import Category from "./components/Category";

export default {
  name: "App",
  data() {
    return {
      category: {
        games: {
          type: "Game",
          list: ["阴阳师", "FGO", "和平精英", "决战平安京"],
        },
        films: {
          type: "Film",
          list: ["《尚硅谷》", "《复仇者联盟》", "《普罗米亚》", "《教父》"],
        },
        languages: {
          type: "Language",
          list: [
            "JavaScript",
            "TypeScript",
            "C",
            "Java",
            "Go",
            "Rust",
            "Python",
          ],
        },
      },
    };
  },
  components: {
    // TodoList,
    // Animation,
    // Animatecss,
    // HttpRequest,
    // Search,
    // List,
    Category,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
body {
  height: 100vh;
  width: 100%;
  background-color: rgb(10, 32, 43);
}
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
}
</style>