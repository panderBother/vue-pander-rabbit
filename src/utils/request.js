import axios from 'axios';
import { useUserStore } from '@/stores/user';
import router from '@/router';
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const userStore = useUserStore()
    // 在发送请求之前做些什么
    const token = userStore.userInfo.token
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
 
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
      const userStore = useUserStore()
    // 对响应错误做点什么
    ElMessage({
    message: error.response.data.message,
    type: 'warning',
  })
    if(error.response.status == 401){ 
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(error);
  });
  export default instance;