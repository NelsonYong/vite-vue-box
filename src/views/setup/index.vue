<template>
  <div class="home">
    <Hearder title="Vite + Vue3" />
    <div class="text-6xl font-bold mt-10 text-green-500">Tailwindcss</div>
    <div class="text-6xl font-bold mt-10 text-blue-500">TypeScript</div>
    <div class="text-6xl font-bold mt-10 text-yellow-300 select-none">
      {{ storeTitle }}

      <span
        class="bg-slate-300 rounded-md p-2 text-black cursor-pointer"
        @click="stateAdd"
      >
        {{ newCount }}</span
      >
    </div>

    <div class="text-3xl font-bold mt-10 text-red-400">
      Focus on the business, build quickly , go!
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<script lang="ts" setup>
import { useHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
import { getName } from './services'
import Hearder from './Hearder.vue'

/**
 * global
 */
console.log(`${import.meta.env.VITE_APP_ENV}`)

//  mock request
// auto import vue-hooks-plus
const { data } = useRequest(() => getName(123))
watchEffect(() => {
  console.log(data?.value)
})

/**
 * pinia store
 */
const store = useHomeStore()
const storeTitle = computed(() => store.getFuncTitle)
// keep proxy
const { count } = storeToRefs(store)
const newCount = computed(() => `count: ${count.value}`)

const stateAdd = () => {
  console.log(666)

  store.increment()
}
</script>

<style scoped lang="less">
.home {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
