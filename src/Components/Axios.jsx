import axios from 'axios';

const isDevelopment = import.meta.env.MODE === 'development';
const baseurl = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_PROD;
console.log(baseurl)

//Extract CSRF token from cookies
const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/)?.[1];

const AxiosInstance = axios.create({
  baseURL: baseurl,
  headers: {
    //"content-type": "application/json",
    accept: "application/json",
    "X-CSRFToken": csrfToken ? csrfToken : "", // Add CSRF token to the headers if available
  },
});

// Interceptor to add 'multipart/form-data' if needed
AxiosInstance.interceptors.request.use(
(config) => {

      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

    //Check if the data being sent is FormData (file upload or mixed data)
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
        config.headers["Content-Type"] = "application/json";
    }
    return config;
 },
 (error) => {
   return Promise.reject(error);
 }
 );

export default AxiosInstance;

