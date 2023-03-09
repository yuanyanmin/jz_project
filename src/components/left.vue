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
       
        <div class="networkCon">
          <ul class="table-title">
            <li class="seamless-title">
              <span class="coverageRate">4G覆盖率</span>
              <span class="samplesNum">样本数</span>
              <span class="excellentSamplesNum">优良样本数</span>
              <span class="userNum">用户数</span>
            </li>
            
          </ul>
          <!-- <ul class="table-col">
            <li v-for="(item, index) in network4GData" :key="index" class="seamless-value">
              <span class="coverageRate" v-text="item.coverageRate"></span>
              <span class="samplesNum" v-text="item.samplesNum"></span>
              <span class="excellentSamplesNum" v-text="item.excellentSamplesNum"></span>
              <span class="userNum" v-text="item.userNum"></span>
            </li>
          </ul> -->

          <vue-seamless-scroll :data="network4GData" class="seamless-warp" :class-option="classOption">
            <ul class="item">
              <li v-for="(item, index) in network4GData" :key="index">
                <span class="coverageRate" v-text="item.coverageRate"></span>
                <span class="samplesNum" v-text="item.samplesNum"></span>
                <span class="excellentSamplesNum" v-text="item.excellentSamplesNum"></span>
                <span class="userNum" v-text="item.userNum"></span>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>

        <div class="networkCon">
          <ul class="table-title">
            <li class="seamless-title">
              <span class="coverageRate">5G覆盖率</span>
              <span class="samplesNum">样本数</span>
              <span class="excellentSamplesNum">优良样本数</span>
              <span class="lingerRate">5G驻留比</span>
              <span class="comCoverage">综合覆盖率</span>
              <span class="userNum">用户数</span>
            </li>
            
          </ul>
          <vue-seamless-scroll :data="network5GData" class="seamless-warp seamless-5g" :class-option="classOption">
            <ul class="table-col">
              <li v-for="(item, index) in network5GData" :key="index">
                <span class="coverageRate" v-text="item.coverageRate"></span>
                <span class="samplesNum" v-text="item.samplesNum"></span>
                <span class="excellentSamplesNum" v-text="item.excellentSamplesNum"></span>
                <span class="lingerRate" v-text="item.lingerRate"></span>
                <span class="comCoverage" v-text="item.comCoverage"></span>
                <span class="userNum" v-text="item.userNum"></span>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
        
      </div>
    </div>
    <div class="data-capture-box">
      <p class="g-title">
        <span class="icon"></span>
        数据采集
      </p>
      <div class="content">
        <div class="totalNum">
          <p class="title">场景总数</p>
          <p class="num g-text-overflow">{{captureData.totalNum}}</p>
        </div>
        <div class="buildingNum">
          <p class="title">楼宇</p>
          <p class="num g-text-overflow">{{captureData.buildingNum}}</p>
        </div>
        <div class="shop">
          <p class="title">店铺</p>
          <p class="num g-text-overflow">{{captureData.shop}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      sampleNumber: '81025万',
      captureData: {
        totalNum: 5870000,
        buildingNum: 8700,
        shop: 250000
      },
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
        {coverageRate: '51%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '52%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '53%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '54%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '55%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '56%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '57%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '58%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '59%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '51%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '55%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 },
        {coverageRate: '59%', samplesNum: 1000, excellentSamplesNum: 100, comCoverage: '90%', lingerRate: '90%', userNum: 100 }
      ],
      classOption: {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 1116, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 20, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 2500 // 单步运动停止的时间(默认值1000ms)
      },
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
  // top: 0.62rem;
  top: 0;
  width: 4rem;
  // height: 8rem;
  // height: 60%;
  height: 100%;
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
      font-size: 0.3rem;
      font-weight: bold;
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
        height: 50%;
        overflow: hidden;
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
      height: 0.2rem;
      line-height: 0.2rem;
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
      height: calc(100% - 0.7rem);
      overflow: auto;
      // background-color: rgb(0, 40, 89);
    }
    /deep/ .el-radio-button--mini .el-radio-button__inner {
      padding: 0.05rem 0.1rem;
    }

  // }
    .seamless-warp {
      overflow: hidden;
      // margin-top: 10px;
      li {
        height: 0.3rem;
        line-height: 0.3rem;
        // padding: 0 10px;
        color: rgb(250, 200, 88);
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        span {
          display: inline-block;
          width: 25%;
          text-align: center;
        }
        &:nth-child(even) {
          background-color: rgba(0, 48, 101, 0.5);
        }
        &:nth-child(odd) {
          background-color: rgba(1, 30, 74, 0.2);
        }
      }
      
    }
  }


  .data-capture-box {
    margin-top: 0.2rem;
    height: 2rem;
    overflow: hidden;
    .content {
      overflow: hidden;
      padding: 0.2rem 0;
      margin-top: 0.1rem;
      display: flex;
      justify-content: space-between;
    }
    .num {
      font-size: 0.24rem;
      color: #00b0ed;
    }
    .title {
      font-size: 0.14rem;
      // color: #fff;
      margin-bottom: 0.1rem;
    }
    .totalNum .num{
      font-size: 0.26rem;
      color: #fedb65;
    }
    .buildingNum,
    .shop,
    .totalNum {
      // width: 50%;
      background: url('../assets/screen_icon/bg01.png') no-repeat;
      background-size: 100% 100%;
      width: 30%;
      padding: 0.1rem 0 0.1rem 0.1rem;
      .title {
        font-size: 0.12rem;
      }
      .num {
        color: rgb(130,210,111);
        font-weight: bold;
      }
    }
    // .shop {
    //   float: right;
    // }
  }
}
</style>