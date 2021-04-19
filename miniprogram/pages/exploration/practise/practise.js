Page({
    data: {
        loading: false,
        color: '#000',
        background: '#f8f8f8',
        show: true,
        animated: false,
        showHalfScreen:false,
        buttonsHalfScreen: [
            {
                type: 'default',
                className: '',
                text: '辅助操作',
                value: 0
            },
            {
                type: 'primary',
                className: '',
                text: '主操作',
                value: 1
            }
        ],
        showActionSheet: false,
        actionSheetGroups: [
            { text: '示例菜单', value: 'xxx1' },
            { text: '示例菜单', value: 'xxx2' },
            { text: '负向菜单', type: 'warn', value: 'xxx3' }
        ]
    },
    onNavigateTap(e){
        console.log(e)
        wx.navigateTo({
            url: '../icons/icons?id=22222',
            // events: {
            //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            //   acceptDataFromOpenedPage: function(data) {
            //     console.log(data)
            //   },
            //   someEvent: function(data) {
            //     console.log(data)
            //   }
            // },
            success: function(res) {
                console.log('navigateTo icons success \r\n'+res)
              // 通过eventChannel向被打开页面传送数据
              res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
            },
            fail:function(e){
              console.log(e)
            }
          })
    },
    openActionSheet: function(){
        this.setData({
            showActionSheet: true
        })
    },
    closeActionSheet: function () {
        this.setData({
            showActionSheet: false
        })
    },
    btnActionSheetClick(e) {
        console.log(e.detail)
        this.closeActionSheet()
    },
    toggleLoading() {
      this.setData({
        loading: !this.data.loading
      })
    },
    changeColor() {
      this.setData({
        color: '#07C160'
      })
    },
    changeBgColor() {
      this.setData({
        background: '#ededed'
      })
    },
    toggleShow() {
      this.setData({
        show: !this.data.show
      })
    },
    toggleAnimated() {
      this.setData({
        animated: !this.data.animated,
        show: !this.data.show
      })
    },
    openHalfScreen: function () {
        this.setData({
            showHalfScreen: true
        })
    },
    buttontapHalfScreen(e) {
        console.log(e.detail)
    },
    closeHalfScreen(){
        console.log('closeHalfSreenDialog')
    }
  })