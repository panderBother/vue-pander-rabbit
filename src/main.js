
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import { lazyLoad } from './directives'
import { componentPlugin } from './components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
const app = createApp(App)
// 注册全局组件
app.use(componentPlugin)
app.use(pinia)
app.use(router)
pinia.use(piniaPluginPersistedstate)
app.use(lazyLoad)
app.mount('#app')
