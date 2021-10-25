import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// 默认配置
console.log(import.meta.env.VITE_APP_AXIOS_BASE_URL);
console.log(import.meta.env.VITE_APP_AXIOS_TIME_OUT);

axios.defaults.baseURL = String(import.meta.env.VITE_APP_AXIOS_BASE_URL) || "";
axios.defaults.timeout = Number(import.meta.env.VITE_APP_AXIOS_TIME_OUT) || 5000;
axios.defaults.withCredentials = false;
axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";

const http = axios.create();


// 拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 请求数据前的拦截处理
    console.log(config);
    return config;
  },
  (error: AxiosError) => {
    // 请求前检验失败
    return Promise.reject(error);
  }
);


// 响应处理器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    /*
    请求响应的统一处理
    2xx | 3xx 4xx 5xx
    */
    const status = response.status;
    if (status.toString().charAt(0) === '2') {
      return response.data;
    }

    // 非成功返回正确响应的处理
    // 可以统一处理
    return Promise.reject(response);
  },
  (error: AxiosError) => {
    // 请求超时的处理
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      return console.error("请求超时: ", error.message);
    } 

    return Promise.reject(error);
  }
);


/**
 * 请求方法-GET
 * @param url 
 * @param param 
 * @param config 
 * @returns 
 */
export function get<T>(
  url: string,
  param?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> {
  console.log("param: ", param);
  return http.get(url, { params: { ...param }, ...config })
}

/**
 * 请求方法-POST
 * @param url 
 * @param data 
 * @param config 
 * @returns 
 */
export function post<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> {
  return http.post(url, data, config);
}

/**
 * 请求方法-PUT
 * @param url 
 * @param data 
 * @param config 
 * @returns 
 */
export function put<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> {
  return http.put(url, data, config);
}

/**
 * 自定义请求方法-delete, 可以有返回
 * 实质: 使用 post 来替代 delete
 * @param url 
 * @param config 
 * @returns 
 */
export function remove<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> {
  return http.post(url, data, config);
}

/**
 * 请求方法-delete
 * @param url
 * @param params
 * @param config
 * @returns
 */
export function _delete(
  url: string,
  config?: AxiosRequestConfig
): Promise<void> {
  return http.delete(url, config);
}

export default http;