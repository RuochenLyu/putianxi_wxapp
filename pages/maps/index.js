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

  onShareAppMessage() {
    return {
      title: '莆田系医院地图'
    }
  }
})
