/*
通过操作mutations间接更新state
 */
import {
  reqList,
  reqUser
} from '../api'

export default {
  // 异步获取地址
  getList ({commit}) {
    // 发送异步ajax请求
    reqList().then((data) => {
      // 提交一个mutation
      commit('getList', data)
    }).catch((err) => { console.log(err.message) })
  },
  // 获取当前定位信息
  getUser ({commit}) {
    reqUser().then((data) => {
      commit('getUser', data)
    }).catch((err) => { console.log(err.message) })
  }
}
