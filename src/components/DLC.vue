<template>
  <div
    ref="draggableElement"
    @mousedown="startDrag"
    @mousemove="doDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    draggable="true"
  >
    <img class="dlc-icon" src="@/assets/dlc/dlc.png" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
const draggableElement = ref<HTMLElement | null>(null)
const initialX = ref(0)
const initialY = ref(0)
const offsetX = ref(0)
const offsetY = ref(0)
const dragging = ref(false)

const startDrag = (event: any) => {
  dragging.value = true
  console.log('startDrag')
  initialX.value = event.clientX - offsetX.value

  initialY.value = event.clientY - offsetY.value
  console.log('initialX.value', initialX.value)
  console.log('initialY.value', initialY.value)
  console.log('dragging.value', dragging.value)
}

const doDrag = (event: any) => {
  if (!dragging.value) return

  offsetX.value = event.clientX - initialX.value

  offsetY.value = event.clientY - initialY.value
  console.log('doDrag')
  updatePosition()
}

const endDrag = (event: any) => {
  event.preventDefault()
  dragging.value = false
  console.log('endDrag')
}

const updatePosition = () => {
  console.log('draggableElement.value', draggableElement.value)
  if (draggableElement.value) {
    draggableElement.value.style.transform = `translate(${offsetX.value}px, ${offsetY.value}px)`
    console.log('updatePosition', draggableElement.value.style.transform)
  }
}

onMounted(() => {
  document.addEventListener('mouseup', endDrag)

  document.addEventListener('mouseleave', endDrag)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', endDrag)

  document.removeEventListener('mouseleave', endDrag)
})
</script>
<style lang="scss" scoped>
.dlc-icon {
  width: 70px;
  position: fixed;
  z-index: 1000;
  top: 20%;
}
.dlc-icon:hover {
  cursor: pointer;
}
</style>
