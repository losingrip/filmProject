<template xmlns:el-col="http://www.w3.org/1999/html">
    <div>
      <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="4">
          <div class="ad_block"></div>
        </el-col>
        <el-col :span="4">
        </el-col>
        <el-col :span="4">
          <div class="ad_block"></div>
        </el-col>
        <el-col :span="4">
          <div class="ad_block"></div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'AdLable'
  };
</script>

<style scoped>
  .ad_block{
    background:#00ffff;
    min-height: 200px;
  }
</style>
