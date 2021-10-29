const api = import.meta.env.VITE_APP_AXIOS_BASE_URL_API;
const vapi = import.meta.env.VITE_APP_AXIOS_BASE_URL_VAPI;
const config = {
  /** 获取推荐轮播图 */
  MUSIC_BANNER: api + "/banner/get?clientType=pc",

  /** 热门推荐歌单分类 */
  MUSIC_PLAY_LIST_RECOMMEND: api + "/top/playlist",
  /** 获取全部歌单分类 */
  MUSIC_PLAY_LIST_LIST: api + "/playlist/catlist",
  /** 个人-每日推荐歌单-需要登录 */
  MUSIC_PLAY_LIST_PERSONALIZED: api + "/recommend/resource",
  /** 根据id获取歌单详情 */
  MUSIC_PLAY_LIST_DETAIL: vapi + "/v3/playlist/detail",
  // MUSIC_PLAY_LIST_DETAIL: "/playlist/detail", // 使用此api,会出现400 Bad Request,需要校验

  /** 模糊搜索 */
  MUSIC_SEARCH: api + "/search",
  /** 热门搜索列表 */
  MUSIC_SEARCH_HOT_LIST: api + "/hotsearchlist/get",

  /** 歌曲详情 */
  MUSIC_SONG_DETAIL: api + "/song/detail",
  /** 歌曲歌词 */
  MUSIC_SONG_LYRIC: api + "/song/lyric?os=pc",
  /** 获取歌曲播放地址 */
  MUSIC_SONG_PLAY_URL: api + "/song/enhance/player/urll",
  /** 获取推荐 10 首新歌 */
  MUSIC_SONG_HOT_10: api + "/personalized/newsong",

  /** 电台轮播图 */
  MUSIC_DJ_BANNER: api + "/dj/banner",
  /** 电台个性推荐 */
  MUSIC_DJ_PERSONALIZED: api + "/dj/personalized/recommend",
  /** 电台热门 */
  MUSIC_DJ_HOT: api + "/dj/hot",

  /** 私人 fm */
  MUSIC_PRIVATE_FM: api + '/personal_fm',
}

export default config;
