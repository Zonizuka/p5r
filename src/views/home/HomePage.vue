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
        />
      </span>
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
      <span>
        <el-button plain class="search-btn" @click="searchFn()"
          >搜索</el-button
        ></span
      >
      <span
        ><el-button plain class="clear-btn" @click="clearFn()"
          >清空</el-button
        ></span
      >
    </div>
    <PersonaArticle ref="articleComp"></PersonaArticle>
  </div>
</template>

<script lang="ts" setup>
// 导入钩子函数和ref
import { onMounted, ref, watch, onUnmounted } from 'vue'
// 导入自定义表格组件
import PersonaArticle from './PersonaArticle.vue'
// 导入persona的接口
import { type searchList } from '@/common/interface'
// 导入persona的store
import { usePersonaStore } from '@/stores/persona'
import { getPersonaList } from '@/api/persona'

const personaStore = usePersonaStore()

// 引用表格组件
const articleComp: any = ref(null)

// 绑定输入框中的数据
const arcana = ref('')
const name = ref('')

// 搜索点击按钮
const searchFn = () => {
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

// 绑定搜索框
const watchArcana = watch(arcana, searchFn, {
  deep: true,
  immediate: false
})

const watchName = watch(name, searchFn, {
  deep: true,
  immediate: false
})

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

const arcanaData: searchList[] = [
  { value: '愚者' },
  { value: '魔术师' },
  { value: '女教皇' },
  { value: '女皇' },
  { value: '皇帝' },
  { value: '教皇' },
  { value: '恋爱' },
  { value: '战车' },
  { value: '正义' },
  { value: '隐者' },
  { value: '命运' },
  { value: '力量' },
  { value: '倒悬者' },
  { value: '死神' },
  { value: '节制' },
  { value: '恶魔' },
  { value: '塔' },
  { value: '星' },
  { value: '月' },
  { value: '太阳' },
  { value: '审判' },
  { value: '顾问官' },
  { value: '世界' }
]

// 获得面具列表后，将面具列表里的personaList提取出来
// 加载自动补全框的数据
const loadData = () => {
  getPersonaList().then((res) => {
    const uniqueName: searchList[] = []
    // 创建一个临时数组
    let tempNameArr: string[] = []
    for (const item of res) {
      let name = item.name
      if (!tempNameArr.includes(name)) {
        tempNameArr.push(name)
        uniqueName.push({ value: name })
      }
    }
    personaStore.setNameList(uniqueName)
    nameList.value = personaStore.nameList
    arcanaList.value = arcanaData
  })
}

const handleSelect = (item: any) => {
  searchFn()
}

onMounted(() => {
  loadData()
})

onUnmounted(() => {
  watchArcana()
  watchName()
})
</script>

<style scoped lang="scss">
.search {
  background-color: $default-black-color;
  width: 100%;
  .search-in-box {
    width: 100%;
    display: flex;
    padding: 10px 0px 10px 0px;
    justify-content: flex-start;
    gap: 10px;
    flex-shrink: 1;
    // .arcana-span {
    //   // margin-right: 10px;
    //   .arcana {
    //     width: 20%;
    //   }
    // }
    // .persona-name-span {
    //   // margin-right: 10px;
    // }
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
.el-table .cell {
  overflow: visible;
}
</style>
