// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navNum: "服装",
    imgUrl: "/assets/img/goods-list.png",
    goodsText: "现摘香脆苹果口感香甜脆口吃了还想吃根本停不下来",
    goodsPrice: "¥68.00",
  },

  handleNavBtn(e) {
    this.setData({
      navNum: e.currentTarget.dataset.num
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