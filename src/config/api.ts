const config = {
  /** 获取推荐轮播图 */
  MUSIC_BANNER: "/banner/get?clientType=pc",

  /** 热门推荐歌单分类 */
  MUSIC_PLAY_LIST_RECOMMEND: "/top/playlist",
  /** 获取全部歌单分类 */
  MUSIC_PLAY_LIST_LIST: "/playlist/catlist",
  /** 个人-每日推荐歌单-需要登录 */
  MUSIC_PLAY_LIST_PERSONALIZED: "/recommend/resource",

  /** 模糊搜索 */
  MUSIC_SEARCH: "/search",
  /** 热门搜索列表 */
  MUSIC_SEARCH_HOT_LIST: "/hotsearchlist/get",

  /** 歌曲详情 */
  MUSIC_SONG_DETAIL: "/song/detail",
  /** 歌曲歌词 */
  MUSIC_SONG_LYRIC: "/song/lyric?os=pc",
  /** 获取歌曲播放地址 */
  MUSIC_SONG_PLAY_URL: "/song/enhance/player/urll",
  /** 获取推荐 10 首新歌 */
  MUSIC_SONG_HOT_10: "/personalized/newsong",

  /** 电台轮播图 */
  MUSIC_DJ_BANNER: "/dj/banner",
  /** 电台个性推荐 */
  MUSIC_DJ_PERSONALIZED: "/dj/personalized/recommend",
  /** 电台热门 */
  MUSIC_DJ_HOT: "/dj/hot"
}

export default config;
