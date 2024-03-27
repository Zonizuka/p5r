<template>
  <div class="head">
    <div class="headPic">
      <img class="homePic" src="@/assets/head/p5r-head.jpg" draggable="false" />
      <DLC class="dlc" @click="changeStatus"></DLC>
      <DLCForm v-if="status"></DLCForm>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-nav"
        mode="horizontal"
        background-color="#1B1818"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
        :ellipsis="ellipsis"
        router
      >
        <el-menu-item class="menu-item" index="/home">面具一览</el-menu-item>
        <el-menu-item class="menu-item" index="/skill">技能列表</el-menu-item>
        <el-menu-item class="menu-item" index="/theory">合成原理</el-menu-item>
        <el-menu-item class="menu-item" index="/recommend"
          >面具推荐</el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useDlcFormStore } from '@/stores/dlcForm'
import { storeToRefs } from 'pinia'
// 监听视口大小
const viewportWidth = ref(window.innerWidth)
const ellipsis = ref(false)
const dlcFormStore = useDlcFormStore()
// 解构出status，此为响应式数据
const { status } = storeToRefs(dlcFormStore)

const activeIndex = ref('home')
const handleSelect = (key: String, keyPath: String[]) => {
  console.log(key, keyPath)
}

const changeStatus = () => {
  dlcFormStore.setStatus(true)
}

const handleResize = () => {
  viewportWidth.value = window.innerWidth

  if (viewportWidth.value < 600) {
    ellipsis.value = true
  } else {
    ellipsis.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.head {
  width: 100%;
}
.headPic {
  margin: 0;
  position: relative;
  overflow: hidden;
  .homePic {
    width: 100%;
  }
}

.el-menu-nav {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  .menu-item {
    flex: 1 1 auto;
  }
}
</style>
