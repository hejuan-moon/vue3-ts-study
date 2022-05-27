<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 使用子集组件 -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
// 这里可以使用ts代码
//defineComponent 定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  // 当前组件的名字
  name: 'HomeView',
  //注册组件
  components: {
    HelloWorld,
  },
});
</script>
