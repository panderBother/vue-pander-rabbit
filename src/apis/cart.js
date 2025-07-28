import request from '@/utils/request'
/**
 * 获取购物车列表
 */
export function getCartList() {
  return request({
    url: '/member/cart',
    method: 'get'
  })
}
/**
 * 添加购物车
 */
export function addCart(data) {
  return request({
    url: '/member/cart',
    method: 'post',
    data
  })
}
/**
 * 删除购物车
 */
export function deleteCart(ids) {
  return request({
    url: '/member/cart',
    method: 'delete',
    data: {ids}
  })
}
/**
 * 合并购物车
 */
export function mergeCart(data) {
  return request({
    url: '/member/cart/merge',
    method: 'post',
    data
  })
}
/**
 * 修改购物车选中状态和数量
 */
export function updateCart(data,id) {
 request.put("/member/cart/"+id,data)
}
/**
 * 修改购物车全选/取消全选
 */
export function updateCartChecked(data) {
  return request({
    url: '/member/cart/selected',
    method: 'put',
    data
  })
}