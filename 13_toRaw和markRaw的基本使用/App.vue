<template>
  <div>
    <h2>toRef的基本使用</h2>
    <div>{{ state }}</div>
    <div>{{ age }}</div>
    <div>{{ money }}</div>
    <button @click="updatedata">更新数据</button>
    <hr />
    <ChildDemo :age="age" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, toRef } from "vue";
import ChildDemo from "./components/childDemo.vue";
export default defineComponent({
  name: "App",
  components: {
    ChildDemo,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    });
    //把响应式数据state对象中的 某个属性age变成了ref对象了
    const age = toRef(state, "age");
    //把响应式对象中的某个属性使用ref进行包装，变成了一个ref对象
    const money = ref(state.money);
    console.log(age);
    console.log(money);
    const updatedata = () => {
      // state.age += 2;    //由此可以看出两者的区别，toRef为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
      age.value += 3;
      // money.value += 10; //区别ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
    };
    //那么toRef应用于什么呢场景呢，应用: 当要将 某个prop 的 ref 传递给复合函数时，toRef 很有用，栗子
    return {
      state,
      age,
      money,
      updatedata,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>