<script setup>
import { getSubCategory, getSubCategoryApi } from "@/apis/category";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { watchEffect, watch } from "vue";
import goodsItem from "../Home/components/goodsItem.vue";
const route = useRoute();

const subCategoryList = ref([]);
const getSubCategoryData = async (id = route.params.id) => {
  const res = await getSubCategory(id);
  subCategoryList.value = res.result;
};

//获取基础列表数据渲染
const goodsListFilter = ref([]);
const subCategoryFilterList = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const getSubCategoryFilterData = async () => {
  const res = await getSubCategoryApi(subCategoryFilterList.value);
  goodsListFilter.value = res.result.items;
};

//tab切换回调
const tabChange = () => {
  subCategoryFilterList.value.page = 1;
  getSubCategoryFilterData();
};

const disabled = ref(false);
//load加载数据
const load = async () => {
  // 如果已经加载完毕，则直接返回，不触发后续逻辑
  if (disabled.value) return;

  console.log("加载更多数据");
  // 获取下一页的数据
  subCategoryFilterList.value.page++;
  const res = await getSubCategoryApi(subCategoryFilterList.value);
  // 将新数据拼接到老数据后面
  goodsListFilter.value = [...goodsListFilter.value, ...res.result.items];
  // 加载完毕判断
  if (res.result.items.length === 0) {
    disabled.value = true;
  }
};

onMounted(() => {
  getSubCategoryData();
  getSubCategoryFilterData();
});

onBeforeRouteUpdate((to) => {
  getSubCategoryData(to.params.id);
});

// onMounted(() =>{
//   getSubCategoryData()
// })
// watch(() => route.params.id, () =>{
//   getSubCategoryData()
// })
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

        <el-breadcrumb-item :to="{ path: `/category/${subCategoryList.parentId}` }">
          {{ subCategoryList.parentName }}
        </el-breadcrumb-item>

        <el-breadcrumb-item>{{ subCategoryList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="sub-container">
      <el-tabs v-model="subCategoryFilterList.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>

        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>

        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>

      <!-- 核心：无限滚动容器 -->
      <!-- 使用 v-infinite-scroll 触发加载 -->
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <goodsItem v-for="goods in goodsListFilter" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
