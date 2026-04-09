import httpInstance from "@/utils/htttp";

//加入购物车
export const getCartApi = ({ skuId, count }) => {
  return httpInstance({
    url: "/member/cart",
    method: "post",
    data: {
      skuId,
      count,
    },
  });
};

//购物车列表获取
export const findNewCartList = () => {
  return httpInstance({
    url: "/member/cart",
  });
};

//购物车删除
export const delCartApi = (ids) => {
  return httpInstance({
    url: "/member/cart",
    method: "delete",
    data: {
      ids,
    },
  });
};

export const mergeCartApi = (data) => {
  return httpInstance({
    url: "/member/cart/merge",
    method: "post",
    data,
  });
};
