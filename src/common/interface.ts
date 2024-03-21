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

export { type persona, type responseParams, type searchList }
