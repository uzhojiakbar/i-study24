import axios from "axios";
import { getCookie } from "../Hooks/cookieHook";

export const instance = axios.create({
  // baseURL: "https://solonammqi.pythonanywhere.com/",
  baseURL: "https://education-api.namsoft.uz/",
  // headers: {
  //     "Content-Type": "application/json",
  // },
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie("access");
    // console.log(config);
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("error");
    return Promise.reject(error);
  }
);
