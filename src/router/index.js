import { createRouter, createWebHistory } from 'vue-router'
import { getOrderApi } from '@/apis/pay'
const router = createRouter({
  history:createWebHistory(),
  //path和components对应关系位置
  routes:[
    {
      path:'/',
      component:() => import('@/views/Layout/index.vue'),
      children:[
        {
        path:'',
        component:() => import('@/views/Home/index.vue')
        },
        {
          path:'category/:id',
          //id占位符，用来接受动态参数，一个路由匹配一堆相似页面
          component:() => import('@/views/Category/index.vue'),
        },
        {
            path:'category/subcategory/:id',
            component:() => import('@/views/SubCategory/index.vue')
          },
            {
          path: 'detail/:id',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path:'cartlist',
          component:() => import('@/views/CartList/index.vue')
        },
        {
          path:'checkout',
          component:() => import('@/views/Checkout/index.vue')
        },
        {
          path:'pay',
          component:() => import('@/views/Pay/index.vue'),
         }
    ]
    },
    {
      path:'/login',
      //这边使用懒加载直接import页面路径，不需要在开头import组件了
      component:() => import('@/views/Login/index.vue')
    }

  ],
  scrollBehavior(){
  return {
    top:0
  }
}

})
//路由行为定制
export default router
