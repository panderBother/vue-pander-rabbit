import request from '@/utils/request'
export const getBannerData=(params={})=>{
  const {distributionSite} = params
  return request({
    url:'/home/banner',
    params:{
      distributionSite
    }
  })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
 return request.get('/home/new')
}
/**
 * @description: 获取热门商品
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
 return request.get('/home/hot')
}
/**
 * @description: 获取商品
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
 return request.get('/home/goods')
}