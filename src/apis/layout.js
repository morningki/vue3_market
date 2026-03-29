import httpInstance from "@/utils/htttp";
export function getCategoryAPI(){
    return httpInstance(
    {
        url:'/home/category/head'
    })
}

