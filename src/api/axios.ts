import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
axios.defaults.timeout = 10000;
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "http://192.168.0.5:2333" // 这里设置实际项目的生产环境地址
    : "http://localhost:3000"; // nestjs

// 请求拦截
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (config.data && config.data.showLoading) {
    //   // 需要显示loading的请求
    //   startFlag = true;
    //   NProgress.start();
    // }
    // // 请求 access_token，登录后每个请求都带上
    // if (Cookies.get("auth")) {
    //   config.headers.Authorization = Cookies.get("auth");
    // }
    // if (config.params) config.params._t = Date.now();
    // token
    console.log("request 拦截...");
    return config;
  },
  (err: AxiosError) => {
    console.log(err);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log("response 拦截...");

    //code ==0 success
    // code !=0 fail msg
    return res.data;
  },
  (err: AxiosError) => {
    // 服务器错误
    // if (err.response && (err.response.status + "").startsWith("5")) {
    //   message.error("请求出错！");
    // }
    // if (startFlag) {
    //   startFlag = false;
    //   NProgress.done();
    // }
    return Promise.reject(err);
  }
);

export default axios;
