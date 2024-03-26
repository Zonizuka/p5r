<template>
  <div
    ref="draggableElement"
  >
    <img class="dlc-icon" src="@/assets/dlc/dlc.png" draggable="false"
    ref="pic"/>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.dlc-icon {
  width: 70px;
  position: absolute;
  z-index: 1;
  top: 20%;
  left: -25px;
  transition: left 0.2s ease;
}

.dlc-icon:hover {
  cursor: pointer;
  left: 0px;
}
</style>
