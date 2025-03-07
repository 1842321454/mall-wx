import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    request({
      url:'/swiperdata'
    }).then(result=>{
      this.setData({
        swiperList: result.data.message
    })
    })
  }
  
})