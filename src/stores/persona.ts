import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type persona } from '@/common/interface'

// 面具模块
export const usePersonaStore = defineStore(
  'persona-store',
  () => {
    const personas = ref<persona[]>([])
    const setPersona = (newPersonas: persona[]) => {
      personas.value = newPersonas
    }

    const removePersona = () => {
      personas.value = []
    }

    return {
      personas,
      setPersona,
      removePersona
    }
  },
  {
    persist: true
  }
)
