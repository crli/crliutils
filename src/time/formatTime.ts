/*
 * @Author: crli
 * @Date: 2021-06-02 11:02:43
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 11:29:53
 * @Description: file content
 */
/**
 * @desc   时间日期格式化
 * @param  {fmt} string "yyyy-MM-dd hh:mm:ss"
 * @param  {Date} date 
 * @return {String}
 */
// formatTime()
// "2021-06-02 11:24:09"
// formatTime('yyyy/MM/dd')
// "2021/06/02"
// formatTime('yyyy年MM月dd日 hh时mm分ss秒')
// "2021年06月02日 11时25分23秒"
// formatTime('yyyy年MM月dd日 hh时mm分ss秒', new Date('2021-02-02'))
// "2021年02月02日 08时00分00秒"
const formatTime = function(fmt: string = "yyyy-MM-dd hh:mm:ss", date: Date = new Date()) {
  let currentDate = date
  let o : { [key: string]: any }= { 
     "M+" : currentDate.getMonth()+1,                 //月份 
     "d+" : currentDate.getDate(),                    //日 
     "h+" : currentDate.getHours(),                   //小时 
     "m+" : currentDate.getMinutes(),                 //分 
     "s+" : currentDate.getSeconds(),                 //秒 
     "q+" : Math.floor((currentDate.getMonth()+3)/3), //季度 
     "S"  : currentDate.getMilliseconds()             //毫秒 
  };
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (currentDate.getFullYear()+"").substr(4 - RegExp.$1.length))
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)))
    }
  }
  return fmt
}
export default formatTime