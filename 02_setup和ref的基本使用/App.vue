<template>
  <div>哈哈</div>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script>
//defineComponent 定义一个组件，内部可以传入一个配置对象
import { defineComponent, ref } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是App
  name: "App",
  //需求：页面打开后看见一个数据，点击按钮后，该数据发生变化
  // vue2的实现方式
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   updateCount() {
  //     this.count++
  //   },
  // },

  setup() {
    // let count = 0;  //此时的count并不是响应式的（响应式数据：数据变化，页面跟着变化）
    // 用ref实现响应式数据，对象中有一个value属性，如果要对数据进行操作，需要获取到value进行操作
    //html模板中不需要.value的写法的
    let count = ref(0);
    function updateCount() {
      count.value++;
    }
    return {
      count,
      updateCount,
    };
  },
});
</script>

<style>
</style>
