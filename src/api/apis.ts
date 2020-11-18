import axios from "./axios";

const api = {
  // get post put delete => restful api
  testPost: (params: any = {}) => {
    return axios.post("/admin/post", {
      pagesize: 20,
      nav: 4,
      page: 1,
      service: "homerecommend.getlist",
    });
  },

  testGet: (params: any = {}) => {
    return axios.get("/admin/get?age=121113", {});
  },
};

export default api;
