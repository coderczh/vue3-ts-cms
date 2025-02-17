import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import route from './router/index.ts'
import pinia from './store/index.ts'

createApp(App).use(route).use(pinia).mount('#app')
