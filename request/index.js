export const request=(params)=>{
    const baseUrl='https://mock.presstime.cn/mock/67c022bfb1cc7302801e1b31/wxChat'
    return new Promise((resolve, reject) => {
        var reqTask = wx.request({
            ...params,
            url: baseUrl+params.url,
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {}
        }); 
    }
    )
}