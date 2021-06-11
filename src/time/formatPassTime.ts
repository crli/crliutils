/*
 * @Author: crli
 * @Date: 2021-06-02 10:34:59
 * @LastEditors: crli
 * @LastEditTime: 2021-06-11 11:14:44
 * @Description: file content
 */
/**
 * @desc   startDate时间距离现在或者某个时间的时间描述
 * @param  {string| Date} startDate 
 * @param  {string| Date} nowDate 
 * @return {String}
 */
const formatPassTime = (startDate: string| Date, nowDate?: string| Date): string => {
  let currentTime = new Date(nowDate?nowDate:new Date()).getTime(),
    time = currentTime - new Date(startDate).getTime(),
    day = parseInt(time / (1000 * 60 * 60 * 24) + ''),
    hour = parseInt(time / (1000 * 60 * 60) + ''),
    min = parseInt(time / (1000 * 60) + ''),
    month = parseInt(day / 30 + ''),
    year = parseInt(month / 12 + '');
  if (year) return year + "年前"
  if (month) return month + "个月前"
  if (day) return day + "天前"
  if (hour) return hour + "小时前"
  if (min) return min + "分钟前"
  else return '刚刚'
}

export default formatPassTime