<template>
  <div>
    <h2>toRaw和markRow</h2>
    <div>state:{{ state }}</div>
    <hr />
    <button @click="toRawUpdate">测试toRaw</button>
    <button @click="markRawUpdate">测试markRaw</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRaw, markRaw } from "vue";
interface UserInfo {
  name: string;
  age: number;
  like?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: "小明",
      age: 20,
    });
    const toRawUpdate = () => {
      //把代理对象变成普通对象，数据变化，界面不变化
      const user = toRaw(state);
      user.name += "====";
      console.log(user, "哈哈，我好帅啊");
    };
    const markRawUpdate = () => {
      // state.like = ["吃", "喝"];   //我这里给state添加like，ts会报错，因为一开始我定义state对象的时候，没有like属性，ts就认为你是错误操作
      // state.like[0]+="=="         //所以就给state对象添加一个泛型接口的约束，接口里面写好对象的属性，这样就不会报错了

       //  markRaw可以指定新添加的对象为普通对象，不然直接添加式会变成响应式对象的
      const like = ["吃", "喝"];
      state.like = markRaw(like);
      setInterval(() => {
        if (state.like) {
          state.like[0] += "==";
          console.log(state);
        }
      }, 2000);
    };
    return {
      state,
      toRawUpdate,
      markRawUpdate,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>
