<template>
  <div class="home">
    <Hearder :title="title" />
  </div>
</template>

<script lang="ts" setup>
  import Hearder from './Hearder.vue';

  const title = ref(`Vite+Vue3+TypeScript | ${import.meta.env.VITE_APP_ENV}`);
</script>

<style scoped lang="less">
  .home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
