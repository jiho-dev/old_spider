import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const resourceHost = 'http://localhost:3004';

const enhanceAccessToeken = () => {
  // const {accessToken} = localStorage
  const accessToken = sessionStorage;
  if (!accessToken) {
    return;
  }

  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
enhanceAccessToeken();

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {
    isAuthenticated (state) {
      // state.accessToken = state.accessToken || localStorage.accessToken
      state.accessToken = state.accessToken || sessionStorage.accessToken;
      // console.log("getters's token:" + state.accessToken.access_token)

      if (state.accessToken) {
        return state.accessToken.access_token;
      }

      return false;
    }
  },
  mutations: {
    LOGIN (state, accessToken) {
      // console.log('accessToken:' + accessToken)

      state.accessToken = accessToken;
      // localStorage.accessToken = access_token
      sessionStorage.accessToken = accessToken;
    },
    LOGOUT (state) {
      state.accessToken = null;
      // delete localStorage.accessToken
      delete sessionStorage.accessToken;
      /*
      axios.post(`${resourceHost}/auth/logout`)
        .then(({data}) => {
          //commit('LOGIN', data)
          console.log(data)

          //axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        })
      */
    }
  },
  actions: {
    LOGIN ({ commit }, { username, password }) {
      // console.log('username=' + username + ', password=' + password);

      return axios.post(`${resourceHost}/auth/login`, { username, password })
        .then(({ data }) => {
          commit('LOGIN', data);
          // console.log(data);
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        });
    },
    LOGOUT ({ commit }) {
      axios.defaults.headers.common['Authorization'] = undefined;
      commit('LOGOUT');
    }
  }
});
