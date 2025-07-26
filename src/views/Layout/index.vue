<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getCategoryData();
});
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutFixed></LayoutFixed>
  <LayoutHeader></LayoutHeader>
  <!-- 添加key属性，解决路由切换时，组件不重新渲染的问题 -->
  <!-- <RouterView :key="$route.path" /> -->
   <RouterView />
  <LayoutFooter></LayoutFooter>
</template>
<style scoped lang="scss">
.test {
 color: $priceColor;
}
</style>