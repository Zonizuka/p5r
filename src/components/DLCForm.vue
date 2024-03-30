<template>
  <div class="dlc-form">
    <span style="color: white"
      >勾选已解禁的面具
      <input type="radio" :value="origin.length" v-model="isSelectAll" />全选
      <input type="radio" value="0" v-model="isSelectAll" />反选<br />
      <span style="font-size: 11px">面具是否解禁会影响其它面具的合成</span>
    </span>
    <div class="dlc-content">
      <div class="divider"><span>社群Max解禁</span></div>
      <form style="color: white">
        <input
          type="checkbox"
          value="16"
          v-model="isSelect"
          class="dlc-persona"
        />[愚者]毗湿奴
        <input
          type="checkbox"
          value="28"
          v-model="isSelect"
          class="dlc-persona"
        />[魔术师]经津主<br />
        <input
          type="checkbox"
          value="37"
          v-model="isSelect"
          class="dlc-persona"
        />[女教皇]西布莉<br />
        <input
          type="checkbox"
          value="46"
          v-model="isSelect"
          class="dlc-persona"
        />[女皇]巴比伦大淫妇
        <input
          type="checkbox"
          value="55"
          v-model="isSelect"
          class="dlc-persona"
        />[皇帝]奥汀<br />
        <input
          type="checkbox"
          value="62"
          v-model="isSelect"
          class="dlc-persona"
        />[教皇]黄龙
        <input
          type="checkbox"
          value="71"
          v-model="isSelect"
          class="dlc-persona"
        />[恋爱]伊丝塔<br />
        <input
          type="checkbox"
          value="82"
          v-model="isSelect"
          class="dlc-persona"
        />[战车]蚩尤
        <input
          type="checkbox"
          value="91"
          v-model="isSelect"
          class="dlc-persona"
        />[正义]梅塔特隆<br />
        <input
          type="checkbox"
          value="103"
          v-model="isSelect"
          class="dlc-persona"
        />[隐者]隐形鬼
        <input
          type="checkbox"
          value="114"
          v-model="isSelect"
          class="dlc-persona"
        />[命运]吉祥天<br />
        <input
          type="checkbox"
          value="124"
          v-model="isSelect"
          class="dlc-persona"
        />[力量]藏王权现
        <input
          type="checkbox"
          value="134"
          v-model="isSelect"
          class="dlc-persona"
        />[倒悬者]阿提斯<br />
        <input
          type="checkbox"
          value="147"
          v-model="isSelect"
          class="dlc-persona"
        />[死神]爱丽丝
        <input
          type="checkbox"
          value="156"
          v-model="isSelect"
          class="dlc-persona"
        />[节制]阿尔达<br />
        <input
          type="checkbox"
          value="165"
          v-model="isSelect"
          class="dlc-persona"
        />[恶魔]别西卜
        <input
          type="checkbox"
          value="174"
          v-model="isSelect"
          class="dlc-persona"
        />[塔]摩陀<br />
        <input
          type="checkbox"
          value="183"
          v-model="isSelect"
          class="dlc-persona"
        />[星]路西法
        <input
          type="checkbox"
          value="196"
          v-model="isSelect"
          class="dlc-persona"
        />[月]圣达芬<br />
        <input
          type="checkbox"
          value="204"
          v-model="isSelect"
          class="dlc-persona"
        />[太阳]阿修罗王
        <input
          type="checkbox"
          value="213"
          v-model="isSelect"
          class="dlc-persona"
        />[审判]撒旦<br />
        <input
          type="checkbox"
          value="222"
          v-model="isSelect"
          class="dlc-persona"
        />[信念]马利亚
        <input
          type="checkbox"
          value="230"
          v-model="isSelect"
          class="dlc-persona"
        />[顾问官]瓦胡·马纳
      </form>
      <div class="divider"><span>力量社群rank8解禁</span></div>
      <form style="color: white">
        <input
          type="checkbox"
          value="234"
          v-model="isSelect"
          class="dlc-persona"
        />吹号者、斯拉欧加、义经、米迦勒、路西法、撒坦耶尔
      </form>
      <div class="divider"><span>1月12日后解禁</span></div>
      <form style="color: white">
        <input
          type="checkbox"
          value="233"
          v-model="isSelect"
          class="dlc-persona"
        />罗瓦、法夫纳、哈斯塔、拜亚基、马卡布、奇美拉、威灵
      </form>
      <div class="divider"><span>支线解禁</span></div>
      <form style="color: white">
        <input
          type="checkbox"
          value="12"
          v-model="isSelect"
          class="dlc-persona"
        />巴古斯 7月10日后完成支线解禁<br />
        <input
          type="checkbox"
          value="14"
          v-model="isSelect"
          class="dlc-persona"
        />邪恶霜精 月社群rank3支线解禁
      </form>
      <div class="divider"><span>二周目解禁</span></div>
      <form style="color: white">
        <input
          type="checkbox"
          value="17"
          v-model="isSelect"
          class="dlc-persona"
        />撒坦耶尔
      </form>
      <div class="divider"><span>DLC面具</span></div>
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
    </div>
    <span class="tip">确保勾选的面具已添加到恶魔全书里!</span>
    <div class="btn">
      <button @click="save">保存</button> <button @click="close">关闭</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { getPersonaDetail } from '@/api/detail'
import { useDlcFormStore } from '@/stores/dlcForm'
import { usePersonaDetailStore } from '@/stores/personaDetail'
// 233是1月12日之后解禁的所有面具,234是力量社群解锁的面具
const origin = [
  3, 4, 6, 7, 8, 9, 12, 14, 15, 16, 17, 28, 37, 46, 55, 62, 71, 78, 79, 82, 91,
  103, 106, 109, 112, 113, 114, 124, 134, 144, 145, 147, 156, 165, 168, 169,
  174, 183, 186, 189, 192, 193, 196, 204, 209, 212, 213, 222, 230, 231, 232,
  233, 234
]

// 1月12日之后解禁的面具数组,路西法183和撒旦耶尔17有两个判断条件
const january = [45, 101, 102, 123, 133, 182, 195]
// 力量社群解锁的面具数组
const force = [17, 173, 181, 183, 206, 211]
const isSelect = ref<number[]>([])
const isSelectAll = ref(0)
const dlcFormStore = useDlcFormStore()
const personaDetailStore = usePersonaDetailStore()

const close = () => {
  dlcFormStore.setStatus(false)
}

// 利用set集合提高查找效率
const save = () => {
  // 遍历origin所有的数
  // checkbox只能接收string类型的数据，需要转换为Number
  const set = new Set(isSelect.value.map(Number))
  for (let i = 0; i < origin.length; i++) {
    let id = origin[i]
    if (set.has(id)) {
      switch (id) {
        // 撒坦耶尔和路西法同样的逻辑，还得判断是否有力量社群解锁，即存不存在234
        // 如果存在，说明撒坦耶尔已解禁
        case 17:
        case 183:
          {
            if (set.has(234)) {
              personaDetailStore.personaDetails[id - 1].resultType = 2
              personaDetailStore.personaDetails[id - 1].fusionType = 1
            } else {
              personaDetailStore.personaDetails[id - 1].resultType = 3
              personaDetailStore.personaDetails[id - 1].fusionType = 4
            }
          }
          break
        // 大神只需更改resultType即可
        case 231:
        case 232:
          {
            personaDetailStore.personaDetails[id - 1].resultType = 2
          }
          break
        // 遍历1月12日之后解禁的面具数组
        case 233:
          {
            for (let j = 0; j < january.length; j++) {
              // 判断是否具有fusionList
              let januaryId = january[j]
              setExist(januaryId)
            }
          }
          break
        case 234:
          {
            for (let j = 0; j < force.length; j++) {
              // 需要排除掉17和183这两个特殊的
              let forceId = force[j]
              if (forceId === 17) {
                // 说明撒坦耶尔已解禁
                if (set.has(17)) {
                  personaDetailStore.personaDetails[forceId - 1].resultType = 2
                  personaDetailStore.personaDetails[forceId - 1].fusionType = 1
                } else {
                  personaDetailStore.personaDetails[forceId - 1].resultType = 3
                  personaDetailStore.personaDetails[forceId - 1].fusionType = 4
                }
                continue
              }
              if (forceId === 183) {
                // 说明路西法已解禁
                if (set.has(183)) {
                  personaDetailStore.personaDetails[forceId - 1].resultType = 2
                  personaDetailStore.personaDetails[forceId - 1].fusionType = 1
                } else {
                  personaDetailStore.personaDetails[forceId - 1].resultType = 3
                  personaDetailStore.personaDetails[forceId - 1].fusionType = 4
                }
                continue
              }
              setExist(forceId)
            }
          }
          break
        default: {
          setExist(id)
        }
      }
    } else {
      // 如果不存在说明未解禁
      if (id === 233) {
        for (let j = 0; j < january.length; j++) {
          let januaryId = january[j]
          setAbsent(januaryId)
        }
      } else if (id === 234) {
        for (let j = 0; j < force.length; j++) {
          let forceId = force[j]
          setAbsent(forceId)
        }
      } else {
        setAbsent(id)
      }
    }
  }
  // 更新仓库里的formData数据
  dlcFormStore.setFormData(isSelect.value)
  close()
}

// 处理已解禁的普遍情况的方法
const setExist = (newId: number) => {
  if ('fusionList' in personaDetailStore.personaDetails[newId - 1]) {
    personaDetailStore.personaDetails[newId - 1].resultType = 2
  } else {
    personaDetailStore.personaDetails[newId - 1].resultType = 1
  }
  personaDetailStore.personaDetails[newId - 1].fusionType = 1
}

// 处理未解禁的普遍情况的方法
const setAbsent = (newId: number) => {
  personaDetailStore.personaDetails[newId - 1].resultType = 3
  personaDetailStore.personaDetails[newId - 1].fusionType = 4
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
  getPersonaDetail()
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
  padding: 10px 0 5px 10px;
  opacity: 0.9;
  width: 300px;
  .dlc-content {
    height: 300px;
    overflow-y: scroll;
    margin: 5px 0 5px 0;
    .dlc-persona {
      margin-right: 5px;
    }

    .divider {
      position: relative;
      text-align: center;
      color: #fde269;
      margin: 5px 0 5px 0;
    }
    .divider::before,
    .divider::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 50%;
      height: 3px;
      background-color: #fde269;
    }
    .divider::before {
      left: 0;
    }
    .divider::after {
      right: 0;
    }
    .divider span {
      position: relative;
      z-index: 1;
      padding: 0 1em; /* 根据需要调整 */
      background-color: $default-red-color;
    }
  }
  .tip {
    font-size: 11px;
    color: white;
  }
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3px;
  button {
    background-color: $default-red-color;
    color: white;
    border-radius: 5px;
  }
}
</style>
