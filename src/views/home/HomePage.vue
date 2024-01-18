<template>
  <div class="search">
    <div class="search-in-box">
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        clearable
        class="arcana"
        placeholder="阿尔卡纳"
        @select="handleSelect"
        popper-class="sub-arcana"
      />
      <el-autocomplete
        v-model="state2"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        class="persona-name"
        placeholder="面具名称"
        @select="handleSelect"
      />
      <el-button color="#000000" plain>搜索</el-button>
    </div>
    <PersonaArticle></PersonaArticle>
  </div>
</template>

<script lang="ts" setup>
// 导入钩子函数和ref
import { onMounted, ref } from 'vue'
// 导入自定义表格组件
import PersonaArticle from './PersonaArticle.vue'

// 定义了一个RestaurantItem接口，分别为值和链接
interface RestaurantItem {
  value: string
}

// 绑定输入框中的数据
const state1 = ref('')
const state2 = ref('')

// 创建该接口的数组的响应式数据
const restaurants = ref<RestaurantItem[]>([])

// 接收两个参数，一个字符串，一个回调函数
const querySearch = (queryString: string, cb: any) => {
  // 判断请求字符串是否存在，如果存在，则调用filter函数进行筛选，返回包含的值
  // 如果不存在，则返回所有值(未进行筛选)
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const loadAll = () => {
  return [
    { value: '愚者' },
    { value: '死神' },
    { value: '教皇' },
    { value: '女教皇' },
    { value: '恋爱' },
    { value: '皇帝' },
    { value: '魔术师' }
  ]
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

onMounted(() => {
  restaurants.value = loadAll()
})
</script>

<style scoped lang="scss">
.search {
  background-color: black;
  width: 100%;
  margin: 5px 0 0 0;
  .search-in-box {
    width: 100%;
    display: flex;
    margin: 10px 10px;
    justify-content: flex-start;
  }
}
</style>
