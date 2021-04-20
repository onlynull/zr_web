import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router.config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      redirect: {
        name: '404'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '@/Layout/Login'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/components/404'),
    },
    ...routerConfig.map(item => {
      item.component = () => import(`@/view/${item.name}`)
      return item
    })
  ]
})
