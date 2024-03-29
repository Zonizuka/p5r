<template>
  <div class="my-message">
    <span class="message-text"
      >B站：<a href="https://space.bilibili.com/5039780" target="_blank"
        >@蒙奇·D·瓦西里</a
      ></span
    >
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.my-message {
  color: #fde269;
  position: absolute;
  bottom: 5%;
  left: 1%;
  .message-text {
    font-size: 14px;
    font-style: italic;
    text-shadow:
      0 0 2px black,
      0 0 5px black;
    a:link,
    a:visited {
      color: #fde269;
    }
    a:hover {
      color: #f80910;
    }
  }
  @media screen and (max-width: 450px) {
    top: 1%;
    left: 1%;
    .message-text {
      font-size: 10px;
    }
  }
}
</style>
