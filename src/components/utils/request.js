import axios from "axios";
import config from "./config";

export function getLocalAccessToken() {
//   const accessToken = localStorage.getItem("token");
const accessToken= process.env.API_TOKEN
  return accessToken;
}

const instance = axios.create({
  baseURL: config.baseUrl,
});

instance.interceptors.request.use(
  (config) => {
   
       config.headers["Authorization"] = `Bearer ${process.env.API_TOKEN}`;
     
       // config.headers["Content-Type"] = "multipart/form-data";
       config.headers["Content-Type"] = "application/json";
       
    
    return config;
  },
  (error) => {
  
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
  
    return res;
  },
  async (err) => {
    try {
     
      if (err.code === "ERR_NETWORK" || err.code === "ECONNABORTED") {
        return err.code;
      }
      if (err.response.status === 401) {
        console.log("checked user Auth", err.response.status);
        console.log("hooooooooooooooooooooooooooooo");
        return 401;
       
      }

      if (err.response.status === 404) {
        console.log("checked user Auth", err.response.status);
        console.log("hooooooooooooooooooooooooooooo");
        // if (!window.location.href.includes("NoTFound")) {
        //   window.location.href = "NoTFound";
        //   return;
        // }
      }
      return;
    } catch (_error) {
      // return Promise.reject(_error);
    }

    // if (err.response.status === 403 && err.response.data) {
    //   return Promise.reject(err.response.data);
    // }
    // return Promise.reject(err);
  }
);

export default instance;
