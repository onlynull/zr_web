// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from '@/store'

import 'ant-design-vue/dist/antd.css';
import '@/components/lazy_use'
import { islogin } from '@/common/api'

Vue.config.productionTip = false
// router.beforeEach( async (to, from, next) => {
//   if (to.name !== 'Login') {
//     try {
//       const res = await islogin()
//       if (res.code !== 200){
//         next('/login')
//       }else{
//         next()
//       }
//     } catch (e) {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
