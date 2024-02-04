<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('home')
const ellipsis = ref(false)
const handleSelect = (key: String, keyPath: String[]) => {
  console.log(key, keyPath)
}
</script>
<template>
  <div class="head">
    <div class="headPic">
      <img class="homePic" src="../assets/head/p5r-head.jpg" />
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
        <el-menu-item class="menu-item" index="home">面具一览</el-menu-item>
        <el-menu-item class="menu-item" index="skill">技能列表</el-menu-item>
        <el-menu-item class="menu-item" index="characteristic"
          >特性列表</el-menu-item
        >
        <el-menu-item class="menu-item" index="path">路线查询</el-menu-item>
        <el-menu-item class="menu-item" index="theory">合成原理</el-menu-item>
        <el-menu-item class="menu-item" index="recommend"
          >面具推荐</el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.head {
  width: 100%;
}
.headPic {
  margin: 0;
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
