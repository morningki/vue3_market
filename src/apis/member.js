import httpInstance from "@/utils/htttp";
export const getLikeListApi =({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit
    }
  })
}

export const getUserOrder = (params) => {
  return httpInstance({
    url:'/member/order',
    method:'GET',
    params
  })
}
