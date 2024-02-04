<template>
  <div class="search">
    <div class="search-in-box">
      <span class="arcana-span">
        <el-autocomplete
          v-model="arcana"
          :fetch-suggestions="querySearchArcana"
          class="arcana"
          placeholder="阿尔卡纳"
          @select="handleSelect"
          popper-class="sub-arcana"
      /></span>
      <span class="persona-name-span">
        <el-autocomplete
          v-model="name"
          :fetch-suggestions="querySearchName"
          :trigger-on-focus="false"
          class="persona-name"
          placeholder="面具名称"
          @select="handleSelect"
          popper-class="sub-arcana"
        />
      </span>
      <el-button plain class="search-btn" @click="searchFn()">搜索</el-button>
      <el-button plain class="clear-btn" @click="clearFn()">清空</el-button>
    </div>
    <PersonaArticle ref="articleComp"></PersonaArticle>
  </div>
</template>

<script lang="ts" setup>
// 导入钩子函数和ref
import { onMounted, ref } from 'vue'
// 导入自定义表格组件
import PersonaArticle from './PersonaArticle.vue'
// 导入persona的接口
import { type searchList } from '@/common/interface'
// 导入persona的store
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

// 引用表格组件
const articleComp: any = ref(null)

// 绑定输入框中的数据
const arcana = ref('')
const name = ref('')

// 搜索点击按钮
const searchFn = () => {
  console.log('点击了搜索按钮')
  if (articleComp.value !== null) {
    articleComp.value.search(arcana.value, name.value)
  }
}

// 清空点击按钮
const clearFn = () => {
  arcana.value = ''
  name.value = ''
  articleComp.value.search('', '')
}

// 创建阿尔卡纳和名称数组的响应式数据
const arcanaList = ref<searchList[]>([])
const nameList = ref<searchList[]>([])

// 根据输入框字符串返回结果，处理阿尔卡纳输入框
// 接收两个参数，一个字符串，一个回调函数
const querySearchArcana = (queryString: string, cb: any) => {
  // 判断请求字符串是否存在，如果存在，则调用filter函数进行筛选，返回包含的值
  // 如果不存在，则返回所有值(未进行筛选)
  const results = queryString
    ? arcanaList.value.filter(createFilter(queryString))
    : arcanaList.value
  // 返回筛选后的数据
  cb(results)
}
// 根据输入框字符串返回结果，处理面具名称输入框
const querySearchName = (queryString: string, cb: any) => {
  // 判断请求字符串是否存在，如果存在，则调用filter函数进行筛选，返回包含的值
  // 如果不存在，则返回所有值(未进行筛选)
  const results = queryString
    ? nameList.value.filter(createFilter(queryString))
    : nameList.value
  // call callback function to return suggestions
  cb(results)
}

// 根据自定义过滤规则返回结果
const createFilter = (queryString: string) => {
  return (restaurant: searchList) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

// 加载自动补全框的数据
const loadData = () => {
  arcanaList.value = personaStore.arcanaList
  nameList.value = personaStore.nameList
}

const handleSelect = (item: any) => {
  console.log(item)
  searchFn()
}

onMounted(() => {
  loadData()
})
</script>

<style scoped lang="scss">
.search {
  background-color: $default-black-color;
  width: 100%;
  margin: 5px 0 0 0;
  .search-in-box {
    width: 100%;
    display: flex;
    margin: 10px 10px;
    justify-content: flex-start;
    .arcana-span {
      margin-right: 10px;
      .arcana {
        width: 20%;
      }
    }
    .persona-name-span {
      margin-right: 10px;
    }
    .search-btn {
      background-color: $default-red-color;
      color: white;
      --el-button-hover-border-color: red;
      --el-button-active-border-color: #1b1818;
    }
    .clear-btn {
      background-color: #1b1818;
      color: white;
      --el-button-hover-border-color: red;
      --el-button-active-border-color: rgb(182, 49, 49);
    }
  }
}
</style>

<style lang="scss">
/* 更改下拉框背景色 */
.sub-arcana {
  --el-bg-color-overlay: #1b1818;
  li {
    color: white;
  }
  li:hover {
    background-color: $default-red-color;
  }
}
</style>
