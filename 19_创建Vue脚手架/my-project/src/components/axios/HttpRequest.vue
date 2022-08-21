<template>
  <div>
    <ul>
        <li v-for="(book,index) of bookCase" :key="index">
            书名:{{book.name}}-作者:{{book.author}}
        </li>
    </ul>
    <button @click="getBook">获取书籍信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"HttpRequest",
    data () {
        return {
            bookCase:null
        }
    },
    methods: {
        getBook() {
            axios.get('http://localhost:8080/api/bookCase')
            .then(response => {
                let data = response.data
                console.log(data);
                this.bookCase = data.bookCase;
            },reason => {
                throw reason;
            })
        }
    }
}
</script>

<style>

</style>