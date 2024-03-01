import './assets/main.scss'
import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
/**
 * 打包测试时将husky中的pre-commit中的lint注释掉
 * 将vite.config.ts中的base路径改为'./'
 * 将git ignore中的dist注释掉
 * 将router中的模式改为hash模式
 */
