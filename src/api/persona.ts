import request from '@/utils/request'

// 获取面具信息的接口
export const getPersonaService = () => {
  request.get('/home')
}
