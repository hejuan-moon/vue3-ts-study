<template>
  <div>APP父级组件</div>
  <hr />
  <ModelButton />
</template>

<script lang='ts'>
import { defineComponent, ref, provide } from "vue";
import ModelButton from "./modelButton.vue";
export default defineComponent({
  name: "App",
  components: {
    ModelButton,
  },
  setup() {
    return {
    };
  },
});
</script>
<style scoped lang='scss'>
</style>