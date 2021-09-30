import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'


import {
  Button, Form, FormItem, Input,
  Checkbox, Tabs, TabPane,Message,
  Container, Header, Aside, Main,
  Avatar, Row, Col, Menu, Submenu,
  MenuItem,MenuItemGroup

} from 'element-ui'
// element-ui组件局部注册
Vue.use(Button).use(Form).use(FormItem).use(Input).use(Checkbox)
   .use(Tabs).use(TabPane).use(Container).use(Header).use(Aside)
   .use(Main).use(Avatar).use(Row).use(Col).use(Menu).use(Submenu)
   .use(MenuItem).use(MenuItemGroup)

// Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.prototype.$message = Message

Vue.component(Message.name, Message)//解决默认弹出Message 提示框

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
