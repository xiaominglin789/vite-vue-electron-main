/** 歌单创建者 */
export interface playlistCreatorType {
  /** 创建者id */
  userId: number;
  /** 昵称 */
  nickname: string;
  /** 头像地址 */
  avatarUrl: string;
  /** 个人空间背景 */
  backgroundUrl?: string;
  /** 生日 */
  birthday?: number;
  /** 性别: 0 默认-未设置, 1 女, 2 男 */
  gender?: number;
  /** 个人简介 */
  description?: string;
  /** 所在城市 */
  city?: number;
}

/** 歌单信息 */
export interface playlistType {
  /** 歌单id号 */
  id: number;
  /** 歌单标题 */
  name: string;
  /** 歌单简介 */
  description?: string;
  /** 歌单播放数量 */
  playCount: number;
  /** 歌单被分享数 */
  shareCount: number;
  /** 歌单收藏数 */
  subScribedCount: number;
  /** 歌单标签数组 */
  tags: Array<string>;
  /** 歌曲数量 */
  trackCount: number;
  /** 歌单创建者id */
  userId: number;
  /** 歌单创建时间 */
  createTime: number;
  /** 歌单更新时间 */
  updateTime: number;
  /** 歌单评论数据 */
  commentCount: number;
  /** 歌单封面图地址 */
  coverImgUrl: string;
  /** 歌单创建者信息 */
  creator: playlistCreatorType;
}

/** 热门歌单类型 */
export interface recommendPlaylistType {
  cat: string,
  code: number,
  playlists: [],
  total: number,
  more?: string,
}