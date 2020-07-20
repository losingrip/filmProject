<template>
    <div>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">ddd</div></el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'firstview',
};
</script>

<style scoped>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
