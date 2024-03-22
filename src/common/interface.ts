interface persona {
  id: number
  arcana: string
  name: string
  aliasName: string | null
  level: number
  skill: string[]
  characteristic: string
  physics: string
  gun: string
  fire: string
  ice: string
  electricity: string
  wind: string
  cognition: string
  nuclear: string
  bless: string
  curse: string
}

interface responseParams {
  code: number
  message: string
  data?: any
}

interface searchList {
  value: string
}

interface skill {
  id: number
  type: string
  skillName: string
  aliasName: string | null
  skillDetail: string
  notes: string
}

interface fusion {
  id: number
  arcanaFusion: number[]
}

interface personaDetail {
  id: number
  name: string
  level: number
  arcana: number
  skill: number[]
  characteristic: number
  fusionType: number
  resultType: number
  fusionList?: number[]
  arcanaName: string
}

interface personaSkill {
  skillName: string
  skillDetail: string
}

interface personaCharacteristic {
  characteristicName: string
  characteristicDetail: string
}

// 存放反查表的渲染数据
interface fusionMaterial {
  id: number
  arcana: string
  level: number
  name: string
}

interface subDetailArray {
  [index: number]: personaDetail[]
}

export {
  type persona,
  type responseParams,
  type searchList,
  type skill,
  type fusion,
  type personaDetail,
  type personaSkill,
  type personaCharacteristic,
  type fusionMaterial,
  type subDetailArray
}
