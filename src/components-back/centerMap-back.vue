<template>
  <div class="box">
    <div v-if="curProvince !== '全国'"
         class="back"
         @click="backMap"><i class="el-icon-arrow-left el-icon--left"></i>全国</div>
    <div id="centerMapChart_jb"
         class="chart" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
import cityMap from '../../components/Echarts/mapJs/js/china-main-city-map'
import axios from 'axios'
// import { getMapLevelIndicators } from '@/server/holidaySecurity1'
import provinceData from '../../utils/province.json'
var chinaId = 100000
var chinaName = 'china'
// eslint-disable-next-line no-unused-vars
var chinaJson = null
// 中国地图（第一级地图）的ID、Name、Json数据
// 记录父级ID、Name
var mapStack = []
var parentId = null
var parentName = null

export default {
  name: 'ChinaMap',
  data () {
    return {
      setOption: null,
      data: [],
      myChart: null,
      max: '',
      min: '',
      count4G: 0,
      count5G: 0,
      province: Object.freeze(provinceData),
      curProvince: '全国',
      networkType: '4G',
      indicator:"总小区数",
    }
  },
  watch: {
    // $route: {
    //   handler (val, oldVal) {
    //     // 如果点了全国，地图收回
    //     if (val.query.province === '全国') {
    //       this.backMap()
    //     }
    //     if (oldVal && val.query.networkType !== oldVal.query.networkType) {
    //       this.getMonthlyflowLevel()
    //       if (!this.setOption.series) return
    //       if (val.query.province === '全国') return
    //       this.setOption.series[1].data = (val.query.networkType === '4G' ?
    //         [{
    //           name: `4G总小区数:${this.count4G}`,
    //           value: this.province[val.query.province].center
    //         }] : [{
    //           name: `5G总小区数:${this.count5G}`,
    //           value: this.province[val.query.province].center
    //         }])
    //     }
    //     this.getMonthlyflowLevel()
    //   },
    //   deep: true,
    //   immediate: true
    // },
    count4G (val) {
      if (this.networkType === '4G' && this.curProvince !== '全国') {
        if (!this.setOption.series) return
        this.setOption.series[1].data = [{
          name: `4G总小区数:${val}`,
          value: this.province[this.curProvince].center
        }]
      }
    },
    count5G (val) {
      if (this.networkType === '5G' && this.curProvince !== '全国') {
        if (!this.setOption.series) return
        this.setOption.series[1].data = [{
          name: `5G总小区数:${val}`,
          value: this.province[this.curProvince].center
        }]
      }
    },
    setOption: {
      handler: function (newVal, oldVal) {
        if (this.myChart) {
          if (newVal) {
            this.myChart.setOption(newVal)
          } else {
            this.myChart.setOption(oldVal)
          }
        } else {
          this.mapChart('centerMapChart_jb')
        }
      },
      deep: true // 对象内部属性的监听，关键。
    }
  },
  /**
   *
   * @param {*} myChart
   * @param {*} id        省市县Id
   * @param {*} name      省市县名称
   * @param {*} mapJson   地图Json数据
   * @param {*} flag      是否往mapStack里添加parentId，parentName
   */
  mounted () {
    // this.$bus.on('getTotal', this.getTotal)
    this.mapChart('centerMapChart_jb')
  },
  methods: {
    getTotal (val, type) {
      type === '4G' ? this.count4G = val : this.count5G = val
    },
    mapProvinceChart (divid, provinceName) {
      var cityId = cityMap[provinceName]
      axios
        .get(
          '../../../static/testData/json/map/' + cityId + '.json',
          {}
        )
        .then(response => {
          const mapJson = response.data
          this.myChart = this.$echarts.init(document.getElementById(divid))
          this.registerAndsetOption(
            this.myChart,
            cityId,
            provinceName,
            mapJson
          )
        })
    },
    mapChart (divid) {
      axios
        .get(
          '../../../static/testData/json/map/' + chinaId + '.json',
          {}
        )
        .then(response => {
          const mapJson = response.data
          chinaJson = mapJson
          this.myChart = this.$echarts.init(document.getElementById(divid))
          this.registerAndsetOption(
            this.myChart,
            chinaId,
            chinaName,
            mapJson,
            false
          )
          parentId = chinaId
          parentName = 'china'
          this.myChart.on('click', param => {
            if (param.componentSubType === 'effectScatter') {
              if (this.curProvince !== '全国') {
                // this.$emit('showMapDialog', param.value)
              } else {
                // this.$emit('clickName', param.data[3])
                axios
                  .get(
                    '../../../static/testData/json/map/' + cityMap[param.data[3]] + '.json',
                    {}
                  )
                  .then(response => {
                    const mapJson = response.data
                    this.registerAndsetOption(
                      this.myChart,
                      cityId,
                      param.data[3],
                      mapJson,
                      true
                    )
                    this.setOption.series[1].data = (this.networkType === '4G' ?
                      [{
                        name: `4G总小区数:${this.count4G}`,
                        value: this.province[param.data[3]].center
                      }] : [{
                        name: `5G总小区数:${this.count5G}`,
                        value: this.province[param.data[3]].center
                      }])
                  })
              }
              return
            }
            if (param.name === '南海诸岛') {
              return
            }
            var cityId = cityMap[param.name]
            // cityId ? this.$emit('clickName', param.name) : this.$emit('clickName', '全国')

            if (cityId) {
              // 代表有下级地图
              axios
                .get(
                  '../../../static/testData/json/map/' + cityId + '.json',
                  {}
                )
                .then(response => {
                  const mapJson = response.data
                  this.registerAndsetOption(
                    this.myChart,
                    cityId,
                    param.name,
                    mapJson,
                    true
                  )
                  this.setOption.series[1].data = (this.networkType === '4G' ?
                    [{
                      name: `4G总小区数:${this.count4G}`,
                      value: this.province[param.name].center
                    }] : [{
                      name: `5G总小区数:${this.count5G}`,
                      value: this.province[param.name].center
                    }])
                })
            } else {
              // 没有下级地图，回到一级中国地图，并将mapStack清空
              this.registerAndsetOption(
                this.myChart,
                chinaId,
                chinaName,
                chinaJson,
                false
              )
              mapStack = []
              parentId = chinaId
              parentName = chinaName
              // this.setOption.series[1].data = [[116.414537, 39.91513, 'BJ', '北京'], [117.209241, 39.095359, 'TJ', '天津'], [114.541193, 38.065022, 'HE', '河北']]
            }
          })
          this.getMonthlyflowLevel()
        })
    },
    registerAndsetOption (myChart, id, name, mapJson, flag) {
      // 注册可用的地图,这里用的哪个省市的就写哪个省市的名字
      this.$echarts.registerMap(name, mapJson)
      const self = this
      this.setOption = {
        tooltip: {
          trigger: 'item',
          show: true,
          formatter: function (params) {
            if (params.value || params.value === 0) {
              return params.name + ' ' + params.value
            } else {
              return params.name
            }
          }
        },
        // tooltip: {
        //   trigger: 'item'
        // },
        geo: {
          type: 'map',
          map: name,    // 上面引入的数据名
          zoom: 1.2,
          itemStyle: {
            normal: {
              // shadowBlur: 120, // 映射点轮廓
              shadowColor: '#ffffff', // 映射点阴影颜色
              areaColor: '#DDDDDD',
              borderColor: '#E1E7F3', // 轮廓线颜色
              borderWidth: 2 // 轮廓线大小
            },
            emphasis: {
              areaColor: 'gray' // 鼠标移入局部颜色
            }
          },
          data: []
        },
        // 左下角图标
        visualMap: {
          // show: false,
          seriesIndex: [0], // series 作用域。指定取哪个系列的数据(series.data)，若不设置则会影响图上标点颜色设置。
          left: 10,
          bottom: 10,
          calculable: true, // 是否显示手柄
          showAllSymbol: true,
          min: this.min,
          max: this.max,
          precision: 0,
          inRange: {
            // color: ['#070B5F', '#57FFA0'] // 蓝绿
            color: ['#dddddd', '#dddddd'] // 蓝绿
          },
          text: [''],
          textGap: 15,
          textStyle: {
            color: '#000',
            // fontSize: 16 * _this.$store.state.resolutionRatio,
            fontFamily: 'arial, sans-serif'
          }
        },
        series: [
          // 配置数据的显示
          {
            // type: 'effectScatter',
            coordinateSystem: 'geo',   // 使用地理坐标系
            name: '',
            type: 'map',    // 类型 map
            map: name,
            zoom: 1.2,
            itemStyle: {
              normal: {
                // shadowBlur: 120, // 映射点轮廓
                shadowColor: '#ffffff', // 映射点阴影颜色
                areaColor: '#DDDDDD',
                borderColor: '#E1E7F3', // 轮廓线颜色
                borderWidth: 2 // 轮廓线大小
              },
              emphasis: {
                areaColor: 'gray' // 鼠标移入局部颜色
              }
            },
            label: {
              // 显示各个省市名称
              normal: {
                // show: this.curProvince == '全国',
                show: !flag,
                color: '#000',
                fontSize: 14
              },
              // 鼠标移入显示各个省市名称
              emphasis: {
                show: false,
                color: '#000',
                fontSize: 14
              }
            },
            data: []
            // data: this.initMapData(mapJson)
          },
          {
            coordinateSystem: 'geo',
            name: 'effectScatter', // 浮动框的标题
            type: 'effectScatter',
            geoIndex: 0,  //// 指定geo属性后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。
            data: [],
            // data: [{
            //   name: `问题小区数:${self.count}`,
            //   value: province[name]
            // }],
            symbolSize: 18,
            // rippleEffect: {
            //   brushType: 'stroke'
            // },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'top',
                show: true
              }
            },
            tooltip: {
              show: true,
              formatter: function (params) {
                return params.value[2]
              }
            },
            itemStyle: {    //打点的颜色
              normal: {
                color: '#fecb2e',
                shadowBlur: 10,
                shadowColor: '#0d5ebd'
              }
            }
          }
        ]
      }
      this.myChart.setOption(self.setOption, true)
      if (flag) {
        // 往mapStack里添加parentId，parentName,返回上一级使用
        mapStack.push({
          mapId: parentId,
          mapName: parentName
        })
        parentId = id
        parentName = name
      }
    },
    backMap () {
      // this.$emit('clickName', '全国')
      if (mapStack.length !== 0) {
        // 如果有上级目录则执行
        var map = mapStack.pop()
        axios
          .get('../../../static/testData/json/map/' + map.mapId + '.json', {})
          .then(response => {
            const mapJson = response.data
            this.registerAndsetOption(
              this.myChart,
              map.mapId,
              map.mapName,
              mapJson,
              false
            )
            // 返回上一级后，父级的ID、Name随之改变
            parentId = map.mapId
            parentName = map.mapName
            // this.$emit('clickName', '全国')
          })
      }
    },
    // 地图流量颜色
    getMonthlyflowLevel () {
    //   getMapLevelIndicators(params).then(res => {
        const res = {"retCode":0,"message":"success","data":{"arra":[{"province":"山东","value":74.78},{"province":"江苏","value":67.08},{"province":"河南","value":51.6},{"province":"安徽","value":45.03},{"province":"贵州","value":42.78},{"province":"浙江","value":41.91},{"province":"广西","value":41.86},{"province":"福建","value":38.58},{"province":"四川","value":38.57},{"province":"广东","value":31.06},{"province":"江西","value":30.72},{"province":"湖北","value":28.0},{"province":"河北","value":26.32},{"province":"湖南","value":25.59},{"province":"云南","value":23.53},{"province":"辽宁","value":22.65},{"province":"陕西","value":21.16},{"province":"山西","value":17.94},{"province":"海南","value":17.89},{"province":"内蒙古","value":14.72},{"province":"黑龙江","value":13.49},{"province":"重庆","value":11.68},{"province":"吉林","value":11.51},{"province":"天津","value":10.87},{"province":"北京","value":10.36},{"province":"青海","value":7.98},{"province":"甘肃","value":7.0},{"province":"宁夏","value":4.35},{"province":"上海","value":4.22},{"province":"西藏","value":3.1},{"province":"新疆","value":2.94},{"province":"全网","value":0.0},{"province":"全网","value":0.0}]}}
        const djiCity = []
        const valueArray = []
        if (res.retCode === 0 && res.data.arra.length > 0) {
          res.data.arra.forEach(item => {
            if (item.provinceName !== '全网') {
              const area = {}
              area.selected = false
              area.name = item.province
              area.value = item.value
              djiCity.push(area)
              valueArray.push(item.value)
            }
          })
          if (this.setOption.series.length > 0) {
            this.setOption.series[0].data = djiCity
          }
          this.max = Math.max.apply(null, valueArray)
          this.min = Math.min.apply(null, valueArray)
          this.setOption.visualMap.max = this.max
          this.setOption.visualMap.min = this.min
          this.setOption.visualMap.text[0] = this.indicator
          if (this.max > 100) {
            this.setOption.visualMap.precision = 0
          } else {
            this.setOption.visualMap.precision = 2
          }
          //  无值的时候显示灰色
          if (this.curProvince === '全国') {
            this.setOption.visualMap.show = true
            if (this.max == 0 && this.min == 0) {
              this.setOption.visualMap.inRange.color = ['#dddddd', '#dddddd']
            } else {
              this.setOption.visualMap.inRange.color = ['#3DDB01', '#00FFF6', '#0097FF']
            }
          } else {
            this.setOption.visualMap.show = false
            this.setOption.visualMap.inRange.color = ['#dddddd', '#dddddd']
          }
          this.myChart.setOption(this.setOption, true)
        } else {
          this.setOption.series[0].data = []
          this.setOption.visualMap.max = 0
          this.setOption.visualMap.min = 0
          this.setOption.visualMap.text[0] = this.indicator
          this.setOption.visualMap.precision = 0
          this.myChart.setOption(this.setOption, true)
        }
        var self = this
        window.onresize = () => {
          this.myChart.resize()
        }
        window.addEventListener('resize', function () {
          self.myChart.resize()
        })
    //   })
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  .back {
    color: #333;
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 99;
  }
}

.chart {
  height: 100%;
  width: 100%;
}
</style>
