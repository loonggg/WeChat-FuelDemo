//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onShow: function () {
    var logs = wx.getStorageSync('history') || []
    console.log(logs)
    this.setData({
      logs:logs
    })
  },
  detail:function(e){
    var o = e.currentTarget.dataset.log
    console.log(o)
     wx.navigateTo({
        url: '../detail/detail?priceKm='+o.priceKm+'&oilKm='+o.oilKm/100+'&oilPrice='+o.oilPrice+'&oilTotalPrice='+o.oilTotalPrice+'&oilMass='+o.oilMass+'&kmOil='+o.kmOil+"&isSave=1"
    })
  }
})
