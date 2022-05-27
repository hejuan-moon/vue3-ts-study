<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的名称，按回车键确认哦"
      v-model="title"
      @keyup.enter="add"
    />
    {{ signleTypes }}
    {{ signleTypes.length }}
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  ref,
  getCurrentInstance,
  computed,
} from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "HeaderDemo",
  props: {
    addTodo: {
      type: Function,
      require: true,
    },
    todos: {
      type: Array as () => Todo[],
      require: true,
    },
  },
  setup(props) {
    const title = ref("");
    const add = () => {
      let text = title.value;
      if (!text.trim()) return;
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      };
      props.addTodo && props.addTodo(todo);
      title.value = "";
    };
    
    // const materiarites = [
    //   { id: 1, title: "奔驰", isComplement: false, type: "promote" },
    //   { id: 2, title: "宝马", isComplement: true, type: "link" },
    //   { id: 3, title: "奥迪", isComplement: false, type: "promote" },
    // ];

    // const signleTypes = computed(() => {
    //   return materiarites
    //     .filter(({ type }) => type === "promote")
    //     .map((item) => {
    //       item.title = item.title + props.todos?.length;
    //       return item;
    //     });
    // });
    return {
      title,
      add,
      // signleTypes,
    };
  },
});
</script>
<style scoped lang='scss'>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
</style>