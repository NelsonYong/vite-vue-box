<template>
  <div class="logo">
    <img src="https://vitejs.dev/logo-with-shadow.png" alt="vite logo" />
    <span>➕</span>
    <img
      src="https://vuejs.org/images/logo.png"
      style="transform: scale(0.75); position: relative; top: 10px"
      alt="vue logo"
    />
  </div>

  <div class="header">{{ title ?? '-' }}</div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>

<style scoped lang="less">
.logo {
  display: flex;
  align-items: center;

  span {
    font-size: 64px;
  }
}

img {
  width: 300px;
  height: 300px;
}

.header {
  font-size: 64px;
  font-weight: 600;
  text-align: center;
}
</style>
