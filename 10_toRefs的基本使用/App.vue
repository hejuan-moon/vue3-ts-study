<template>
  <div>
    <h2>toRef的使用</h2>
    <!-- <div>{{ state.name }}</div>
    <div>{{ state.age }}</div> -->
    {{ name }}
    {{ age }}
    <hr>
    {{ name2 }}
    {{ age2 }}
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
function usefeatureX() {
  const state = reactive({
    name2: "自来水",
    age2: 47,
  });
  return {
    // ...state, //如果你要这样返回出去，那么此时name2和ages在使用时，就不是响应式的了
    ...toRefs(state),
  };
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "自来水",
      age: 47,
    });
    //toRefs 可以把一个响应式对象转成一个普通对象，该普通对象的每个property都是一个ref
    const { name, age } = toRefs(state);
    // 那么torefs用于什么场景呢(上面列举了一个自定义hooks的usefeatureX使用场景),问题: reactive 对象取出的所有属性值都是非响应式的
    // 解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
    //定时器，更新数据，如果数据变化了，界面也会随着变化，肯定是响应式数据
    setInterval(() => {
      name.value += "==";
      //   state.name += "==";
    }, 2000);

    const { name2, age2 } = usefeatureX();
     setInterval(() => {
      name2.value += "==";
    }, 2000);
    return {
      // state
      //下面这种方式不行
      //   ...state, //不是响应式的数据因为此时他已经变成了==》{name:'自来也'，age:47}
      //   ...state2,
      name,
      age,
      name2,
      age2,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>