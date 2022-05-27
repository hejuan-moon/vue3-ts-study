<template>
  <div>
    App父组件数据
    <hr />
    <child-demo :msg="msg" :msg2="'真香'" @XXX="XXX" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ChildDemo from "./components/childDemo.vue";
export default defineComponent({
  name: "App",
  components: {
    ChildDemo,
  },
  setup() {
    const msg = ref("what are you no sha ne");
    const XXX = (txt: string) => {
      msg.value += txt;
    };
    return {
      msg,
      XXX,
    };
  },
});
</script>

<style>
</style>
