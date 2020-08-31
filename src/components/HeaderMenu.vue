<template>
  <div>
    <el-menu router :default-active="$route.path" @select="handleSelect" class="el-menu-demo"
             mode="horizontal" >
      <el-menu-item class="header_style" index="/">电影首页</el-menu-item>
      <el-menu-item class="header_style" index="/FilmList">电影选择</el-menu-item>
      <el-menu-item class="header_style" index="/">消息中心</el-menu-item>
      <el-menu-item class="header_style" index="4">个人中心</el-menu-item>
      <el-submenu class="header_style" index="5">
        <template slot="title">其他</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
        <el-submenu index="5-4">
          <template slot="title">选项4</template>
          <el-menu-item index="5-4-1">选项1</el-menu-item>
          <el-menu-item index="5-4-2">选项2</el-menu-item>
          <el-menu-item index="5-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        offsetTop: 0,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },

    },
    // mounted: function () {
    //   var toolbar=document.getElementById("header")
    //   window.addEventListener('scroll',()=>{
    //     this.offsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //     if (this.offsetTop>120){
    //       toolbar.style.background="#fff"
    //     }else {
    //       toolbar.setAttribute("style","background:linear-gradient(top,#000,#fff)")
    //     }
    //   },true);
    // }
  };
</script>

<style scoped>
  .header_style {
    float: right;
  }
  .header{
    position: fixed;
    z-index: 3;
    left: 0;
    right: 0;
  }
</style>
