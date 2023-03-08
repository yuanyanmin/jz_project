<template>
  <div class="screen-right">
    <!-- <el-menu
      default-active="beijing"
      class="city-menu"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item
        v-for="(item, index) in menuData"
        :key="index" 
        :index="item.id">
        <span slot="title">北京</span>
      </el-menu-item>
    </el-menu> -->
    <div
      class="city-menu">
      <div class="city-box">
        <p
          v-for="(item, index) in menuData"
          :key="index" 
          :index="item.id"
          :class="[curSelectMenuIndex === index ? 'underline' : '']"
          @click="changeCity(index)">
          {{item.name}}
        </p>
      </div>
    </div>

    <div
      class="city-data-table">
      <div class="flex-show">
        <span class="scene_col">场景</span>
        <span class="total_col">样本总量</span>
        <span class="coverage_col">覆盖率</span>
      </div>
      <ul>
        <li
          v-for="(item, index) in tableData"
          :key="index"
           class="flex-show table-item">
          <span class="scene_col">{{item.scene}}</span>
          <span class="total_col">{{item.totalNum}}</span>
          <span class="coverage_col">{{item.coverage}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {id: 'beijing', name: '北京'},
        {id: 'shanghai', name: '上海'},
        {id: 'tianjin', name: '天津'},
        {id: 'chognqing', name: '重庆'},
        
        {id: 'beijing1', name: '北京'},
        {id: 'shanghai1', name: '上海'},
        {id: 'tianjin1', name: '天津'},
        {id: 'chognqing1', name: '重庆'},
        {id: 'beijing2', name: '北京'},
        {id: 'shanghai2', name: '上海'},
        {id: 'tianjin2', name: '天津'},
        {id: 'chognqing2', name: '重庆'},

      ],
      tableHeaderData: [
        {name: '场景'},
        {name: '样本总量'},
        {name: '覆盖率'}
      ],
      tableData: [
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'},
        {scene: '城市', totalNum: 100, coverage: '100%'}
      ],
      curSelectMenuIndex: 0
    }
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    changeCity(index) {
      this.curSelectMenuIndex = index
      this.tableData = this.tableData.map(item => {
        item.totalNum = this.random(1, 1001),
        item.coverage = this.random(1, 101) + '%'
        return item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.screen-right {
  position: absolute;
  right: 0.1rem;
  top: 0.62rem;
  width: 4rem;
  z-index: 3;
  // height: 8rem;
  height: 60%;
  overflow: hidden;
  background-color: #666;
  min-width: 180px;
  .city-menu {
    float: left;
    width: 1rem;
    box-sizing: border-box;
    .city-box {
      p {
        line-height: 0.4rem;
        cursor: pointer;
        text-align: center;
      }
      p.underline {
        border-bottom: 1px solid #fff;
      }
    }
    
  }
  .city-data-table {
    float: right;
    width: 3rem;
    box-sizing: border-box;
    .flex-show {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
    .table-item {
      line-height: 40px;
    }
    .scene_col {
      width: 20%;
    }
    .total_col {
      width: 40%;
    }
    .coverage_col {
      width: 20%;
    }
  }
}
</style>