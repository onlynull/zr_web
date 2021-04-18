export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      icon: '='
    },
    component: () => import(/* webpackChunkName: "Home" */ '@/view/Home')
  }
]
