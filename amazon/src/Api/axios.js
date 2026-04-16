import axios from 'axios'
const axiosInstance=axios.create({
    
    // local instance of firebase functions
    // baseURL:"http://127.0.0.1:5001/clone-7a3a0/us-central1/api"

    // deployed version of amazon-api on render.com
    baseURL:"https://amazon-api-deploy-kmyj.onrender.com/"
})

export {axiosInstance};