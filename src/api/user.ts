import { get } from "../utils/http/http";
import config from "../config/api";

/** 私人FM */
export const getPrivateFM = () => {
  return get(config.MUSIC_PRIVATE_FM);
}
