import axios from 'axios'

const API_URL = 'https://red-product-okrd.onrender.com/api'

const API = axios.create({
    baseURL: API_URL,
})

API.interceptors.request.use(async(config)=> {
    const token = await localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default API