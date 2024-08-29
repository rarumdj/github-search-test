import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

// Interceptors
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
//
