import { ref, computed } from "vue";
import { onUnmounted } from "vue";
import dayjs from "dayjs";
export const useCountDown = () => {
  let timer = null;
  //1.响应式数据
  const time = ref(0);
  //格式化时间为 xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  //2.开启倒计时函数
  const start = (currentTime) => {
    //开始倒计时逻辑
    time.value = currentTime;
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
      time.value--;
      if (time.value <= 0) {
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  };
  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });
  return { formatTime, start };
};
