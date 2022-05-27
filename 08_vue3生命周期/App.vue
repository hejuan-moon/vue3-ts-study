<template>
  <div>
    <h2>App父级组件</h2>
    <button @click="isShow = !isShow">切换显示</button>
    <hr />
    <ChildDemo v-if="isShow" />
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import ChildDemo from "./components/childDemo";
export default defineComponent({
  name: "App",
  components: {
    ChildDemo,
  },
  setup() {
    const isShow = ref(true);
    return {
      isShow
    };
  },
});
</script>
<style scoped lang='scss'>
</style>