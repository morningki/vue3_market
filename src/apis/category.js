import httpInstance from "@/utils/htttp.js";
export const getCategoryUrlApi = (id) => {
  return httpInstance({
    url: "/category",
    //这边要的是category下的某个具体数据，通过接受
    //id来筛选数据，下面那个params收到数据后，会接到url后面
    params: {
      id, //本来是id:id    由于ES6 简写规则，对象的 key 和 value 名字一模一样】时，可以只写一个
    },
  });
};

export const getSubCategory = (id) => {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

export const getSubCategoryApi = (data) =>{
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}
