import "crypto";
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { store, key } from "./store";
import "./assets/style/reset.css";
import "./assets/style/border.css";
import "./assets/font/iconfont.css";

createApp(App).use(router).use(store, key).mount('#app');
