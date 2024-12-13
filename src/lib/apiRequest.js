import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate-api-h6d8.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
