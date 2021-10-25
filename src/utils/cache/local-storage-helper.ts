import BaseCache from "./base";

/**
 * localStorage操作类
 */
class LocalStorageHelper extends BaseCache {
  constructor() {
    super();
  }

  /**
   * 设置缓存
   * @param key 
   * @param value 
   */
  set(key: string, value: any): void {
    if (!key || !value) return;

    try {
      const cacheKey = this.getRealKey(key);
      const cacheValue = { cache: value };

      localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
    } catch (error) {
      console.error("本地缓存失败, 想要缓存的对象是： ", { key: value });
    }
  }

  /**
   * 传入key获取本地缓存信息
   * @param key 
   * @returns 
   */
  get(key: string) {
    if (!key) return;

    const cacheKey = this.getRealKey(key);

    try {
      const val = localStorage.getItem(cacheKey)||"";
      const realValue = JSON.parse(val);
      return realValue?.cache;
    } catch (error) {
      throw new Error("没有 key:" + key + " 的缓存数据");
    }
  }

  /**
   * 根据key移除对应缓存
   * @param key 
   */
  remove(key: string) {
    if (!key) return;

    try {
      localStorage.removeItem(this.getRealKey(key));
    } catch (error) {
      // 移除失败,记录日志
      console.error(error);
    }
  }

  /** 清空localStorage缓存 */
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      // 清空失败,记录日志
      console.error(error);
    }
  }
}

export default new LocalStorageHelper();
