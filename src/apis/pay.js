import httpInstance from "@/utils/htttp";
export const getOrderApi = (id) =>{
  return httpInstance({
    url:`/member/order/${id}`
  })
}
