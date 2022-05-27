<template>
  <div>AsyncAddress组件</div>
  {{ data }}
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AsyncComponents",
  // setup() {
  //   return axios.get("/data/address.json").then((response) => {
  //     return {
  //       data: response.data,
  //     };
  //   });
  // },
  async setup() {
    const result = await axios.get("/data/address.json");
    return {
      data: result.data,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>