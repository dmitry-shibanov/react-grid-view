import axios from "axios";
import unsplash from "./unsplash_key";

const axiosObj = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${unsplash["key"]}`,
  },
});

export default axiosObj;
