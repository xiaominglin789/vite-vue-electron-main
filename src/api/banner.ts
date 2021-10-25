import { get } from "../utils/http/http";
import config from "../config/api";

/** 获取首页轮播图数据 */
const getBanner = async () => {
  return get(config.MUSIC_BANNER);
}

export {
  getBanner
}
