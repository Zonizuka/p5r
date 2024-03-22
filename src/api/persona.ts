import request from '@/utils/request'
import { usePersonaStore } from '@/stores/persona'
const personaStore = usePersonaStore()
// 获取面具信息的接口
export const getPersonaService = () => {
  request.get('/home')
}

export const getPersonaList = async () => {
  if (personaStore.personas.length > 0) {
    return personaStore.personas
  } else {
    try {
      const response = await fetch('/json/PersonaList.json')
      if (!response.ok) {
        throw new Error('Failed to load JSON file')
      }
      const data = await response.json()
      personaStore.setPersona(data)
    } catch (error) {
      console.error('Error fetching JSON data:', error)
    }
    return personaStore.personas
    // let { data } = await axios.request<{ data: responseParams }>('get', '/home')
    // console.log(data)
    // let personas = data.data
    // personaList.value = personas
    // // personaList.value = res.data.data
    // // 将请求的数据存入本地
    // personaStore.setPersona(personas)
    // console.log('面具列表存储到本地了')
  }
}
