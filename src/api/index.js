/*
包含多个请求函数接口
返回值： promise对象
 */
import ajax from './ajax'

// 获取商家分类列表
export const reqList = () => ajax(`static/data/list.json`)
// 获取用户信息
export const reqUser = () => ajax(`static/data/user_info.json`)
