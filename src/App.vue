<script setup>
import { onMounted } from 'vue';
import { getCategoryAPI } from './apis/test/test';

const getData = async () => {
  const res = await getCategoryAPI()
  console.log(res)
}
onMounted(() => {
  getData()
})
</script>

<template>
<div>

</div>
<router-view></router-view>
</template>

<style scoped>


</style>
