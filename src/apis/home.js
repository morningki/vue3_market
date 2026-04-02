import httpInstance from "@/utils/htttp"

export function getBannerApi ( param = {} ){
    //这个写法是给param传入一个空对象的默认值，防止没有传参的时候
    //下面的解构识别不出来直接undefined
    const { distributionSite = '1'} = param
    //这里给distributionSite一个默认值为1，即使param没有传入参数也可以强制使用1
    //不至于不传参的时候无法执行（这里是方便原来的总的category页面接口数据的获取，直接getBannerApi（）获取全部数据）
    return httpInstance({
        url:'/home/banner',
        param:{
            distributionSite
        }
    })
}

export function getNewApi (){
    return httpInstance({
        url:'/home/new'
    })
}

export function getHotApi (){
    return httpInstance({
        url:'/home/hot'
    })
}

export function getProductApi(){
    return httpInstance({
        url:'/home/goods'
    })
}


