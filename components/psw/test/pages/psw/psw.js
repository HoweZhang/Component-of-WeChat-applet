// pages/psw/psw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus: false,//控制input 聚焦
  },
  set_wallets_password(e) {
    this.setData({
      wallets_password: e.detail.value
    });
    if (this.data.wallets_password.length == 4) {//密码长度4位时，自动验证钱包支付结果
      console.log("密码输入完成，这里加入跳转成功或失败的页面");
    }
  },
  set_Focus() {//聚焦input
    console.log('isFocus', this.data.isFocus)
    this.setData({
      isFocus: true
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})