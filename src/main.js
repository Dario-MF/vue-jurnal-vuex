import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import './styles/styles.scss'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
