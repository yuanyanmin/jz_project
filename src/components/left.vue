<template>
  <div class="screen-left container" ref="left">

    <div class="sample-number-box">
      <p class="g-title">
        <span class="icon"></span>
        样本总数
      </p>
      <div class="num g-box-border">
        <span v-for="(item, index) in sampleNumber.toString().split('')"
          :key="index"
          class="num-item">
          {{item}}
        </span>
      </div>
    </div>

    <div class="network-indicators-box">
      <p class="g-title">
        <span class="icon"></span>
        网络指标
      </p>
      
      
      <div class="networkBox">
        <div class="network-type-box">
          <el-radio-group v-model="networkType" size="mini">
            <el-radio-button label="4G"></el-radio-button>
            <el-radio-button label="5G"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="networkCon">
          <ul class="table-title">
            <li class="seamless-title">
              <span class="coverageRate">覆盖率</span>
              <span class="samplesNum">样本数量</span>
              <span class="excellentSamplesNum">优良样本数量</span>
              <span class="userNum">用户数</span>
            </li>
            
          </ul>
          <ul class="table-col">
            <li v-for="(item, index) in networkData" :key="index" class="seamless-value">
              <span class="coverageRate" v-text="item.coverageRate"></span>
              <span class="samplesNum" v-text="item.samplesNum"></span>
              <span class="excellentSamplesNum" v-text="item.excellentSamplesNum"></span>
              <span class="userNum" v-text="item.userNum"></span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    <div class="data-capture-box">
      <p class="g-title">
        <span class="icon"></span>
        数据采集
      </p>
      <div class="content g-box-border">
        <div class="totalNum">
          <p class="title">场景总数</p>
          <p class="num g-text-overflow">{{captureData.totalNum}}</p>
        </div>
        <div class="fl buildingNum">
          <p class="title">楼宇</p>
          <p class="num g-text-overflow">{{captureData.buildingNum}}</p>
        </div>
        <div class="fr shop">
          <p class="title">店铺</p>
          <p class="num g-text-overflow">{{captureData.shop}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {
  },
  data() {
    return {
      sampleNumber: '81025万',
      networkType: '4G',
      captureData: {
        totalNum: 5870000,
        buildingNum: 8700,
        shop: 250000
      },
      networkData: [],
      network4GData: [
        {coverageRate: '10%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '20%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '30%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '40%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '50%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '60%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '70%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '80%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '90%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '100%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '50%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '120%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 }
      ],
      network5GData: [
        {coverageRate: '51%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '52%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '53%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '54%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '55%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '56%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '57%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '58%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '59%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '51%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '55%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 },
        {coverageRate: '59%', samplesNum: 1000, excellentSamplesNum: 100, userNum: 100 }
      ]
    }
  },
  mounted() {
    this.networkData = this.network4GData
  },
  watch: {
    networkType(val) {
      if (val === '4G') {
        this.networkData = this.network4GData
      } else if (val === '5G') {
        this.networkData = this.network5GData
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.screen-left {
  position: absolute;
  left: 0.1rem;
  // top: 62px;
  // width: 20%;
  // height: 60%;
  top: 0.62rem;
  width: 4rem;
  // height: 8rem;
  height: 60%;
  overflow: hidden;
  min-width: 180px;
  // background-color: #666;
  .sample-number-box {
    font-size: 0.24rem;
    height: 1.3rem;
    .num {
      margin-top: 0.2rem;
      padding: 0.2rem 0;
      text-align: center;
    }
    .num-item {
      display: inline-block;
      padding: 0.05rem;
      background: url('../assets/screen_icon/numItemBox.png') no-repeat;
      background-size: 100% 100%;;
      margin-left: 0.1rem;
      text-align: center;
    }
  }
  .network-indicators-box {
    // height: 4.3rem;
    height: calc(100% - 3.7rem);
    overflow: hidden;
    margin-top: 0.2rem;
    .networkBox {
      height: 100%;
      .network-type-box {
        text-align: center;
        padding: 0 0 0.1rem 0;
      }
      .networkCon {
        height: 100%;
      }
    }
    .seamless-title {
      display: flex;
      justify-content: space-around;
      overflow: hidden;
      span {
        width: 25%;
        text-align: center;
      }
    }
    .seamless-value {
      height: 0.30rem;
      line-height: 0.3rem;
      color: rgb(250, 200, 88);
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      span {
        width: 25%;
        text-align: center;
      }
    }

    /deep/ .el-tabs--border-card>.el-tabs__content {
      padding: 0.15rem 0.05rem;
    }
    /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      background-color: rgb(0, 71, 185);
      border-color: rgb(0, 71, 185);
    }
    .table-title {

    }
    .table-col {
      // height: 3rem;
      height: calc(100% - 1.2rem);
      overflow: auto;
    }
    /deep/ .el-radio-button--mini .el-radio-button__inner {
      padding: 0.05rem 0.1rem;
    }

  // }
  // .network-indicators-box .seamless-warp {
  //   overflow: hidden;
  //   margin-top: 10px;
  // }

  // .network-indicators-box .seamless-warp li {
  //   height: 30px;
  //   line-height: 30px;
  //   padding: 0 10px;
  //   color: rgb(250, 200, 88);
  //   box-sizing: border-box;
  //   display: flex;
  //   justify-content: space-around;
  // }
  // .network-indicators-box .seamless-warp li span {
  //   display: inline-block;
  //   min-width: 20px;
  // }
  // .network-indicators-box .seamless-warp li:nth-child(even) {
  //   background-color: rgb(0, 48, 101, 0.5);
  // }
  // .network-indicators-box .seamless-warp li:nth-child(odd) {
  //   background-color: rgb(1, 30, 74, 0.8);          
  // }
  }


  .data-capture-box {
    margin-top: 0.2rem;
    height: 2rem;
    overflow: hidden;
    .content {
      overflow: hidden;
      padding: 0.1rem;
      margin-top: 0.1rem;
    }
    .num {
      font-size: 0.2rem;
      color: #00b0ed;
    }
    .title {
      font-size: 0.14rem;
      color: #fff;
      margin-bottom: 0.1rem;
    }
    .totalNum .num{
      font-size: 0.25rem;
      color: #fedb65;
    }
    .buildingNum,
    .shop {
      width: 50%;
    }
    .totalNum{
      width: 100%;
      margin-bottom: 0.2rem;
    }
    .shop {
      float: right;
    }
  }
}
</style>