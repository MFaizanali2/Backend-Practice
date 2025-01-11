import axios from 'axios'

const apiClient = axios.create({
    baseURL: '',
    timeout: 3000,
    headers:{
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.response((res)=>{
    return res;
},(err)=>{
    return err;
})

export default apiClient