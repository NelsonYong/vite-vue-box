<template>
  <div class="home">
    <Hearder :title="title" />
  </div>
</template>

<script lang="ts" setup>
  // import { useAsyncRequest } from 'vue3-bring-hooks';
  import Hearder from './Hearder.vue';
  // import { getName } from './services';

  const title = ref(`Vite+Vue3+TypeScript | ${import.meta.env.VITE_APP_ENV}`);

  // 请求实例
  // const { data } = useAsyncRequest(() => getName(123));
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
