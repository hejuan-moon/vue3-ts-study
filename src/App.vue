<template>
  <div class="todo-contanier">
    <div class="todo-wrap">
      <HeaderDemo :addTodo="addTodo" :todos="todos" />
      <ListDemo
        :todos="todos"
        :deleteTodo="deleteTodo"
        :changeTodo="changeTodo"
      />
      <FooterDemo :todos="todos" :checkAll="checkAll" :clearAll="clearAll" />
    </div>
  </div>
</template>

<script lang='ts'>
import HeaderDemo from "./components/HeaderDemo.vue";
import ListDemo from "./components/ListDemo.vue";
import FooterDemo from "./components/FooterDemo.vue";
import { defineComponent, reactive, toRefs } from "vue";
import { Todo } from "./types/todo";
export default defineComponent({
  name: "App",
  components: {
    HeaderDemo,
    ListDemo,
    FooterDemo,
  },
  setup() {
    // 定义一个数据
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: "奔驰", isComplement: false, type: "promote" },
        { id: 2, title: "宝马", isComplement: true, type: "link" },
        { id: 3, title: "奥迪", isComplement: false, type: "promote" },
      ],
    });
    console.log(state,'stae')
    // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    const deleteTodo = (todo: Todo) => {
      console.log(todo, "todo");
      const idx = state.todos.findIndex((e) => (e.id = todo.id));
      state.todos.splice(idx, 1);
    };
    const changeTodo = (todo: Todo) => {
      // console.log(todo, "todo");
      state.todos.forEach((e) => {
        if (e.id == todo.id) {
          e.isComplement = !e.isComplement;
        }
      });
    };
    const checkAll = (isComplement: boolean) => {
      state.todos.forEach((e) => {
        e.isComplement = isComplement;
      });
    };
    const clearAll = () => {
      state.todos = state.todos.filter((item) => !item.isComplement);
    };
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      changeTodo,
      checkAll,
      clearAll,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>