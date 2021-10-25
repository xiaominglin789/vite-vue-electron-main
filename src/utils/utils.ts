/**
 * 公共方法
 */

/** 获取系统时间日期, 返回:
 * @returns dateNum: 日期, dayStr: 星期
 */
const getDateString = () => {
  const nowDate = new Date();
  const dayStrs = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",];

  const dateNum = nowDate.getDate();
  const dayStr = dayStrs[nowDate.getDay()];

  return {
    dateNum,
    dayStr
  }
}

export {
  getDateString
}
