import { createApp } from "vue";
import "./style.css";
import "./index.css";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
import { createStore } from 'vuex'
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from 'pinia'
const pinia = createPinia()

const routes = [
  { path: "", component: Home },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});



// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


createApp(App).use(ElementPlus).use(pinia).use(router).mount("#app");
