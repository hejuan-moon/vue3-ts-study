<template>
  <div>
    <button @click="openModel = true">打开对话框</button>
  </div>
  <teleport  to='body'>
    <div v-if="openModel">
      <div>这是对话框</div>
      <button @click="openModel = false">关闭对话框</button>
    </div>
  </teleport >
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ModelButton",
  setup() {
    const openModel = ref(false);
    return {
      openModel,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>