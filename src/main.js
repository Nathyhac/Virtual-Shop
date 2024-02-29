import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

import VeeValidateplugin from '@/includes/validation'

const app = createApp(App)

app.use(router)
app.use(VeeValidateplugin)

app.mount('#app')
