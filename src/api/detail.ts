/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: pj
 * @Date: 2024-03-23 18:13:02
 * @LastEditors: pj
 * @LastEditTime: 2024-03-24 17:23:53
 */
import { usePersonaDetailStore } from '@/stores/personaDetail'

// 此文件包含了面具所需的技能数据、合成数据、技能详情
const personaDetailStore = usePersonaDetailStore()
export const getPersonaDetail = async () => {
  if (personaDetailStore.personaDetails.length > 0) {
    return personaDetailStore.personaDetails
  } else {
    try {
      const response = await fetch('./json/PersonaDetail.json')
      if (!response.ok) {
        throw new Error('Failed to load PersonaDetail JSON file')
      }
      const data = await response.json()
      personaDetailStore.setPersonaDetails(data)
    } catch (error) {
      console.error('Error fetching PersonaDetail JSON data:', error)
    }
    return personaDetailStore.personaDetails
  }
}

export const getSkill = async () => {
  if (personaDetailStore.skills.length > 0) {
    return personaDetailStore.skills
  } else {
    try {
      const response = await fetch('./json/Skill.json')
      if (!response.ok) {
        throw new Error('Failed to load Skill JSON file')
      }
      const data = await response.json()
      personaDetailStore.setSkills(data)
    } catch (error) {
      console.error('Error fetching Skill JSON data:', error)
    }
    return personaDetailStore.skills
  }
}

export const getFusion = async () => {
  if (personaDetailStore.fusions.length > 0) {
    return personaDetailStore.fusions
  } else {
    try {
      const response = await fetch('./json/Fusion.json')
      if (!response.ok) {
        throw new Error('Failed to load Fusion JSON file')
      }
      const data = await response.json()
      personaDetailStore.setFusions(data)
    } catch (error) {
      console.error('Error fetching Fusion JSON data:', error)
    }
    return personaDetailStore.fusions
  }
}
