import Fuse from '../../lib/fuse.min.js'

Page({
  data: {
    keyword: '',
    hotKeywords: ['北京', '上海', '肛肠', '协和'],
    hits: -1,
    hospitals: getApp().globalData.hospitals,
    results: []
  },
  
  onLoad({ showAd }) {
    if (showAd) this.renderAd();

    let options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
        "province",
        "city",
      ]
    }

    this._fuse = new Fuse(this.data.hospitals, options)
  },

  renderAd() {
    let interstitialAd = null

    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-6503592b42479b46'
      })
    }
    console.log(wx.createInterstitialAd)

    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },

  search(keyword) {
    wx.showNavigationBarLoading()

    let results = this._fuse.search(keyword)
    this.setData({
      keyword,
      results,
      hits: results.length
    }, () => wx.hideNavigationBarLoading())
  },

  inputSearch(event) {
    let keyword = event.detail.value
    if (!keyword) return
    this.search(keyword)
  },

  cancelSearch() {
    this.setData({
      keyword: '',
      results: [],
      hits: -1
    })
  },

  linkSearch(event) {
    let keyword = event.currentTarget.dataset.keyword
    this.search(keyword)
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
