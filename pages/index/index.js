//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');  
Page({
  data: {
    infos:[] ,
    day:'31' ,
    saying:'内容正在加载，需要等待。' ,
    duration:3000 ,
    flagWindow:0 ,
    emoji:"Nothing here!" ,
    textPosition:'left' ,
    path:'../../image/closeWindow.png' ,
    swiperHeight:410
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const that = this;
    //获取ONE信息
    wx.request({
      url:'your url' , 
      data:{} , 
      method:"GET" ,
      header:{'content-Type':'application/jsaon'} ,
      success(res){
        var data = res.data
        that.setData({
          infos:data
        })
      }
    })
    wx.showModal({
      cancelColor: 'cancelColor',
      title:"",
      showCancel:false ,
      content:"" ,
      confirmText:"确定"
    })
  },
  //onReady函数
  onReady:function(){
  },
  onShow:function(){

  },
  //点击软件安装事件
  click_soft:function(e)
  {
    wx.navigateTo({
      url: '/pages/soft/soft',
    })
    wx.setNavigationBarTitle({
      title: '软件免费安装',
    })
  } ,
  //点击快递代取事件
  click_pack:function(){
    wx.navigateTo({
      url: '/pages/pack/pack',
    })
    wx.setNavigationBarTitle({
      title: '快递代取',
    })
  } ,
  //点击外卖代取事件
  click_takeOut:function(){
    wx.navigateTo({
      url: '/pages/takeOut/takeOut',
    })
    wx.setNavigationBarTitle({
      title: '外卖代取',
    })
  } ,
  //点击更多按钮
  click_more:function(){
    wx.showModal({
      cancelColor: 'cancelColor',
      content:"您可以提交反馈告知我们您希望推出的功能。",
      showCancel:false,
      confirmText:'了解'
    })
  } ,
  //点击图片预览
  click_pic:function(e){
    var url = e.target.dataset.src;
    wx.previewImage({
      urls: [url],
    })
  } ,
  //点击内容事件
  click_des:function(e){
    var des = e.target.dataset.saying;
    this.setData({
      flagWindow:1 ,
      emoji:des ,
      textPosition:'left' ,
      path:'../../image/closeWindow.png'
    })
    
  } ,
  //点击日期事件
  click_date:function(e){
    var that = this;
    var emoji = "";
    wx.request({
      url: 'your url',
      method:"GET" ,
      data:{} ,
      header:{'content-Type':'application/jsaon'} ,
      success(res){
        that.setData({
          emoji:res.data,
          flagWindow:1 ,
          textPosition:'center' ,
          path:'../../image/closeWindow2.png'
        })
      }
    })
    this.changeHeight();
  } ,
  //关闭窗口
  closeWindow:function(e){
    this.setData({
      flagWindow:0
    })
  },
  changeHeight:function(){
     //获取屏幕高度
     var screenHeight = 0;
     wx.getSystemInfo({
       success: (res) => {
         screenHeight = res.windowHeight;
         console.log("屏幕高：" ,screenHeight ,"屏幕宽：",res.windowWidth)
       }
     })
     var qury = wx.createSelectorQuery();
     qury.select('#One').boundingClientRect();
     qury.exec(function(res){
       console.log("ONE高：" ,res[0].height)
     })
  }
})
