import "./app.css";
import * as bootstrap from 'bootstrap';
import { createApp } from 'vue'
import router from "./router/index"

import App from './App.vue'

console.log("Happy coding !!");

createApp(App).use(router).mount('#app');