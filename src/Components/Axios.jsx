import axios from 'axios';


const isDevelopment = import.meta.env.MODE === 'development'
const baseurl = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_PROD

console.log(baseurl)


const AxiosInstance = axios.create({
    baseURL: baseurl,
    timeout: 5000,
    headers: {
        "content-type": "application/json",
        accept: "application/json"
    }

})

export default AxiosInstance;