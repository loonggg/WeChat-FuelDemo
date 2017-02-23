//index.js
//获取应用实例
var app = getApp()
var oilKm = 0,oilPrice = 0,oilTotalPrice=0,oilMass=0,priceKm=0,kmOil=0;
Page({
  data: {
   oneKm:" ",
   oneOil:" ",
   onePrice:" ",
   twoKm:" ",
   twoTotalPrice:" ",
   twoPrice:" "
  },
  
  onLoad: function () {
   
  },
  bindOneKmInput:function(e){
    this.setData({
      oneKm:e.detail.value
    })
  },
  bindOneOilInput:function(e){
    this.setData({
      oneOil:e.detail.value
    })
  },
  bindOnePriceInput:function(e){
    this.setData({
      onePrice:e.detail.value
    })
  },
  calOneMethod:function(e){
    oilKm = this.data.oneOil/this.data.oneKm
    oilPrice=this.data.onePrice
    oilTotalPrice = this.data.oneOil*this.data.onePrice
    oilMass = this.data.oneOil
    priceKm = oilTotalPrice/this.data.oneKm
    kmOil = this.data.oneKm/this.data.oneOil
    wx.navigateTo({
        url: '../detail/detail?priceKm='+priceKm+'&oilKm='+oilKm+'&oilPrice='+oilPrice+'&oilTotalPrice='+oilTotalPrice+'&oilMass='+oilMass+'&kmOil='+kmOil+"&isSave=0"
    })
  },
  resetOneMethod:function(e){
    this.setData({
      oneKm:" ",
      oneOil:" ",
      onePrice:" "
    })
  },
  bindTwoKmInput:function(e){
    this.setData({
      twoKm:e.detail.value
    })
  },
  bindTwoTotalPriceInput:function(e){
    this.setData({
      twoTotalPrice:e.detail.value
    })
  },
  bindTwoPriceInput:function(e){
    this.setData({
      twoPrice:e.detail.value
    })
  },
  calTwoMethod:function(e){
    oilKm = this.data.twoTotalPrice/this.data.twoPrice/this.data.twoKm
    oilPrice=this.data.twoPrice
    oilTotalPrice = this.data.twoTotalPrice
    oilMass = this.data.twoTotalPrice/this.data.twoPrice
    priceKm = oilTotalPrice/this.data.twoKm
    kmOil = this.data.twoKm/oilMass
    console.log(priceKm)
    wx.navigateTo({
      url: '../detail/detail?priceKm='+priceKm+'&oilKm='+oilKm+'&oilPrice='+oilPrice+'&oilTotalPrice='+oilTotalPrice+'&oilMass='+oilMass+'&kmOil='+kmOil
    })
  },
  resetTwoMethod:function(e){
    this.setData({
      twoKm:" ",
      twoTotalPrice:" ",
      twoPrice:" "
    })
  }
})
