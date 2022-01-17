<template>
  <div class="card-content" :style="style" :class="className">
    <div v-if="title" class="card-title" :style="titleStyles">
      <van-row>
        <van-col span="12"
          ><span>{{ title }}</span>
        </van-col>
        <van-col span="12">
          <slot name="extra"></slot>
        </van-col>
      </van-row>
    </div>
    <slot name="cover"></slot>
    <div class="card-body" :style="bodyStyles">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from '@vue/runtime-core';
  import { CSSProperties } from 'vue';
  import { StyleValue } from 'vue';

  defineProps<{
    title?: string;
    style?: StyleValue;
    className?: string;
    bodyStyles?: CSSProperties;
    titleStyles?: CSSProperties;
    clickable?: boolean;
  }>();
</script>

<style scoped lang="less">
  .card-content {
    width: 100%;
  }
  .card-title {
    padding: 16px;
  }
  .card-body {
    padding: 24px;
    background-color: #fff;
  }
</style>
