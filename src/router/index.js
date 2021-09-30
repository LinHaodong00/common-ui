import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
    meta: { title: '主页' }
  }
]
// 白名单
const loginWhiteList = [
  '/login'
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  console.log(VueCookies)
  if((loginWhiteList.indexOf(to.path) !== -1)){
    next()
  } else if(VueCookies.get('token') == null){
    next()
  } 
  else{
    next('/login')
  }
 
});
export default router
