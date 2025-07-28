import { dayjs } from "element-plus";
import { computed, onUnmounted, ref } from "vue"

export const useCountDown = () => { 
  const time=ref(0);
  let timer=null;
  const formatTime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  const start=(currentTime)=>{ 

    time.value=currentTime;
    timer=setInterval(()=>{ 
      time.value--;
      if(time.value<=0){
        clearInterval(timer)
      }
    },1000)
  }
  //组件销毁时清除定时器
  onUnmounted(()=>{ 
    clearInterval(timer)
  })
  return {formatTime,start}
}