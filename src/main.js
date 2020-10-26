import { createApp } from 'vue'
import { store } from './vuex/store'
import router from './router/router'
import App from './App.vue'


//createApp(App).mount('#app')

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')