<preview>基本用法</preview>
<template>
  <wee-input v-model="inputValue" placeholder="输入点什么好呢" ></wee-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeInput from '@/lib/input/index.vue'
const inputValue = ref('')
</script>