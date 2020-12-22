// pages/pack.js
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow:function(){
    wx.showModal({
      cancelColor: 'cancelColor',
      showCancel:false ,
      content:"很抱歉,快递代取因最近事物繁忙，暂时关闭,其他服务正常！",
      title:'关闭通知'
    })
  },
  onLoad: function () {
    
  },
  sentData: function(e) {
    /*
    var that = this
    var formData = e.detail.value
    if (formData.name != '' && formData.code !='' && formData.add != '' && formData.cb != '' && formData.phone != ''){
      wx.request({
      url: 'your url',
      method:"GET",
      header:{'content-Type':'application/x-www-form-urlencoded'} ,
      dataType:'json' ,
      data: formData,
      success:function(res){
        if (res.data != "Yes")
        {
          wx.showModal({
            cancelColor: '#000000',
            title:'订单已存在，请勿重复提交',
            content:res.data,
            showCancel:false ,
            confirmText:'确定' 
          })
        }
        else{
          wx.showModal({
            cancelColor: '#000000',
            title:'提交成功，将为您取件' ,
            showCancel:false ,
            content:"姓名:" + formData.name + ",电话:" +formData.phone + ",取件码:" + formData.code + ",寝室:" + formData.add ,
            confirmText:'确定'
          })
          that.setData({
            tem:'' ,
          })
        }
        }
      })
    }
    else {
      wx.showModal({
        cancelColor: '#000000',
        title:'提交失败',
        content:'信息录入不完整！' ,
        showCancel:false ,
        confirmText:'重新输入'
      })
    }
  } ,
  toCan:function(e) {
    wx.navigateTo({
      url: '/pages/can/can',
    })
    wx.setNavigationBarTitle({
      title: '取消快递代取',
    })*/
  }
})