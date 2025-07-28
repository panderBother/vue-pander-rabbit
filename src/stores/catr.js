import { defineStore } from "pinia";
import { ref,computed } from "vue";
import { useUserStore } from "./user";
import { getCartList,addCart, deleteCart,updateCartChecked,mergeCart, updateCart } from "@/apis/cart"
export const useCatStore = defineStore("cat", () => {
  const cartList = ref([]);
  const userStore=useUserStore()
  const updateNewCartList= async()=>{
     const res=await getCartList()
     cartList.value=res.data.result
  }
  //添加购物车
  const addCat = async (goods) => {
    if(userStore.userInfo.token){
     await addCart(goods)
     updateNewCartList()
    }else{
        // 判断购物车中是否有此商品
   const res= cartList.value.find((item) => item.id === goods.id)
   if(res){
    res.count++
  }else{
    cartList.value.push(goods)
   }
    }
  
  };
  //总个数
  const totalCount=computed(()=>{
  return cartList.value.reduce((pre,cur)=>{
    return pre+cur.count
  },0)
})
//总价
const totalPrice=computed(()=>{
  return cartList.value.reduce((pre,cur)=>{
    return pre+cur.price*cur.count
  },0)
})  
//选择商品
const cartListCheck=(good,selected)=>{
  if(userStore.userInfo.token){
      const item= cartList.value.find((item) => good.skuId === item.skuId)
     item.selected=selected
     updateCart({selected,count:good.count},good.skuId)
  }else{
  const item= cartList.value.find((item) => good.skuId === item.skuId)
    item.selected=selected
  }
 
}
//是否全选
const isAllChecked=computed(()=>{
  return cartList.value.length>0&&cartList.value.every(item=>item.selected)
})
//全选
const cartListCheckAll=(selected)=>{
  if(userStore.userInfo.token){
    const ids=cartList.value.map(item=>item.skuId)
    console.log('全选',selected);
    updateCartChecked({ids,selected})
    cartList.value.forEach(item=>item.selected=selected)
  }else{
    cartList.value.forEach(item=>item.selected=selected)
  }
}
//已选择的商品的数量
const selectedCount=computed(()=>{
  return cartList.value.filter(item=>item.selected).reduce((pre,cur)=>pre+cur.count,0)
})
//已选择的商品价格
const selectedPrice=computed(()=>{
  return cartList.value.filter(item=>item.selected).reduce((pre,cur)=>pre+cur.price*cur.count,0)
})
  // 删除购物车
  const delCat = async(skuId) => {
    if(userStore.userInfo.token){
     await deleteCart([skuId])
     updateNewCartList()
    }else{
       console.log(skuId,skuId);
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  };
  //清空购物车
  const clearCart = ()=>{
    if(!userStore.userInfo.token){
      cartList.value = []
    }
      
  };
  //合并购物车
  const mergeCartList = async()=>{
    const cartLists = cartList.value.map(item=>{
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    })
    await mergeCart(cartLists)
    updateNewCartList()
  }
  return { cartList,addCat,delCat,totalCount,totalPrice,cartListCheck,isAllChecked,cartListCheckAll,selectedCount,selectedPrice,mergeCartList,clearCart,updateNewCartList };
},{
  persist: true
});