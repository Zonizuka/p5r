<template>
  <div>
    <el-table
      :data="tableData"
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
const tableData = [
  {
    id: 1,
    arcana: '愚者',
    name: '亚森',
    level: '1',
    skill: ['耶哈', '斩击', '斯昆达', '织梦针', '逆境的觉悟'],
    characteristic: '逆转的王牌',
    physics: '-',
    gun: '-',
    fire: '-',
    ice: '弱',
    electricity: '-',
    wind: '-',
    cognition: '-',
    nuclear: '-',
    bless: '弱',
    curse: '耐'
  },
  {
    id: 2,
    arcana: '愚者',
    name: '亚森',
    level: '1',
    skill: ['耶哈', '斩击', '斯昆达', '织梦针', '逆境的觉悟'],
    characteristic: '逆转的王牌',
    physics: '-',
    gun: '-',
    fire: '-',
    ice: '弱',
    electricity: '-',
    wind: '-',
    cognition: '-',
    nuclear: '-',
    bless: '弱',
    curse: '耐'
  },
  {
    id: 1,
    arcana: '愚者',
    name: '亚森',
    level: '1',
    skill: ['耶哈', '斩击', '斯昆达', '织梦针', '逆境的觉悟'],
    characteristic: '逆转的王牌',
    physics: '-',
    gun: '-',
    fire: '-',
    ice: '弱',
    electricity: '-',
    wind: '-',
    cognition: '-',
    nuclear: '-',
    bless: '弱',
    curse: '耐'
  }
]
</script>

<style scoped lang="scss"></style>
