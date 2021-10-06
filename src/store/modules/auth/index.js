import service from '../../../services';
import qs from 'qs';
import moment from 'moment-timezone';

const state = {
    access_token: null,
};
const getters = {
    isAuthenticated: state => !!state.access_token,    
    access_token: state => state.access_token,
};
const actions = {

    LogIn({commit}, User) {   
        return new Promise((resolve, reject) => {
            service({ requiresAuth: false }).post('login/auth', qs.stringify(User))
            .then(response => {
                commit('setToken', response.data)
                resolve(response.data)
            })
            .catch(err => {
                reject(err.response)
            })
        })
    },

    async LogOut({commit}){
        commit('LogOut')
    }
      
};
const mutations = {
    setToken(state, data){
        state.access_token = data.access_token
    },
    LogOut(state){
        state.access_token = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};