import httpInstance from "@/utils/htttp"

export function getBannerApi (){
    return httpInstance({
        url:'/home/banner'
    })
}