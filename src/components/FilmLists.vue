<template>
  <div class="main">
    <el-row>
      <el-col :span="4">
        <div style="height: 20px"></div>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="film-mian">
              <img src="../assets/img/film/小丑.jpg" alt="小丑">
              <div class="film-mian-contenr">
                <div>
                  <el-rate v-model="value" disabled show-score text-color="#ff9900"
                           score-template="{value}"></el-rate>
                </div>
                <span>小丑</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="film-mian">
              <img src="../assets/img/film/时空恋人.jpg" alt="时空恋人">
              <div class="film-mian-contenr">
                <div>
                  <el-rate v-model="value" disabled show-score text-color="#ff9900"
                           score-template="{value}"></el-rate>
                </div>
                <span>时空恋人</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="film-mian">
              <img src="../assets/img/film/你的名字.jpg" alt="你的名字">
              <div class="film-mian-contenr">
                <div>
                  <el-rate v-model="value" disabled show-score text-color="#ff9900"
                           score-template="{value}"></el-rate>
                </div>
                <span>你的名字</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="film-mian">
              <img src="../assets/img/film/小偷家族.jpg" alt="小偷家族">
              <div class="film-mian-contenr">
                <div>
                  <el-rate v-model="value" disabled show-score text-color="#ff9900"
                           score-template="{value}"></el-rate>
                </div>
                <span>小偷家族</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4" style="height: 20px"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'FilmList',
    data() {
      return {
        value: 3.7
      };
    }
  };
</script>

<style scoped>
  .main {
    margin-top: 50px;
  }

  .film-mian {
    height: 320px;
  }

  .film-mian > img {
    width: 75%;
    height: 80%;
  }

  .film-mian-contenr {
    width: 75%;
    margin: 0 auto;
    padding: 4px;
    text-align: left;
  }

  .film-mian-contenr > span {
    font-size: 18px;
    color: #2c3e50;
    font-weight: 800;
  }
</style>
