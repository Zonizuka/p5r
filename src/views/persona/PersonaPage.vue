<template>
  <div class="persona-page">
    <el-table
      :data="personaFusion"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="setCellStyle"
    >
      <el-table-column
        prop="name"
        label="名称"
        :min-width="tableWidth"
        class="name"
      >
        <template #default="scope">
          <div>
            <a href="" @click.prevent="">{{ scope.row.name }}</a>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="arcana"
        label="阿尔卡纳"
        :min-width="tableWidth"
        class="arcana"
      />
      <el-table-column
        prop="level"
        label="基础等级"
        :min-width="tableWidth"
        class="level"
      />
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

  <div class="characteristic-page">
    <el-table
      :data="personaFusion"
      border
      style="width: 100%"
      :header-cell-style="setHeaderCell"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="characteristic" label="特性" />
      <el-table-column prop="characteristic" label="特性" />
    </el-table>
  </div>
  <div class="skill-page">
    <el-table
      :data="personaFusion"
      border
      style="width: 100%"
      :header-cell-style="setHeaderCell"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="skill" label="技能" />
      <el-table-column prop="skill" label="技能" />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { usePersonaStore } from '@/stores/persona'
import { ref, onMounted, onUnmounted } from 'vue'
import { type persona } from '@/common/interface'
// 定义渲染数据
const personaFusion = ref<persona[]>([])
const personaStore = usePersonaStore()

// 技能列表

// 使用路由模块，获取参数
const route = useRoute()
const id = +route.params.id

// 更改表格宽度
const tableWidth = ref(10)
const viewportWidth = ref(window.innerWidth)
const handleWidth = () => {
  if (viewportWidth.value < 500) {
    tableWidth.value = 5
  } else {
    tableWidth.value = 10
  }
}
// 表头的回调方法
const setHeaderCell: any = ({
  columnIndex,
  row
}: {
  columnIndex: number
  row: any
}) => {
  if (row[0].level === 1) {
    // 必须是row[0]=0 row[1]=2才会生效
    row[0].colSpan = 0
    row[1].colSpan = 2
    if (columnIndex === 0) {
      return { display: 'none' }
    }
  }
  return { 'text-align': 'center' }
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
    // 抗性单元格开始，物理
    case 3:
      return { 'text-align': 'center', 'background-color': '#F7C477' }
    // 枪
    case 4:
      return { 'text-align': 'center', 'background-color': '#FFA51E' }
    // 火
    case 5:
      return { 'text-align': 'center', 'background-color': '#FF8585' }
    // 冰
    case 6:
      return { 'text-align': 'center', 'background-color': '#96B0FF' }
    // 电
    case 7:
      return { 'text-align': 'center', 'background-color': '#EBEC5A' }
    // 风
    case 8:
      return { 'text-align': 'center', 'background-color': '#99E849' }
    // 念
    case 9:
      return { 'text-align': 'center', 'background-color': '#FFA8FF' }
    // 核
    case 10:
      return { 'text-align': 'center', 'background-color': '#96ACEE' }
    // 祝
    case 11:
      return { 'text-align': 'center', 'background-color': '#FFFFCC' }
    // 咒
    case 12:
      return { 'text-align': 'center', 'background-color': '#D2D2C6' }
  }
}

// 给渲染数据赋值
const getPersonFusion = () => {
  personaFusion.value = [personaStore.personas[id - 1]]
}
onMounted(() => {
  getPersonFusion()
  console.log('处理了阿尔卡纳列表和面具')
  window.addEventListener('resize', handleWidth)
  handleWidth()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleWidth)
})
</script>
<style scoped lang="scss">
.persona-page {
  margin: 5px 0 0 0;
}

.skill-page .characteristic-page {
  margin: 5px 0 0 0;
}

a:link,
a:visited {
  color: rgb(61, 61, 192);
  text-decoration: none;
}

a:hover {
  color: red;
}
</style>
