<template>
  <div>
    <el-table
      :data="personaList"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="setCellStyle"
    >
      <el-table-column prop="name" label="名称" min-width="10">
        <template #default="scope">
          <div>
            <a
              href=""
              @click.prevent="$router.push(`/persona/${scope.row.id}`)"
              >{{ scope.row.name }}</a
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="arcana" label="阿尔卡纳" min-width="10" />
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
      <el-table-column prop="physics" label="物" min-width="4" v-if="isShow" />
      <el-table-column prop="gun" label="枪" min-width="4" v-if="isShow" />
      <el-table-column prop="fire" label="火" min-width="4" v-if="isShow" />
      <el-table-column prop="ice" label="冰" min-width="4" v-if="isShow" />
      <el-table-column
        prop="electricity"
        label="电"
        min-width="4"
        v-if="isShow"
      />
      <el-table-column prop="wind" label="风" min-width="4" v-if="false" />
      <el-table-column
        prop="cognition"
        label="念"
        min-width="4"
        v-if="isShow"
      />
      <el-table-column prop="nuclear" label="核" min-width="4" v-if="isShow" />
      <el-table-column prop="bless" label="祝" min-width="4" v-if="isShow" />
      <el-table-column prop="curse" label="咒" min-width="4" v-if="isShow" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
// import { getPersonaService } from '@/api/persona'
// import axios from '@/http/index'
import { usePersonaStore } from '@/stores/persona'
import { ref, onMounted, onUnmounted } from 'vue'
import PersonaList from '@/json/PersonaList'
import {
  type persona,
  // type responseParams,
  type searchList
} from '@/common/interface'
// 定义渲染列表
const personaList = ref<persona[]>([])
// 是否展示后面内容
const isShow = ref(true)
const viewportWidth = ref(window.innerWidth)
// 本地存储的数据
const personaStore = usePersonaStore()
// 发送请求，若本地已有数据，直接获取不进行请求
// 读取js文件模块
const getPersonaList = async () => {
  if (personaStore.personas.length > 0) {
    personaList.value = personaStore.personas
  } else {
    personaStore.setPersona(PersonaList)
    personaList.value = personaStore.personas
    /* let { data } = await axios.request<{ data: responseParams }>('get', '/home')
    console.log(data)
    let personas = data.data
    personaList.value = personas
    // personaList.value = res.data.data
    // 将请求的数据存入本地
    personaStore.setPersona(personas) */
    console.log('面具列表存储到本地了')
  }
}

// 获得面具列表后，将面具列表里的personaList提取出来
const getArcanaList = () => {
  if (personaStore.personas.length > 0) {
    // 创建搜索列表数组
    const uniqueArcana: searchList[] = []
    const uniqueName: searchList[] = []
    // 创建一个临时数组
    let tempArcanaArr: string[] = []
    let tempNameArr: string[] = []
    for (const item of personaStore.personas) {
      let arcana = item.arcana
      let name = item.name
      if (!tempArcanaArr.includes(arcana)) {
        tempArcanaArr.push(arcana)
        uniqueArcana.push({ value: arcana })
      }
      if (!tempNameArr.includes(name)) {
        tempNameArr.push(name)
        uniqueName.push({ value: name })
      }
    }
    console.log('阿尔卡纳列表', uniqueArcana)
    console.log('面具列表', uniqueName)
    personaStore.setArcanaList(uniqueArcana)
    personaStore.setNameList(uniqueName)
  }
}

// 搜索功能，父组件调用该search方法返回新的列表
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

// cell-style的回调方法
const setCellStyle: any = ({ columnIndex }: { columnIndex: number }) => {
  switch (columnIndex) {
    case 0:
      return { 'text-align': 'center' }
    case 1:
      return { 'text-align': 'center' }
    case 2:
      return { 'text-align': 'center' }
    case 3:
      return { 'text-align': 'center' }
    case 4:
      return { 'text-align': 'center' }
    // 抗性单元格开始，物理
    case 5:
      return { 'text-align': 'center', 'background-color': '#F7C477' }
    // 枪
    case 6:
      return { 'text-align': 'center', 'background-color': '#FFA51E' }
    // 火
    case 7:
      return { 'text-align': 'center', 'background-color': '#FF8585' }
    // 冰
    case 8:
      return { 'text-align': 'center', 'background-color': '#96B0FF' }
    // 电
    case 9:
      return { 'text-align': 'center', 'background-color': '#EBEC5A' }
    // 风
    case 10:
      return { 'text-align': 'center', 'background-color': '#99E849' }
    // 念
    case 11:
      return { 'text-align': 'center', 'background-color': '#FFA8FF' }
    // 核
    case 12:
      return { 'text-align': 'center', 'background-color': '#96ACEE' }
    // 祝
    case 13:
      return { 'text-align': 'center', 'background-color': '#FFFFCC' }
    // 咒
    case 14:
      return { 'text-align': 'center', 'background-color': '#D2D2C6' }
  }
}

const handleShow = () => {
  if (viewportWidth.value < 700) {
    isShow.value = false
  } else {
    isShow.value = true
  }
}

defineExpose({
  search
})

onMounted(() => {
  getPersonaList()
  console.log('发送请求了')
  getArcanaList()
  console.log('处理了阿尔卡纳列表和面具')
  window.addEventListener('resize', handleShow)
  handleShow()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleShow)
})
</script>

<style scoped lang="scss">
a:link,
a:visited {
  color: rgb(61, 61, 192);
  text-decoration: none;
}

a:hover {
  color: red;
}
</style>
