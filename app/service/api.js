import axios from "axios";

let bearerToken = null;

const axiosWithConfig = axios.create();

export const setAxiosConfig = (token) => {
  bearerToken = token;
}

axiosWithConfig.interceptors.request.use(axiosConfig => {
  axiosConfig.headers["Content-Type"] = "application/json";
  axiosConfig.headers.Accept = "application/json";

  return axiosConfig;
})

export default axiosWithConfig;

