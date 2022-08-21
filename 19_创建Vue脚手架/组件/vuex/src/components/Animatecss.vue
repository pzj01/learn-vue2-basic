<template>
  <div>
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__headShake"
      leave-active-class="animate__backOutDown"
      class="default"
    >
      <li v-show="book.isShow" v-for="book of bookCase" :key="book.id">
        书名:{{ book.name }}
        <button @click="book.isShow = !book.isShow">显示/隐藏</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
import { nanoid } from "nanoid";
export default {
  name: "Animatecss",
  data() {
    return {
      isShow: true,
      bookCase: [
        { id: nanoid(), name: "剑来", isShow: true },
        { id: nanoid(), name: "玄浑道章", isShow: true },
        { id: nanoid(), name: "大道争锋", isShow: true },
        { id: nanoid(), name: "雪中悍刀行", isShow: true },
        { id: nanoid(), name: "圣堂", isShow: true },
      ],
    };
  },
};
</script>

<style scoped>
    .default {
        list-style: none;
    }
</style>