<template>
  <div>
    <h2>reactive和ref的细节问题</h2>
    <div>m1:{{ m1 }}</div>
    <div>m2:{{ m2 }}</div>
    <div>m3:{{ m3 }}</div>
    <button @click='update'>更新数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    /**ref用来处理基本类型的数据，reactive用来处理对象（递归深度响应式）
     *
     */
    const m1 = ref("abc");
    const m2 = reactive({
      name: "小明",
      wife: {
        name: "小红",
      },
    });
    const m3 = ref({
      name: "小明",
      wife: {
        name: "小红",
      },
    });
    // 更新数据
    const update = () => {
      m1.value += "=====";
      m2.wife.name += "======";
      m3.value.wife.name += "=====";
    };
    return {
      m1,
      m2,
      m3,
      update
    };
  },
});
</script>

<style>
</style>
