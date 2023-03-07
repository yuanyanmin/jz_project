<template>
    <div class="warning">
        <div class="table">
            <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                      :highlight-current-row="true"
                      tooltip-effect="dark"
                      stripe
                      width="100%"
                      height="450"
                      fit>
                        <!-- @row-click="clickData" -->
                <el-table-column v-for="(item, index) in tableLabel"
                                :key="index"
                                :label="item.label"
                                :property="item.key"
                                :width="item.width"
                                align="center"
                                min-width="40">
                </el-table-column>
            </el-table>
            <!-- <el-pagination layout="prev, pager, next"
                           :page-size="pageSize"
                           :current-page="currentPage"
                           :total="totalCnt"
                           @current-change="handleCurrentChange"/> -->
        </div>
    </div>
</template>

<script>
// import { getEarlyWarningList } from '@/server/holidaySecurity1'
export default {
    props:['networkType'],
    components: {
        // getEarlyWarningList,
    },
    data() {
        return {
            // 分页功能
            pageSize: 10,
            currentPage:1,
            totalCnt:0,
            tableData: [],
            tableData4G: [
                {
                    "省份": '上海',
                    '覆盖率':'97.06%',
                    '样本总量':'10071.9万',
                    '优良样本总量':'9776.3万',
                    '用户数':'361.6万',
                },
                {
                    "省份": '北京',
                    '覆盖率':'97.06%',
                    '样本总量':'10071.9万',
                    '优良样本总量':'9776.3万',
                    '用户数':'361.6万',
                },
                {
                    "省份": '天津',
                    '覆盖率':'97.06%',
                    '样本总量':'10071.9万',
                    '优良样本总量':'9776.3万',
                    '用户数':'361.6万',
                },
                {
                    "省份": '重庆',
                    '覆盖率':'97.06%',
                    '样本总量':'10071.9万',
                    '优良样本总量':'9776.3万',
                    '用户数':'361.6万',
                },
            ],
            tableData5G: [
                {
                    "省份": '上海',
                    '覆盖率':'97.06%',
                    '样本总量':'1071.9万',
                    '优良样本总量': '976.3万',
                    'fcftc': '368.1万',
                    '驻留比':'73.31%',
                    '综合覆盖率':'70.22%',
                    '用户数':'61.6万',
                },
                {
                    "省份": '北京',
                    '覆盖率':'97.06%',
                    '样本总量':'1071.9万',
                    '优良样本总量': '976.3万',
                    'fcftc': '368.1万',
                    '驻留比':'73.31%',
                    '综合覆盖率':'70.22%',
                    '用户数':'61.6万',
                },
                {
                    "省份": '天津',
                    '覆盖率':'97.06%',
                    '样本总量':'1071.9万',
                    '优良样本总量': '976.3万',
                    'fcftc': '368.1万',
                    '驻留比':'73.31%',
                    '综合覆盖率':'70.22%',
                    '用户数':'61.6万',
                },
                {
                    "省份": '重庆',
                    '覆盖率':'97.06%',
                    '样本总量':'1071.9万',
                    '优良样本总量': '976.3万',
                    'fcftc': '368.1万',
                    '驻留比':'73.31%',
                    '综合覆盖率':'70.22%',
                    '用户数':'61.6万',
                },
            ],
            tableLabel:[],
            tableLabel4G: [
                { key: '省份', label: '省份', width:'100'},
                { key: '覆盖率', label: '4G覆盖率', width:'120'},
                { key: '样本总量', label: '4G样本总量', width:'150'},
                { key: '优良样本总量', label: '4G优良样本总量',},
                { key: '用户数', label: '4G用户数', width:'120'}
            ],
            tableLabel5G: [
                { key: '省份', label: '省份', width:'50'},
                { key: '覆盖率', label: '4G覆盖率', width:'80'},
                { key: '样本总量', label: '4G样本总量', width:'80'},
                { key: '优良样本总量', label: '4G优良样本总量', width:'90'},
                { key: 'fcftc', label: '5G用户数产生的4G样本总量',},
                { key: '驻留比', label: '5G驻留比', width:'80'},
                { key: '综合覆盖率', label: '综合覆盖率', width: '80' },
                { key: '用户数', label: '采样用户数', width:'80'},
            ],
            // networkType: '4G',
        }
   },
    watch: {
        // $route: {
        //     handler(val, oldVal) {
        //         this.getEarlyWarningList()
        //     },
        //     deep: true,
        //     immediate: true
        // },
        networkType: {
          handler(val) {
            if (val == '4G') {
            this.tableLabel = this.tableLabel4G
            this.tableData = this.tableData4G
        } else {
            this.tableLabel = this.tableLabel5G
            this.tableData = this.tableData5G
      }
          },
          immediate:true
        }
    },
    mounted() {

    },
    methods: {
    //   clickNetworkType () { // 暂定不与页面其他部分绑定
    //   this.getEarlyWarningList()
    //   // this.$emit('clickNetworkType', this.networkType)
    // },
      //获取场景级预警清单
      getEarlyWarningList() {
        // const params = {
        //   // networkType: this.$route.query.networkType,
        //   networkType: this.networkType,
        //   startTime: this.$route.query.time,
        //   endTime: this.$route.query.endTime
        // }
        // getEarlyWarningList(params).then(res => {
        //   this.totalCnt = 0
        //   this.tableData = []
        //   if (res.data.retCode === 0) {
        //     this.totalCnt = res.data.data.length
        //     this.tableData = res.data.data
        //   } else {
        //     console.log("获取场景级预警清单 retCode error")
        //     // console.log(res)
        //   }
        // }).catch(e => {
        //         console.log("获取场景级预警清单 error")
        //         // console.log(e)
        //     })
      },
      // 获取当前页
      handleCurrentChange (val) {
        this.currentPage = val
      },
    }
}
</script>

<style lang="scss" scoped>
    .warning{
        width:100%;
        height:100%;
        text-align: center;
        .table{
          position: relative;
          top:10%;
          // overflow: scroll;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          padding: 0 0.02rem;
        }
        .table ::v-deep .el-table th {
          // background-color: transparent !important;
          font-size: 20px;
          // border-bottom: 1px solid #616A8B;
        }
        .table ::v-deep .el-table td {
          // background-color: transparent !important;
          font-size: 18px;
          // border-bottom: 1px solid #616A8B;
        }

        ::v-deep {
          .el-table .cell {
            line-height: 40px;
          }
          .el-table th > .cell {
            padding: 0.01rem,0.01rem;
          }
        }
        ::v-deep {
          .el-table td, .el-table th {
            // background-color: transparent !important;
            padding: 0 !important;
          }
        }
        .table ::v-deep .el-table tr {
          color: #070707;
        }

        // 设置背景色为透明
        .table ::v-deep  {
          .el-table, .el-table__expanded-cell {
            background-color: transparent !important;
          }
          .el-table tr {
            background-color: transparent !important;
          }
          .el-table--enable-row-transition .el-table__body td, .el-table .cell{
            background-color: 'transparent';
            border: none;
          }
        }

        .el-table::before {//去除底部白线
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0px;
        }

        ::v-deep {
          .el-pager li.active {
            color:#00EAFF;
          }
          .el-pager li{
            background: transparent;
            color:#d8e2f1;
          }
          .el-pagination button{
            background-color: transparent;
            // border: 1px solid #2C528A ;
            color:#FFFFFF ;
          }
          .el-pagination button:disabled {
            // border: 1px solid #8B96A9;
            color: #8B96A9;
          }
          .el-pagination{
            font-weight: normal;
            font-size: 18px;
          }
        }

        /* 选中某行时的背景色*/
        ::v-deep .el-table__body tr.current-row > td {
          background-color: #297ba1 0.1 !important;
        }

        /*鼠标移入某行时的背景色*/
        ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
          background-color: #a2a4a8;
        }

    }
</style>
