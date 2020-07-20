<template>
  <el-menu :default-active="activeIndex" @select="handleSelect" class="el-menu-demo"
           mode="horizontal">
    <el-menu-item class="header_style" index="1">电影首页</el-menu-item>
    <el-submenu class="header_style" index="2">
      <template slot="title">电影筛选</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item class="header_style" index="3">消息中心</el-menu-item>
    <el-menu-item class="header_style" index="4">个人中心</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
  .header_style {
    float: right;
  }
</style>
