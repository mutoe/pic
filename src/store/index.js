import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

const store = new Vuex.Store({

  getters: {
    token: state => state.user.token,
  },

  state: {
    user: {
      token: getToken(),
    },
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.user.token = token
    },
  },

  actions: {
    Login ({ commit }, user) {
      commit('SET_TOKEN', user.token)
      setToken(user.token)
    },

    Logout ({ commit }) {
      commit('SET_TOKEN', '')
      removeToken()
    },
  },
})

export default store
