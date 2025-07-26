<script setup>
import { getBannerData } from '@/apis/home';
import { onMounted, ref } from 'vue';
const datas = ref([]);
const getBannerDatas = async () => { 
  const res = await getBannerData();
  console.log(res);
  datas.value = res.data.result;
};
onMounted(() => { 
  getBannerDatas();
});
</script>
<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in datas" :key="item.id">
        <img :src="item.imgUrl" :herf="item.hrefUrl"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style lang="scss" scoped>
.home-banner{
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 98;
  img{
    width: 100%;
    height: 500px;
  }
}
</style>