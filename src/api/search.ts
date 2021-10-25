import { get } from "../utils/http/http";
import config from "../config/api";

/**
 * 模糊搜索
 * @param keyword 关键词
 * @param type 搜索类型；默认为 1: 单曲 , 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 * @param offset 默认从: 0 开始
 * @param limit 每次返回条数,默认: 10
 * @returns 
 */
const searchByKeyWord = (keyword: string, type: number=1, offset: number=0, limit: number=10) => {
  return get(config.MUSIC_SEARCH, { keywords: keyword, type, offset, limit });
}

export {
  searchByKeyWord,
}
