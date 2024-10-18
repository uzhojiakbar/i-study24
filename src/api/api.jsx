import axios from "axios";
import { getFromLS } from "../Hooks/localstorageHook";

export const instance = axios.create({
  baseURL: "https://solonammqi.pythonanywhere.com/",
  // headers: {
  //     "Content-Type": "application/json",
  // },
});

instance.interceptors.request.use(
  (config) => {
    const token = getFromLS("access");
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
