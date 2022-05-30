import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './main.css'
import 'vfonts/Lato.css'
//解决naive ui 与tailwind 的 reset 样式冲突
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(App).use(router).mount('#app')
