/*
 * @Author: crli
 * @Date: 2021-06-02 10:34:59
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 10:52:06
 * @Description: file content
 */
/**
 * 
 * @desc   格式化时间倒计时
 * @param  {Date} endTime  
 * @return {String}
 */
const formatTimeCountdown = (endTime: string) : string => {
    let startDate = new Date()
    let endDate = new Date(endTime)
    let t = endDate.getTime() - startDate.getTime()
    let d = 0,
        h = 0,
        m = 0,
        s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24)
        h = Math.floor(t / 1000 / 60 / 60 % 24)
        m = Math.floor(t / 1000 / 60 % 60)
        s = Math.floor(t / 1000 % 60)
    }
    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒"
}

export default formatTimeCountdown