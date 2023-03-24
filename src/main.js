import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import 'animate.css';
import './firebase/config.js'

import router from './router'

createApp(App).use(router).mount('#app')
