// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'your url',
      method:'GET' ,
      data:{} ,
      success:function(res){
        that.setData({
          claim:res.data
        })
      }
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  } ,
  sentFeedBack:function(e){
    var that = this;
    if (e.detail.value.feedback == "" && e.detail.value.email == ""){
      wx.showModal({
        cancelColor: 'cancelColor',
        title:'提交失败',
        showCancel:false ,
        content:'信息缺损，请重新输入'
      })
    }
    else{
        wx.request({
        url: 'your url',
        method:'GET' ,
        header:{'content-Type':'application/x-www-form-urlencoded'} ,
        data:e.detail.value ,
        success(res){
          if (res.data == "Yes"){
            wx.showModal({
              cancelColor: '#000000',
              showCancel:false ,
              content:"非常感谢您的反馈。"
            })
          }
          that.setData({
            tem:''
          })
        }
      })
    }
  } ,
  showPhone:function(e){
    wx.showModal({
      showCancel:false ,
      content:"联系电话:phone number" ,
    })
  }
})