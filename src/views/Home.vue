<template>
  <div class="home">
    <!--    顶部导航栏-->
    <HeaderMenu></HeaderMenu>
    <!--    轮播图-->
    <Carousel></Carousel>
    <!--    中间的广告标题-->
    <AdLable></AdLable>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '../components/HelloWorld.vue';
  import HeaderMenu from '../components/HeaderMenu.vue';
  import Carousel from '../components/Carousel.vue';
  import AdLable from '../components/AdLable';

  export default {
    name: 'Home',
    components: {
      HelloWorld,
      HeaderMenu,
      Carousel,
      AdLable,
    },
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style>

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .header {
    padding: 0 1px;
  }
</style>
