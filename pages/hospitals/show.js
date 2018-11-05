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
        id: this.data.hospital._id,
        iconPath: '/images/marker.png',
        width: 30,
        height: 30,
        longitude: this.data.hospital.lng,
        latitude: this.data.hospital.lat,
        anchor: {
          x: .5,
          y: .5
        },
        callout: {
          content: `${this.data.hospital.name}\n${this.data.hospital.address}`,
          padding: 8,
          color: '#ffffff',
          borderRadius: 4,
          bgColor: '#E25D56',
          borderColor: '#E25D56'
        }
      }]
    })
  },

  onShareAppMessage() {
    return {
      title: '莆田系凉了吗'
    }
  }
})
