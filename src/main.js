import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'
import moment from 'moment-timezone'
import VueCompositionAPI from '@vue/composition-api'

import ArrowLeft from '@/assets/icons/outline/arrow-left-2.svg';
import UserSquare from '@/assets/icons/outline/user-square.svg';
import FolderCross from '@/assets/icons/outline/folder-cross.svg';
import FolderAdd from '@/assets/icons/outline/folder-add.svg';
import Eye from '@/assets/icons/bold/eye.svg';
import EyeSlash from '@/assets/icons/bold/eye-slash.svg';
import LogoutIcon from '@/assets/icons/outline/logout.svg';
import Document from '@/assets/icons/outline/document-text.svg';


moment.locale('id', {
  relativeTime : {
      future: "in %s",
      past:   "%s yang lalu",
      s  : 'beberapa detik',
      ss : '%d detik',
      m:  "1 menit",
      mm: "%d menit",
      h:  "1 jam",
      hh: "%d jam",
      d:  "1 hari",
      dd: "%d hari",
      w:  "1 minggu",
      ww: "%d minggu",
      M:  "1 bulan",
      MM: "%d bulan",
      y:  "1 tahun",
      yy: "%d tahun"
  }
});
moment.tz.setDefault("Asia/Jakarta");

Vue.component('ArrowLeft', ArrowLeft)
Vue.component('UserSquare', UserSquare)
Vue.component('FolderCross', FolderCross)
Vue.component('FolderAdd', FolderAdd)
Vue.component('Eye', Eye)
Vue.component('EyeSlash', EyeSlash)
Vue.component('LogoutIcon', LogoutIcon)
Vue.component('Document', Document)

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
