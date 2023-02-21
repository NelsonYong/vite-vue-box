<template>
  <div class="w-screen h-screen">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style>
@import './styles/basic.less';
</style>
