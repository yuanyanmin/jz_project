<template>
  <div class="screen-bottom">
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
</template>

<script>
import bbChart from './bbChart'
export default {
  components: {
    bbChart
  },
  data() {
    return {
      networkType: '4G',
      city: '上海',
      cityList: ['上海','北京','天津','重庆']
    }
  },
  methods: {
    changeCity(val) {
      this.city = val
    }
  }
}
</script>

<style lang="scss" scoped>
.screen-bottom {
  position: absolute;
  right: 0.1rem;
  // bottom: 0.01rem;
  // top: 6.2rem;
  // top: calc(61% + 0.62rem);
  top: 60%;
  // width: 99%;
  width: calc(100% - 4.3rem);
  display: flex;
  justify-content: space-around;
  height: 40%;
  // height: calc(39% - 0.62rem - 0.2rem);
  // height: 2rem;
  overflow: hidden;
  // background: #f00;
}
</style>