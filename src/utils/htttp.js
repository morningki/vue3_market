//axios基础的封装
import axios from "axios";
import "element-plus/es/components/message/style/css";
import { useUserStore } from "@/stores/userStore";
import { ElMessage } from "element-plus";
import router from "@/router";
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore();
    const token = useStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (e) => Promise.reject(e),
);

//axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const useStore = useUserStore();
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    //401token失效处理
    //1.清除本地用户信息
    //2.跳转到登录页
    if (e.response.status === 401) {
      useStore.clearUser();
      router.replace("/login");
    }
    return Promise.reject(e);
  },
);

export default httpInstance;
