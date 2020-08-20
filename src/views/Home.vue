<template>
  <div class="home">
    <!--    顶部导航栏-->
    <HeaderMenu></HeaderMenu>
    <!--    轮播图-->
    <Carousel></Carousel>
    <!--    中间的广告标题-->
    <GLable></GLable>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '../components/HelloWorld.vue';
  import HeaderMenu from '../components/HeaderMenu.vue';
  import Carousel from '../components/Carousel.vue';
  import GLable from '../components/GLable.vue';

  export default {
    name: 'Home',
    components: {
      HelloWorld,
      HeaderMenu,
      Carousel,
      GLable,
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


</style>
