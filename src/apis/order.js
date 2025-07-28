import request from '@/utils/request'
/**
 * 生成订单信息
 * 
 */
export function getOrderInfo() {
  return request({
    url: '/member/order/pre',
    method: 'get'
  })
}
/**
 * 获取订单详情以及支付结果
 * @param {*} id
 */
export function getOrderDetail(id) {
  return request.get('/member/order/'+id)
}
/**
 * 提交订单
 * @param {*} data
 * @returns
 */
export function submitOrder(data) {
  return request({
    url: '/member/order',
    method: 'post',
    data
  })
}