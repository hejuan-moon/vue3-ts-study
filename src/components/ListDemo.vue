<template>
  <div>
    <ul class="todo-main">
      <ItemDemo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :deleteTodo="deleteTodo"
        :changeTodo="changeTodo"
      />
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import ItemDemo from "./ItemDemo.vue";
export default defineComponent({
  name: "ListDemo",
  components: {
    ItemDemo,
  },
  props: ["todos", "deleteTodo",'changeTodo'],
  setup() {
    return {};
  },
});
</script>
<style scoped lang='scss'>
.todo-main {
  width: 560px;
}
</style>