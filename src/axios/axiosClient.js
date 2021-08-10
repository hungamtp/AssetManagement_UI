import axios from "axios";

const jwtToken = localStorage.getItem("jwtToken") || "";
const axiosClient = axios.create({
  baseURL: "http://localhost:9994/asset-management/",
  headers: {
    Authorization: `Bearer ${jwtToken}`,
    "Content-Type": "application/json",
  },
});

export default axiosClient;
