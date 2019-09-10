/*
ajax请求函数模块
返回promise对象（返回值response.data）
 */
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default function (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += (key + '=' + data[key] + '&')
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = `${url}?${dataStr}`
      }
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功调用resolve
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      // 失败了调用reject
      reject(err)
    })
  })
}
