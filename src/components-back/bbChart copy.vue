<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts';
require('echarts/theme/macarons') // echarts theme
import resize from '../dashboard/mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
      },
    networkType: {
          type: String,
          default:'4G'
      },
      city: {
          type: String,
          default:'北京'
      }
  },
  data() {
    return {
        chart: null,
        max: 100,
        min: 0,
        nameArray: [],
      valueArray: [],
        dataList:[],
      dataList1: [
            {
                name: '休闲娱乐',
                value:'9.19'
        },
            {
                name: '公司企业',
                value:'45.29'
        },
            {
                name: '交通枢纽',
                value:'98'
        },
            {
                name: '住宅',
                value:'95.19'
        },
            {
                name: '医院',
                value:'64.19'
        },
            {
                name: '学校',
                value:'73.19'
        },
            {
                name: '公园景区',
                value:'90'
        },
            {
                name: '商超',
                value:'71.19'
        },
            {
                name: '体育场馆',
                value:'88.19'
        },
            {
                name: '酒店',
                value:'79.19'
        },
      ],
      dataList2: [
            {
                name: '休闲娱乐',
                value:'97.19'
        },
            {
                name: '公司企业',
                value:'98.29'
        },
            {
                name: '交通枢纽',
                value:'86'
        },
            {
                name: '住宅',
                value:'95.19'
        },
            {
                name: '医院',
                value:'45'
        },
            {
                name: '学校',
                value:'93.19'
        },
            {
                name: '公园景区',
                value:'92.19'
        },
            {
                name: '商超',
                value:'18'
        },
            {
                name: '体育场馆',
                value:'88.19'
        },
            {
                name: '酒店',
                value:'79.19'
        },
      ],
      dataList3: [
            {
                name: '休闲娱乐',
                value:'77'
        },
            {
                name: '公司企业',
                value:'98.29'
        },
            {
                name: '交通枢纽',
                value:'98'
        },
            {
                name: '住宅',
                value:'95.19'
        },
            {
                name: '医院',
                value:'55'
        },
            {
                name: '学校',
                value:'93.19'
        },
            {
                name: '公园景区',
                value:'92.19'
        },
            {
                name: '商超',
                value:'90'
        },
            {
                name: '体育场馆',
                value:'88.19'
        },
            {
                name: '酒店',
                value:'79.19'
        },
      ],
      dataList4: [
            {
                name: '休闲娱乐',
                value:'97.19'
        },
            {
                name: '公司企业',
                value:'36'
        },
            {
                name: '交通枢纽',
                value:'98'
        },
            {
                name: '住宅',
                value:'86'
        },
            {
                name: '医院',
                value:'94.19'
        },
            {
                name: '学校',
                value:'88'
        },
            {
                name: '公园景区',
                value:'92.19'
        },
            {
                name: '商超',
                value:'91.19'
        },
            {
                name: '体育场馆',
                value:'90'
        },
            {
                name: '酒店',
                value:'79.19'
        },
      ],
        option: {
            backgroundColor: 'rgba(128,128,128,0)',
            title: {
            text: '',
            subtext: '',
            subtextStyle: {
                fontFamily: 'SourceHanSansCN-Regular',
                fontSize: 16,
                color: 'rgba(255,255,255,0.48)',
                letterSpacing: 1.56,
                lineHeight: 12.6
            },
            left: 22,
            top: 22,
            textStyle: {
                fontSize: 22,
                fontWeight: 'normal',
                letterSpacing: 1
            }
            },
            tooltip: {
            show: true,
            backgroundColor: 'rgba(0,0,0,.4)',
            // borderWidth: 1,
            textStyle: {
                fontSize: 16
            },
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
            // extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
            },
            graphic: {
            type: 'group',
            left: 'center',
            top: '10%',
            children: [
                {
                id: 'pieCount',
                type: 'text',
                left: 'center',
                top: '10%',
                style: {
                    text: '',
                    fill: '#0af',
                    font: '25px sans-serif'
                }
                },
                {
                type: 'text',
                left: 'center',
                top: '30',
                style: {
                    text: '',
                    font: '16px sans-serif'
                }
                }
            ]
            },
            // 图表的位置上下左右
            grid: {
            top: 30,
            left: 80,
            bottom: 40,
            },
            xAxis: [
            {
                type: 'category',
                axisLine: {
                // X轴轴线显示隐藏
                show: false,
                lineStyle: {
                    // X轴底层刻度线颜色
                    // color: '#FFFFFF',
                    width: 0.3,
                    type: 'solid'
                }
                },
                axisTick: {
                // X轴分割符的显示与隐藏
                show: false
                },
                axisLabel: {
                show: true,
                rotate: 30,
                interval: 0,
                textStyle: {
                    // X轴刻度数字的颜色
                    color: 'rgba(94,109,130,0.7)',
                    fontSize: 14
                }
                }
            }
            ],
            yAxis: [
            {
                max: 100,
                min: 0,
                inverse: false,
                type: 'value',
                axisLabel: {
                formatter: function (value) {
                    if ((value < 100 && value > 0) || value < 0) {
                    return value.toFixed(2) + ''
                    } else if (value >= 100) {
                    return value.toFixed(0) + ''
                    } else {
                    return value + ''
                    }
                },
                // Y轴刻度数字的颜色
                color: 'rgba(94,109,130,0.7)',
                fontSize: 14
                },
                axisLine: {
                // 隐藏Y轴轴线
                show: false,
                lineStyle: {
                    // Y 轴轴线的颜色
                    color: '#A4A4A4',
                    width: 0.5,
                    type: 'solid'
                }
                },
                axisTick: {
                show: false
                },
                splitLine: {
                // 网格线的颜色设置
                lineStyle: {
                    width: 1,
                    type: 'dashed',
                    color: 'rgba(224,230,237,1)'
                }
                }
            },
            {
                max: 100,
                min: 0,
                inverse: false,
                type: 'value',
                axisLabel: {
                formatter: function (value) {
                    if ((value < 100 && value > 0) || value < 0) {
                    return value.toFixed(2) + ''
                    } else if (value >= 100) {
                    return value.toFixed(0) + ''
                    } else {
                    return value + ''
                    }
                },
                // Y轴刻度数字的颜色
                color: '#A4A4A4',
                fontSize: 14
                },
                axisLine: {
                // 隐藏Y轴轴线
                show: false,
                lineStyle: {
                    // Y 轴轴线的颜色
                    color: '#A4A4A4',
                    width: 0.5,
                    type: 'solid'
                }
                },
                axisTick: {
                show: false
                },
                splitLine: {
                // 网格线的颜色设置
                lineStyle: {
                    width: 1,
                    opacity: 0.08,
                    background: '#FFFFFF'
                }
                }
            }
            ],
            series: [
            {
                type: 'bar',
                barWidth: '35%', // 柱子宽度  barWidth: '15%',
                barGap: '50%', // barGap: 1, //柱子之间间距
                label: {
                show: true, // 开启显示
                rotate: 70, // 旋转70度
                position: 'top', // 在上方显示
                distance: 20, // 距离图形元素的距离
                verticalAlign: 'middle',
                textStyle: { // 数值样式
                    color: '#b8ccea',
                    fontSize: 12
                }
                },
                itemStyle: {
                normal: {
                    color: function (params) {
                        return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                            offset: 1,
                            color: '#0080E4' // 0% 处的颜色
                            },
                            {
                            offset: 0,
                            color: '#1AFFDB' // 100% 处的颜色
                            }
                        ]
                        )
                    },
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
                }
            },
            {
                type: 'bar',
                barWidth: '35%', // 柱子宽度  barWidth: '15%',
                barGap: '50%', // barGap: 1, //柱子之间间距
                yAxisIndex: 1,
                // label: {
                //   show: true, // 开启显示
                //   rotate: 70, // 旋转70度
                //   position: 'top', // 在上方显示
                //   distance: 20, // 距离图形元素的距离
                //   verticalAlign: 'middle',
                //   textStyle: { // 数值样式
                //     color: '#b8ccea',
                //     fontSize: 12
                //   }
                // },
                itemStyle: {
                normal: {
                    color: function (params) {
                        return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                            offset: 1,
                            color: '#267703' // 0% 处的颜色
                            },
                            {
                            offset: 0,
                            color: '#B9FF50' // 100% 处的颜色
                            }
                        ]
                        )
                    },
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
                }
            }
            ]
        }
    }
    },
    watch: {
    'city': {
            handler(newVal, oldVal) {
                this.getCoverRate(this.networkType,newVal)
            },
            // immediate: true
        },
  },
  mounted() {
      this.$nextTick(() => {
      this.getCoverRate(this.networkType,this.city)
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

    //   this.chart.setOption({
    //     tooltip: {
    //       trigger: 'axis',
    //       axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //         type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //       }
    //     },
    //     grid: {
    //       top: 10,
    //       left: '2%',
    //       right: '2%',
    //       bottom: '3%',
    //       containLabel: true
    //     },
    //     xAxis: [{
    //       type: 'category',
    //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //       axisTick: {
    //         alignWithLabel: true
    //       }
    //     }],
    //     yAxis: [{
    //       type: 'value',
    //       axisTick: {
    //         show: false
    //       }
    //     }],
    //     series: [{
    //       name: 'pageA',
    //       type: 'bar',
    //       stack: 'vistors',
    //       barWidth: '60%',
    //       data: [79, 52, 200, 334, 390, 330, 220],
    //       animationDuration
    //     }, {
    //       name: 'pageB',
    //       type: 'bar',
    //       stack: 'vistors',
    //       barWidth: '60%',
    //       data: [80, 52, 200, 334, 390, 330, 220],
    //       animationDuration
    //     }, {
    //       name: 'pageC',
    //       type: 'bar',
    //       stack: 'vistors',
    //       barWidth: '60%',
    //       data: [30, 52, 200, 334, 390, 330, 220],
    //       animationDuration
    //     }]
    //   })
    this.chart.setOption(this.option)
      },
      getCoverRate(type, city) {
          this.nameArray = []
          this.valueArray = []
          if (type == '4G') {
              if (city == '上海') {
                this.dataList = this.dataList1
              } else if (city == '北京') {
                this.dataList = this.dataList2
              } else if (city == '天津'){
                this.dataList = this.dataList3
              } else {
                this.dataList = this.dataList4
            }
          } else {
            
        }
          this.dataList.forEach(item => {
            this.nameArray.push(item.name)
            this.valueArray.push(item.value)
          })

    //       // 调对比指标接口，重新渲染图表
          this.option.xAxis[0].data = this.nameArray
          this.option.series[0].data = this.valueArray
            // 左边Y轴，最大最小值
            const arrMax = Math.max.apply(null, this.valueArray)
            const arrMin = Math.min.apply(null, this.valueArray)
            const shortValue =
              this.formatFloat(arrMax - arrMin, 2) * 0.1
            // 全为负数的时候
            if (arrMax < 0 && arrMin < 0) {
              this.max =
                arrMax + shortValue > 0
                  ? 0
                  : arrMax + shortValue
              this.min = arrMin - shortValue
            //   this.option.yAxis[0].inverse = true;
            } else {
              this.max = arrMax + shortValue
              this.min =
                arrMin - shortValue < 0
                  ? 0
                  : arrMin - shortValue
              // this.option.yAxis[0].inverse = false;
            }
            this.option.yAxis[0].max = this.max
            this.option.yAxis[0].min = this.min

            // 右边最大最小
            this.option.yAxis[1].max = null
            this.option.yAxis[1].min = null
            this.option.grid.right = '2%'
          this.initChart()
    //     }
    //   })
      },
    // 浮点数缺失
    formatFloat (f, digit) {
      var m = Math.pow(10, digit)
      return parseInt(f * m, 10) / m
    },
  }
}
</script>
