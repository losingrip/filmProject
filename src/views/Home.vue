<template>
  <div class="home">
    <div>
      <!--    顶部导航栏-->
      <HeaderMenu></HeaderMenu>
    </div>
    <div id="main">
      <!--    轮播图-->
      <Carousel></Carousel>
      <!--    中间的广告标题-->
      <GLable></GLable>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderMenu from '../components/HeaderMenu.vue';
  import Carousel from '../components/Carousel.vue';
  import GLable from '../components/GLable.vue';

  export default {
    name: 'Home',
    components: {
      HeaderMenu,
      Carousel,
      GLable,
    },
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {},
  };
</script>

<style>


</style>
