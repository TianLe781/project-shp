import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"
const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})

//请求拦截器
requests.interceptors.request.use((config) => {
    //请求开始时开始进度条
    nprogress.start();
    return config;

})

//响应拦截器
requests.interceptors.response.use((res) => {
    //请求成功时结束进度条
    nprogress.done();
    //响应成功回调函数
    return res.data;


    //响应失败回调函数
}, (error) => {
    return Promise.reject(new Error('请求失败：请检查接口地址是否有误！'))
})

export default requests;