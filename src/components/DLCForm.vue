<template>
  <div class="dlc-form">
    <span style="color: white"
      >勾选已有DLC面具
      <input type="radio" value="25" v-model="isSelectAll" />全选
      <input type="radio" value="0" v-model="isSelectAll" />反选
    </span>
    <p></p>
    <form style="color: white">
      <input
        type="checkbox"
        value="3"
        v-model="isSelect"
        class="dlc-persona"
      />俄耳甫斯(f)

      <input
        type="checkbox"
        value="4"
        v-model="isSelect"
        class="dlc-persona"
      />俄耳甫斯(f)·贼神<br />
      <input
        type="checkbox"
        value="6"
        v-model="isSelect"
        class="dlc-persona"
      />伊邪纳岐
      <input
        type="checkbox"
        value="7"
        v-model="isSelect"
        class="dlc-persona"
      />伊邪纳岐·贼神<br />
      <input
        type="checkbox"
        value="8"
        v-model="isSelect"
        class="dlc-persona"
      />俄耳甫斯
      <input
        type="checkbox"
        value="9"
        v-model="isSelect"
        class="dlc-persona"
      />俄耳甫斯·贼神<br />
      <input
        type="checkbox"
        value="15"
        v-model="isSelect"
        class="dlc-persona"
      />劳尔<br />
      <input
        type="checkbox"
        value="78"
        v-model="isSelect"
        class="dlc-persona"
      />雅典娜
      <input
        type="checkbox"
        value="79"
        v-model="isSelect"
        class="dlc-persona"
      />雅典娜·贼神<br />
      <input
        type="checkbox"
        value="106"
        v-model="isSelect"
        class="dlc-persona"
      />阿里亚德涅
      <input
        type="checkbox"
        value="109"
        v-model="isSelect"
        class="dlc-persona"
      />阿里亚德涅·贼神<br />
      <input
        type="checkbox"
        value="112"
        v-model="isSelect"
        class="dlc-persona"
      />亚斯泰利欧斯
      <input
        type="checkbox"
        value="113"
        v-model="isSelect"
        class="dlc-persona"
      />亚斯泰利欧斯·贼神<br />
      <input
        type="checkbox"
        value="144"
        v-model="isSelect"
        class="dlc-persona"
      />塔纳托斯
      <input
        type="checkbox"
        value="145"
        v-model="isSelect"
        class="dlc-persona"
      />塔纳托斯·贼神<br />
      <input
        type="checkbox"
        value="168"
        v-model="isSelect"
        class="dlc-persona"
      />祸津伊邪那岐
      <input
        type="checkbox"
        value="169"
        v-model="isSelect"
        class="dlc-persona"
      />祸津伊邪那岐·贼神<br />
      <input
        type="checkbox"
        value="186"
        v-model="isSelect"
        class="dlc-persona"
      />辉夜
      <input
        type="checkbox"
        value="189"
        v-model="isSelect"
        class="dlc-persona"
      />辉夜·贼神<br />
      <input
        type="checkbox"
        value="192"
        v-model="isSelect"
        class="dlc-persona"
      />月读命
      <input
        type="checkbox"
        value="193"
        v-model="isSelect"
        class="dlc-persona"
      />月读命·贼神<br />
      <input
        type="checkbox"
        value="209"
        v-model="isSelect"
        class="dlc-persona"
      />弥赛亚
      <input
        type="checkbox"
        value="212"
        v-model="isSelect"
        class="dlc-persona"
      />弥赛亚·贼神<br />
      <input
        type="checkbox"
        value="231"
        v-model="isSelect"
        class="dlc-persona"
      />伊邪那岐大神
      <input
        type="checkbox"
        value="232"
        v-model="isSelect"
        class="dlc-persona"
      />伊邪那岐大神·贼神<br />
    </form>
    <div class="btn">
      <button @click="save">保存</button> <button @click="close">关闭</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useDlcFormStore } from '@/stores/dlcForm'
import { usePersonaDetailStore } from '@/stores/personaDetail'
const origin = [
  3, 4, 6, 7, 8, 9, 15, 78, 79, 106, 109, 112, 113, 144, 145, 168, 169, 186,
  189, 192, 193, 209, 212, 231, 232
]
const isSelect = ref<number[]>([])
const isSelectAll = ref(0)
const dlcFormStore = useDlcFormStore()
const personaDetailStore = usePersonaDetailStore()

const close = () => {
  dlcFormStore.setStatus(false)
}

// 利用set集合提高查找效率
const save = () => {
  // 遍历origin所有的数，将所有面具的resultType改为3,fusionType改为4
  const set = new Set(isSelect.value)
  for (let i = 0; i < origin.length; i++) {
    let id = origin[i]
    if (set.has(id)) {
      // 如果存在，就说明有DLC,除了大神外，均设置为1
      if (id === 231 || id === 232) {
        personaDetailStore.personaDetails[id - 1].resultType = 2
        continue
      }
      personaDetailStore.personaDetails[id - 1].resultType = 1
      personaDetailStore.personaDetails[id - 1].fusionType = 1
    } else {
      // 如果不存在说明没有DLC
      if (id === 231 || id === 232) {
        personaDetailStore.personaDetails[id - 1].resultType = 3
        continue
      }
      personaDetailStore.personaDetails[id - 1].resultType = 3
      personaDetailStore.personaDetails[id - 1].fusionType = 4
    }
  }
  // 更新仓库里的formData数据
  dlcFormStore.setFormData(isSelect.value)
  close()
}

const handleSelect = () => {
  isSelectAll.value = isSelect.value.length
}

const watchSelect = watch(isSelect, handleSelect, {
  deep: true,
  immediate: false
})

const handleAll = () => {
  if (isSelectAll.value == origin.length) {
    isSelect.value = origin
  } else if (isSelectAll.value == 0) {
    isSelect.value = []
  }
}
const watchSelectAll = watch(isSelectAll, handleAll, {
  immediate: false
})

onMounted(() => {
  isSelect.value = dlcFormStore.formData
  isSelectAll.value = isSelect.value.length
})

onUnmounted(() => {
  // 解除监视
  watchSelect()
  watchSelectAll()
})
</script>

<style lang="scss" scoped>
.dlc-form {
  position: fixed;
  z-index: 99;
  top: 20%;

  background-color: $default-red-color;
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  opacity: 0.9;
  .dlc-persona {
    margin-right: 5px;
  }
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3px;
}
</style>
