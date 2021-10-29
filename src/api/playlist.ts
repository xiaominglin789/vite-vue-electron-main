import { get } from "../utils/http/http";
import config from "../config/api";
import type { recommendPlaylistType, playlistType } from "../utils/types/playlist";

/**
 * 热门歌单分类
 * @param order 'new' 和 'hot', 分别对应最新和最热，默认: 'hot' 
 * @param cat 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param limit 取出歌单数量 , 默认为 10
 * @param offset 默认 0
 * @returns 
 */
const getRecommendPlaylists = (order: string="hot", cat: string="all", limit: number=10, offset: number=0) => {
  return get<recommendPlaylistType>(config.MUSIC_PLAY_LIST_RECOMMEND, { order, cat, limit, offset });
}

/**
 * 根据id获取歌单详情
 * @param id id
 * @returns
 */
const  getPlaylistDetailById = (id: number, n: number=100000, s: number=0) => {
  // return get<{ playlist: playlistType }>(config.MUSIC_PLAY_LIST_DETAIL, { id: id, n, s });
  return Promise.resolve({
    playlist: {
      id: 6827562995,
      /** 歌单标题 */
      name: "韩综 | 换乘恋爱 BGM",
      /** 歌单简介 */
      description: "TVING 恋爱综艺 换乘恋爱",
      /** 歌单播放数量 */
      playCount: 692503,
      /** 歌单被分享数 */
      shareCount: 164,
      /** 歌单收藏数 */
      subScribedCount: 14740,
      /** 歌单标签数组 */
      tags: ["韩语", "流行", "综艺"],
      /** 歌曲数量 */
      trackCount: 475,
      /** 歌单创建者id */
      userId: 111050645,
      /** 歌单创建时间 */
      createTime: 1624682667860,
      /** 歌单更新时间 */
      updateTime: 1633755698489,
      /** 歌单评论数据 */
      commentCount: 427,
      /** 歌单封面图地址 */
      coverImgUrl: "https://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg",
      /** 歌单创建者信息 */
      creator: {
        userId: 111050645,
        /** 昵称 */
        nickname: "咕噜咕噜v-",
        /** 头像地址 */
        avatarUrl: "http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg",
      },
    }
  });
}

export {
  getRecommendPlaylists,
  getPlaylistDetailById
}


