<template>
  <el-carousel :interval="5000" arrow="always" trigger="click" height="500px">
    <el-carousel-item v-for="item in Item" :key="item.name">
      <img :src='item.name'>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      Item: [{ name: require('../assets/img/banner/coco.jpg') },
        { name: require('../assets/img/banner/frozen.jpg') },
        { name: require('../assets/img/banner/哪吒.jpg') },
        { name: require('../assets/img/banner/寄生虫.jpg') },
        { name: require('../assets/img/banner/小偷家族.jpg') },
        { name: require('../assets/img/banner/爱乐之城.jpg') },
        { name: require('../assets/img/banner/白蛇.jpg') },
        { name: require('../assets/img/banner/绿皮书.jpg') },
        { name: require('../assets/img/banner/龙猫.jpg') }],
    };
  },
};
</script>

<style scoped>

</style>
