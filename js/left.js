const leftComponent = Vue.extend({
  template: `
    <div class="left-box">

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
        <div class="network4G">
          <ul class="item">
            <li class="seamless-title">
              <span class="coverageRate">覆盖率</span>
              <span class="samplesNum">样本数量</span>
              <span class="excellentSamplesNum">优良样本数量</span>
              <span class="userNum">用户数</span>
            </li>
          </ul>
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
        <div class="network4G">
          <ul class="item">
            <li class="seamless-title">
              <span class="coverageRate">覆盖率</span>
              <span class="samplesNum">样本数量</span>
              <span class="excellentSamplesNum">优良样本数量</span>
              <span class="userNum">用户数</span>
            </li>
          </ul>
          <vue-seamless-scroll :data="network5GData" class="seamless-warp" :class-option="classOption">
            <ul class="item">
              <li v-for="(item, index) in network5GData" :key="index">
                <span class="coverageRate" v-text="item.coverageRate"></span>
                <span class="samplesNum" v-text="item.samplesNum"></span>
                <span class="excellentSamplesNum" v-text="item.excellentSamplesNum"></span>
                <span class="userNum" v-text="item.userNum"></span>
              </li>
            </ul>
          </vue-seamless-scroll>
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
  `,
  data() {
    return {
      classOption: {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 6, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 30, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 2500 // 单步运动停止的时间(默认值1000ms)
      },
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
      ]
    }
  }
})
