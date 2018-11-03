Component({
  properties: {
    url: {
      type: String,
      value: '/pages/hospitals/index',
    }
  },

  data: {
    showShareButton: true
  },

  ready() {
    if (getCurrentPages().length == 1) {
      this.setData({
        showShareButton: false
      })
    }
  }
})
