<template>
  <div class="container">
    <HomeBanner />
    <HomeCategory />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct /> 
</template>
<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>