// pages/soft.js
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
    var formData = e.detail.value;
    if(formData.name != "" && formData.phone !="" && formData.soft != "")
    {
      wx.request({
        url: 'your ur',
        method:"GET",
        header:{'content-Type':'application/x-www-form-urlencoded'} ,
        data: formData,
        success:function(res) {
          if (res.data == "Yes"){
            wx.showToast({
              title: '成功' ,
              icon:'loading',
              duration:500
              })
          }
        }
      })
    }
    else {
      wx.showModal({
        cancelColor: '#000000',
        title:'提交失败',
        content:"订单信息不完整",
        showCancel:false ,
        confirmText:'确定' 
      })
    }
    this.setData({
      tem:'' ,
    })
  }
})