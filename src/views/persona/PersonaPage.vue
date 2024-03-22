<template>
  <div class="persona-page">
    <el-table
      :data="personaPage"
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
      :data="personaPageCharacteristic"
      border
      style="width: 100%"
      :header-cell-style="setHeaderCell"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="characteristicName" label="特性" min-width="29" />
      <el-table-column
        prop="characteristicDetail"
        label="特性"
        min-width="71"
      />
    </el-table>
  </div>
  <div class="skill-page">
    <el-table
      :data="personaPageSkill"
      border
      style="width: 100%"
      :header-cell-style="setHeaderCell"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="skillName" label="技能" min-width="29" />
      <el-table-column prop="skillDetail" label="技能" min-width="71" />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import {
  type persona,
  type personaSkill,
  type personaDetail,
  type personaCharacteristic,
  type fusionMaterial,
  type subDetailArray
} from '@/common/interface'
import { getPersonaList } from '@/api/persona'
import { getPersonaDetail, getSkill, getFusion } from '@/api/detail'
import { usePersonaDetailStore } from '@/stores/personaDetail'
// 定义渲染数据
const personaPage = ref<persona[]>([])
const personaPageCharacteristic = ref<personaCharacteristic[]>([])
const personaPageSkill = ref<personaSkill[]>([])

// 使用仓库
const personaDetailStore = usePersonaDetailStore()

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

// 为技能特性数据赋值
const getPersonaSkill = () => {
  var personaDetail: personaDetail = {} as personaDetail
  var personaSkill: personaSkill[] = []
  getPersonaDetail().then((result) => {
    personaDetail = result[id - 1]
    getSkill().then((result) => {
      personaSkill = result
      personaPageCharacteristic.value = (() => {
        return [
          {
            characteristicName: personaPage.value[0].characteristic,
            characteristicDetail:
              personaSkill[personaDetail.characteristic - 1].skillDetail
          }
        ]
      })()
      personaPageSkill.value = (() => {
        const arr = [] as personaSkill[]
        const skills = personaDetail.skill
        const skillName = personaPage.value[0].skill
        for (let i = 0; i < skills.length; i++) {
          arr.push({
            skillName: skillName[i],
            skillDetail: personaSkill[skills[i] - 1].skillDetail
          })
        }
        return arr
      })()
    })
  })
}

const getPersonaFusion = () => {
  getFusion().then((fusions) => {
    const personaDetail = personaDetailStore.personaDetails[id - 1]
    const resultType = personaDetail.resultType
    // 若合成类型为1，则代表可以由二体合成而来
    if (resultType == 1) {
      // 获取合成数据
      const fusion = fusions[personaDetail.arcana - 1].arcanaFusion
      const subArray = {} as subDetailArray
      for (let i = 0; i < fusion.length - 1; i += 2) {
        // 查找
        const arcana1 = fusion[i]
        const arcana2 = fusion[i + 1]
        // 用hashmap存子序列，提高效率，避免重复查找
        var subPersonaArr1 = []
        var subPersonaArr2 = []
        if (arcana1 in subArray) {
          subPersonaArr1 = subArray[arcana1]
        } else {
          subPersonaArr1 = personaDetailStore.personaDetails.slice(
            subArrayIndex[arcana1 - 1][0],
            subArrayIndex[arcana1 - 1][1]
          )
          subArray[arcana1] = subPersonaArr1
        }
        if (arcana2 in subArray) {
          subPersonaArr2 = subArray[arcana2]
        } else {
          subPersonaArr2 = personaDetailStore.personaDetails.slice(
            subArrayIndex[arcana2 - 1][0],
            subArrayIndex[arcana2 - 1][1]
          )
          subArray[arcana2] = subPersonaArr2
        }
        // 开始进行合成计算
      }
    }
  })
}

onMounted(() => {
  // 先获取面具，注意异步顺序
  getPersonaList().then((result) => {
    personaPage.value = [result[id - 1]]
    getPersonaSkill()
    getPersonaFusion()
  })
  // 获取技能特性数据

  window.addEventListener('resize', handleWidth)
  handleWidth()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleWidth)
})

// 存放反查表的子数组索引，方便查找，左闭右开
const subArrayIndex = [
  [0, 17],
  [17, 28],
  [28, 37],
  [37, 46],
  [46, 55],
  [55, 62],
  [62, 71],
  [71, 82],
  [82, 91],
  [91, 103],
  [103, 114],
  [114, 124],
  [124, 134],
  [134, 147],
  [147, 156],
  [156, 165],
  [165, 174],
  [174, 183],
  [183, 196],
  [196, 204],
  [204, 213],
  [213, 222],
  [222, 230]
]
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
