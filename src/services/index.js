import axios from 'axios';
import router from '../router';

export default ({ requiresAuth = false } = {}) => {
  const options = {};
  options.baseURL = `${process.env.VUE_APP_END_POINT}api/`;
  const instance = axios.create(options);

  instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

  if (requiresAuth) {
    let vuex = localStorage.getItem('vuex');
    vuex = JSON.parse(vuex)
    const auth = vuex.auth.access_token ? `Bearer ${vuex.auth.access_token}` : '';

    instance.defaults.headers.common['Authorization'] = auth
  }


  instance.interceptors.response.use(response => {
    return response;
  }, error => {
    if(error.response.status === 401){
      router.app.$store.dispatch('LogOut')
    }
    return Promise.reject(error);
  });
  return instance;
};