<template>
  <div>
    <el-table
      :data="personaList"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="arcana" label="阿尔卡纳" min-width="10" />
      <el-table-column prop="name" label="名称" min-width="10" />
      <el-table-column prop="level" label="基础等级" min-width="10" />
      <el-table-column prop="skill" label="技能" min-width="20">
        <template #default="scope">
          <div>
            <div
              v-for="(item, index) in scope.row.skill"
              :key="index"
              style="width: 100%"
            >
              {{ item }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="characteristic" label="特性" min-width="10" />
      <el-table-column prop="physics" label="物" min-width="4" />
      <el-table-column prop="gun" label="枪" min-width="4" />
      <el-table-column prop="fire" label="火" min-width="4" />
      <el-table-column prop="ice" label="冰" min-width="4" />
      <el-table-column prop="electricity" label="电" min-width="4" />
      <el-table-column prop="wind" label="风" min-width="4" />
      <el-table-column prop="cognition" label="念" min-width="4" />
      <el-table-column prop="nuclear" label="核" min-width="4" />
      <el-table-column prop="bless" label="祝" min-width="4" />
      <el-table-column prop="curse" label="咒" min-width="4" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
// import { getPersonaService } from '@/api/persona'
import axios from '@/http/index'
import { usePersonaStore } from '@/stores/persona'
import { ref, onMounted, provide } from 'vue'
import { type persona, type responseParams } from '@/common/interface'
// 定义渲染列表
const personaList = ref<persona[]>([])
// 本地存储的数据
const personaStore = usePersonaStore()
// 发送请求，若本地已有数据，直接获取不进行请求
const getPersonaList = async () => {
  if (personaStore.personas.length > 0) {
    personaList.value = personaStore.personas
  } else {
    let { data } = await axios.request<{ data: responseParams }>('get', '/home')
    console.log(data)
    let personas = data.data
    personaList.value = personas
    // personaList.value = res.data.data
    // 将请求的数据存入本地
    personaStore.setPersona(personas)
    console.log('存储到本地了')
  }
}

// 搜索功能
const search = (arcana: string, name: string) => {
  if (arcana === '' && name === '') {
    personaList.value = personaStore.personas
  } else {
    personaList.value = personaStore.personas.filter((item) => {
      return (
        (arcana === '' || item.arcana.includes(arcana)) &&
        (name === '' || item.name.includes(name))
      )
    })
  }
}

defineExpose({
  search
})

onMounted(() => {
  getPersonaList()
})
</script>

<style scoped lang="scss"></style>
