/*
vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)// 使用插件

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
