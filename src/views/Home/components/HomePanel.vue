<script setup>
defineProps({ 
  title: String,
  subTitle: String
})

</script>
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3> {{ title }} <small>{{ subTitle }}</small></h3>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-panel {
  background: #fff;
 .head{
  padding: 40px 0;
  display: flex;
  align-items: flex-end;
  h3{
    flex: 1;
    font-size: 30px;
    font-weight: normal;
    margin-left: 6px;
    height: 35px;
    line-height: 35px;
    small{
      font-size: 16px;
      color: #999;
      margin-left: 20px;
    }
  }
 }
}
</style>