<template>
  <div>AsyncComponents组件的内容</div>
  {{ msg }}
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "AsyncComponents",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: "what are you no sha ne",
        });
      },2000);
    });
  },
});
</script>
<style scoped lang='scss'>
</style>