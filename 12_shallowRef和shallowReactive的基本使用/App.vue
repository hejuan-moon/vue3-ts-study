<template>
  <div>
    <h2>shadowReactive 和 shadowRef</h2>
    <div>{{ m1 }}</div>
    <div>{{ m2 }}</div>
    <div>{{ m3 }}</div>
    <div>{{ m4 }}</div>
    <hr />
    <button @click="upadate">更新数据</button>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";
export default defineComponent({
  name: "App",
  //需求当页面加载完毕后，页面中的文本框可以直接获取焦点
  setup() {
    //深度监视的---深度响应---
    const m1 = reactive({
      name: "小小",
      age: 12,
      cars: {
        name: "宝马",
      },
    });
    //浅劫持，浅监视，浅响应式
    const m2 = shallowReactive({
      name: "小小",
      age: 12,
      cars: {
        name: "宝马",
      },
    });
    //深度监视的---深度响应---做了reactive的处理
    const m3 = ref({
      name: "小小",
      age: 12,
      cars: {
        name: "哈哈",
      },
    });
    //浅劫持，浅监视，浅响应式
    const m4 = shallowRef({
      name: "小小",
      age: 12,
      cars: {
        name: "宝马",
      },
    });
    const upadate = () => {
      //   m1.cars.name = "奔驰";
      //   m2.cars.name = "奔驰";
      //   m3.value.cars.name = "玛莎拉蒂";
      m4.value.cars.name = "奔驰";
      console.log(m3, m4);
    };
    return {
      m1,
      m2,
      m3,
      m4,
      upadate,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>