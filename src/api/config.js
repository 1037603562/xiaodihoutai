import axios from 'axios'

//创建一个axios实例
var service =axios.create({
    timeout:3000//请求超时时间
    

})
//添加请求拦截器
service.interceptors.request.use(
    config =>{
        return config
    },
    err =>{
        console.log(err)
    }
)
//添加响应拦截器
service.interceptors.response.use(
    response =>{
        var res = {}
        res.status = response.status
        res.data = response.data
        return res
    },
    err => console.log(err)
)
export default service