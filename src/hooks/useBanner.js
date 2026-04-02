import { getBannerApi } from "@/apis/home";
import { ref } from "vue";

export const useBanner = () => {
  const bannerList = ref([]);
  const getBanner = async (params = {}) => {
    const res = await getBannerApi(params);
    bannerList.value = res.result;
  };
  return { bannerList, getBanner };
};
