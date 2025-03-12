// axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
});

export const setAuthToken = (token) => {
    if (token && token.accessToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token.accessToken}`;
      } else {
        // Có thể xoá header hoặc không làm gì nếu token không tồn tại
        delete axios.defaults.headers.common["Authorization"];
      }
};

export default instance;
