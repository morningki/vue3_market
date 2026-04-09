import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from "pinia";
import { ref } from 'vue'
import { onUnmounted } from "vue";

export const useCategoryStore = defineStore('category',() =>{
     //导航列表数据管理

     //导航列表数据state
     const categoryList = ref([])
     const getCategory = async() =>{
        const res = await getCategoryAPI()
        categoryList.value = res.result
     }

     return {
        categoryList,getCategory
     }
})  