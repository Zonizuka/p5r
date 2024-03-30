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
      <el-table-column prop="arcana" label="阿尔卡纳" min-width="9" />
      <el-table-column prop="level" label="等级" min-width="6" />
      <el-table-column prop="skill" label="技能" min-width="20">
        <template #default="scope">
          <div>
            <div
              class="skill"
              v-for="(item, index) in scope.row.skill"
              :key="scope.row.id"
              style="width: 100%"
            >
              <a href="" @click.prevent="handleSkillWindow(scope.row.id, index)">{{ item }}</a>
              <div class="skill-content" v-if="skillWindow.has(scope.row.id) && skillWindow.get(scope.row.id)?.has(index)">{{ personaDetailStore.skills[personaDetailStore.personaDetails[scope.row.id - 1].skill[index] - 1].skillDetail }}</div>
            </div> 
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="characteristic" label="特性" min-width="14">
        <template #default="scope">
          <div>
            <div>
              <a href="" @click.prevent="handleSkillWindow(scope.row.id, 8)">{{ scope.row.characteristic }}</a>
              <div class="skill-content" v-if="skillWindow.has(scope.row.id) && skillWindow.get(scope.row.id)?.has(8)">{{ personaDetailStore.skills[personaDetailStore.personaDetails[scope.row.id - 1].characteristic - 1].skillDetail }}</div>
            </div> 
          </div>
        </template>
      </el-table-column>
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
      <el-table-column prop="wind" label="风" min-width="4" v-if="isShow" />
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
import { getPersonaList } from '@/api/persona'
import { usePersonaStore } from '@/stores/persona'
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { type persona } from '@/common/interface'
import { getPersonaDetail, getSkill } from '@/api/detail'
import { usePersonaDetailStore } from '@/stores/personaDetail'

// 定义渲染列表
const personaList = ref<persona[]>([])
// 是否展示后面内容
const isShow = ref(true)
const viewportWidth = ref(window.innerWidth)
// 本地存储的数据
const personaStore = usePersonaStore()
const personaDetailStore = usePersonaDetailStore()

// 展示的技能详情窗口，第一个为当前行id，第二个为当前技能索引
// 利用map和set集合进行查找提高效率
const skillWindow = reactive(new Map<number, Set<number>>())

// 搜索功能，父组件调用该search方法返回新的列表
const search = (arcana: string, name: string) => {
  if (arcana === '' && name === '') {
    personaList.value = personaStore.personas
  } else {
    personaList.value = personaStore.personas.filter((item) => {
      return (
        (arcana === '' || item.arcana.startsWith(arcana)) &&
        (name === '' ||
          item.name.includes(name) ||
          (item.aliasName !== null && item.aliasName.includes(name)))
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
      return { 'text-align': 'center', 'background-color': '#B565F9' }
  }
}

let count = 0
const handleSkillWindow = (id: number, index: number) => {
  // 仅需调用一次，只在点击时才加载，避免页面渲染时加载多个文件
  if (count < 1) {
    getPersonaDetail().then(() => {
    getSkill()
    })
    count++
  }
  if (skillWindow.has(id)) {
    const set = skillWindow.get(id)
    if (set?.has(index)) {
      set.delete(index)
    } else {
      set?.add(index)
    }
  } else {
    skillWindow.set(id, new Set([index]))
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
  getPersonaList().then((result) => {
    personaList.value = result
  })
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

.skill{
  position: relative;
  
}
.skill-content {
    color: black;
    padding: 0 2px 0 2px;
    position:sticky;
    background-color: $default-gray-color;
    width: 100%;
    border: 1px solid #ebeef5;
  }
</style>
