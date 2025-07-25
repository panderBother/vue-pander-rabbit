import request from '@/utils/request'

export function getCategoryAPI () {
  return request({
    url: 'home/category/head'
  })
}