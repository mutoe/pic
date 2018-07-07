import Vue from 'vue'
import Vuex from 'vuex'
import * as util from '@/utils/auth'

Vue.use(Vuex)

const store = new Vuex.Store({

  getters: {
    token: state => state.user.token
  },

  state: {
    user: {
      token: util.getToken()
    },
    oss: {
      uri: 'https://timeimage.oss-cn-shenzhen.aliyuncs.com/uploads/',
      host: 'https://timeimage.oss-cn-shenzhen.aliyuncs.com/',
      path: 'uploads/'
    }
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.user.token = token
    }
  },

  actions: {
    Login ({ commit }, user) {
      commit('SET_TOKEN', user.token)
      Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
      util.setToken(user.token)
    },

    Logout ({ commit }) {
      commit('SET_TOKEN', '')
      Vue.prototype.$http.defaults.headers.common['Authorization'] = null
      util.removeToken()
    }

  }
})

export default store
