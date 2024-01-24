<template>
  <div class="search">
    <div class="search-in-box">
      <span class="arcana-span">
        <el-autocomplete
          v-model="state1"
          :fetch-suggestions="querySearch"
          class="arcana"
          placeholder="阿尔卡纳"
          @select="handleSelect"
          popper-class="sub-arcana"
      /></span>
      <span class="persona-name-span">
        <el-autocomplete
          v-model="state2"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          class="persona-name"
          placeholder="面具名称"
          @select="handleSelect"
          popper-class="sub-arcana"
        />
      </span>
      <el-button plain class="search-btn">搜索</el-button>
      <el-button plain class="clear-btn">清空</el-button>
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

const handleSelect = (item: any) => {
  console.log(item)
}

onMounted(() => {
  restaurants.value = loadAll()
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
