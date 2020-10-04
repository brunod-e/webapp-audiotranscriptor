import axios from "axios";

const api = axios.create({
  baseURL: "http://18.219.108.220:5000",
});

export default api;
