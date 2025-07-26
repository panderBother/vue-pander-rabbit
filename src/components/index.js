import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
/**
 * 组件插件
 */
export const componentPlugin={
  install(app){
    // console.log(app);
    // app.component('xxx',xxx)
    app.component('ImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}