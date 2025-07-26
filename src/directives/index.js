
import { useIntersectionObserver } from "@vueuse/core";
export const lazyLoad = {
  install (app) {
    app.directive('img-lazy',{
      mounted(el,binding){
       const {stop}= useIntersectionObserver(el,([{isIntersecting}])=>{
          if(isIntersecting){
            console.log('进入视口区域',isIntersecting);
            //进入视口区域开始加载
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }

  
}