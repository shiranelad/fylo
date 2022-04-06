import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './scss/styles.scss'


// import ElementPlus, { ElIcon } from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/es/components/message/style/css'


const app = createApp(App)

app.use(router)
// app.use(ElementPlus)
// app.use(store)

app.mount('#app')
