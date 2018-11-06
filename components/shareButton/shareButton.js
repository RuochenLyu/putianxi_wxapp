Component({
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
