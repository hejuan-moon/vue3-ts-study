<template>
  <div>
    child子级组件
    <h3>{{ msg }}</h3>
    <button @click="emitXXX">分发事件</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "childDemo",
  props: ["msg"],
  // setup细节问题
  //setup是在 beforeCrete生命周期之前就执行了，而且就执行一次
  //由此可知，setup在执行的时候，当前组件还没有创建出来
  //所以setup中无法访问this
  //setup中返回一个对象，内部属性和方法是给html模板用的，setup中的对象中的属性和data函数中的属性会合并为组件对象属性，methods也会合并，
  //一般不要混合使用，methods可以访问setup提供的属性和方法，但是setup中不能访问data和methods
  //setup不能是一个async函数：因为返回值不在是return对象，而是promise，模板看不到return对象中的属性数据

  beforeCreate() {
    // console.log("子组件beforecreate执行了");
  },
  // setup(props, context) {
  setup(props, {attrs,emit}) {
    /** props参数，是一个对象，里面有父组件向子组件传递的数据，并且在子级组件中使用props接收到的所有属性
     *context 是一个对象，里面有attrs对象（获取当前组件标签上面所有 的属性，但是该属性在props中没有声明接收）。emit方法（分发事件的）
     */
    // console.log(props, "props");
    // console.log(context.attrs.msg2, context);
    console.log(attrs)
    const emitXXX = () => {
      // context.emit("XXX", "++");
      emit("XXX", "++");
    };
    // console.log("子组件setup执行了", this);
    return {
      emitXXX,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>