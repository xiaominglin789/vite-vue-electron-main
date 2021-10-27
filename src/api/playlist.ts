import { get } from "../utils/http/http";
import config from "../config/api";


/**
 * 热门歌单分类
 * @param order 'new' 和 'hot', 分别对应最新和最热，默认: 'hot' 
 * @param cat 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param limit 取出歌单数量 , 默认为 10
 * @param offset 默认 0
 * @returns 
 */
const getRecommendPlaylist = (order: string="hot", cat: string="all", limit: number=10, offset: number=0) => {
  return get(config.MUSIC_PLAY_LIST_RECOMMEND, { order, cat, limit, offset });
}

export {
  getRecommendPlaylist,
}
