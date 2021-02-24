import Vue from 'vue'
import Vuex from 'vuex'
import defaultmoList from '../default-moList.js'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moList: defaultmoList,
    users: []
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users 
    }
  },
  actions: {
    GET_USERS({commit}){
      return axios('https://glory-lash.kpi-drive.ru/_api/users/get_users?period_start=2021-02-01&period_end=2021-02-28&period_key=month', {
        method: 'POST'
      })
        .then((response) => {
          commit('SET_USERS', response.data)
        })
    },
    SINGIN({commit}) {
      return axios('https://glory-lash.kpi-drive.ru/_api/auth/login?login=kpi-drive&password=aaadmin', {
        method: 'POST'
      })
        .then((response) => {
          commit('SINGIN', response.data)
        })
      },
  },
  modules: {
  },
  getters: {
    USERS(state) {
      return state.users;
    }
  }
})
