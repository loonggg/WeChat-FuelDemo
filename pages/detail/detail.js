var util = require('../../utils/util.js')
Page({
  data:{
    oilKm : 0,
    oilPrice:0,
    oilTotalPrice:0,
    oilMass : 0,
    priceKm :0,
    kmOil:0,
    time:"",
    date:"",
    isHidden:false
  },
  onLoad:function(options){
   var time1 = util.formatTime(new Date()); 
   var isSave = options.isSave;
   if(isSave==1){
     this.setData({
       isHidden:true
     })
   }
   this.setData({
      oilKm:options.oilKm*100,
      oilPrice:options.oilPrice,
      oilTotalPrice:options.oilTotalPrice,
      oilMass:options.oilMass,
      priceKm:options.priceKm,
      kmOil:options.kmOil,
      time:time1.split(" ")[1],
      date:time1.split(" ")[0]
    })
  },
  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
  },
  bindSaveTap:function(e){
    var history = wx.getStorageSync('history')||[]
    var obj = new Object()
    obj.kmOil = this.data.kmOil
    obj.oilKm = this.data.oilKm
    obj.oilPrice= this.data.oilPrice
     obj.oilTotalPrice= this.data.oilTotalPrice
      obj.oilMass= this.data.oilMass
       obj.priceKm= this.data.priceKm
       obj.date= this.data.date+" "+this.data.time
       history.push(obj);
     wx.setStorageSync('history', history)
     console.log(history)
     wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
})
  }
  
})