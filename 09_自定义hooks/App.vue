<template>
  <div>
    <h2>自定义hooks操作</h2>
    <div>x:{{ x }} ，y:{{ y }}</div>
  </div>
  <h3 v-if="loading">正在加载中......</h3>
  <h3 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h3>
  <ul v-else>
    <li>{{ data.id }}</li>
    <li>{{ data.address }}</li>
    <li>{{ data.distence }}</li>
  </ul>
  <hr />
  <ul v-for="item in data" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.name }}</li>
    <li>{{ item.price }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";
// 定义接口约束对象的类型
interface AddressData {
  id: number;
  adderss:string;
  distance:string
}
interface ProductData {
  id: string;
  adderss:string;
  price:number
}
export default defineComponent({
  name: "App",
  setup() {
    // 点击事件的回调
    const { x, y } = useMousePosition();
    // const { loading, data, errorMsg } = useRequest<AddressData>("/data/address.json"); //获取对象数据
    const { loading, data, errorMsg } = useRequest<ProductData[]>("/data/products.json"); //获取对象数据

    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });

    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>