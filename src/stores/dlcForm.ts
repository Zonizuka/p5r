import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDlcFormStore = defineStore(
  'dlcForm-store',
  () => {
    const status = ref(false)

    const setStatus = (value: boolean) => {
      status.value = value
    }

    const formData = ref([
      3, 4, 6, 7, 8, 9, 15, 78, 79, 106, 109, 112, 113, 144, 145, 168, 169, 186,
      189, 192, 193, 209, 212, 231, 232
    ])

    const setFormData = (value: number[]) => {
      formData.value = value
    }

    return { status, setStatus, formData, setFormData }
  },
  {
    persist: true
  }
)
