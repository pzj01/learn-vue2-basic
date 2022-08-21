<template>
  <div>
    <!-- <TodoList></TodoList> -->
    <!-- <Animation></Animation> -->
    <!-- <Animatecss></Animatecss> -->
    <!-- <HttpRequest></HttpRequest> -->
    <Search></Search>
    <List></List>
    <!-- <Count></Count>
    <Person></Person> -->
    <!-- <div class="container">
      <Container></Container>
    </div> -->
  </div>
</template>

<script>
// import HttpRequest from "./components/HttpRequest";
// import TodoList from "./components/TodoList.vue";
// import Animation from "./components/Animation";
// import Animatecss from "./components/Animatecss";
import Search from "./components/GitHub/Search";
import List from "./components/GitHub/List"
// import Category from "./components/Category";
// import Count from "./components/Count";
// import Person from "./components/Person";
// import Container from "./components/VueRouterDemo/Container"

export default {
  name: "App",
  components: {
    // TodoList,
    // Animation,
    // Animatecss,
    // HttpRequest,
    Search,
    List,
    // Category,
    // Count,
    // Person,
    // Container,
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
  /* background-color: rgb(10, 32, 43); */
  background-color: #fff;
}
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
}
</style>