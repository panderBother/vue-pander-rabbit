
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import { lazyLoad } from './directives'
import { componentPlugin } from './components'
const app = createApp(App)
// 注册全局组件
app.use(componentPlugin)
app.use(createPinia())
app.use(router)
app.use(lazyLoad)
app.mount('#app')
