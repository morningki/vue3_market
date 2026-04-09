import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./userStore";
import { getCartApi, findNewCartList, delCartApi } from "@/apis/cartapi";
export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);
    //获得购物车列表数据
    const updateCartList = async () => {
      const res = await findNewCartList();
      cartList.value = res.result;
    };

    //判断是否登录
    const useStore = useUserStore();
    const isLogin = computed(() => useStore.userInfo.token);

    //添加购物车数据
    const addCart = async (detailList) => {
      const item = cartList.value.find((item) => detailList.skuId === item.skuId);
      {
        //登录之后的购物车逻辑
        const { skuId, count } = detailList;
        if (isLogin.value) {
          //把商品加入购物车
          await getCartApi({ skuId, count });
          //重新获取购物车信息
          updateCartList();
        } else {
          if (item) {
            item.count++;
          } else {
            cartList.value.push(detailList);
          }
        }
      }
    };

    //删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartApi([skuId]);
        updateCartList();
      } else {
        const idx = cartList.value.findIndex((item) => skuId === item.id);
        cartList.value.splice(idx, 1);
      }
    };

    //计算商品数量和价值
    const cartCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));
    const cartPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));

    //更改selected状态
    const singleCheck = (selected, skuId) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      if (item) {
        item.selected = selected;
      }
    };

    //判断是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    //一键勾选或一键取消
    const allChecked = (selected) => cartList.value.forEach((item) => (item.selected = selected));

    //清空购物车数据
    const clearCart = () => {
      cartList.value = [];
    };

    //判断勾选的商品数量
    const checkCount = computed(() => cartList.value.filter((item) => item.selected).length);
    const checkPrice = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0),
    );
    return {
      cartList,
      addCart,
      delCart,
      cartCount,
      cartPrice,
      singleCheck,
      isAll,
      allChecked,
      checkCount,
      checkPrice,
      delCartApi,
      updateCartList,
      clearCart,
    };
  },
  {
    persist: true,
  },
);
