<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <div class="top">
      <el-card class="top-left">
        <div class="ctt">title</div>
        <div class="ctb">
          <center-map/>
        </div>
      </el-card>
      <el-card class="top-right">
        <el-radio-group v-model="networkType" @change="changeTab">
          <el-radio-button label="4G"></el-radio-button>
          <el-radio-button label="5G"></el-radio-button>
        </el-radio-group>
        <table-4G v-if="networkType=='4G'" :networkType="networkType"/>
        <table-5G v-else :networkType="networkType"/>
      </el-card>
    </div>
    <div class="bottom">
      <el-card class="bot-left">
        <el-radio-group v-model="city" @change="changeCity">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="天津"></el-radio-button>
          <el-radio-button label="重庆"></el-radio-button>
        </el-radio-group>
        <bb-chart height="200px" :networkType="networkType" :city="city"/>
      </el-card>
      <el-card class="bot-right">
        <el-radio-group v-model="city" @change="changeCity">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="天津"></el-radio-button>
          <el-radio-button label="重庆"></el-radio-button>
        </el-radio-group>
        <bb-chart height="200px" :networkType="networkType" :city="city"/>
      </el-card>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import centerMap from './components/centerMap.vue'
import table4G from './components/table-4G.vue'
import table5G from './components/table-5G.vue'
import bbChart from './components/bbChart'

export default {
  name: 'Dashboard',
  components: {
    centerMap,
    table4G,
    table5G,
    bbChart
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      networkType: '4G',
      city: '上海',
      cityList:['上海','北京','天津','重庆']
    }
  },
  methods: {
    changeTab(val) {
      this.networkType = val
    },
    changeCity(val) {
      this.city = val
    },
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
}
.dashboard-container{
  height: calc(100vh - 145px);
  margin: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  // border: 1px solid #000;
  .top {
    height:65%;
    width: 100%;
    min-width: 860px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    .top-left {
    margin:0 10px 10px 0;
    height: 100%;
    width:55%;
    .ctt {
      height:20%;
    }
    .ctb {
      height: 80%;
    }
  }
  .top-right {
      margin:0 0 10px 0;
      height: 100%;
      width:45%;
      flex: 1;
      ::v-deep .el-card__body{
        height: 100%;
      }
    }
  }
  .bottom {
    margin:10px 0 0 0;
    height: 35%;
    width:100%;
    display: flex;
    flex-direction: row;
    .bot-left {
      margin:0 10px 0 0;
      width:50%;
      height:100%;
      flex:1;
    }
    .bot-right {
      width:50%;
      height:100%;
      flex:1;
    }
  }
}
</style>
