import { defineStore } from 'pinia'
import { ref } from 'vue'

const usePersonaDetailStore = defineStore('persona-detail', () => {
  const skills = ref({})
  const fusions = ref({})
  return { skills, fusions }
})
