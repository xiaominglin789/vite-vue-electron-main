/**
 * 公共方法
 */

/** 获取系统时间日期, 返回:
 * @returns dateNum: 日期, dayStr: 星期
 */
const getNowDateStr = () => {
  const nowDate = new Date();
  const dayStrs = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",];

  const dateNum = nowDate.getDate();
  const dayStr = dayStrs[nowDate.getDay()];

  return {
    dateNum,
    dayStr
  }
}

/**
 * 格式化时间戳
 * @param timer 时间戳
 * @returns 
 */
const formatDateTime = (timer: number, char: string="-") => {
  if (!timer) return;
  const time = new Date(timer);
  const hour = time.getHours();
  const yearStr = __strNumLess10AddZore(time.getFullYear());
  const mouthStr = __strNumLess10AddZore(time.getMonth() + 1);
  const dateStr = __strNumLess10AddZore(time.getDate());
  const hourStr = __strNumLess10AddZore(time.getHours());
  const minuteStr = __strNumLess10AddZore(time.getMinutes());
  const secondStr = __strNumLess10AddZore(time.getSeconds());
  
  return yearStr+char+mouthStr+char+dateStr + " " + hourStr+":"+minuteStr+":"+secondStr;
}

/**
 * 文本型数字,小于10补 '0'
 * @param date 
 */
const __strNumLess10AddZore = (date: number) => {
  if (date < 10) {
    return "0"+date.toString();
  }
  return date.toString();
}

export {
  getNowDateStr,
  formatDateTime
}
