// pages/takeOut.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tem:"" ,
    flag:0 ,
    visibleTip:'visible',
    visibleClose:"hidden",
    tip:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  sentData:function(e){
    wx.showModal({
      cancelColor: 'cancelColor',
      title:"服务变更通知",
      showCancel:false ,
      content:"外卖代取已停止服务，感谢支持！"
    })
    /*
    var formData = e.detail.value;
    var that = this;
    if(formData.name != "" && formData.phone !="" && formData.add != "")
    {
      wx.request({
        url: 'your ur',
        method:"GET",
        header:{'content-Type':'application/x-www-form-urlencoded'} ,
        data: formData,
        success:function(res) {
          if (res.data == "Yes"){
            wx.showModal({
              cancelColor: '#000000',
              title:'( •͈ᴗ⁃͈)ᓂ- 提交成功- -♡' ,
              showCancel:false ,
              content:"您好，提交成功后请保持电话畅通，稍后将以短信方式通知您。" ,
              confirmText:'确定'
            })
          }
        }
      })
      that.setData({
        tem:'' ,
      })
    }
    else {
      wx.showModal({
        cancelColor: '#000000',
        title:'提交失败(´-ωก`)',
        content:"订单信息不完整",
        showCancel:false ,
        confirmText:'确定' 
      })
    }*/
  } ,
  clickTake:function(e){
    var that = this;
    this.setData({
      flag:1 ,
      visibleTip:'hidden' ,
      visibleClose:'visible'
    })
    wx.request({
      url: 'your ur',
      method:"GET",
      header:{'content-Type':'application/x-www-form-urlencoded'} ,
      data: {},
      success(res){
        that.setData({
          tip:res.data
        })
      }
    })
  } ,
  clickClose:function(e){
    this.setData({
      flag:0 ,
      visibleTip:'visible' ,
      visibleClose:'hidden'
    })
  }
})