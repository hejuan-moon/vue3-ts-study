<template>
  <div>child子集组件</div>
  <div>{{msg}}</div>
  <button @click="update">更新数据</button>
</template>

<script>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default defineComponent({
  name: "ChildDemo",
  // vue2.x中的生命周期钩子
  beforeCreate() {
    console.log("2.x中的beforeCreate");
  },
  created() {
    console.log("2.x中的created");
  },
  beforeMount() {
    console.log("2.x中的beforeMount");
  },
  mounted() {
    console.log("2.x中的mounted");
  },
  beforeUpdate() {
    console.log("2.x中的beforeUpdate");
  },
  updated() {
    console.log("2.x中的updated");
  },
  //   2.x中的beforeDestroy，destroyed已经在vue3中改名了，所以不能使用了
  //   beforeDestroy() {
  //     console.log("2.x中的beforeDestroy");
  //   },
  //   destroyed() {
  //     console.log("2.x中的destroyed");
  //   },
  beforeUnmount() {
    console.log("2.x中的beforeUnmount");
  },
  unMounted() {
    console.log("2.x中的unmounted");
  },

  setup() {
    console.log("3.0中的setup");
    const msg = ref("abc");
    const update = () => {
      msg.value += "=======";
    };
    onBeforeMount(() => {
      console.log("3.0中的onBeforeMount");
    });
    onMounted(() => {
      console.log("3.0中的onMounted");
    });
    onBeforeUpdate(() => {
      console.log("3.0中的onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("3.0中的onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("3.0中的onBeforeUnmount");
    });

    return {
      msg,
      update,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>