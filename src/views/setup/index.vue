<template>
  <div class="home">
    <Hearder title="Vite + Vue3" />
    <div class="text-6xl font-bold mt-10 text-green-500">Tailwindcss</div>
    <div class="text-6xl font-bold mt-10 text-blue-500">TypeScript</div>
    <div class="text-6xl font-bold mt-10 text-yellow-300 select-none">
      {{ storeTitle }}
    </div>
    <span
      class="text-6xl font-bold bg-slate-300 rounded-md p-2 mt-2 text-black cursor-pointer select-none"
      @click="stateAdd"
    >
      Click here -> {{ newCount }}</span
    >

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
import { getList } from './services'
import Hearder from './Hearder.vue'

// console.log(useImmer)

/**
 * global
 */
console.log(`${import.meta.env.VITE_APP_ENV}`)

/**
 * mock request
 * auto import vue-hooks-plus
 */
const { data } = useRequest(() => getList())

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
const newCount = computed(() => `${count.value}`)

const stateAdd = () => {
  store.increment()
}
</script>

<style scoped lang="less">
.home {
  @apply flex items-center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
