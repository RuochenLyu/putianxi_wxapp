import markers from '../../markers'

Page({
  data: {
    markers: []
  },

  onLoad() {
    wx.showLoading({
      title: '加载中'
    })
    wx.createMapContext('map').moveToLocation()
    this.setData({
      markers
    }, () => wx.hideLoading())
  },

  tapCallout(e) {
    wx.navigateTo({
      url: `/pages/hospitals/show?id=${e.markerId}`
    })
  },

  onTabItemTap() {
    wx.vibrateShort()
  },

  onShareAppMessage() {
    return {
      title: '推荐使用「莆田系凉了吗」查询莆田系医院。'
    }
  }
})
