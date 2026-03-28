import httpInstance from "@/utils/htttp";

export function getCategory(){
    return httpInstance({
        url:'home/category/head'
    })
}