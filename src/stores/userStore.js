//管理用户相关数据
import {defineStore} from 'pinia'
import { loginApi } from '@/apis/user';
import {ref} from 'vue'
import { useCartStore } from './cartStore';
import { mergeCartApi } from '@/apis/cartapi';
export const useUserStore = defineStore('user',() =>{
  const userInfo = ref({})
  const cartStore = useCartStore()
  const getUserInfo = async({account,password}) =>{
     const res = await loginApi({account,password})
     userInfo.value = res.result
     //合并购物车操作
     
      await mergeCartApi(cartStore.cartList.map((item) =>{
        return {
          skuId:item.skuId,
          selected:item.selected,
          count:item.count
        }
      }))
      cartStore.updateCartList()
    }
  const clearUser = () =>{
    userInfo.value = {}
    cartStore.clearCart()
  }
  return {getUserInfo,userInfo,clearUser}
},
  {
    persist:true
  }
)
