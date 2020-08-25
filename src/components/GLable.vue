<template>
  <div class="GLable">
    <el-row>
      <el-col :span="2">
        <div class="no_block"></div>
      </el-col>
      <el-col :span="20">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="g_block">
              <img src="../assets/img/ad/liulan.jpg" alt="liulan">
              <div class="g_block_con">浏 览<br><span>web浏览/布局精美</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="g_block">
              <img src="../assets/img/ad/film.jpg" alt="film">
              <div class="g_block_con">电 影<br><span>线上查看/信息详情</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="g_block">
              <img src="../assets/img/ad/computer.jpg" alt="computer">
              <div class="g_block_con">购 票<br><span>线上购票/快速下单</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="g_block">
              <img src="../assets/img/ad/service.jpg" alt="service">
              <div class="g_block_con">服 务<br><span>优质服务/轻松上手</span></div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2">
        <div class="no_block"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'GLable'
  };
</script>

<style>

  .g_block {
    position: relative;
    width: 100%;
    height: auto;
  }

  .g_block > img {
    width: 100%;
    height: 100%;
  }

  .no_block {
    width: 100%;
    height: 300px;
    padding: 0;
  }
  .g_block .g_block_con{
    position: absolute;
    width: 80%;
    height: 80px;
    color: rgb(38, 38, 38);
    font-size: 23pt;
    padding-top: 26px;
    font-weight: 800;
    text-align: center;
    background: white;
    border-radius: 3%;
    box-shadow: 1px 1px 10px #c7c7c7d7;
    z-index: 2;
    left: 9.5%;
    top: 77%;
  }
  .g_block .g_block_con span{
    color: rgb(189, 185, 185);
    font-size: 12pt;
    font-weight: 500;
  }

  .GLable {
    margin-top: 100px;
  }
</style>
