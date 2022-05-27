<template>
  <div>
    <h2>App父级组件：Suspense组件的使用</h2>
    <Suspense>
      <template #default>
        <!-- 异步组件 -->
        <!-- <AsyncComponents /> -->
        <AsyncAddress />
      </template>
      <template v-slot:fallback>
        <!-- loading的内容 -->
        <h2>loading......</h2>
      </template>
    </Suspense>
  </div>
</template>

<script lang='ts'>
import { defineAsyncComponent, defineComponent, reactive, ref } from "vue";
// vue2动态引入组件的写法（vue3中这种写法不行）
// const AsyncComponents=()=>import('./AsyncComponents.vue')
// vue3中引入动态组件的写法
// const AsyncComponents = defineAsyncComponent(
//   () => import("./AsyncComponents.vue")
// );
// import AsyncComponents from './AsyncComponents.vue'
import AsyncAddress from "./AsyncAddress.vue";
export default defineComponent({
  name: "App",
  components: {
    // AsyncComponents,
    AsyncAddress,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang='scss'>
</style>