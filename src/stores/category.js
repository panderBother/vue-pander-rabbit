import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryAPI } from "@/apis/layout";
export const useCategoryStore = defineStore("category", () => {
  const categoryData=ref([])
const getCategoryData = async () => { 
 const res =await getCategoryAPI()
 categoryData.value=res.data.result
 console.log(res)
}
  return { categoryData,getCategoryData };
});