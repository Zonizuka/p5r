import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDlcFormStore = defineStore(
  'dlcForm-store',
  () => {
    const status = ref(true)

    const setStatus = (value: boolean) => {
      status.value = value
    }

    const formData = ref([
      3, 4, 6, 7, 8, 9, 12, 14, 15, 16, 17, 28, 37, 46, 55, 62, 71, 78, 79, 82,
      91, 103, 106, 109, 112, 113, 114, 124, 134, 144, 145, 147, 156, 165, 168,
      169, 174, 183, 186, 189, 192, 193, 196, 204, 209, 212, 213, 222, 230, 231,
      232, 233, 234
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
