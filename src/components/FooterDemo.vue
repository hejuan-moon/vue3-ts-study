<template>
  <div>
    <div class="todo-footer">
      <label for="">
        <input type="checkbox" v-model="allCount" />
      </label>
      <span
        ><span>已完成：{{ count }}</span
        >/全部{{ todos.length }}</span
      >
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, watch, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "FooterDemo",
  // props: ["todos"],
  props: {
    todos: {
      type: Array as () => Todo[],
      require: true,
    },
    checkAll: {
      type: Function,
      require: true,
    },
    clearAll: {
      type: Function,
      require: true,
    },
  },
  setup(props) {
    // const count = computed(() => {
    //   return props.todos.reduce(
    //     (acc: number, cur: Todo) => acc + (cur.isComplement ? 1 : 0),
    //     0
    //   );
    // });
    const count = computed(() => {
      return (
        props.todos &&
        props.todos.reduce((acc, cur) => acc + (cur.isComplement ? 1 : 0), 0)
      );
    });
    // const allCount = ref(false);
    // watch(
    //   props,
    //   () => {
    //     const all =
    //       props.todos &&
    //       props.todos.reduce((acc, cur) => acc + (cur.isComplement ? 1 : 0), 0);
    //     allCount.value = all == (props.todos && props.todos.length);
    //   },
    //   { immediate: true }
    // );
    // console.log(count,'count');
    const allCount = computed({
      get() {
        return props.todos?.length === count.value && (!count.value || 1) > 0;
      },
      set(val) {
        props.checkAll && props.checkAll(val);
      },
    });
    return {
      count,
      allCount,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>