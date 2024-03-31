<template>
  <div class="skill-page">
    <div class="skill-border">
      <div class="skill-button">
        <span class="button" v-for="(item, index) in skillBtn" :key="index">
          <el-button plain class="skill-btn" @click="handleClick(item)">{{
            item
          }}</el-button>
        </span>
      </div>
    </div>
    <div class="skill-table">
      <el-table
        :data="skills"
        border
        style="width: 100%"
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="setCellStye"
      >
        <el-table-column
          prop="type"
          label="技能类型"
          min-width="10"
        ></el-table-column>
        <el-table-column
          prop="skillName"
          label="技能名称"
          min-width="20"
        ></el-table-column>
        <el-table-column
          prop="skillDetail"
          label="技能描述"
          min-width="40"
        ></el-table-column>
        <el-table-column
          prop="notes"
          label="备注"
          min-width="20"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getSkill } from '@/api/detail'
import { type skill } from '@/common/interface'
const skillType = [
  '全部',
  '火焰',
  '冰冻',
  '电击',
  '疾风',
  '念动',
  '核热',
  '祝福',
  '咒怨',
  '万能',
  '物理',
  '枪击',
  '异常',
  '治疗',
  '辅助',
  '被动',
  '特性'
]
const skillBtn = ref<string[]>(skillType)
const skills = ref<skill[]>([])
let skillList: skill[] = []
const handleClick = (name: string) => {
  if (name === '全部') {
    skills.value = skillList
  } else {
    skills.value = skillList.filter((skill) => skill.type === name)
  }
}

const setCellStye: any = ({
  columnIndex,
  row
}: {
  columnIndex: number
  row: any
}) => {
  if (columnIndex === 0) {
    switch (row.type) {
      case '火焰':
        return { 'background-color': '#FF8585', 'text-align': 'center' }
      case '冰冻':
        return { 'background-color': '#96B0FF', 'text-align': 'center' }
      case '电击':
        return { 'background-color': '#EBEC5A', 'text-align': 'center' }
      case '疾风':
        return { 'background-color': '#99E849', 'text-align': 'center' }
      case '念动':
        return { 'background-color': '#FFA8FF', 'text-align': 'center' }
      case '核热':
        return { 'background-color': '#96ACEE', 'text-align': 'center' }
      case '祝福':
        return { 'background-color': '#FFFFCC', 'text-align': 'center' }
      case '咒怨':
        return { 'background-color': '#B565F9', 'text-align': 'center' }
      case '万能':
        return { 'background-color': '#D2D2C6', 'text-align': 'center' }
      case '物理':
        return { 'background-color': '#F7C477', 'text-align': 'center' }
      case '枪击':
        return { 'background-color': '#FFA51E', 'text-align': 'center' }
      case '异常':
        return { 'background-color': '#E176FF', 'text-align': 'center' }
      case '治疗':
        return { 'background-color': '#7AF09D', 'text-align': 'center' }
      case '辅助':
        return { 'background-color': '#6AD9FF', 'text-align': 'center' }
      case '被动':
        return { 'background-color': '#FCEB8A', 'text-align': 'center' }
      case '特性':
        return { 'background-color': '#FF7070', 'text-align': 'center' }
    }
  }
  return { 'text-align': 'center' }
}

onMounted(() => {
  getSkill().then((res: skill[]) => {
    skills.value = res
    skillList = res
  })
})
</script>

<style lang="scss" scoped>
.skill-page {
  background-color: $default-black-color;
  width: 100%;
  padding: 5px 0 0 0;
  .skill-border {
    width: 100%;
    border-color: $default-red-color;
    .skill-button {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: flex-start; /* 左对齐 */
      .button {
        box-sizing: border-box; /* 确保元素的padding和border不会增加其宽度 */
        margin: 1px; /* 根据需要添加间距 */
        flex-basis: auto; /* 根据内容设置宽度 */
        flex-grow: 0; /* 不允许元素增长以填充额外空间 */
        flex-shrink: 1; /* 允许元素在必要时缩小 */
        .skill-btn {
          background-color: $default-red-color;
          color: white;
          --el-button-hover-border-color: red;
          --el-button-active-border-color: #1b1818;
        }
      }
    }
  }
}
</style>
