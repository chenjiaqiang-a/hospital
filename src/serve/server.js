import axios from 'axios'

// let CancelToken = axios.CancelToken

axios.create({
    timeout: 15000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
    }
})

axios.interceptors.request.use(
    config => {
        //得到参数中的requestname字段，用于决定下次发起请求，取消相应的  相同字段的请求
        //post和get请求方式的不同，使用三木运算处理
        // console.log(config);
        // let requestName = config.method === 'post'?config.data.requestName :config.params.method
        // //判断，如果这里拿到上一次的requestName，就取消上一次的请求
        // if(requestName) {
        //     if(axios[requestName]&&axios[requestName].cancel){
        //         axios[requestName].cancel()
        //     }
        //     config.cancelToken = new CancelToken(c => {
        //         axios[requestName] = {}
        //         axios[requestName].cancel = c
        //     })
        // }
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
axios.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error)
    }
)

export default axios;