import { ref } from "vue";
import { getCategoryUrlApi } from "@/apis/category";
import { useRoute } from "vue-router";
export const useCategory = () => {
  const CategoryList = ref({});
  const route = useRoute();
  const getUrlCategory = async (id = route.params.id) => {
    const res = await getCategoryUrlApi(id);
    CategoryList.value = res.result;
  };
  return { getUrlCategory,CategoryList,route }
};
 
