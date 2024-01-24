import axios from 'axios'
import { ElMessage } from 'element-plus'
const baseURL = 'https://mock.apifox.com/m1/3960703-0-default'

const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 根据axios官方文档AbortController取消请求:https://www.axios-http.cn/docs/cancellation
    /* const controller = new AbortController()
    const personaStore = usePersonaStore()
    // 如果本地存在personas数据，就不发送请求了
    if (personaStore.personas) {
      controller.abort()
    } */
    return config
  },
  (err: any) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res: any) => {
    if (res.data.code === 0) {
      return res
    }
    // 后端处理业务失败，给错误提示，抛出错误

    return Promise.reject(res.data)
  },
  (err: any) => {
    ElMessage.error(err.response.data.message || '服务异常')
    Promise.reject(err)
  }
)

export default instance
export { baseURL }
