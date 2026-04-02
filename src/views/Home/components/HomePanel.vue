<script setup>
import { defineProps } from 'vue';
//HomePanel就是homenew和homehot会用到的公共结构
//标题部分向外索取title属性和subtitle属性
//把基本html骨架搭好，需要单独进行渲染的地方直接扔到插槽里
//注：组件实例标签中间的部分视为默认插槽
//ex：<HomePanel>这个部分写的东西都是默认插槽里的<HomePanel>
defineProps({
    //主标题
    title:{
        type:String
    },
    //副标题
    subTitle:{
        type:String
    }
})
</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>

      <!-- 主体内容区域 -->
      <div> 
        <slot></slot>
      </div>

    </div>

  </div>

</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>