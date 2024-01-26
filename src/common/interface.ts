interface persona {
  id: number
  arcana: string
  name: string
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

export { type persona, type responseParams }
