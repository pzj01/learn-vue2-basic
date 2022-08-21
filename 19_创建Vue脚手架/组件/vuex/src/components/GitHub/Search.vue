<template>
  <div class="basic">
    <h2 class="title">Search GigHub Users</h2>
    <div class="box">
      <input
        @keydown.enter="sendRequest"
        class="searchInput"
        type="text"
        placeholder="enter the name you search"
        v-model.trim="keyWord"
      />
      <button @click="sendRequest" class="searchBtn">Search</button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    sendRequest() {
      if (!this.keyWord.trim()) {
        return alert("输入不能为空!");
      }
      //请求前更新用户列表数据
      this.$bus.$emit("updateListData", {
        users: [],
        isFirst: false,
        isLoading: true,
        errorMessage: "",
      });
    //使用axios发送请求
    //   axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
    //     (response) => {
    //       //请求成功更新用户列表数据
    //       this.$bus.$emit("updateListData", {
    //         users: response.data.items,
    //         isLoading: false,
    //         errorMessage: "",
    //       });
    //     },
    //     (reason) => {
    //       //请求失败更新用户列表数据
    //       this.$bus.$emit("updateListData", {
    //         users: [],
    //         isLoading: false,
    //         errorMessage: reason.message,
    //       });
    //       throw reason;
    //     }
    //   );
    //使用vue-resource插件发送请求
    this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          //请求成功更新用户列表数据
          this.$bus.$emit("updateListData", {
            users: response.data.items,
            isLoading: false,
            errorMessage: "",
          });
        },
        (reason) => {
          //请求失败更新用户列表数据
          this.$bus.$emit("updateListData", {
            users: [],
            isLoading: false,
            errorMessage: reason.message,
          });
          throw reason;
        }
      );
    },
  },
};
</script>

<style scoped>
.basic {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  width: 80%;
  height: 200px;
  background-color: rgb(179, 174, 174);
  margin: 20px auto;
  /* padding: 10px; */
}
.basic .title {
  font-size: 40px;
  text-align: center;
  color: #fff;
}
.basic .searchInput {
  /* margin-left:15%; */
  height: 40px;
  width: 40%;
  font-size: 1rem;
  outline: none;
  border: 2px solid black;
  background-color: rgb(216, 212, 212);
  padding: 0 4px;
  transition: all 0.3s;
  border-radius: 8px;
  font-family: "Courier New", Courier, monospace;
}
.basic .searchInput:hover {
  background-color: rgb(255, 255, 255);
}
.basic .searchInput:focus {
  border: 2px solid rgb(144, 193, 214);
}
.basic .searchBtn {
  margin-left: 2%;
  width: 80px;
  height: 40px;
  transition: background-color 0.3s;
  background-color: #efefef;
}
.basic .searchBtn:hover {
  background-color: #fff;
}
.basic .box {
  display: flex;
  justify-content: center;
}
</style>