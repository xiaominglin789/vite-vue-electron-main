import "crypto";
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import "./assets/style/reset.css";
import "./assets/style/border.css";
import "./assets/font/iconfont.css";

createApp(App).use(router).mount('#app');
