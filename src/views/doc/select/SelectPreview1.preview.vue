<preview>基本使用</preview>
<template>
  <div class="row">
    <wee-select v-model="value" :options="options"></wee-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeSelect from '@/lib/select/index.vue'
const value = ref('')
const options = ref([
  { label: '我喜欢', value: 'sen1' },
  { label: '吃', value: 'sen2' },
  { label: '牛肉', value: 'sen3' },
  { label: '面', value: 'sen4' },
  { label: '你喜欢', value: 'sen5' },
  { label: '吃', value: 'sen6' },
  { label: '猪脚', value: 'sen7' },
  { label: '饭', value: 'sen8' },
  { label: '他喜欢', value: 'sen9' },
  { label: '吃', value: 'sen10' },
  { label: '猫', value: 'sen11' },
  { label: '粮', value: 'sen12' },
])
</script>