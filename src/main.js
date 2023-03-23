import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js'
import './assets/scss/main.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
