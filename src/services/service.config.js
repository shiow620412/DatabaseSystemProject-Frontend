import axios from 'axios'
const apiURL = "https://prj.inf.saihs.edu.tw/api";
// const apiURL = "http://localhost:3000/api";

const instance = axios.create({
    baseURL: apiURL,
    headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    },
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error)
})


export default instance;