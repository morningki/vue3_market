import httpInstance from "@/utils/htttp"

export function getBannerApi (){
    return httpInstance({
        url:'/home/banner'
    })
}

export function getNewApi (){
    return httpInstance({
        url:'/home/new'
    })
}