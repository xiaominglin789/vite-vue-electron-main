/**
 * cache操作基类
 */
class BaseCache {
  APP_CACHE_KEY_PREFIX = import.meta.env.VITE_APP_CACHE_PREFIX;

  constructor() {
    if (typeof Storage === "undefined") {
      throw new Error("异常: app-storage 缓存服务异常.")
    }
  }

  /**
   * 传入一个key获取真实的cache-key
   * @param key 
   */
  protected getRealKey(key: string): string {
    return this.APP_CACHE_KEY_PREFIX + key;
  }
}

export default BaseCache;
