import request from '@/utils/request'
export const loginAPI = ({account,password}) => {
  return request({
    url: '/login',
    method: 'POST',
    data:{
      account,
      password
    }
  })
}