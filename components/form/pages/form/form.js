// pages/set_psw_form/set_psw_form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneCodeTxt: "获取验证码",
    phoneCodeTxtColor: "#ff0000",
    phoneCodeBool: true,
    pswImgUrl: './img/hide.png',
    pswInputType: 'password',
    pswImgUrlBool: true
  },

  getPhoneCode: function () {
    this.jishi();
  },
  jishi() {
    var phoneCodeTime = 6;
    this.setData(
      {
        phoneCodeTxtColor: "#b2b2b2",
        phoneCodeBool: false
      }
    );
    var jishiNum = setInterval(() => {
      phoneCodeTime = phoneCodeTime - 1;
      this.setData(
        { phoneCodeTxt: phoneCodeTime + "s" }
      );
      if (phoneCodeTime == 0) {
        this.setData(
          {
            phoneCodeTxt: "重新发送",
            phoneCodeTxtColor: "#ff0000",
            phoneCodeBool: true
          }
        );
        clearTimeout(jishiNum);
      }
    }, 1000);
  },

  pswImg: function () {
    this.data.pswImgUrlBool ? this.setData({
      pswImgUrl: './img/show.png',
      pswInputType: 'text',
      pswImgUrlBool: false
    })
      :
      this.setData({
        pswImgUrl: './img/hide.png',
        pswInputType: 'password',
        pswImgUrlBool: true
      })
  },


  open: function (e) {
    setTimeout(() => {
      this.setData(
        { popErrorMsg: "这里显示错误提示" }
      );
      this.ohShitfadeOut();
      wx.navigateTo({
        url: '../msg/msg_fail'
      });
    }, 100)
  },

  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({ popErrorMsg: '' });
      clearTimeout(fadeOutTimeout);
    }, 3000);
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