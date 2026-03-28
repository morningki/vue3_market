<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- 一级路由出口 -->
   <RouterView />
   <div>test scss</div>
</template>

<style scoped lang="scss">
.test{
  color:$priceColor;
}
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
