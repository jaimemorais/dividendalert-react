import axios from "axios";
import { getToken } from "./authService";

const dividendAlertApi = axios.create({
  baseURL: process.env.REACT_APP_DIVIDENDALERT_API_BASE_URL
});

dividendAlertApi.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default dividendAlertApi;