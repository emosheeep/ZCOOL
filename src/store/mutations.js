/*
直接对state的数据进行修改
 */

export default {
  getList (state, list) {
    for (let n = 0; n < list.length; n++) {
      state.list.push(list[n])
    }
  },
  getUser (state, user) {
    state.user = user
  }
}
