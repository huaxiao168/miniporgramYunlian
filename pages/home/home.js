//Page Object
const appInst =getApp()

Page({
    data: {
        myIconList: null,
        flag:true,
        obj:{
            name:'Mr.Fu',
            age:36
        },
        objArr:[{
            name:'Mr.Fu',
            age:36
        },{
            name:'Mr.Liu',
            age:21
        },{
            name:'Mr.Liu',
            age:20
        }],
        dialogShow: false,
        buttons: [{text: '取消'}, {text: '确定1'}]
    },
    openConfirm: function () {
        this.setData({
            dialogShow: true
        })
    },
    tapDialogButton(e) {
        this.setData({
            dialogShow: false
        })
    },
    //options(Object)
    onLoad: function(options){
        console.log('on load ..');
        // console.log(options);
    },
    onReady: function(){
        
    },
    onShow: function(){
        console.log('从后台到前台');
    },
    onHide: function(){
        console.log('从前台到后台');
    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    }
});