<preview>基本用法</preview>
<template>
  <div class="row">
    <wee-breadcrumb separator="/">
      <wee-breadcrumb-item :to="{ path: '/' }">首页</wee-breadcrumb-item>
      <wee-breadcrumb-item>选项</wee-breadcrumb-item>
    </wee-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import WeeBreadcrumb from '@/lib/breadcrumb/breadcrumb.vue'
import WeeBreadcrumbItem from '@/lib/breadcrumb/breadcrumbItem.vue'

</script>

<style scoped lang="scss"></style>