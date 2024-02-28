import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8080'

// 'https://mock.apifox.com/m1/3960703-0-default'

// 请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig | any) => config)

// 响应拦截器
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (err: any) => {
    return Promise.reject(err)
  }
)

interface Ihttp {
  request<T>(method: string, url: string, params?: unknown): Promise<T>
}

const http: Ihttp = {
  request(method, url, params) {
    return axios({
      method: method,
      url: url,
      params: params
    })
  }
}

export default http
