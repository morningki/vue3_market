import { useIntersectionObserver } from "@vueuse/core"

//定义懒加载插件
export const lazyPlugin = {
    install(app)
    //让插件功能全局生效
    {
    app.directive('img-lazy',{
        //directive自定指令
        mounted(el,binding){
            const { stop } = useIntersectionObserver(el,([{ isIntersecting }]) =>{
                if( isIntersecting )
                {
                    el.src = binding.value
                    stop()
                    //手动停止监听，避免内存浪费  
                }
            })
        }
    })
}
}