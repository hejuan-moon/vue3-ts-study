<template>
  <div>
    <div>姓名：{{ user.name }}</div>
    <div>年龄：{{ user.age }}</div>
    <div>性别：{{ user.gender }}</div>
    <div>媳妇：{{ user.wife }}</div>
    <button @click="updateUser">更新信息</button>
  </div>
</template>

<script>
//defineComponent 定义一个组件，内部可以传入一个配置对象
import { defineComponent, reactive } from "vue";
// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是App
  name: "App",
  /*
  作用: 定义多个数据的响应式
  const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
  响应式转换是“深层的”：会影响对象内部所有嵌套的属性
  内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
 */

  //需求：页面显示用户信息，点击更新按钮，更新页面信息
  setup() {
    const obj = {
      name: "小明",
      age: 22,
      wife: {
        name: "小甜甜",
        age: 18,
        cars: ["奔驰", "奥迪", "宝马"],
      },
    };
    const user = reactive(obj);
    // function updateUser(){}
    const updateUser = () => {
      // user.name += "===";
      // user.age += 2;
      // user.wife.cars[0] = "玛莎拉蒂";

      // 对user和obj对象添加一个属性，哪一种会影响界面的更新
      // obj.gender='男'  //这种方式界面没有更新渲染
      // user.gender='男'  //这种方式，界面可以更新渲染，而且这个数据也最终添加到了obj对象上去
      // delete obj.age;  //界面没有更新渲染，obj中确实没有了age属性
      delete user.age;    //界面更新渲染了，obj中也没有age属性


      // 总结：如果操作代理对象，目标对象中的数据也会随着变化，同时如果想要在操作数据的时候，界面也要更新渲染，那么也是操作地理对象
    };

    return {
      user,
      updateUser,
    };
  },
});
</script>

<style>
</style>
