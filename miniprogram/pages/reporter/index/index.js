Page({
  data: {
    currentTabIndex:0,
    list: [{
        id: 1,
        name: '芒果',
        content: "我是张三，见到大家很高兴。。。"
    }, {
        id: 2,
        name: '香蕉',
        content: "我是李四，可以带大将去玩。。。。"
  
    },{
        id: 3,
        name: '苹果',
        content: "我是王五，我编码贼好。。。。"
    },{
        id: 4,
        name: '葡萄',
        content: "我是葡萄城空降。。。。"
    },{
        id: 5,
        name: '西瓜',
        content: "西瓜视频好看的很"
    }],
    inputShowed: false,
    inputVal: "",
    // vtabs: [],
    // activeTab: 0,
    tabs:[
      {
        title: '技术开发',
        title2: '小程序开发进阶',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
        desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。',
      },
      {
        title: '产品解析',
        title2: '微信小程序直播',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
        desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。',
      },
      {
        title: '运营规范',
        title2: '常见问题和解决方案',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
        desc: '提高审核质量',
      },
      {
        title: '营销经验',
        title2: '流量主小程序',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
        desc: '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议。',
      },
      {
        title: '高校大赛',
        title2:'2020中国高校计算机大赛',
        img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
        desc: '微信小程序应用开发赛',
      },
    ],
    error: ''
  },
  onLoad(){
    this.setData({
        search: this.search.bind(this),
    })
    // const titles = ['热搜推荐', '手机数码', '家用电器',
    //   '生鲜果蔬', '酒水饮料', '生活美食', 
    //   '美妆护肤', '个护清洁', '女装内衣', 
    //   '男装内衣', '鞋靴箱包', '运动户外', 
    //   '生活充值', '母婴童装', '玩具乐器', 
    //   '家居建材', '计生情趣', '医药保健', 
    //   '时尚钟表', '珠宝饰品', '礼品鲜花', 
    //   '图书音像', '房产', '电脑办公']
    // const vtabs = titles.map(item => ({title: item}))
    // this.setData({vtabs})
    
    //由于this指向的是相对于wx:request()的当前对象，在request全局使用，
  	//所以我们必须设置一个相对于当前对象的变量that，将this的值赋给that,
  	//才可以在onloud()页面加载（当前对象）中正常运作函数
   
  },
  onTabsItemTap:function(event){
    let index=event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex:index
    })
  },
  cardClick: function (e) { 
    console.log("按了：", e.currentTarget.id)
    wx.navigateTo({
      url: '../sumweek/sumweek',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log('被打开页面传送回当前页面的数据' )
          console.log(data.data)
        },
        someEvent: function(data) {
          console.log('someEvent' )
          console.log(data)
        }
      },
      success: function(res) {
          console.log('navigateTo sumweek success \r\n'+res)
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      },
      fail:function(e){
        console.log(e)
      }
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
 
  testcallCloudFunction:function(e){
    let that = this
    wx.cloud.callFunction({
      name:'user_template',
      data:{
        testPara:'Robinfuck'
      }
    }).then(res=>{
      // console.log(res.errMsg)
      // console.log(res.result)
      // console.log(res.requestID)
      that.setData({
          error: res.result.event.testPara
      }) 
    })
  }
  

})