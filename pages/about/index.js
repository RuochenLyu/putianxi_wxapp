Page({
  copyUrl() {
    wx.setClipboardData({
      data: 'https://cn.nytimes.com/china/20181116/china-private-hospitals-putian/',
      success() {
        wx.showToast({
          title: '已复制当前文章链接',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  onTabItemTap() {
    wx.vibrateShort()
  },

  onShareAppMessage() {
    return {
      title: '阅读「笼罩在丑闻中的医疗帝国：莆田系医院发迹史」'
    }
  }
})
