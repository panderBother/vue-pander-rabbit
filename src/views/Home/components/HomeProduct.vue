<script setup lang="ts">
import HomePanel from './HomePanel.vue';
import {getGoodsAPI} from '@/apis/home';
import {onMounted,ref} from 'vue';
import GoodsItem from './GoodsItem.vue';
const goodsList = ref([])
const getGoodsDatas=async () => {
  const res = await getGoodsAPI()
  console.log("商品数据",res);
  goodsList.value = res.data.result
}
onMounted(() => {
 getGoodsDatas();
})
</script>

<template>
 <div class="home-product">
  <HomePanel v-for="item in goodsList" :key="item.id"  :title="item.name" >
    <div class="box">
      <RouterLink class="cover" :to="`/detail/${item.id}`">
        <img v-img-lazy="item.picture" alt="">
        <strong class="label">
          <span>{{ item.name }}馆</span>
          <span>{{ item.saleInfo }}</span>
        </strong>
      </RouterLink>
     <GoodsItem :goods="item.goods"></GoodsItem>
    </div>
  </HomePanel>
 </div>
</template>
<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }
}
</style>