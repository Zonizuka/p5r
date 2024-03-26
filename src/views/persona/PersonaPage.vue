<template>
  <div class="persona-page">
    <el-table
      :data="personaPage"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="setCellStyle"
    >
      <el-table-column label="名称" :min-width="tableWidth" class="name">
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
  <div class="skill">
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
  <div class="fusion-page">
    <el-table
      :data="personaPageFusion"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column label="反向合成表">
        <template #default="scope">
          <div>
            <span v-for="(item, index) in scope.row" :key="index">
              <a href="" @click.prevent="refresh(item.id)">
                {{ item.arcanaName + 'LV' + item.level + item.name }}
              </a>
              <span v-if="index < scope.row.length - 1"> + </span>
            </span>
          </div>
        </template>
      </el-table-column>
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
  type subDetailArray
} from '@/common/interface'
import { getPersonaList } from '@/api/persona'
import { getPersonaDetail, getSkill, getFusion } from '@/api/detail'
import { usePersonaDetailStore } from '@/stores/personaDetail'
// 定义渲染数据
const personaPage = ref<persona[]>([])
const personaPageCharacteristic = ref<personaCharacteristic[]>([])
const personaPageSkill = ref<personaSkill[]>([])
const personaPageFusion = ref<personaDetail[][]>([])

// 使用仓库
const personaDetailStore = usePersonaDetailStore()

// 使用路由模块，获取参数
const route = useRoute()
let id = +route.params.id

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

const subArray = {} as subDetailArray
const getPersonaFusion = () => {
  getFusion().then((fusions) => {
    const personaDetail = personaDetailStore.personaDetails[id - 1]
    const resultType = personaDetail.resultType
    const resultArray = [] as personaDetail[][]
    // 若合成类型为1，则代表可以由二体合成而来，为2代表有固定配方，为3代表无法被合成
    if (resultType == 1) {
      // 获取合成数据
      const fusion = fusions[personaDetail.arcana - 1].arcanaFusion
      // 开始进行合成计算,先给区间等级初始值,再遍历第一个子序列
      // 上界默认为-1，下界默认为1000，如果有能作为二体合成的面具且大于当前面具等级，更新为当前面具等级
      const interval = [1, 1000]
      // 找出当前面具阿尔卡纳的结果等级区间
      const subSelfArr = searchSubArray(personaDetail.arcana)
      const selfLevel = personaDetail.level
      for (let j = 0; j < subSelfArr.length; j++) {
        // 查找策略，找到的区间面具必须resultType == 1才行
        if (subSelfArr[j].level < selfLevel && subSelfArr[j].resultType == 1) {
          interval[0] = subSelfArr[j].level
        } else if (
          subSelfArr[j].level > selfLevel &&
          subSelfArr[j].resultType == 1
        ) {
          interval[1] = selfLevel
          break
        }
      }
      console.log('interval', interval)
      for (let i = 0; i < fusion.length - 1; i += 2) {
        // 查找
        const arcana1 = fusion[i]
        const arcana2 = fusion[i + 1]
        // 用hashmap存子序列，提高效率，避免重复查找
        const subPersonaArr1 = searchSubArray(arcana1)
        const subPersonaArr2 = searchSubArray(arcana2)

        for (let j = 0; j < subPersonaArr1.length; j++) {
          // 用第一个子序列中的每个面具等级和当前面具等级进行计算
          // 先判断第一个子序列中的面具fusionType是否小于等于3，如果为3即宝魔，必须persona2也为3
          const persona1 = subPersonaArr1[j]
          if (persona1.fusionType <= 3) {
            const temp = [
              (interval[0] - 1) * 2 - persona1.level,
              (interval[1] - 1) * 2 - persona1.level
            ]
            for (let k = 0; k < subPersonaArr2.length; k++) {
              const persona2 = subPersonaArr2[k]
              // 可能是固定配方，如果遇到就跳过
              if (
                persona1.fusionType === 2 &&
                persona2.fusionType === 2 &&
                fixed[persona1.id] === persona2.id
              ) {
                continue
              }
              // 如果只有一方为宝魔，跳过
              if (
                (persona1.fusionType === 3 && persona2.fusionType !== 3) ||
                (persona1.fusionType !== 3 && persona2.fusionType === 3)
              )
                continue
              // 左开右闭区间
              if (persona2.level > temp[0] && persona2.level <= temp[1]) {
                // console.log(persona1, persona2)
                resultArray.push([persona1, persona2])
              }
            }
          }
        }
      }
      // 该查找同阿尔卡纳的面具了，从该阿尔卡纳序列中分离出该面具，无法参与合成的不用考虑
      const removedArray: personaDetail[] = subSelfArr.filter(
        (personaDetail) =>
          personaDetail.id !== id && personaDetail.fusionType <= 2
      )
      console.log('subSelfArr', subSelfArr)
      console.log('removedArray', removedArray)
      console.log('id', id)
      for (let i = 0; i < removedArray.length; i++) {
        const persona1 = removedArray[i]
        for (let j = i + 1; j < removedArray.length; j++) {
          const persona2 = removedArray[j]
          if (persona1.level < selfLevel && persona2.level < selfLevel) continue
          // 有可能为固定配方，奈比洛斯和贝利亚
          if (fixed[persona1.id] === persona2.id) continue
          // 找当前面具的等级区间，比它自身高一阶的面具，不能包含素材面具，也不包含固定配方
          if (persona2.level > selfLevel) {
            // 从自身开始出发寻找
            let index = j
            let upper = persona2.level
            while (index >= 0 && removedArray[index].level > selfLevel) {
              // 非素材面具
              if (
                index !== i &&
                index !== j &&
                removedArray[index].resultType == 1
              ) {
                upper = removedArray[index].level
              }
              index--
            }
            // 如果素材面具为区间上界，就可等于
            let result = (persona1.level + persona2.level) / 2 + 1
            let flag = upper === persona2.level
            if (result >= selfLevel && result <= upper && flag) {
              resultArray.push([persona1, persona2])
            } else if (result >= selfLevel && result < upper && !flag) {
              resultArray.push([persona1, persona2])
            }
          }
        }
      }
      console.log('resultArray', resultArray)
    } // resultType为2说明有固定配方
    else if (resultType == 2) {
      // 有固定配方就看fusionList
      const fusionArray = personaDetail.fusionList
      if (fusionArray === undefined) throw console.error('未添加合成信息!')
      let fixedFusionList = []
      for (let i = 0; i < fusionArray.length; i++) {
        fixedFusionList.push(
          personaDetailStore.personaDetails[fusionArray[i] - 1]
        )
      }
      resultArray.push(fixedFusionList)
      console.log('resultArray', resultArray)
    } else if (resultType == 3) {
      resultArray.push()
    }
    personaPageFusion.value = resultArray
  })
}

// 查找子序列，传入arcana的id
const searchSubArray = (id: number) => {
  if (id in subArray) {
    return subArray[id]
  } else {
    return personaDetailStore.personaDetails.slice(
      subArrayIndex[id - 1][0],
      subArrayIndex[id - 1][1]
    )
  }
}

const refresh = (newId: number) => {
  id = newId
  // 先获取面具，注意异步顺序
  getPersonaList().then((result) => {
    personaPage.value = [result[id - 1]]
    getPersonaSkill()
    getPersonaFusion()
  })
}

onMounted(() => {
  // 先获取面具，注意异步顺序
  getPersonaList().then((result) => {
    personaPage.value = [result[id - 1]]
    getPersonaSkill()
    getPersonaFusion()
  })

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
// 固定配方
const fixed: { [index: number]: number } = {
  25: 51,
  163: 164,
  69: 210
}
</script>
<style scoped lang="scss">
.persona-page {
  margin: 5px 0 0 0;
}

.skill .characteristic-page {
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
