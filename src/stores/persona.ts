import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type persona, type searchList } from '@/common/interface'

// 面具模块
export const usePersonaStore = defineStore(
  'persona-store',
  () => {
    const personas = ref<persona[]>([])
    const arcanaList = ref<searchList[]>([])
    const nameList = ref<searchList[]>([])

    const setPersona = (newPersonas: persona[]) => {
      personas.value = newPersonas
    }

    const setArcanaList = (newArcanaList: searchList[]) => {
      arcanaList.value = newArcanaList
    }

    const setNameList = (newNameList: searchList[]) => {
      nameList.value = newNameList
    }

    const removeArcanaList = () => {
      arcanaList.value = []
    }

    const removeNameList = () => {
      nameList.value = []
    }

    const removePersona = () => {
      personas.value = []
    }
    return {
      personas,
      arcanaList,
      nameList,
      setPersona,
      setArcanaList,
      setNameList,
      removePersona,
      removeArcanaList,
      removeNameList
    }
  },
  {
    persist: true
  }
)
