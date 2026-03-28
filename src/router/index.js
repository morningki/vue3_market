import { createRouter, createWebHistory } from 'vue-router'

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
          path:'category',
          component:() => import('@/views/Category/index.vue')
        }

    ]
    },
    {
      path:'/login',
      //这边使用懒加载直接import页面路径，不需要在开题import组件了
      component:() => import('@/views/Login/index.vue')
    }

  ]
})


export default router
