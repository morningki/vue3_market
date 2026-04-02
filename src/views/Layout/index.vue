<template>
  <!-- 二级路由出口 -->
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
  <RouterView/>
  <!-- <RouterView :key="$route.fullPath"/> -->
  <!-- 所有以 $ 开头的，都是 Vue/Vue Router 内置的全局属性 / 方法，是框架约定好的，不是自定义的 -->
  <LayoutFooter/>
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()
onMounted(() =>{
  categoryStore.getCategory()
})
</script>

<style scoped>

</style>