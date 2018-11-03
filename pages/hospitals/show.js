import QQMapWX from '../../lib/qqmap-wx-jssdk.min.js'

Page({
  data: {
    hospital: {},
    hospitals: getApp().globalData.hospitals,
    map: {},
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
    let map = new QQMapWX({
      key: 'LRBBZ-NEVWI-KUMGP-57UTW-YHKKZ-RIBSO'
    })

    map.geocoder({
      address: `${this.data.hospital.province} ${this.data.hospital.city} ${this.data.hospital.district} ${this.data.hospital.name}`,
      success: (res) => {
        this.setData({
          map: res.result,
          markers: [{
            iconPath: '/images/marker.png',
            width: 30,
            height: 30,
            longitude: res.result.location.lng,
            latitude: res.result.location.lat
          }]
        })
      }
    })
  },

  onShareAppMessage() {
    return {
      title: '莆田系凉了吗'
    }
  }
})
