<template>
  <div style="margin-top: 30px">
    <el-row>
      <el-col :span="4">
        <div class="liftaddright"></div>
      </el-col>
      <el-col :span="16">
        <div class="cards">
          <div class="card">
            <div class="card-name">地区:</div>
            <div class="card-main" id="place">
              <span class="active">全部</span>
              <span>中国</span>
              <span>美国</span>
              <span>韩国</span>
              <span>德国</span>
            </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
            <div class="card-name">语言:</div>
            <div class="card-main" id="language">
              <span class="active">全部</span>
              <span>汉语</span>
              <span>英语</span>
              <span>韩语</span>
              <span>日语</span>
              <span>俄语</span>
              <span>德语</span>
              <span>法语</span>
              <span>阿拉伯语</span>
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="card">
            <div class="card-name">类型:</div>
            <div class="card-main" id="type">
              <span class="active">全部</span>
              <span>喜剧</span>
              <span>动作</span>
              <span>动漫</span>
              <span>武侠</span>
              <span>剧情</span>
              <span>恐怖</span>
              <span>战争</span>
              <span>科幻</span>
            </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
            <div class="card-name">年份:</div>
            <div class="card-main" id="years">
              <span class="active">全部</span>
              <span>今年</span>
              <span>2019</span>
              <span>2018</span>
              <span>2017</span>
              <span>2018</span>
              <span>2016</span>
              <span>2015</span>
              <span>2014</span>
              <span>2013</span>
              <span>更早</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="liftaddright"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: 'SelectCard',
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style scoped>
  .liftaddright {
    height: 100px;
  }

  .cards {
    margin: 0 auto;
    border-top: none;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  .cards .card {
    padding: 0 0;
    box-sizing: border-box;
    display: flex;
  }

  .cards .card .card-name {
    font-size: 14px;
    padding-top: 3px;
    color: #666;
    display: inline-block;
  }

  .cards .card .card-main span {
    font-size: 14px;
    color: #333;
    display: inline-block;
    box-sizing: border-box;
    padding: 3px 10px;
    margin-left: 10px;
  }

  .cards .card .card-main span:hover {
    color: #3dbcc6;
    cursor: pointer;
  }

  .cards .card .card-main span.active {
    border-radius: 6px;
    background: #3dbcc6;
    color: #fff;
  }
</style>
