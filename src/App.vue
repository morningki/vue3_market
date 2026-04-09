<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- 一级路由出口 -->
   <RouterView v-slot="{ Component }">
    <Suspense>
      <!-- 这是主要内容，它会等待里面的顶层 await 执行完毕 -->
      <template #default>
        <component :is="Component" />
      </template>

      <!-- 这是退路界面：在 await 没执行完之前，页面会显示这个骨架屏 -->
      <template #fallback>
        <div class="loading-skeleton">
          <!-- 这里可以放一个好看的骨架屏或者加载动画 -->
           {{ 1 }}
          加载订单数据中，请稍候...
        </div>
      </template>
    </Suspense>
  </RouterView>
</template>

<style scoped lang="scss">
.test {
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
