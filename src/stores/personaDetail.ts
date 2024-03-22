import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type skill, type fusion, type personaDetail } from '@/common/interface'

export const usePersonaDetailStore = defineStore(
  'persona-detail',
  () => {
    const skills = ref<skill[]>([])
    const fusions = ref<fusion[]>([])
    const personaDetails = ref<personaDetail[]>([])
    const setSkills = (newSkills: skill[]) => {
      skills.value = newSkills
    }
    const setFusions = (newFusions: fusion[]) => {
      fusions.value = newFusions
    }
    const setPersonaDetails = (newPersonaDetails: personaDetail[]) => {
      personaDetails.value = newPersonaDetails
    }
    const removeSkills = () => {
      skills.value = []
    }
    const removeFusions = () => {
      fusions.value = []
    }
    const removePersonaDetails = () => {
      personaDetails.value = []
    }
    return {
      skills,
      fusions,
      personaDetails,
      setSkills,
      setFusions,
      setPersonaDetails,
      removeSkills,
      removeFusions,
      removePersonaDetails
    }
  },
  {
    persist: true
  }
)
