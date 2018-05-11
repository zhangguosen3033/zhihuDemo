import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: '还没来这是默认',
    passWord: ''
  },
  mutations: {
    newAuthor(state, msg) {
      state.author = msg
    },
    newPassWord(state, msg) {
      state.passWord = msg;
    }
  },
  actions: {
    newAuthor({
      commit
    }, status) {
      commit('newAuthor', status)
    },
    newPassWord({
      commit
    }, status) {
      commit('newPassWord', status)
    },
  },

  getters: {
    getAuthor(state) {
      return state.author
    },
    getPassWord(state) {
      return state.passWord
    },
  }

})


export default store