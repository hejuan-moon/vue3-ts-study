//引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// 引入App组（所有组件的父级组件）
import App from './App.vue'
// import router from './router'
// import store from './store'

// 创建App应用返回对应的实例对象，调用mount方法进行挂载
createApp(App).mount('#app')

/**
 * vue2和vue3相比较的相关面试题
 * 
 * vue3支持大多数vue2的特性
 * vue3设计了一套强大的组合api代替了vue2中的option API，复用性更强了
 * 更好的支持TS
 * 最主要：
 * vue3中使用了Proxy配合Reflect代替了Vue2中的object.defineProperty()方法实现数据的响应式
 * 重写了虚拟dom，速度更快了
 * 新的组件：Fragment(片段)，/Teleport(瞬移)，Suspense(不确定)
 * 设计了一个新的脚手架工具：vite
 */
