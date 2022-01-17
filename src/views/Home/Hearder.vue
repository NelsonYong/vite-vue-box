<template>
  <img src="../../assets/logo.png" alt="" />
  <div class="header">{{ title ?? '-' }}</div>
  <!-- <div class="header" v-boolean="boolean">test</div> -->
</template>

<script lang="ts" setup>
  defineProps<{
    title?: string;
  }>();

  // const boolean = ref(true);
</script>

<style scoped lang="less">
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
