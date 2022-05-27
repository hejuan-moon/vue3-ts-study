<template>
  <div>
    <h2>child子集组件</h2>
    <h3>age:{{ age }}</h3>
    <h3>length:{{ len }}</h3>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, Ref, toRef } from "vue";
//假设这个计算长度的方法是别人写的，所以就规定了入参是一个Ref对象
function useGetLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: "childDemo",
  props: {
    age: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    const len = useGetLength(toRef(props,'age'));
    return {len};
  },
});
</script>
<style scoped lang='scss'>
</style>