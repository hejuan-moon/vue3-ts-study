<template>
  <div>customRef 的基本使用</div>
  <input type="text" v-model="keywords" />
  <div>{{ keywords }}</div>
</template>

<script lang='ts'>
import { customRef, defineComponent, ref } from "vue";
function useCustomRef<T>(value: T, waitTime: number) {
  let timeoutId: number;
  return customRef((track, triger) => {
    return {
      get() {
        //track追踪数据
        track();
        return value;
      },
      set(newValue: T) {
        clearInterval(timeoutId);
        timeoutId = setTimeout(() => {
          value = newValue;
          triger();
        }, waitTime);
      },
    };
  });
}
export default defineComponent({
  name: "App",
  setup() {
    // const keywords = ref("");
    // 现在我们用customRef实现一个防抖的自定义ref
    const keywords = useCustomRef("abc",200);
    return {
      keywords,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>