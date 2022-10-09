<template>
  <div id="app">
    <div style="overflow: scroll; height: calc(100vh - 48px)">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style>
@import './styles/basic.less';

#app {
  width: 100%;
  height: 100%;
}
</style>
