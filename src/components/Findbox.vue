<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <el-row>
      <el-col :span="4"><div style="height: 20px"></div></el-col>
      <el-col :span="16">
        <div style="margin-top: 15px;" id="findCard">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="默认" value="1"></el-option>
              <el-option label="按名称" value="2"></el-option>
              <el-option label="按语言" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="4"><div style="height: 20px"></div></el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'Findbox',
    data() {
      return {
        input: '',
        select: '',
      };
    }
  };
</script>

<style scoped>
  .input-with-select {
    background-color: #fff;
  }

  .el-select {
    width: 130px;
  }
</style>
