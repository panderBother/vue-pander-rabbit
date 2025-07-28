import { loginAPI } from "@/apis/user";
import { ref } from "vue";
import { defineStore } from "pinia";
import { useCatStore } from "@/stores/catr";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref({});
  const getUserInfo = async ({account,password}) => {
    const res = await loginAPI({
    account,
    password
  })
     userInfo.value = res.data.result;
  };
  const clearUserInfo = () => {
    userInfo.value = {};
    useCatStore().clearCart()
  };
  return { userInfo, getUserInfo ,clearUserInfo};
},
// 持久化
{persist:true});