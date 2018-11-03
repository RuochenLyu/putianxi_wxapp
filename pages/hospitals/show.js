Page({
  data: {
    hospital: {},
    hospitals: getApp().globalData.hospitals,
    markers: []
  },

  onLoad(option) {
    this.setData({
      hospital: this._find(option.id)
    })
    this._renderMap()
    this.onShareAppMessage = () => ({
      title: this.data.hospital.name
    })
  },

  _find(id) {
    let hospitals = this.data.hospitals
    for (let i = 0; i < hospitals.length; i++) {
      if (hospitals[i]._id == id) {
        return hospitals[i]
      }
    }
  },

  _renderMap() {
    this.setData({
      markers: [{
        iconPath: '/images/marker.png',
        width: 30,
        height: 30,
        longitude: this.data.hospital.lng,
        latitude: this.data.hospital.lat
      }]
    })
  },

  onShareAppMessage() {
    return {
      title: '莆田系凉了吗'
    }
  }
})
