import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:8000/',
    timeout: 3000,
    headers:{
        "Content-Type" : "application/json"
    }
})


// apiClient.interceptors.use.response((res)=>{
//     return res;
// },(error)=>{
//     return error
// })

export default apiClient