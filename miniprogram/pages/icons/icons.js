
Page({
    data: {
        iconSize: [20, 30, 40, 50, 60, 70],
        iconColor: [
          'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
        ],
        iconType: [
          'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
        ]
    },
    //options(Object)
    onLoad: function(options){
        console.log('icons页面load'+options.id );//获取A页面中url里的参数值
    },
    onShow: function(){
        console.log('icons页面显示到前台');
    },
    onHide: function(){
        console.log('icons页面隐藏到后台');
    },
    onNavigateBack(){
        console.log('icons 页面 回退。。')
      
        wx.navigateBack({
            //url: 'C?id=1'
            delta: 1
        })
    }
});