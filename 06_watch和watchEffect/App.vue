<template>
  <div>
    <h2>计算属性和监视</h2>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input
        type="text"
        placeholder="请输入姓氏"
        v-model="user.firstName"
      />
      名字：<input
        type="text"
        placeholder="请输入名字"
        v-model="user.lastName"
      />
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName1"
      /><br />
      姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName2"
      /><br />
      姓名：<input
        type="text"
        placeholder="显示姓名"
        v-model="fullName3"
      /><br />
    </fieldset>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  getCurrentInstance,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      // 姓氏
      firstName: "东方",
      lastName: "不败",
    });
    const instance=getCurrentInstance()
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    // 监视指定的数据
    const fullName3 = ref("");
    // watch(
    //   user,
    //   ({ firstName, lastName }) => {
    //     fullName3.value = firstName + "_" + lastName;
    //   },
    //   { immediate: true }
    // );
    //immediate会默认执行一次watch,deep深度监听

    // watchEffect 和 watch 的区别是，不配置immediate，本身默认会进行监视（默认执行一次）
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });

    //监视fullName3的数据，改变firstName和lastName(注意这里要配合watch使用哦或者配置另外一个watch使用，
    //但是两个watchEffect的内容不能写在同一个watchEffect里面。作用是给fullName3赋值)
    // watchEffect(() => {
    //   const names = fullName3.value.split("_");
    //   user.firstName = names[0];
    //   user.lastName = names[1];
    // });

    // watch监视多个数据
    //当我们去监视非响应式数据的时候，代码需要改一下,要以()=>回调函数的形式,
    //或者换种说法，如果 监听某个对象属性数据时，需要()=>回调函数的形式！！！（这里要注意了）
    // watch([()=>user.firstName,()=>user.lastName],(newVal,oldVal)=>{
    //   //这里的代码没有执行，fullName3是响应式数据，但是user.firstName ,user.lastName不是响应式数据
    //   console.log('==============',newVal,oldVal)
    // })

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>

<style>
</style>
