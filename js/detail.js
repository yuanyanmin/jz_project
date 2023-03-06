var vm = new Vue({
  el: '#app',
  data() {
    return {
      boxHeight: 0,
      searchHeight: 0,
      highlighIndex: -1,
      searchForm: {
        labelType: 1,
        labelId: '',
        labelName: '',
        role: '',
        beginTime: '',
        endTime: ''
      },
      labelIdData: [], 
      labelNameData: [], // 标签名称数据 备份
      labelIdLists: [], 
      labelNameLists: [], // 标签名称数据
      searchLoading: false, // 搜索加载
      tagTypeList: [ // 搜索 - 标签类别
        { value: 1, label: '普通标签' },
        { value: 2, label: '进阶标签' },
      ],
      roleList: [
        {value: 2, name: '消费者'},
        {value: 1, name: '人工坐席'},
        {value: 0, name: '智能客服'}
      ], // 角色下拉
      detailData: [], // 存储的对话内容
      contentList: [], // 备份的对话内容
      loadingInstance: null, // loading
      pid: '',
      taskId: ''
    }
  },
  methods: {
    // 获取搜索数据
    getDetailLabelData() {
      getDetailLabel({
        taskId: this.taskId
      }).then(res => {
        this.labelIdData = uniqueArr(res.data.data.label_id_list, 'id', 'type')

        this.labelNameData = uniqueArr(res.data.data.label_name_list, 'name', 'type')


        // this.changeSearchList()
      }).catch(err => {
        console.log(err);
        // ELEMENT.Message.error(err.message || '请求失败');
      })
    },
    changeSearchList() {
      this.labelIdLists = this.labelIdData.filter(item => {
        return item.type === this.searchForm.labelType
      })
      this.labelNameLists = this.labelNameData.filter(item => {
        return item.type === this.searchForm.labelType
      })
    },
    // 获取对话详情数据
    getDetailData() {
      this.loadingInstance = this.$loading({
        lock: true,
        text: 'Loading...', // 显示在图标下方的文案
        spinner: 'el-icon-loading', // 自定义加载图标类名
        background: 'rgb(255, 255, 255, 0.7)', // 遮罩层颜色
        target: document.querySelector('#content') // loading 覆盖的dom元素节点
      });
      getDetail({
        taskId: this.taskId,
        pId: this.pid
      }).then(res => {
        let wordNum = 0
        let dataRes = res.data.data_list.map(item => {
          item.wordStart = wordNum
          item.content = item.content.trim()
          wordNum = item.content.length + wordNum
          return item
        })
        this.detailData = deepclone(dataRes)
        this.contentList = filterDetailData(this.searchForm, this.detailData)
        this.handleSearch()
        this.loadingInstance.close();
      }).catch(err => {
        console.log(err);
        // ELEMENT.Message.error(err.message || '请求失败');
        this.loadingInstance && this.loadingInstance.close();
      })
    },
    // 远程搜索标签ID
    remoteSearchId(query) {
      if (query !== '') {
        // 过滤
        this.labelIdLists = []

        if (this.labelIdData.length > 0) {
          this.labelIdLists = this.labelIdData.filter(item => {
            return item.id.toString().includes(query) && item.type == this.searchForm.labelType
          })
        }        
      } else {
        this.labelIdLists = [];
      }
    },
    // 远程搜索标签名称
    remoteMethod(query) {
      if (query !== '') {
        this.labelNameLists = []

        if (this.labelNameData.length > 0) {
          this.labelNameLists = this.labelNameData.filter(item => {
            return item.name.includes(query) && item.type == this.searchForm.labelType
          })
        }        
      } else {
        this.labelNameLists = [];
      }
    },
    // 显示id搜索列表
    searchIdVisible (flag) {
      if (flag && !this.searchForm.labelId) {
        this.labelIdLists = []
      }
    },
    // 显示name搜索列表
    searchNameVisible (flag) {
      if (flag && !this.searchForm.labelName) {
        this.labelNameLists = []
      }
    },
    // 切换标签类别
    changeLabelType() {
      this.searchForm.labelId = ''
      this.searchForm.labelName = ''
      this.changeSearchList()
    },
    // 搜索条件搜索
    handleSearch() {
      // 判断开始时间是否大于结束时间
      const startTime = new Date(this.searchForm.beginTime).getTime()
      const endTime = new Date(this.searchForm.endTime).getTime()
      if (startTime > endTime) {
        ELEMENT.Message.error('结束日期必须大于开始日期，请重新选择！')
        return
      }
      // 筛选数据
      let res = filterDetailData(this.searchForm, this.detailData)

      // 处理高亮
      let {data, matchIndex} = highlightWord(this.searchForm, res)
      this.contentList = data

      if (matchIndex > -1) {
        let dom = document.getElementsByClassName('dialogue')[matchIndex]

        this.$refs.scrollContent.scrollTo({
          top: dom.offsetTop - this.searchHeight - 26,
          behavior: 'smooth'
        })
      } else {
        this.$refs.scrollContent.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    },
    // 重置
    resetSearch () {
      this.searchForm = {
        labelType: 1,
        labelId: '',
        labelName: '',
        role: '',
        beginTime: '',
        endTime: ''
      }
      this.handleSearch()
    },
    calcHeight() {
      this.searchHeight = this.$refs.header && this.$refs.header.offsetHeight
      this.boxHeight = window.innerHeight - this.searchHeight - 22
    },
    // 返回
    goToBack() {
      // 返回
      window.location = `./label.html?taskId=${this.taskId}`
      
    }
  },
  mounted() {
    // 获取路由参数
    this.taskId = getParamByRouter('taskId')
    this.taskId = decodeURIComponent(this.taskId)
    this.pid = getParamByRouter('pId')
    this.pid = decodeURIComponent(this.pid)


    // 获取页面搜索数据
    this.getDetailLabelData()

    // 获取详情页面数据
    this.getDetailData()
    this.calcHeight()
    window.onresize = () => {
      this.calcHeight()
    }
  }
 
})