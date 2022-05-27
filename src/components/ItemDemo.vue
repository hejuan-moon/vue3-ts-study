<template>
  <div>
    <li class="todo-item">
      <label for="">
        <input type="checkbox" v-model="ischeck" @change="changeBox(todo)" />
        <span>{{ todo.title }}</span>
      </label>
      <button
        class="btn btn-danger"
        style="display: none"
        @click="deleteItem(todo)"
      >
        删除
      </button>
    </li>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "ItemDemo",
  props: {
    todo: Object as () => Todo, //需要将todo从object转成Todo类型
    deleteTodo: {
      type: Function,
      require: true,
    },
    changeTodo: {
      type: Function,
      require: true,
    },
  },
  setup(props) {
    const ischeck = computed(() => {
      return props?.todo?.isComplement;
    });
    const deleteItem = (item: Todo) => {
      props.deleteTodo && props.deleteTodo(item);
    };
    const changeBox = (item: Todo) => {
      props.changeTodo && props.changeTodo(item);
    };
    return {
      ischeck,
      deleteItem,
      changeBox,
    };
  },
});
</script>
<style scoped lang='scss'>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.todo-item:hover {
  background: pink;
}
.todo-item:hover .btn-danger {
  background: pink;
  display: block !important;
}
</style>