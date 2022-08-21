<template>
  <div class="basic">
    <h2>{{ languages.type }} 类型</h2>
    <slot :listData="languages"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      languages: {
        type: "Language",
        list: ["JavaScript", "TypeScript", "C", "Java", "Go", "Rust", "Python"],
      },
    };
  },
  // props: ["listData"]
};
</script>

<style scoped>
.basic {
  padding: 20px;
  background-color: rgb(1, 22, 31);
  color: #fff;
  display: inline-block;
  display: inline-flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  transition: box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.basic:hover {
  box-shadow: 0px 0px 10px rgb(1, 63, 92);
}
.basic > h2 {
  /* margin-bottom: 50px; */
  height: 60px;
  text-align: center;
  font-size: 36px;
  font-family: "Courier New", Courier, monospace;
}
.basic ul {
  height: 50%;
  width: 100%;
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-start;
}
.basic ul li {
  margin: 10px auto;
  font-family: "Courier New", Courier, monospace;
  color: rgb(255, 255, 255);
  font-size: 20px;
  transition: transform 0.3s;
}
.basic ul li:hover {
  transform: scale(1.5);
}
.basic img {
  width: 100px;
  height: 100px;
}
.basic a {
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  transition: transform 0.3s;
}
.basic a:hover {
  transform: scale(1.5);
}
</style>